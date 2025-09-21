import React from "react";

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
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[504px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/JNTY5vW4F00"
                title="MYRK Gameplay Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-2xl"
              ></iframe>
            </div>

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
