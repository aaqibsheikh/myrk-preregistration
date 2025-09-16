import React from "react";

import Link from "next/link";
export const FooterSection = (): JSX.Element => {
  // Social media icons data with active links
  const socialIcons = [
    {
      src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/discord.svg",
      alt: "Discord",
      link: "https://discord.gg/RjkvPyrT9m",
      width: "w-5"
    },
    {
      src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg",
      alt: "X (Twitter)",
      link: "https://x.com/PenguinPWS",
      width: "w-5"
    },
    {
      src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg",
      alt: "YouTube",
      link: "https://www.youtube.com/@penguinpixelworks",
      width: "w-5"
    },
    {
      src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg",
      alt: "Instagram",
      link: "https://www.instagram.com/penguinpixelworks/",
      width: "w-5"
    },
    {
      src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg",
      alt: "Facebook",
      link: "https://www.facebook.com/MYRK.EotF",
      width: "w-5"
    },
    {
      src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tiktok.svg",
      alt: "TikTok",
      link: "https://www.tiktok.com/@myrkechoesoftheforgotten",
      width: "w-5"
    }
  ];

  // Footer links data
  const footerLinks = [
    { text: "Contact Us", href: "#" },
    { text: "Terms of Service", href: "#" },
    { text: "Privacy Policy", href: "#" }
  ];

  return (
    <footer className="w-full h-auto min-h-[280px] sm:min-h-[300px] md:h-[321px] bg-[#00000080] border-t border-[#ffffff1a] py-8 sm:py-10 md:py-0 transition-all duration-300">
      <div className="relative h-full max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center h-full">
          {/* Logo and content container */}
          <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
            {/* Logo */}
            {/* <div className="flex items-center">
              <div className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 rounded-lg mr-2 sm:mr-3 flex items-center justify-center bg-gradient-to-br from-[#edc84f] to-[#c79c27] transition-all duration-300">
                <div className="[font-family:'Orbitron',Helvetica] font-normal text-black text-lg sm:text-xl">
                  M
                </div>
              </div>
              <div className="[font-family:'Orbitron',Helvetica] font-normal text-white text-xl sm:text-2xl leading-tight whitespace-nowrap transition-all duration-300">
                MYRK
              </div>
            </div> */}
            <Link
              href="/"
              className="flex items-center h-8 md:h-10 transition-all duration-300 hover:scale-105"
            >
              <img
                className="w-8 h-8 md:w-10 md:h-10 object-contain mr-2 md:mr-3 transition-all duration-300"
                alt="MYRK Logo"
                src="/figmaAssets/logo-1.png"
              />
              <div className="[font-family:'Orbitron',Helvetica] font-normal text-white text-lg md:text-xl leading-tight whitespace-nowrap transition-all duration-300">
                MYRK
              </div>
            </Link>

            {/* Links */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 md:gap-12">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="[font-family:'Oxanium',Helvetica] font-normal text-orange-400 text-sm text-center tracking-[0] leading-5 whitespace-nowrap hover:underline hover:text-[#edc84f] transition-all duration-300"
                >
                  {link.text}
                </a>
              ))}
            </div>

            {/* Tagline */}
            <p className="max-w-[277px] [font-family:'Oxanium',Helvetica] font-normal text-gray-400 text-xs sm:text-sm text-center tracking-[0] leading-5 transition-all duration-300">
              Enter a world where shadows hold secrets and your prophecy
              unfolds.
            </p>

            {/* Social Media Icons - Active Links */}
            <div className="flex gap-3 sm:gap-4 mt-1 sm:mt-2">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer p-2 rounded-lg hover:bg-[#ffffff0a]"
                >
                  <img
                    className={`${
                      icon.width || "w-4"
                    } h-4 transition-all duration-300 hover:brightness-125`}
                    alt={icon.alt}
                    src={icon.src}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
