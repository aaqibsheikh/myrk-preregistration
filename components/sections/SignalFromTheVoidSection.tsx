import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Radio, Zap, Signal } from "lucide-react";

export const SignalFromTheVoidSection = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      // Here you would integrate with Firebase/Mailgun
      console.log("Subscribing:", email);
    }
  };

  return (
    <section className="w-full section-padding bg-[#0a0a0a] relative overflow-hidden">
      {/* Cosmic transmission background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-[#edc84f] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-[#c79c27] rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-[#edc84f] rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Signal wave animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 border border-[#edc84f20] rounded-full animate-ping"></div>
        <div className="absolute w-64 h-64 border border-[#edc84f30] rounded-full animate-ping delay-300"></div>
        <div className="absolute w-32 h-32 border border-[#edc84f40] rounded-full animate-ping delay-700"></div>
      </div>

      <div className="content-max-width container-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <Signal className="w-16 h-16 text-[#edc84f] animate-pulse" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#edc84f] rounded-full animate-ping"></div>
            </div>
          </div>

          <h2 className="heading-secondary text-white mb-6">
            Signal From The Void
          </h2>
          
          <p className="text-body text-gray-400 mb-8 max-w-2xl mx-auto">
            Ancient transmissions from beyond the veil whisper of prophecies yet to unfold. 
            Align your essence with the cosmic signal and receive visions of what lies ahead in the realm of MYRK.
          </p>

          <Card className="bg-[#ffffff08] border-[#edc84f20] backdrop-blur-md max-w-md mx-auto mb-8">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-[#edc84f] rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-[#edc84f] rounded-full animate-pulse delay-200"></div>
                  <div className="w-3 h-3 bg-[#edc84f] rounded-full animate-pulse delay-400"></div>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <Radio className="w-8 h-8 text-[#edc84f] mx-auto mb-2" />
                <p className="text-white font-semibold">TRANSMISSION ACTIVE</p>
                <p className="text-gray-400 text-sm">Frequency: 432.7 Hz</p>
              </div>

              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your quantum signature..."
                      className="h-12 bg-[#ffffff1a] border-[#edc84f40] text-white placeholder:text-gray-400 focus:border-[#edc84f] focus:ring-1 focus:ring-[#edc84f] transition-all duration-300"
                      required
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <Zap className="w-5 h-5 text-[#edc84f] animate-pulse" />
                    </div>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-[#edc84f] to-[#c79c27] hover:from-[#edc84f] hover:to-[#c79c27] text-black font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Align With The Signal
                  </Button>
                </form>
              ) : (
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#edc84f] to-[#c79c27] rounded-full flex items-center justify-center mx-auto">
                    <Signal className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-white font-semibold">Signal Aligned</h3>
                  <p className="text-gray-400 text-sm">
                    Your essence is now synchronized with the cosmic frequencies. 
                    You will receive visions from the void as they manifest.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="text-body text-gray-400 mb-4">
              Join the awakened ones and receive:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-3 py-1 bg-[#edc84f20] text-[#edc84f] rounded-full">
                Exclusive lore reveals
              </span>
              <span className="px-3 py-1 bg-[#edc84f20] text-[#edc84f] rounded-full">
                Early access invitations
              </span>
              <span className="px-3 py-1 bg-[#edc84f20] text-[#edc84f] rounded-full">
                Ancient prophecies
              </span>
              <span className="px-3 py-1 bg-[#edc84f20] text-[#edc84f] rounded-full">
                Behind-the-scenes visions
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};