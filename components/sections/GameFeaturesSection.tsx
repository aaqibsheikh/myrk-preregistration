import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const GameFeaturesSection = (): JSX.Element => {
  // Feature data for mapping
  const features = [
    {
      icon: "/figmaAssets/group.png",
      title: "Epic Combat System",
      description:
        "Command your Echo Companions and unleash powerful abilities in turn-based combat against formidable mythical foes.",
    },
    {
      icon: "/figmaAssets/frame-12.svg",
      title: "Vast Open World",
      description:
        "Explore a 1:1 GPS-based world where real locations transform into mystical realms filled with secrets, ruins, and adventure.",
    },
    {
      icon: "/figmaAssets/frame-15.svg",
      title: "Character Progression",
      description:
        "Customize your hero with unique skills, equipment, and magical abilities to suit your playstyle.",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 transition-all duration-300">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-white text-center font-normal mb-8 sm:mb-12 md:mb-14 [font-family:'Orbitron',Helvetica] leading-tight transition-all duration-300">
          Game Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-[#ffffff08] backdrop-blur-md border-[#ffffff15] rounded-2xl h-auto min-h-[250px] sm:min-h-[274px] hover:bg-[#ffffff15] hover:border-[#edc84f40] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#edc84f]/30 group"
              style={{ 
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}
            >
              <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-xl bg-[linear-gradient(180deg,rgba(237,200,79,1)_0%,rgba(199,156,39,1)_100%)] flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#edc84f]/50">
                  <img
                    className="w-5 sm:w-6 h-5 sm:h-6 transition-all duration-300 group-hover:brightness-110"
                    alt={feature.title}
                    src={feature.icon}
                  />
                </div>

                <h3 className="text-xl sm:text-2xl text-white font-normal [font-family:'Oxanium',Helvetica] mb-3 sm:mb-4 transition-all duration-300 group-hover:text-[#edc84f] group-hover:drop-shadow-[0_0_10px_rgba(237,200,79,0.5)]">
                  {feature.title}
                </h3>

                <p className="text-gray-300 text-sm sm:text-base font-normal [font-family:'Oxanium',Helvetica] leading-relaxed transition-all duration-300 flex-grow group-hover:text-gray-200">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
