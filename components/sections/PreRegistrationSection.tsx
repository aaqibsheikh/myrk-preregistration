import { ChevronDownIcon } from "lucide-react";
import React, { forwardRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { db } from "../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

interface FormData {
  fullName: string;
  email: string;
  platform: string;
  agreeToUpdates: boolean;
}

export const PreRegistrationSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    platform: "",
    agreeToUpdates: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const { toast } = useToast();

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.platform) {
      newErrors.platform = "Please select a platform";
    }
    
    if (!formData.agreeToUpdates) {
      newErrors.agreeToUpdates = true;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await addDoc(collection(db, "preregistrations"), {
        ...formData,
        registeredAt: new Date().toISOString()
      });
      
      toast({
        title: "Pre-registration successful!",
        description: "Welcome to the MYRK community! You'll receive updates about the launch.",
      });
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        platform: "",
        agreeToUpdates: false
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Registration failed",
        description: "Please try again later or contact support.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div ref={ref} className="relative w-full min-h-[500px] sm:min-h-[600px] md:h-[608px] bg-[#00000080] py-12 sm:py-16 md:py-20 transition-all duration-300">
      <div className="relative w-full max-w-[672px] h-auto mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center mb-8 sm:mb-12">
          <h2 className="font-normal text-2xl sm:text-3xl md:text-4xl text-white text-center tracking-[0] leading-tight [font-family:'Orbitron',Helvetica] transition-all duration-300">
            Secure Your Spot
          </h2>
          <p className="mt-4 sm:mt-6 font-normal text-gray-400 text-sm sm:text-base text-center tracking-[0] leading-6 [font-family:'Oxanium',Helvetica] transition-all duration-300">
            Pre-register now and be among the first to enter the world of MYRK
          </p>
        </div>

        <Card className="w-full bg-[#ffffff0d] border-[#ffffff1a] rounded-2xl hover:bg-[#ffffff12] hover:border-[#ffffff2a] transition-all duration-300">
          <CardContent className="p-6 sm:p-8">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-6">
                <div className="flex-1">
                  <Input
                    className="h-[45px] sm:h-[50px] bg-[#ffffff1a] border-[#ffffff33] text-[#adaebc] [font-family:'Oxanium',Helvetica] placeholder:text-[#adaebc] focus:border-[#edc84f] focus:ring-1 focus:ring-[#edc84f] transition-all duration-300"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>
                <div className="flex-1">
                  <Input
                    type="email"
                    className="h-[45px] sm:h-[50px] bg-[#ffffff1a] border-[#ffffff33] text-[#adaebc] [font-family:'Oxanium',Helvetica] placeholder:text-[#adaebc] focus:border-[#edc84f] focus:ring-1 focus:ring-[#edc84f] transition-all duration-300"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="mb-6 sm:mb-7">
                <Select value={formData.platform} onValueChange={(value) => setFormData(prev => ({ ...prev, platform: value }))}>
                  <SelectTrigger className="w-full h-[45px] sm:h-11 bg-[#ffffff1a] border-[#ffffff33] text-white [font-family:'Oxanium',Helvetica] focus:border-[#edc84f] focus:ring-1 focus:ring-[#edc84f] transition-all duration-300">
                    <SelectValue placeholder="Preferred Platform" />
                    {/* <ChevronDownIcon className="h-6 sm:h-7 w-6 sm:w-7 absolute right-10" /> */}
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pc">PC</SelectItem>
                    <SelectItem value="playstation">PlayStation</SelectItem>
                    <SelectItem value="xbox">Xbox</SelectItem>
                    <SelectItem value="nintendo">Nintendo Switch</SelectItem>
                    <SelectItem value="mobile">Mobile</SelectItem>
                  </SelectContent>
                </Select>
                {errors.platform && <p className="text-red-500 text-sm mt-1">{errors.platform}</p>}
              </div>

              <div className="flex items-start gap-3 mb-6 sm:mb-7">
                <Checkbox
                  id="terms"
                  className="w-[13px] h-[13px] rounded-[1px] border-[0.5px] border-black bg-white mt-1 transition-all duration-300"
                  checked={formData.agreeToUpdates}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeToUpdates: checked as boolean }))}
                />
                <label
                  htmlFor="terms"
                  className="text-gray-400 text-xs sm:text-sm [font-family:'Oxanium',Helvetica] cursor-pointer transition-all duration-300 hover:text-gray-300"
                >
                  I agree to receive updates and promotional content
                </label>
              </div>
              {errors.agreeToUpdates && <p className="text-red-500 text-sm mt-1">{errors.agreeToUpdates}</p>}

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-[50px] sm:h-[60px] rounded-lg bg-[linear-gradient(180deg,rgba(237,200,79,1)_0%,rgba(199,156,39,1)_100%)] [font-family:'Oxanium',Helvetica] font-normal text-black text-base sm:text-lg hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "Registering..." : "Complete Pre-Registration"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Desktop decorative image */}
      <img
        className="hidden md:block absolute w-[286px] h-[298px] top-1.5 right-[48px] object-cover transition-all duration-300"
        alt="Element"
        src="/figmaAssets/1-6.png"
      />

      {/* Mobile decorative image - proper mobile positioning */}
      <img
        className="block md:hidden absolute w-16 h-16 top-4 right-4 object-cover opacity-40 transition-all duration-300"
        alt="Element"
        src="/figmaAssets/1-6.png"
      />

      {/* Mobile character decoration */}
      <img
        className="block md:hidden absolute w-12 h-16 bottom-4 left-4 object-cover opacity-30 transition-all duration-300"
        alt="Character"
        src="/figmaAssets/gau-1-1.png"
      />
    </div>
  );
});
