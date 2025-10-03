import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Facebook, Twitter, Instagram, Youtube, MessageCircle } from "lucide-react";
type HeaderSectionProps = {
  scrollToPreRegister: () => void;
};

  export const HeaderSection = ({ scrollToPreRegister }: HeaderSectionProps): JSX.Element => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const location = router.pathname;

  // Handle register button click - scroll on home page, redirect on other pages
  const handleRegisterClick = () => {
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
    
    if (location === '/') {
      scrollToPreRegister();
    } else {
      router.push('/#register');
    }
  };

  // Navigation menu items data with routes
  const menuItems = [
    { text: "Features", width: "w-[66px]", path: "/features" },
    { text: "Gameplay", width: "w-[74px]", path: "/gameplay" },
    { text: "Rewards", width: "w-16", path: "/rewards" },
    { text: "Community", width: "w-[85px]", path: "/community" },

  ];

  return (
    <header className="w-full h-[60px] sm:h-[65px] md:h-[73px] bg-[#000000cc] border-b border-[#ffffff1a] transition-all duration-300 sticky top-0 z-50 backdrop-blur-sm">
      <div className="relative w-full max-w-[1280px] h-full mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo - exact Figma design with home link */}
        <Link href="/" className="flex items-center h-8 md:h-10 transition-all duration-300 hover:scale-105">
          <img
            className="w-8 h-8 md:w-10 md:h-10 object-contain mr-2 md:mr-3 transition-all duration-300"
            alt="MYRK Logo"
            src="/figmaAssets/logo-1.png"
          />
          <div className="[font-family:'Orbitron',Helvetica] font-normal text-white text-lg md:text-xl leading-tight whitespace-nowrap transition-all duration-300">
            MYRK
          </div>
        </Link>

        {/* Navigation - hidden on mobile, show hamburger menu */}
        <NavigationMenu className="hidden md:flex mx-auto">
          <NavigationMenuList className="flex gap-4 xl:gap-8">
            {menuItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <Link href={item.path} 
                  className={`${item.width} [font-family:'Oxanium',Helvetica] font-normal text-sm xl:text-base leading-6 whitespace-nowrap cursor-pointer transition-colors duration-300 ${
                    location === item.path 
                      ? 'text-[#edc84f] font-semibold' 
                      : 'text-white hover:text-[#edc84f]'
                  }`}
                >
                  {item.text}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile menu button - show on smaller screens */}
        <Button 
          className="md:hidden w-8 h-8 p-0 bg-transparent hover:bg-[#ffffff1a] border border-[#ffffff1a] transition-all duration-300"
          variant="ghost"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-4 h-3 flex flex-col justify-between">
            <div className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
            <div className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
          </div>
        </Button>

        {/* Social Media Icons */}
        <div className="hidden md:flex items-center space-x-3 mr-4">
          <a href="https://discord.gg/RjkvPyrT9m" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#edc84f] transition-colors duration-300">
            <MessageCircle size={20} />
          </a>
          <a href="https://x.com/PenguinPWS" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#edc84f] transition-colors duration-300">
            <svg viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" style={{ display: 'block' }}>
              <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="white"/>
            </svg>
          </a>
          <a href="https://www.youtube.com/@penguinpixelworks" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#edc84f] transition-colors duration-300">
            <Youtube size={20} />
          </a>
          <a href="https://www.instagram.com/penguinpixelworks/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#edc84f] transition-colors duration-300">
            <Instagram size={20} />
          </a>
          <a href="https://www.facebook.com/MYRK.EotF" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#edc84f] transition-colors duration-300">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="Facebook" className="w-5 h-5" />
          </a>
          <a href="https://www.tiktok.com/@myrkechoesoftheforgotten" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#edc84f] transition-colors duration-300">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tiktok.svg" alt="TikTok" className="w-5 h-5" />
          </a>
        </div>

        {/* Register Now Button - responsive */}
        <Button   onClick={handleRegisterClick}
 className="hidden sm:flex w-[120px] md:w-[143px] h-8 md:h-10 rounded-lg [font-family:'Oxanium',Helvetica] font-medium text-black text-sm md:text-base bg-[linear-gradient(180deg,rgba(237,200,79,1)_0%,rgba(199,156,39,1)_100%)] hover:bg-[linear-gradient(180deg,rgba(237,200,79,0.9)_0%,rgba(199,156,39,0.9)_100%)] transition-all duration-300 hover:scale-105 hover:shadow-lg">
          Register Now
        </Button>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#000000f0] backdrop-blur-md border-t border-[#ffffff1a] z-50">
          <div className="flex flex-col py-4 px-6 space-y-4">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.path}>
                <button
                  className={`text-left [font-family:'Oxanium',Helvetica] font-normal text-base transition-colors duration-300 w-full ${
                    location === item.path 
                      ? 'text-[#edc84f] font-semibold' 
                      : 'text-white hover:text-[#edc84f]'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.text}
                </button>
              </Link>
            ))}
            <Button   onClick={handleRegisterClick}
 className="w-full h-10 mt-4 rounded-lg [font-family:'Oxanium',Helvetica] font-medium text-black text-base bg-[linear-gradient(180deg,rgba(237,200,79,1)_0%,rgba(199,156,39,1)_100%)] hover:scale-105 transition-all duration-300">
              Register Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
