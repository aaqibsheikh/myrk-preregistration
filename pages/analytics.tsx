import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { HeaderSection } from '@/components/sections/HeaderSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { 
  Users, 
  Mail, 
  Calendar, 
  TrendingUp, 
  BarChart3, 
  PieChart, 
  Download,
  RefreshCw,
  Clock,
  CheckCircle,
  AlertCircle,
  Filter,
  Search
} from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy, limit, where } from 'firebase/firestore';
import { PreRegistrationData } from '@/lib/firebase';

interface AnalyticsData {
  totalRegistrations: number;
  recentRegistrations: number;
  emailDomains: { [key: string]: number };
  dailyRegistrations: { [key: string]: number };
  weeklyTrend: number;
  latestRegistrations: PreRegistrationData[];
  registrationRate: number;
}

export default function Analytics() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [dateFilter, setDateFilter] = useState('7d');
  const [searchTerm, setSearchTerm] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  // Check authentication on component mount
  useEffect(() => {
    const checkAuth = () => {
      // Additional security: Check if the page is accessed directly
      const referrer = document.referrer;
      const isDirectAccess = !referrer || referrer.includes(window.location.hostname);
      
      // Only allow access if coming from the same domain or if already authenticated
      const authToken = localStorage.getItem('analytics_auth');
      if (authToken === 'authenticated' && isDirectAccess) {
        setIsAuthenticated(true);
      }
      setAuthLoading(false);
    };
    checkAuth();
  }, []);

  const handleAuthentication = (e: React.FormEvent) => {
    e.preventDefault();
    const correctPassword = process.env.NEXT_PUBLIC_ANALYTICS_DASHBOARD; 
    
    // Rate limiting: Check for failed attempts
    const failedAttempts = parseInt(localStorage.getItem('analytics_failed_attempts') || '0');
    const lastAttempt = localStorage.getItem('analytics_last_attempt');
    const now = Date.now();
    
    // Reset failed attempts after 15 minutes
    if (lastAttempt && (now - parseInt(lastAttempt)) > 15 * 60 * 1000) {
      localStorage.removeItem('analytics_failed_attempts');
      localStorage.removeItem('analytics_last_attempt');
    }
    
    // Block access after 5 failed attempts
    if (failedAttempts >= 5) {
      setAuthError('Too many failed attempts. Please try again in 15 minutes.');
      return;
    }
    
    if (password === correctPassword) {
      setIsAuthenticated(true);
      localStorage.setItem('analytics_auth', 'authenticated');
      localStorage.removeItem('analytics_failed_attempts');
      localStorage.removeItem('analytics_last_attempt');
      setAuthError('');
    } else {
      const newFailedAttempts = failedAttempts + 1;
      localStorage.setItem('analytics_failed_attempts', newFailedAttempts.toString());
      localStorage.setItem('analytics_last_attempt', now.toString());
      setAuthError(`Incorrect password. ${5 - newFailedAttempts} attempts remaining.`);
    }
    setPassword('');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('analytics_auth');
  };

  const fetchAnalyticsData = async () => {
    try {
      setRefreshing(true);
      const preregistrationsRef = collection(db, "preregistrations");
      const snapshot = await getDocs(preregistrationsRef);
      
      const registrations: PreRegistrationData[] = [];
      const emailDomains: { [key: string]: number } = {};
      const dailyRegistrations: { [key: string]: number } = {};
      
      let totalCount = 0;
      let recentCount = 0;
      const now = new Date();
      const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      
      snapshot.forEach((doc) => {
        const data = doc.data() as PreRegistrationData;
        registrations.push(data);
        totalCount++;
        
        // Check if registration is within last 7 days
        const registrationDate = new Date(data.registeredAt);
        if (registrationDate >= sevenDaysAgo) {
          recentCount++;
        }
        
        // Email domain analysis
        const domain = data.email.split('@')[1];
        emailDomains[domain] = (emailDomains[domain] || 0) + 1;
        
        // Daily registration tracking
        const dateKey = registrationDate.toISOString().split('T')[0];
        dailyRegistrations[dateKey] = (dailyRegistrations[dateKey] || 0) + 1;
      });
      
      // Sort by registration date (newest first)
      registrations.sort((a, b) => new Date(b.registeredAt).getTime() - new Date(a.registeredAt).getTime());
      
      // Calculate weekly trend
      const fourteenDaysAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);
      let previousWeekCount = 0;
      registrations.forEach(reg => {
        const regDate = new Date(reg.registeredAt);
        if (regDate >= fourteenDaysAgo && regDate < sevenDaysAgo) {
          previousWeekCount++;
        }
      });
      
      const weeklyTrend = previousWeekCount > 0 
        ? ((recentCount - previousWeekCount) / previousWeekCount) * 100 
        : recentCount > 0 ? 100 : 0;
      
      // Calculate registration rate (registrations per day)
      const registrationRate = recentCount / 7;
      
      setAnalyticsData({
        totalRegistrations: totalCount,
        recentRegistrations: recentCount,
        emailDomains,
        dailyRegistrations,
        weeklyTrend,
        latestRegistrations: registrations.slice(0, 20), // Latest 20 registrations
        registrationRate
      });
      
    } catch (error) {
      console.error('Error fetching analytics data:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchAnalyticsData();
    }
  }, [isAuthenticated]);

  const handleRefresh = () => {
    fetchAnalyticsData();
  };

  const exportData = () => {
    if (!analyticsData) return;
    
    const csvContent = [
      ['Name', 'Email', 'Agreed to Updates', 'Registered At'].join(','),
      ...analyticsData.latestRegistrations.map(reg => [
        reg.fullName,
        reg.email,
        reg.agreeToUpdates ? 'Yes' : 'No',
        reg.registeredAt
      ].join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `myrk-registrations-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const filteredRegistrations = analyticsData?.latestRegistrations.filter(reg =>
    reg.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reg.email.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  // Authentication loading state
  if (authLoading) {
    return (
      <>
        <Head>
          <title>Access Restricted</title>
          <meta name="robots" content="noindex,nofollow,noarchive,nosnippet,notranslate" />
          <meta name="description" content="Access Restricted" />
        </Head>
        <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <RefreshCw className="h-6 w-6 animate-spin text-[#edc84f]" />
            <span className="text-lg">Loading...</span>
          </div>
        </div>
      </>
    );
  }

  // Authentication required
  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Access Restricted</title>
          <meta name="robots" content="noindex,nofollow,noarchive,nosnippet,notranslate" />
          <meta name="description" content="Access Restricted" />
        </Head>
        <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
          <Card className="bg-[#1a1a1a] border-[#333] w-full max-w-md mx-4">
            <CardHeader>
              <CardTitle className="text-white text-center [font-family:'Orbitron',Helvetica]">
                Access Restricted
              </CardTitle>
              <p className="text-gray-400 text-center text-sm">
                Enter password to access the analytics dashboard
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAuthentication} className="space-y-4">
                <div>
                  <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#444] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#edc84f]"
                    required
                    autoComplete="off"
                  />
                </div>
                {authError && (
                  <p className="text-red-400 text-sm text-center">{authError}</p>
                )}
                <Button
                  type="submit"
                  className="w-full bg-[#edc84f] text-black hover:bg-[#c79c27]"
                >
                  Access Dashboard
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </>
    );
  }

  // Loading analytics data
  if (loading) {
    return (
      <>
        <Head>
          <title>Analytics Dashboard</title>
          <meta name="robots" content="noindex,nofollow,noarchive,nosnippet,notranslate" />
          <meta name="description" content="Analytics Dashboard" />
        </Head>
        <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <RefreshCw className="h-6 w-6 animate-spin text-[#edc84f]" />
            <span className="text-lg">Loading analytics...</span>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Analytics Dashboard</title>
        <meta name="robots" content="noindex,nofollow,noarchive,nosnippet,notranslate" />
        <meta name="description" content="Analytics Dashboard" />
      </Head>

      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2 [font-family:'Orbitron',Helvetica]">
                Analytics Dashboard
              </h1>
              <p className="text-gray-400">
                Track and analyze pre-registration data for MYRK
              </p>
            </div>
            <div className="flex space-x-3 mt-4 sm:mt-0">
              <Button
                onClick={handleRefresh}
                disabled={refreshing}
                variant="outline"
                className="border-[#edc84f] text-[#edc84f] hover:bg-[#edc84f] hover:text-black"
              >
                <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
              <Button
                onClick={exportData}
                className="bg-[#edc84f] text-black hover:bg-[#c79c27]"
              >
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              >
                Logout
              </Button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-[#1a1a1a] border-[#333]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Total Registrations</p>
                    <p className="text-3xl font-bold text-white">{analyticsData?.totalRegistrations || 0}</p>
                  </div>
                  <Users className="h-8 w-8 text-[#edc84f]" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1a1a] border-[#333]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Last 7 Days</p>
                    <p className="text-3xl font-bold text-white">{analyticsData?.recentRegistrations || 0}</p>
                  </div>
                  <Calendar className="h-8 w-8 text-[#edc84f]" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1a1a] border-[#333]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Daily Rate</p>
                    <p className="text-3xl font-bold text-white">{analyticsData?.registrationRate.toFixed(1) || '0.0'}</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-[#edc84f]" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1a1a] border-[#333]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Weekly Trend</p>
                    <p className={`text-3xl font-bold ${(analyticsData?.weeklyTrend || 0) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {(analyticsData?.weeklyTrend || 0).toFixed(1)}%
                    </p>
                  </div>
                  <BarChart3 className="h-8 w-8 text-[#edc84f]" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Analytics */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-[#1a1a1a] border-[#333]">
              <TabsTrigger value="overview" className="data-[state=active]:bg-[#edc84f] data-[state=active]:text-black">
                Overview
              </TabsTrigger>
              <TabsTrigger value="registrations" className="data-[state=active]:bg-[#edc84f] data-[state=active]:text-black">
                Registrations
              </TabsTrigger>
              <TabsTrigger value="domains" className="data-[state=active]:bg-[#edc84f] data-[state=active]:text-black">
                Email Domains
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Daily Registrations Chart */}
                <Card className="bg-[#1a1a1a] border-[#333]">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2 text-[#edc84f]" />
                      Daily Registrations (Last 7 Days)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Object.entries(analyticsData?.dailyRegistrations || {})
                        .sort(([a], [b]) => a.localeCompare(b))
                        .slice(-7)
                        .map(([date, count]) => (
                          <div key={date} className="flex items-center justify-between">
                            <span className="text-sm text-gray-400">
                              {new Date(date).toLocaleDateString()}
                            </span>
                            <div className="flex items-center space-x-3">
                              <div className="w-32 bg-gray-700 rounded-full h-2">
                                <div 
                                  className="bg-[#edc84f] h-2 rounded-full transition-all duration-300"
                                  style={{ 
                                    width: `${Math.min((count / Math.max(...Object.values(analyticsData?.dailyRegistrations || {}))) * 100, 100)}%` 
                                  }}
                                />
                              </div>
                              <span className="text-sm font-medium text-white w-8">{count}</span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Top Email Domains */}
                <Card className="bg-[#1a1a1a] border-[#333]">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <PieChart className="h-5 w-5 mr-2 text-[#edc84f]" />
                      Top Email Domains
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {Object.entries(analyticsData?.emailDomains || {})
                        .sort(([,a], [,b]) => b - a)
                        .slice(0, 5)
                        .map(([domain, count]) => (
                          <div key={domain} className="flex items-center justify-between">
                            <span className="text-sm text-gray-400">@{domain}</span>
                            <div className="flex items-center space-x-3">
                              <div className="w-24 bg-gray-700 rounded-full h-2">
                                <div 
                                  className="bg-[#edc84f] h-2 rounded-full transition-all duration-300"
                                  style={{ 
                                    width: `${(count / Math.max(...Object.values(analyticsData?.emailDomains || {}))) * 100}%` 
                                  }}
                                />
                              </div>
                              <span className="text-sm font-medium text-white w-8">{count}</span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="registrations" className="mt-6">
              <Card className="bg-[#1a1a1a] border-[#333]">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white flex items-center">
                      <Users className="h-5 w-5 mr-2 text-[#edc84f]" />
                      Recent Registrations
                    </CardTitle>
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search registrations..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10 pr-4 py-2 bg-[#2a2a2a] border border-[#444] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#edc84f]"
                        />
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {filteredRegistrations.map((registration, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-[#2a2a2a] rounded-lg border border-[#333]">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-[#edc84f] rounded-full flex items-center justify-center">
                            <span className="text-black font-bold text-sm">
                              {registration.fullName.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <p className="text-white font-medium">{registration.fullName}</p>
                            <p className="text-gray-400 text-sm">{registration.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <p className="text-gray-400 text-sm">
                              {new Date(registration.registeredAt).toLocaleDateString()}
                            </p>
                            <p className="text-gray-500 text-xs">
                              {new Date(registration.registeredAt).toLocaleTimeString()}
                            </p>
                          </div>
                          {registration.agreeToUpdates ? (
                            <CheckCircle className="h-5 w-5 text-green-400" />
                          ) : (
                            <AlertCircle className="h-5 w-5 text-red-400" />
                          )}
                        </div>
                      </div>
                    ))}
                    {filteredRegistrations.length === 0 && (
                      <div className="text-center py-8 text-gray-400">
                        No registrations found matching your search.
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="domains" className="mt-6">
              <Card className="bg-[#1a1a1a] border-[#333]">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-[#edc84f]" />
                    Email Domain Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(analyticsData?.emailDomains || {})
                      .sort(([,a], [,b]) => b - a)
                      .map(([domain, count]) => (
                        <div key={domain} className="flex items-center justify-between p-4 bg-[#2a2a2a] rounded-lg border border-[#333]">
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-[#edc84f] rounded-full"></div>
                            <span className="text-white font-medium">@{domain}</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="w-32 bg-gray-700 rounded-full h-2">
                              <div 
                                className="bg-[#edc84f] h-2 rounded-full transition-all duration-300"
                                style={{ 
                                  width: `${(count / analyticsData!.totalRegistrations) * 100}%` 
                                }}
                              />
                            </div>
                            <span className="text-white font-medium w-12 text-right">{count}</span>
                            <span className="text-gray-400 text-sm w-16 text-right">
                              {((count / analyticsData!.totalRegistrations) * 100).toFixed(1)}%
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

          </Tabs>
        </div>

      </div>
    </>
  );
}