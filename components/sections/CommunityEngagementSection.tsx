import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const CommunityEngagementSection = (): JSX.Element => {
  // Social media icons data
  const socialIcons = [
    {
      alt: "Discord",
      src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/discord.svg",
      link: "https://discord.gg/myrk-game",
      width: "w-6"
    },
    {
      alt: "X (Twitter)",
      src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg",
      link: "https://x.com/PenguinPWS",
      width: "w-6"
    },
    {
      alt: "YouTube",
      src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg",
      link: "https://www.youtube.com/@penguinpixelworks",
      width: "w-6"
    },
    {
      alt: "Instagram",
      src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg",
      link: "https://www.instagram.com/penguinpixelworks/",
      width: "w-6"
    },
    {
      alt: "Facebook",
      src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg",
      link: "https://www.facebook.com/MYRK.EotF",
      width: "w-6"
    },
    {
      alt: "TikTok",
      src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tiktok.svg",
      link: "https://www.tiktok.com/@myrkechoesoftheforgotten",
      width: "w-6"
    }
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
              <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-6 hover:scale-110 transition-all duration-300 cursor-pointer">
                <img
                  className={`relative ${icon.width} h-6 transition-all duration-300`}
                  alt={icon.alt}
                  src={icon.src}
                />
              </a>
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
