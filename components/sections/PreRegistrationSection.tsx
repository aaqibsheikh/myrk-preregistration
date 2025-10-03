import { ChevronDownIcon } from "lucide-react";
import React, { forwardRef, useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { SuccessModal } from "@/components/ui/success-modal";
import { db, validatePreRegistrationData, checkDuplicateEmail, normalizeEmail, PreRegistrationData } from "../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

interface FormData {
  fullName: string;
  email: string;
  platform: string;
  agreeToUpdates: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  platform?: string;
  agreeToUpdates?: string;
  general?: string;
}

export const PreRegistrationSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    platform: "",
    agreeToUpdates: false
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successUserName, setSuccessUserName] = useState("");
  const { toast } = useToast();

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear field-specific error when user starts typing (only if form has been submitted)
    if (hasSubmitted && errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Full name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    // Platform validation - removed since dropdown is hidden
    // if (!formData.platform) {
    //   newErrors.platform = "Please select a platform";
    // }
    
    // Terms agreement validation
    if (!formData.agreeToUpdates) {
      newErrors.agreeToUpdates = "You must agree to receive updates";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setHasSubmitted(true);
    
    if (!validateForm()) {
      toast({
        title: "Please fix the errors",
        description: "Please complete all required fields correctly.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Check for duplicate email with normalization
      const isDuplicate = await checkDuplicateEmail(formData.email);
      if (isDuplicate) {
        setErrors({ general: "This email is already registered. Please use a different email address." });
        toast({
          title: "Email already registered",
          description: "This email address is already registered. Please use a different email address.",
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }

      // Validate data before submission
      const validationData: PreRegistrationData = {
        ...formData,
        registeredAt: new Date().toISOString()
      };
      
      const validation = validatePreRegistrationData(validationData);
      if (!validation.isValid) {
        setErrors({ general: validation.errors.join(", ") });
        toast({
          title: "Validation failed",
          description: validation.errors.join(", "),
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }

      // Save to Firebase with normalized email
      await addDoc(collection(db, "preregistrations"), {
        ...validationData,
        email: normalizeEmail(formData.email) // Use normalized email
      });
      
      // Send confirmation email via external backend
      try {
        // http://localhost:3001
        // https://myrk-email-backend-49eba24ba6b6.herokuapp.com
        const emailResponse = await fetch('https://myrk-email-backend-49eba24ba6b6.herokuapp.com/api/send-preregistration-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email, // Send original email for confirmation
            platform: formData.platform
          })
        });
        
        if (!emailResponse.ok) {
          console.warn("Email sending failed, but registration was successful");
        }
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
      }
      
      // Show success modal
      setSuccessUserName(formData.fullName);
      setShowSuccessModal(true);
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        platform: "",
        agreeToUpdates: false
      });
      setErrors({});
      setHasSubmitted(false);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ general: "Registration failed. Please try again later." });
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
    <>
      <div ref={ref} id="register" className="relative w-full min-h-[500px] sm:min-h-[600px] md:h-[608px] bg-[#00000080] py-12 sm:py-16 md:py-20 transition-all duration-300">
        <div className="relative w-full max-w-[672px] h-auto mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center mb-8 sm:mb-12">
            <h2 className="font-normal text-2xl sm:text-3xl md:text-4xl text-white text-center tracking-[0] leading-tight [font-family:'Orbitron',Helvetica] transition-all duration-300">
              Secure Your Spot
            </h2>
            <p className="mt-4 sm:mt-6 font-normal text-gray-400 text-sm sm:text-base text-center tracking-[0] leading-6 [font-family:'Oxanium',Helvetica] transition-all duration-300">
              Register now and be among the first to enter the world of MYRK
            </p>
          </div>

          <Card className="w-full bg-[#ffffff0d] border-[#ffffff1a] rounded-2xl hover:bg-[#ffffff12] hover:border-[#ffffff2a] transition-all duration-300">
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-6">
                  <div className="flex-1">
                    <Input
                      className={`h-[45px] sm:h-[50px] bg-[#ffffff1a] border-[#ffffff33] text-[#adaebc] [font-family:'Oxanium',Helvetica] placeholder:text-[#adaebc] focus:border-[#edc84f] focus:ring-1 focus:ring-[#edc84f] transition-all duration-300 ${
                        hasSubmitted && errors.fullName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                      }`}
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                    />
                    {hasSubmitted && errors.fullName && (
                      <p className="text-red-500 text-sm mt-1 [font-family:'Oxanium',Helvetica]">
                        {errors.fullName}
                      </p>
                    )}
                  </div>
                  <div className="flex-1">
                    <Input
                      type="email"
                      className={`h-[45px] sm:h-[50px] bg-[#ffffff1a] border-[#ffffff33] text-[#adaebc] [font-family:'Oxanium',Helvetica] placeholder:text-[#adaebc] focus:border-[#edc84f] focus:ring-1 focus:ring-[#edc84f] transition-all duration-300 ${
                        hasSubmitted && errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                      }`}
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                    {hasSubmitted && errors.email && (
                      <p className="text-red-500 text-sm mt-1 [font-family:'Oxanium',Helvetica]">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* <div className="mb-6 sm:mb-7">
                  <Select 
                    value={formData.platform} 
                    onValueChange={(value) => handleInputChange('platform', value)}
                  >
                    <SelectTrigger className={`w-full h-[45px] sm:h-11 bg-[#ffffff1a] border-[#ffffff33] text-white [font-family:'Oxanium',Helvetica] focus:border-[#edc84f] focus:ring-1 focus:ring-[#edc84f] transition-all duration-300 ${
                      hasSubmitted && errors.platform ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                    }`}>
                      <SelectValue placeholder="Preferred Platform" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pc">PC</SelectItem>
                      <SelectItem value="playstation">PlayStation</SelectItem>
                      <SelectItem value="xbox">Xbox</SelectItem>
                      <SelectItem value="nintendo">Nintendo Switch</SelectItem>
                      <SelectItem value="mobile">Mobile</SelectItem>
                    </SelectContent>
                  </Select>
                  {hasSubmitted && errors.platform && (
                    <p className="text-red-500 text-sm mt-1 [font-family:'Oxanium',Helvetica]">
                      {errors.platform}
                    </p>
                  )}
                </div> */}

                <div className="flex items-start gap-3 mb-6">
                  <div className="relative">
                    <Checkbox
                      id="terms"
                      className={`w-5 h-5 rounded border-2 transition-all duration-300 ${
                        formData.agreeToUpdates 
                          ? 'bg-[#edc84f] border-[#edc84f] text-black' 
                          : 'bg-transparent border-[#ffffff33] hover:border-[#edc84f]'
                      } ${
                        hasSubmitted && errors.agreeToUpdates ? 'border-red-500' : ''
                      }`}
                      checked={formData.agreeToUpdates}
                      onCheckedChange={(checked) => handleInputChange('agreeToUpdates', checked as boolean)}
                    />
                  </div>
                  <label
                    htmlFor="terms"
                    className="text-gray-300 text-sm [font-family:'Oxanium',Helvetica] cursor-pointer transition-all duration-300 hover:text-white leading-relaxed"
                  >
                    By registering, you agree to our{" "}
                    <Link href="/privacy" className="text-[#edc84f] hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    and consent to receive occasional updates. You may unsubscribe anytime.
                  </label>
                </div>
                {hasSubmitted && errors.agreeToUpdates && (
                  <p className="text-red-500 text-sm -mt-2 mb-4 [font-family:'Oxanium',Helvetica]">
                    {errors.agreeToUpdates}
                  </p>
                )}

                {hasSubmitted && errors.general && (
                  <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <p className="text-red-400 text-sm [font-family:'Oxanium',Helvetica]">
                      {errors.general}
                    </p>
                  </div>
                )}

                <Button 
                  type="submit" 
                  disabled={isSubmitting || !formData.agreeToUpdates}
                  className="w-full h-[50px] sm:h-[60px] rounded-lg bg-[linear-gradient(180deg,rgba(237,200,79,1)_0%,rgba(199,156,39,1)_100%)] [font-family:'Oxanium',Helvetica] font-normal text-black text-base sm:text-lg hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? "Registering..." : "Complete Registration"}
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

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        userName={successUserName}
        title="Registration Successful!"
        message="Welcome to the MYRK community! You'll receive exclusive updates and early access information. Check your email for confirmation and exclusive rewards."
      />
    </>
  );
});
