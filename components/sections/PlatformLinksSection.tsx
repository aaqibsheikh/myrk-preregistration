import React from "react";
import { Button } from "@/components/ui/button";

export const PlatformLinksSection = (): JSX.Element => {
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.Rubik.GPSBase&hl=en';
  const appStoreUrl = 'https://apps.apple.com/us/app/myrk-echoes-of-the-forgotten/id6747470232';

  return (
    <div className="relative w-full py-12 sm:py-16 md:py-20">
      <div className="relative w-full max-w-[800px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-4 [font-family:'Orbitron',Helvetica]">
            Download MYRK Now
          </h2>
          <p className="text-gray-400 text-base sm:text-lg [font-family:'Oxanium',Helvetica]">
            Available on iOS and Android
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          {/* iOS App Store Button */}
          <Button
            onClick={() => window.open(appStoreUrl, '_blank', 'noopener,noreferrer')}
            className="w-full sm:w-auto min-w-[200px] h-14 bg-[linear-gradient(180deg,rgba(237,200,79,1)_0%,rgba(199,156,39,1)_100%)] text-black font-semibold hover:scale-105 transition-all duration-300 [font-family:'Oxanium',Helvetica] text-lg"
          >
            <div className="flex items-center gap-2">
              <img 
                src="/figmaAssets/appstore.png" 
                alt="App Store" 
                className="w-6 h-6 object-contain"
              />
              <span>Download on App Store</span>
            </div>
          </Button>

          {/* Android Google Play Button */}
          <Button
            onClick={() => window.open(playStoreUrl, '_blank', 'noopener,noreferrer')}
            className="w-full sm:w-auto min-w-[200px] h-14 bg-[linear-gradient(180deg,rgba(237,200,79,1)_0%,rgba(199,156,39,1)_100%)] text-black font-semibold hover:scale-105 transition-all duration-300 [font-family:'Oxanium',Helvetica] text-lg"
          >
            <div className="flex items-center gap-2">
              <img 
                src="/figmaAssets/playstore.png" 
                alt="Google Play Store" 
                className="w-6 h-6 object-contain"
              />
              <span>Get it on Google Play</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
