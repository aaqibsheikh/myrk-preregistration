import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeaderSection } from "./sections/HeaderSection";
import { FooterSection } from "./sections/FooterSection";

export const GameplayPage = (): JSX.Element => {
  const gameplayElements = [
    {
      title: "Combat System",
      description: "Experience dynamic real-time combat with fluid animations and strategic depth.",
      image: "/figmaAssets/gau-1-1.png",
      features: ["Real-time combat mechanics", "Combo system", "Elemental magic", "Weapon mastery"]
    },
    {
      title: "World Exploration",
      description: "Traverse vast open worlds filled with secrets, dungeons, and hidden treasures.",
      image: "/figmaAssets/gau2-1.png",
      features: ["Open world design", "Hidden secrets", "Dynamic events", "Environmental puzzles"]
    },
    {
      title: "Character Development",
      description: "Shape your hero's destiny through choices, skills, and magical abilities.",
      image: "/figmaAssets/gau-1-1.png",
      features: ["Skill tree progression", "Equipment customization", "Moral choices", "Character builds"]
    }
  ];

  const mechanics = [
    {
      icon: "/figmaAssets/frame-2.svg",
      title: "Quest System",
      description: "Dynamic quests that adapt to your playstyle and choices"
    },
    {
      icon: "/figmaAssets/frame-3.svg",
      title: "Magic System",
      description: "Master elemental magic with complex spell combinations"
    },
    {
      icon: "/figmaAssets/frame-4.svg",
      title: "Social Features",
      description: "Guild system, trading, and cooperative adventures"
    },
    {
      icon: "/figmaAssets/frame-5.svg",
      title: "PvP Combat",
      description: "Competitive battles in designated arenas and territories"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <HeaderSection />
      
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
  );
};