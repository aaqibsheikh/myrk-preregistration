import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import Head from 'next/head';

export default function TestEmail() {
  const [testEmail, setTestEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleTestEmail = async () => {
    if (!testEmail) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch('/api/test-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ testEmail })
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Test email sent successfully. Check your inbox!"
        });
        setTestEmail('');
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to send test email",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network error. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Email Template Test - MYRK</title>
        <meta name="description" content="Test the MYRK email template" />
      </Head>
      
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-[#ffffff08] border-[#ffffff15]">
          <CardHeader>
            <CardTitle className="text-center text-2xl [font-family:'Orbitron',Helvetica] text-[#edc84f]">
              MYRK Email Test
            </CardTitle>
            <p className="text-center text-gray-400 [font-family:'Oxanium',Helvetica]">
              Test the Figma-based email template
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 [font-family:'Oxanium',Helvetica]">
                Enter your email address:
              </label>
              <Input
                type="email"
                placeholder="your@email.com"
                value={testEmail}
                onChange={(e) => setTestEmail(e.target.value)}
                className="bg-[#ffffff1a] border-[#ffffff33] text-white placeholder:text-gray-400 [font-family:'Oxanium',Helvetica]"
              />
            </div>
            
            <Button
              onClick={handleTestEmail}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#edc84f] to-[#c79c27] text-black hover:from-[#f4d966] hover:to-[#edc84f] font-semibold [font-family:'Orbitron',Helvetica]"
            >
              {isLoading ? 'Sending...' : 'Send Test Email'}
            </Button>
            
            <div className="text-center text-sm text-gray-400 [font-family:'Oxanium',Helvetica]">
              <p>This will send a test email using the new Figma-based template</p>
              <p className="mt-2">Template includes: Introducing header, MYRK logo, game description, heroes section, and user registration details</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}