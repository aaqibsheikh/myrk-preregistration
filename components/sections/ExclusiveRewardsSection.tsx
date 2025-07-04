import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const ExclusiveRewardsSection = (): JSX.Element => {
  // Define reward cards data for mapping
  const rewardCards = [
    {
      icon: "/figmaAssets/frame-8.svg",
      title: "1000 Gold Coins",
      description: "Premium currency to enhance your journey",
    },
    {
      icon: "/figmaAssets/frame-13.svg",
      title: "Mystic Blade",
      description: "Legendary weapon exclusive to early players",
    },
    {
      icon: "/figmaAssets/frame-9.svg",
      title: "Elite Armor Set",
      description: "Unique cosmetic armor with special effects",
    },
    {
      icon: "/figmaAssets/frame-3.svg",
      title: "VIP Status",
      description: "7-day early access and exclusive benefits",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 transition-all duration-300">
      <div className="container mx-auto max-w-[1280px] px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="[font-family:'Orbitron',Helvetica] font-normal text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center leading-tight transition-all duration-300">
            Exclusive Pre-Register Rewards
          </h2>
          <p className="[font-family:'Oxanium',Helvetica] font-normal text-gray-400 text-base sm:text-lg md:text-xl text-center leading-7 mt-4 sm:mt-6 px-4 transition-all duration-300">
            Join early and claim these legendary rewards!
          </p>
        </div>

        {/* Reward Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {rewardCards.map((card, index) => (
            <Card
              key={index}
              className="rounded-2xl border-none bg-[linear-gradient(180deg,rgba(237,200,79,0.3)_0%,rgba(199,156,39,0.3)_100%)] hover:bg-[linear-gradient(180deg,rgba(237,200,79,0.4)_0%,rgba(199,156,39,0.4)_100%)] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#edc84f]/20 group"
            >
              <CardContent className="flex flex-col items-center pt-6 pb-6 sm:pb-8 px-4">
                <div className="flex items-center justify-center w-8 sm:w-9 h-8 sm:h-9 mb-3 sm:mb-4 transition-all duration-300 group-hover:scale-110">
                  <img
                    className="w-8 sm:w-9 h-8 sm:h-9 transition-all duration-300"
                    alt={`${card.title} icon`}
                    src={card.icon}
                  />
                </div>
                <h3 className="[font-family:'Oxanium',Helvetica] font-normal text-white text-lg sm:text-xl text-center leading-7 mb-2 sm:mb-3 transition-all duration-300 group-hover:text-[#edc84f]">
                  {card.title}
                </h3>
                <p className="[font-family:'Oxanium',Helvetica] font-normal text-gray-400 text-xs sm:text-sm text-center leading-5 transition-all duration-300">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
