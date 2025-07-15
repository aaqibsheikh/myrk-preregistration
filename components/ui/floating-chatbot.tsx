import React, { useState } from "react";
import { Button } from "./button";
import { Card, CardContent } from "./card";
import { MessageCircle, X, Sparkles } from "lucide-react";

export const FloatingChatbot = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleChatbot}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-[#edc84f] to-[#c79c27] hover:from-[#edc84f] hover:to-[#c79c27] shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
        >
          {/* Glowing orb effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#edc84f] to-[#c79c27] opacity-75 animate-pulse" />
          
          {/* Sparkle animation */}
          <div className="absolute inset-0 rounded-full">
            <Sparkles className="absolute top-2 right-2 w-3 h-3 text-white animate-pulse" />
            <Sparkles className="absolute bottom-2 left-2 w-2 h-2 text-white animate-pulse delay-500" />
          </div>
          
          {/* Main icon */}
          <div className="relative z-10">
            {isOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <MessageCircle className="w-6 h-6 text-black" />
            )}
          </div>
          
          {/* Shine effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" />
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-w-[calc(100vw-3rem)]">
          <Card className="bg-[#1a1a2e] border-[#edc84f40] shadow-2xl animate-slide-up">
            <CardContent className="p-0">
              {/* Header */}
              <div className="p-4 border-b border-[#edc84f40] bg-gradient-to-r from-[#edc84f20] to-[#c79c2720]">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#edc84f] to-[#c79c27] flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Myrk the Prophet</h3>
                    <p className="text-gray-400 text-sm">Ancient Guide</p>
                  </div>
                </div>
              </div>

              {/* Chat Content */}
              <div className="p-4 space-y-4">
                <div className="bg-[#ffffff08] rounded-lg p-3 border-l-4 border-[#edc84f]">
                  <p className="text-white text-sm leading-relaxed">
                    Greetings, wanderer... I am Myrk the Prophet, keeper of ancient wisdom and guide to those who seek the truth of the First Collapse.
                  </p>
                </div>
                
                <div className="bg-[#ffffff08] rounded-lg p-3 border-l-4 border-[#edc84f]">
                  <p className="text-white text-sm leading-relaxed">
                    The threads of fate are stirring, and your journey into the mysteries of MYRK is about to begin. But for now, I must prepare...
                  </p>
                </div>

                <div className="bg-[#edc84f20] rounded-lg p-3 text-center">
                  <Sparkles className="w-6 h-6 text-[#edc84f] mx-auto mb-2" />
                  <p className="text-[#edc84f] text-sm font-semibold">
                    Coming Soon
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    Myrk the Prophet will guide you through the mysteries of the realm
                  </p>
                </div>

                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-[#edc84f40] text-[#edc84f] hover:bg-[#edc84f20]"
                  >
                    Learn More
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-[#edc84f] to-[#c79c27] text-black hover:from-[#edc84f] hover:to-[#c79c27]"
                  >
                    Notify Me
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};