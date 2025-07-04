import React from "react";

export const StorylineSection = (): JSX.Element => {
  // Stats data for the bottom section
  const statsData = [
    {
      value: "50+",
      label: "Unique Locations",
      width: "w-28",
    },
    {
      value: "100+",
      label: "Epic Quests",
      width: "w-[76px]",
    },
    {
      value: "200+",
      label: "Legendary Items",
      width: "w-[109px]",
    },
  ];

  return (
    <section className="relative w-full h-auto min-h-[500px] sm:min-h-[600px] md:h-[660px] transition-all duration-300">
      <div className="relative w-full h-full">
        <img
          className="w-full h-full object-cover min-h-[500px] sm:min-h-[600px] md:min-h-[660px]"
          alt="Mask group"
          src="/figmaAssets/mask-group.png"
        />

        <div className="absolute inset-0 bg-[linear-gradient(270deg,rgba(31,44,84,0.8)_0%,rgba(0,0,0,0.8)_51%,rgba(0,0,0,0.8)_100%)] sm:bg-[linear-gradient(270deg,rgba(31,44,84,0.7)_0%,rgba(0,0,0,0.7)_51%,rgba(0,0,0,0.7)_100%)] transition-all duration-300" />

        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8">
          <div className="w-full max-w-[1280px] h-auto relative">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
              {/* Left content section */}
              <div className="w-full lg:w-[616px] relative mt-8 sm:mt-12 md:mt-[68px]">
                <h2 className="[font-family:'Orbitron',Helvetica] font-normal text-white text-2xl sm:text-3xl md:text-4xl leading-tight transition-all duration-300">
                  The Legend Begins
                </h2>

                <p className="mt-8 sm:mt-12 md:mt-[68px] [font-family:'Oxanium',Helvetica] font-normal text-gray-400 text-sm sm:text-base leading-relaxed w-full max-w-[613px] transition-all duration-300">
                  In the realm of MYRK, ancient powers stir as darkness
                  threatens to consume all. You are the chosen one, destined to
                  wield forgotten magic and unite the scattered tribes against
                  an unspeakable evil.
                </p>

                <p className="mt-6 sm:mt-8 md:mt-[30px] [font-family:'Oxanium',Helvetica] font-normal text-gray-400 text-sm sm:text-base leading-relaxed w-full max-w-[610px] transition-all duration-300">
                  Journey through mystical forests, treacherous mountains, and
                  forgotten ruins as you uncover the truth behind the MYRK
                  prophecy. Your choices will shape the fate of this world and
                  all who inhabit it.
                </p>

                <div className="mt-6 sm:mt-8 md:mt-[30px] flex flex-row gap-4 sm:gap-6 md:gap-8 justify-center lg:justify-start">
                  {statsData.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center min-w-[70px] sm:min-w-[80px] md:min-w-[100px] transition-all duration-300">
                      <div className="text-center">
                        <span className="[font-family:'Oxanium',Helvetica] font-normal text-orange-400 text-lg sm:text-xl md:text-2xl transition-all duration-300">
                          {stat.value}
                        </span>
                      </div>
                      <div className="text-center mt-1 sm:mt-2">
                        <span className="[font-family:'Oxanium',Helvetica] font-normal text-gray-400 text-xs sm:text-sm transition-all duration-300">
                          {stat.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Small character images - responsive positioning */}
                <img
                  className="hidden lg:block absolute w-24 h-[76px] top-[486px] left-[-150px] object-cover transition-all duration-300"
                  alt="Gau"
                  src="/figmaAssets/gau-1-1.png"
                />
                <img
                  className="hidden lg:block absolute w-44 h-32 top-[414px] left-[109px] object-cover transition-all duration-300"
                  alt="Gau"
                  src="/figmaAssets/gau2-1.png"
                />
                <img
                  className="hidden lg:block absolute w-[229px] h-[179px] top-[346px] left-[298px] object-cover transition-all duration-300"
                  alt="Gau"
                  src="/figmaAssets/gau-3-1.png"
                />
              </div>

              {/* Right content section - character artwork - desktop */}
              <div className="hidden lg:block relative w-[676px] h-[656px] ml-[39px]">
                <div className="absolute w-[120px] h-7 bottom-0 right-[51px] bg-[#000000cc] rounded-[60px/14px] blur-[6px]" />
                <img
                  className="h-[652px] w-full object-cover"
                  alt="Emberfolks"
                  src="/figmaAssets/emberfolks-1.png"
                />
                <img
                  className="absolute w-[148px] h-[339px] top-[-68px] left-[16px] object-cover"
                  alt="Group"
                  src="/figmaAssets/group-4.png"
                />
              </div>

              {/* Mobile character artwork */}
              <div className="block lg:hidden relative w-full h-48 mt-8">
                <img
                  className="absolute right-0 top-0 w-24 h-32 object-cover opacity-70"
                  alt="Emberfolks"
                  src="/figmaAssets/emberfolks-1.png"
                />
                <img
                  className="absolute left-4 bottom-0 w-16 h-20 object-cover opacity-60"
                  alt="Gau Character"
                  src="/figmaAssets/gau-1-1.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
