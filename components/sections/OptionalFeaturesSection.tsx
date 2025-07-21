import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export const OptionalFeaturesSection = (): JSX.Element => {
  // Data for creator cards
  const creators = [
    {
      name: "Tetsu Dao",
      role: "Senior Game Developer",
      // description: ["15+ years crafting immersive", "gaming experiences"],
      image: "/figmaAssets/testu.jpg",
    },
    {
      name: "Rubik",
      role: "A Game Studio Outsourcing",
      // description: ["Award-winning artist behind", "MYRK's visual world"],
      image: "/figmaAssets/rubik.png",
    },
    // {
    //   name: "Marcus Rodriguez",
    //   role: "Technical Director",
    //   description: ["Engine architect pushing gaming", "boundaries"],
    //   image: "/figmaAssets/image-2.png",
    // },
  ];

  return (
    <section className="w-full h-auto min-h-[450px] sm:min-h-[480px] md:h-[502px] bg-[#0000004c] py-12 sm:py-16 md:py-20 transition-all duration-300">
      <div className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-white text-center font-normal [font-family:'Orbitron',Helvetica] leading-tight mb-8 sm:mb-12 md:mb-[55px] transition-all duration-300">
          Meet the Creators
        </h2>

        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-4 md:gap-8 items-center">
          {creators.map((creator, index) => (
            <Card
              key={index}
              className="w-full max-w-[277px] sm:w-[240px] md:w-[277px] h-auto min-h-[230px] sm:min-h-[240px] md:h-[254px] bg-[#ffffff0d] rounded-2xl border border-solid border-[#ffffff1a] hover:bg-[#ffffff12] hover:border-[#ffffff2a] hover:scale-105 transition-all duration-300 group"
            >
              <CardContent className="p-4 sm:p-0 flex flex-col items-center">
                <div className="mt-3 sm:mt-[15px] mb-2 sm:mb-[6px]">
                  <Avatar className="w-[80px] sm:w-[90px] md:w-[100px] h-[80px] sm:h-[90px] md:h-[100px] transition-all duration-300 group-hover:scale-110">
                    <AvatarImage
                      src={creator.image}
                      alt={`${creator.name} profile`}
                      className="object-cover"
                    />
                  </Avatar>
                </div>

                <div className="w-full max-w-[227px] text-center sm:mt-[15px]">
                  <h3 className="text-lg sm:text-xl text-white font-normal [font-family:'Oxanium',Helvetica] leading-normal transition-all duration-300 group-hover:text-[#edc84f]">
                    {creator.name}
                  </h3>
                </div>

                <div className="w-full max-w-[227px] text-center mt-2 sm:mt-[15px]">
                  <p className="text-sm sm:text-base text-orange-400 font-normal [font-family:'Oxanium',Helvetica] leading-normal transition-all duration-300">
                    {creator.role}
                  </p>
                </div>

                {/* <div className="w-full max-w-[227px] text-center mt-2 sm:mt-[15px]">
                  {creator.description.map((line, i) => (
                    <p
                      key={i}
                      className="text-xs sm:text-sm text-gray-400 font-normal [font-family:'Oxanium',Helvetica] leading-normal transition-all duration-300"
                    >
                      {line}
                    </p>
                  ))}
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
