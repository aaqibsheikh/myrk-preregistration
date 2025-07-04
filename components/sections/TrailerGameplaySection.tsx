import { PlayIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const TrailerGameplaySection = (): JSX.Element => {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-[#0000004c] transition-all duration-300">
      <div className="container mx-auto max-w-[1360px] px-4 sm:px-6">
        <div className="flex flex-col items-center">
          <h2 className="[font-family:'Orbitron',Helvetica] text-3xl sm:text-4xl md:text-5xl text-white text-center leading-tight mb-6 sm:mb-8 transition-all duration-300">
            Experience the Adventure
          </h2>

          <p className="[font-family:'Oxanium',Helvetica] text-base sm:text-lg md:text-xl text-gray-400 text-center max-w-[753px] mb-8 sm:mb-12 leading-relaxed px-4 transition-all duration-300">
            Watch our exclusive gameplay trailer and witness the breathtaking
            world of MYRK come to life
          </p>

          <div className="relative flex justify-center w-full max-w-[896px] px-4 sm:px-0">
            <Card className="w-full h-[250px] sm:h-[350px] md:h-[504px] rounded-2xl border-none bg-[linear-gradient(180deg,rgba(237,200,79,0.3)_0%,rgba(199,156,39,0.3)_100%)] hover:bg-[linear-gradient(180deg,rgba(237,200,79,0.4)_0%,rgba(199,156,39,0.4)_100%)] transition-all duration-300 cursor-pointer group">
              <CardContent className="flex items-center justify-center h-full p-0">
                <div className="relative w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                  <PlayIcon className="w-5 sm:w-6 h-5 sm:h-6 ml-1 text-white" />
                </div>
              </CardContent>
            </Card>

            {/* Desktop character image */}
            <img
              className="hidden md:block absolute -left-[258px] bottom-0 h-[485px] w-[258px] object-cover transition-all duration-300"
              alt="Character"
              src="/figmaAssets/body-1.webp"
            />

            {/* Mobile character image */}
            <img
              className="block md:hidden absolute -left-16 bottom-0 h-32 w-16 object-cover opacity-60 transition-all duration-300"
              alt="Character"
              src="/figmaAssets/body-1.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
