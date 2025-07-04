import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const CommunityEngagementSection = (): JSX.Element => {
  // Social media icons data
  const socialIcons = [
    {
      alt: "Discord",
      src: "/figmaAssets/frame-6.svg",
      width: "w-[30px]",
      position: "left-[493px]",
    },
    {
      alt: "Twitter",
      src: "/figmaAssets/frame-4.svg",
      width: "w-6",
      position: "left-[584px]",
    },
    {
      alt: "Reddit",
      src: "/figmaAssets/frame-7.svg",
      width: "w-[21px]",
      position: "left-[674px]",
    },
    {
      alt: "YouTube",
      src: "/figmaAssets/frame-5.svg",
      width: "w-[27px]",
      position: "left-[758px]",
    },
  ];

  return (
    <section className="w-full h-auto min-h-[400px] sm:min-h-[450px] md:h-[470px] bg-[#0000004c] py-12 sm:py-16 md:py-20 transition-all duration-300">
      <div className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
          <h2 className="[font-family:'Orbitron',Helvetica] font-normal text-white text-2xl sm:text-3xl md:text-4xl text-center tracking-[0] leading-tight transition-all duration-300">
            Join Our Community
          </h2>

          <p className="[font-family:'Oxanium',Helvetica] font-normal text-gray-400 text-base sm:text-lg md:text-xl text-center tracking-[0] leading-7 transition-all duration-300">
            Connect with fellow adventurers and stay updated
          </p>

          <div className="flex justify-center items-center gap-8 sm:gap-10 md:gap-14 my-4 sm:my-6 flex-wrap">
            {socialIcons.map((icon, index) => (
              <div key={index} className="flex items-center justify-center h-6 hover:scale-110 transition-all duration-300 cursor-pointer">
                <img
                  className={`relative ${icon.width} h-6 transition-all duration-300`}
                  alt={icon.alt}
                  src={icon.src}
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row w-full max-w-[512px] mt-4 sm:mt-6 gap-3 sm:gap-0">
            <Input
              className="h-[45px] sm:h-[50px] rounded-md sm:rounded-r-none bg-[#ffffff1a] border-[#ffffff33] text-[#adaebc] [font-family:'Oxanium',Helvetica] placeholder:text-[#adaebc] focus:border-[#edc84f] focus:ring-1 focus:ring-[#edc84f] transition-all duration-300"
              placeholder="Enter email for updates"
            />
            <Button className="h-[45px] sm:h-[50px] w-full sm:w-[122px] rounded-md sm:rounded-l-none [font-family:'Oxanium',Helvetica] font-normal text-black text-sm sm:text-base bg-[linear-gradient(180deg,rgba(237,200,79,1)_0%,rgba(199,156,39,1)_100%)] hover:bg-[linear-gradient(180deg,rgba(237,200,79,0.9)_0%,rgba(199,156,39,0.9)_100%)] hover:scale-105 transition-all duration-300">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
