import React, { useRef } from "react";
import Head from 'next/head'
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { HeaderSection } from "../components/sections/HeaderSection";
import { FooterSection } from "../components/sections/FooterSection";

export default function Gameplay() {
  const gameplayElements = [
    {
      title: "Combat System",
      description: " Engage in strategic turn-based battles where your Echo Companions fight alongside you using elemental power and tactical synergy.",
      image: "/figmaAssets/gau-1-1.png",
      features: ["Turn-based combat with tactical depth", "Echo Companion command system", "Elemental affinity & synergy effects", "Unlockable abilities and skill combos"]
    },
    {
      title: "World Exploration",
      description: "Navigate a 1:1 GPS-based world where real locations transform into legendary zones filled with danger, discovery, and adventure.",
      image: "/figmaAssets/gau2-1.png",
      features: ["Fortress outposts", "Astral Gate boss battles", "Discover NPC quests", "Elemental Echo encounters"]
    },
    {
      title: "Character Development",
      description: "Shape your hero’s destiny through a wide range of equipment and companions.",
      image: "/figmaAssets/brutoxar.png",
      features: ["Echo Companion progression", "Equipment loadout", "Cosmetic customization", "Build versatility"]
    }
  ];

  const mechanics = [
    {
      icon: "/figmaAssets/frame-2.svg",
      title: "Quest System",
      description: "Complete daily, weekly, and world quests to grow your legacy."
    },
    {
      icon: "/figmaAssets/frame-3.svg",
      title: "Magic System",
      description: "Master elemental magic through the unique powers of your Echo companions."
    },
    {
      icon: "/figmaAssets/frame-4.svg",
      title: "Social Features",
      description: "Join clans, battle bosses, and chat with allies."
    },
    {
      icon: "/figmaAssets/frame-5.svg",
      title: "Companion Mastery",
      description: "Summon companions, level them up, and unlock powerful evolutions."
    }
  ];

  const preRegRef = useRef<HTMLDivElement>(null);
  const scrollToPreRegister = () => {
    if (preRegRef.current) {
      preRegRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>MYRK Gameplay - Immersive Gaming Experience & Trailers</title>
        <meta name="description" content="Experience MYRK's captivating gameplay through trailers, gameplay videos, and in-depth looks at combat mechanics, exploration, and adventure elements." />
        <meta name="keywords" content="MYRK gameplay, game trailers, combat mechanics, exploration, adventure, gaming experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="MYRK Gameplay - Immersive Gaming Experience & Trailers" />
        <meta property="og:description" content="Experience MYRK's captivating gameplay through trailers, gameplay videos, and in-depth looks at combat mechanics, exploration, and adventure elements." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://myrk-game.com/gameplay" />
        <meta property="og:image" content="https://myrk-game.com/gameplay-og-image.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MYRK Gameplay - Immersive Gaming Experience & Trailers" />
        <meta name="twitter:description" content="Experience MYRK's captivating gameplay through trailers, gameplay videos, and in-depth looks at combat mechanics, exploration, and adventure elements." />
        <meta name="twitter:image" content="https://myrk-game.com/gameplay-twitter-image.jpg" />
        
        <link rel="canonical" href="https://myrk-game.com/gameplay" />
      </Head>
      
      <div className="min-h-screen bg-[#0a0a0a] text-white optimized-background animate-fade-in">
        <HeaderSection scrollToPreRegister={scrollToPreRegister} />
     {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0a0a0a] opacity-50"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl [font-family:'Orbitron',Helvetica] font-normal bg-gradient-to-b from-[#edc84f] via-[#f4d966] to-[#c79c27] bg-clip-text text-transparent mb-6 drop-shadow-[0_0_20px_rgba(237,200,79,0.5)]">
            Gameplay
          </h1>
          <p className="text-xl md:text-2xl [font-family:'Oxanium',Helvetica] font-medium text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in rich gameplay mechanics designed for endless adventure
          </p>
        </div>
      </section>

      {/* Core Gameplay Elements */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl [font-family:'Orbitron',Helvetica] font-normal text-center text-white mb-12">
            Core Gameplay Elements
          </h2>
          
          <div className="space-y-16">
            {gameplayElements.map((element, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="flex-1">
                  <div className="relative w-full max-w-md mx-auto">
                    <img
                      className="w-full h-80 object-contain rounded-2xl"
                      alt={element.title}
                      src={element.image}
                      style={{ filter: 'drop-shadow(0 0 20px rgba(237,200,79,0.3))' }}
                    />
                  </div>
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl [font-family:'Orbitron',Helvetica] font-normal text-white mb-4 bg-gradient-to-r from-[#edc84f] to-[#c79c27] bg-clip-text text-transparent">
                    {element.title}
                  </h3>
                  <p className="text-lg [font-family:'Oxanium',Helvetica] font-medium text-gray-300 mb-6 leading-relaxed">
                    {element.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {element.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-[#edc84f] rounded-full mr-3"></div>
                        <span className="text-sm [font-family:'Oxanium',Helvetica] text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Mechanics */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl [font-family:'Orbitron',Helvetica] font-normal text-center text-white mb-12">
            Advanced Mechanics
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mechanics.map((mechanic, index) => (
              <Card
                key={index}
                className="bg-[#ffffff08] backdrop-blur-md border-[#ffffff15] rounded-2xl hover:bg-[#ffffff15] hover:border-[#edc84f40] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#edc84f]/30 group"
                style={{ 
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)'
                }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-[linear-gradient(180deg,rgba(237,200,79,1)_0%,rgba(199,156,39,1)_100%)] flex items-center justify-center mb-4 mx-auto transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#edc84f]/50">
                    <img
                      className="w-5 h-5 transition-all duration-300 group-hover:brightness-110"
                      alt={mechanic.title}
                      src={mechanic.icon}
                    />
                  </div>
                  <h3 className="text-xl text-white font-normal [font-family:'Oxanium',Helvetica] mb-3 transition-all duration-300 group-hover:text-[#edc84f]">
                    {mechanic.title}
                  </h3>
                  <p className="text-gray-300 text-sm font-normal [font-family:'Oxanium',Helvetica] leading-relaxed transition-all duration-300 group-hover:text-gray-200">
                    {mechanic.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gameplay Video Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl [font-family:'Orbitron',Helvetica] font-normal text-white mb-6">
            Watch Gameplay in Action
          </h2>
          <p className="text-xl [font-family:'Oxanium',Helvetica] font-medium text-gray-300 mb-8">
            Experience the magic and adventure of MYRK through our gameplay trailer
          </p>
          
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-[linear-gradient(180deg,rgba(237,200,79,1)_0%,rgba(199,156,39,1)_100%)] flex items-center justify-center mb-4 mx-auto hover:scale-110 transition-all duration-300 cursor-pointer">
                <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-gray-400 [font-family:'Oxanium',Helvetica]">Gameplay Trailer Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

        <FooterSection />
      </div>
    </>
  )
}