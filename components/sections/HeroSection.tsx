import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { PreRegistrationModal } from "@/components/ui/modal";
type HeroSectionProps = {
  scrollToPreRegister: () => void;
};
export const HeroSection = ({ scrollToPreRegister }: HeroSectionProps): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Decorative star/light elements with exact positioning
  const decorativeStars = [
    {
      desktop: "top-[329px] left-0",
      mobile: "top-[25%] left-2",
      size: "w-[11px] h-[11px]",
      mobileSize: "w-2 h-2",
      blur: "blur-[7.5px]",
    },
    {
      desktop: "top-0 left-[230px]",
      mobile: "top-4 left-[20%]",
      size: "w-[11px] h-[11px]",
      mobileSize: "w-2 h-2",
      blur: "blur-[7.5px]",
    },
    {
      desktop: "top-[565px] left-[230px]",
      mobile: "top-[70%] left-[20%]",
      size: "w-2 h-2",
      mobileSize: "w-1.5 h-1.5",
      blur: "blur-sm",
    },
    {
      desktop: "top-[90px] left-[118px]",
      mobile: "top-16 left-[10%]",
      size: "w-2 h-2",
      mobileSize: "w-1.5 h-1.5",
      blur: "blur-sm",
    },
    {
      desktop: "top-[738px] left-[547px]",
      mobile: "top-[80%] right-[30%]",
      size: "w-2 h-2",
      mobileSize: "w-1.5 h-1.5",
      blur: "blur-sm",
    },
    {
      desktop: "top-[575px] left-[476px]",
      mobile: "top-[65%] right-[35%]",
      size: "w-2 h-2",
      mobileSize: "w-1.5 h-1.5",
      blur: "blur-sm",
    },
    {
      desktop: "top-[388px] left-[159px]",
      mobile: "top-[45%] left-[15%]",
      size: "w-2 h-2",
      mobileSize: "w-1.5 h-1.5",
      blur: "blur-sm",
    },
    {
      desktop: "top-[113px] left-[363px]",
      mobile: "top-20 left-[40%]",
      size: "w-2 h-2",
      mobileSize: "w-1.5 h-1.5",
      blur: "blur-sm",
    },
    {
      desktop: "top-[186px] right-[5%]",
      mobile: "top-24 right-4",
      size: "w-2 h-2",
      mobileSize: "w-1.5 h-1.5",
      blur: "blur-sm",
    },
  ];

  return (
    <>
      {/* Desktop Version */}
      <section className="hidden md:block relative w-full h-[900px] overflow-hidden">
        {/* Background gradient overlay - exact Figma colors */}
        <div className="absolute inset-0  z-10" />

        {/* Main background image */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Fantasy background"
          src="/figmaAssets/bg-1.webp"
        />

        {/* Side trees - exact desktop positioning */}
        {/* <img
          className="absolute w-[421px] h-[845px] top-[55px] right-0 object-cover z-20"
          alt="Right tree"
          src="/figmaAssets/tree-3.png"
        />

        <img
          className="absolute w-[357px] h-[837px] top-[63px] left-0 object-cover z-20"
          alt="Left tree"
          src="/figmaAssets/tree-3.png"
        /> */}

        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0  z-30">
          <div className="relative w-full h-full">
            {/* Decorative element left side */}
            {/* <img
              className="absolute w-[298px] h-[310px] top-[167px] left-[70px] object-cover z-40"
              alt="Decorative element"
              src="/figmaAssets/5-1.png"
            /> */}

            {/* Bottom left decorative element - exact Figma positioning */}
            <img
              className="absolute left-[103px] top-[604px] w-[583px] h-[283px] object-cover z-40"
              alt="Decorative crystal"
              src="/figmaAssets/ca-1.webp"
            />

            {/* Decorative glow effect - enhanced blur */}
            {/* <div className="absolute w-[134px] h-[134px] top-[704px] left-[512px] bg-[#deb63f80] rounded-[67px] blur-[40px] z-35 animate-pulse">
              <div className="relative w-[15px] h-[15px] top-[62px] left-14 bg-white rounded-[7.5px] blur-[12px] opacity-90" />
            </div> */}

            {/* Decorative stars/lights - enhanced with perfect blur and opacity */}
            {/* <div className="absolute w-full h-full z-40">
              {decorativeStars.map((star, index) => (
                <div
                  key={`star-${index}`}
                  className={`absolute ${star.desktop} ${star.size} bg-[#edc84f] rounded-full ${star.blur} animate-pulse opacity-80 transition-all duration-1000`}
                  style={{ 
                    animationDelay: `${index * 0.3}s`,
                    filter: 'blur(1px) brightness(1.2)'
                  }}
                />
              ))}
            </div> */}

            {/* Right side decorative element */}
            <img
              className="absolute w-[627px] h-[428px] top-[472px] right-0 object-cover z-40"
              alt="Decorative element"
              src="/figmaAssets/3-1.png"
            />
          </div>
        </div>

        {/* Desktop Main content container - adjusted positioning to avoid header overlap */}
        <div className="absolute w-[896px] h-[388px] top-[360px] left-1/2 -translate-x-1/2 z-50">
          {/* Logo with subtle animation */}
          <img
            className="absolute w-[226px] h-[226px] top-[-156px] left-1/2 -translate-x-1/2 object-contain transition-all duration-500 hover:scale-105"
            alt="MYRK Logo"
            src="/figmaAssets/logo-1.png"
          />

          {/* Main tagline with smooth animation */}
          <h2 className="absolute w-[822px] top-[110px] left-1/2 -translate-x-1/2 [font-family:'Oxanium',Helvetica] font-semibold text-gray-200 text-3xl text-center tracking-[0] leading-9 transition-all duration-700 hover:text-white">
            Enter the realm where legends are forged and destinies are written
          </h2>

          {/* Description with enhanced styling */}
          <p className="absolute w-[648px] top-[225px] left-1/2 -translate-x-1/2 [font-family:'Oxanium',Helvetica] font-medium text-gray-300 text-lg text-center tracking-[0] leading-7 transition-all duration-500">
            Embark on an epic adventure through mystical lands, battle ancient
            creatures, and uncover the secrets of the MYRK universe.
          </p>

          {/* Call to action button with enhanced effects */}
          <Button 
            onClick={scrollToPreRegister}
            className="absolute w-[306px] h-[60px] top-[328px] left-1/2 -translate-x-1/2 btn-primary rounded-xl [font-family:'Oxanium',Helvetica] font-semibold text-black text-xl"
          >
            <img
              className="w-[25px] h-5 mr-2 transition-transform duration-300 group-hover:scale-110"
              alt="Frame"
              src="/figmaAssets/frame-1.svg"
            />
            Register Now
          </Button>
        </div>
      </section>

      {/* Mobile Version - Exact Figma Mobile Wireframe */}
      <section className="block md:hidden relative w-full h-screen overflow-hidden">
        {/* Mobile Background */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Fantasy background"
          src="/figmaAssets/bg-1.png"
        />

        {/* Mobile gradient overlay - exact Figma opacity */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.8)_100%)] z-10" />

        {/* Mobile Characters - Enhanced with blur and lighting effects for Figma accuracy */}
        {/* Left Character - Warrior with weapon */}
        <img
          className="absolute bottom-0 left-0 w-40 h-52 object-contain z-25 transition-all duration-700 hover:brightness-110"
          alt="Left Warrior Character"
          src="/figmaAssets/gau-1-1.png"
          style={{ filter: 'drop-shadow(0 0 10px rgba(237,200,79,0.3))' }}
        />
        
        {/* Right Character - Crystal/Magic character */}
        <img
          className="absolute bottom-0 right-0 w-40 h-52 object-contain z-25 transition-all duration-700 hover:brightness-110"
          alt="Right Crystal Character"
          src="/figmaAssets/gau2-1.png"
          style={{ filter: 'drop-shadow(0 0 10px rgba(237,200,79,0.3))' }}
        />

        {/* Mobile UI Container */}
        <div className="absolute inset-0 z-50 flex flex-col">
          {/* Top section with logo and title */}
          <div className="flex-1 flex flex-col items-center justify-center pt-8 px-6">
            {/* Mobile Logo */}
            <img
              className="w-20 h-20 object-contain mb-2"
              alt="MYRK Logo"
              src="/figmaAssets/logo-1.png"
            />

            {/* Mobile Title with subtitle - enhanced with perfect gradients */}
            <div className="text-center mb-6">
              <div className="text-white text-xs [font-family:'Oxanium',Helvetica] font-medium tracking-wide opacity-90 transition-all duration-300">
                ECHOES OF THE FORGOTTEN
              </div>
            </div>

            {/* Mobile tagline - enhanced typography */}
            <h2 className="[font-family:'Oxanium',Helvetica] font-semibold text-white text-center text-lg leading-6 mb-4 px-4 transition-all duration-500 hover:text-gray-100">
              Enter the realm where legends are forged and destinies are written
            </h2>
          </div>

          {/* Bottom section with description and button */}
          <div className="flex flex-col items-center pb-6 px-6 mt-auto">
            {/* Mobile description */}
            <p className="[font-family:'Oxanium',Helvetica] font-medium text-gray-300 text-sm text-center leading-5 mb-6 px-4 max-w-xs">
              Embark on an epic adventure through mystical lands, battle ancient creatures, and uncover the secrets of MYRK
            </p>

            {/* Mobile CTA button - enhanced with perfect effects */}
            <Button 
            onClick={scrollToPreRegister}
              className="w-full max-w-[280px] h-[50px] btn-primary rounded-lg [font-family:'Oxanium',Helvetica] font-semibold text-black text-base mb-4"
            >
              <img
                className="w-5 h-4 mr-2 transition-transform duration-300 hover:scale-110"
                alt="Frame"
                src="/figmaAssets/frame-1.svg"
              />
              Register Now
            </Button>
          </div>
        </div>
      </section>

      {/* Pre-registration Modal */}
      <PreRegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};
