import React, { useRef } from "react";
import Head from 'next/head'
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { HeaderSection } from "../components/sections/HeaderSection";
import { FooterSection } from "../components/sections/FooterSection";

export default function Features() {
  const features = [
    {
      title: "Epic Quests",
      // details: "Embark on legendary adventures across mystical realms filled with ancient mysteries and forgotten treasures.",
      icon: "/figmaAssets/frame-2.svg",
      description: "Uncover ancient secrets through immersive story quests that span both a rich fantasy campaign and the real world around you. Encounter NPCs across Gaia who offer quests, lore, and challenges that bring the world of MYRK to life wherever you go."
    },
    {
      title: "Character Progression",
      // details: "Develop your unique hero through skill trees, equipment upgrades, and magical enhancements.",
      icon: "/figmaAssets/frame-3.svg",
      description: "Develop your unique hero through equipment upgrades and magical enhancements. Customize your appearance with a wide range of styles and cosmetics available through our in-game marketplace."
    },
    {
      title: "Elemental Echoes",
      // details: "Battle legendary beasts and creatures from ancient folklore in stunning environments.",
      icon: "/figmaAssets/frame-4.svg",
      description: "Discover and battle Echoes—creatures born of elemental chaos, each shaped by the fractured world of Gaia. Harness their power or face their wrath, as each Echo possesses unique abilities, affinities, and combat behaviors that demand strategy and adaptation."
    },
    {
      title: "Clan System",
      // details: "Explore breathtaking worlds filled with magic, wonder, and hidden secrets waiting to be discovered.",
      icon: "/figmaAssets/frame-5.svg",
      description: "Create a clan with fellow Scions, assign roles, and level up together as you climb the clan leaderboard.Complete clan quests and face powerful clan bosses in battles that test your teamwork and strategy."
    },
    {
      title: "Cooperative Gameplay",
      // details: "Team up with friends to tackle challenging dungeons and epic boss battles together.",
      icon: "/figmaAssets/frame-6.svg",
      description: "Team up with friends to take on challenging fortresses and epic gate boss battles across Gaia. Form a clan or party to rally allies and conquer these legendary encounters together."
    },
    {
      title: "Dynamic Quest System",
      // details: "Create powerful weapons, armor, and magical items using resources found throughout your journey.",
      icon: "/figmaAssets/frame-7.svg",
      description: "Stay engaged with daily and weekly quests, world-based NPC missions, and exclusive clan objectives. Whether you're exploring Gaia solo or with allies, there's always a new challenge waiting to earn rewards and advance your legend."
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
        <title>MYRK Features - Epic Game Mechanics & Combat System</title>
        <meta name="description" content="Discover MYRK's innovative game features including advanced combat systems, character customization, multiplayer modes, and immersive gameplay mechanics." />
        <meta name="keywords" content="MYRK features, game mechanics, combat system, character customization, multiplayer, gameplay" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="MYRK Features - Epic Game Mechanics & Combat System" />
        <meta property="og:description" content="Discover MYRK's innovative game features including advanced combat systems, character customization, multiplayer modes, and immersive gameplay mechanics." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://myrk-game.com/features" />
        <meta property="og:image" content="https://myrk-game.com/features-og-image.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MYRK Features - Epic Game Mechanics & Combat System" />
        <meta name="twitter:description" content="Discover MYRK's innovative game features including advanced combat systems, character customization, multiplayer modes, and immersive gameplay mechanics." />
        <meta name="twitter:image" content="https://myrk-game.com/features-twitter-image.jpg" />
        
        <link rel="canonical" href="https://myrk-game.com/features" />
      </Head>
      
      <div className="min-h-screen bg-[#0a0a0a] text-white optimized-background animate-fade-in">
        <HeaderSection scrollToPreRegister={scrollToPreRegister} />
        
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0a0a0a] opacity-50"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl [font-family:'Orbitron',Helvetica] font-normal bg-gradient-to-b from-[#edc84f] via-[#f4d966] to-[#c79c27] bg-clip-text text-transparent mb-6 drop-shadow-[0_0_20px_rgba(237,200,79,0.5)]">
            Game Features
          </h1>
          <p className="text-xl md:text-2xl [font-family:'Oxanium',Helvetica] font-medium text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the epic features that make MYRK an unforgettable gaming experience
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-[#ffffff08] backdrop-blur-md border-[#ffffff15] rounded-2xl h-auto hover:bg-[#ffffff15] hover:border-[#edc84f40] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#edc84f]/30 group"
                style={{ 
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)'
                }}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="w-16 h-16 rounded-xl bg-[linear-gradient(180deg,rgba(237,200,79,1)_0%,rgba(199,156,39,1)_100%)] flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#edc84f]/50">
                    <img
                      className="w-6 h-6 transition-all duration-300 group-hover:brightness-110"
                      alt={feature.title}
                      src={feature.icon}
                    />
                  </div>

                  <h3 className="text-2xl text-white font-normal [font-family:'Oxanium',Helvetica] mb-4 transition-all duration-300 group-hover:text-[#edc84f] group-hover:drop-shadow-[0_0_10px_rgba(237,200,79,0.5)]">
                    {feature.title}
                  </h3>

                  <p className="text-gray-300 text-base font-normal [font-family:'Oxanium',Helvetica] leading-relaxed transition-all duration-300 flex-grow group-hover:text-gray-200 mb-4">
                    {feature.description}
                  </p>

                  {/* <p className="text-gray-400 text-sm font-normal [font-family:'Oxanium',Helvetica] leading-relaxed transition-all duration-300 group-hover:text-gray-300">
                    {feature.details}
                  </p> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl [font-family:'Orbitron',Helvetica] font-normal text-white mb-6">
            Ready to Begin Your Quest?
          </h2>
          <p className="text-xl [font-family:'Oxanium',Helvetica] font-medium text-gray-300 mb-8">
            Join thousands of adventurers and be among the first to experience MYRK
          </p>
          <Button 
            onClick={() => window.location.href = '/#register'}
            className="w-full max-w-[300px] h-[50px] sm:h-[60px] rounded-xl shadow-[0px_0px_30px_#8b451380] border-0 border-none bg-[linear-gradient(180deg,rgba(237,200,79,1)_0%,rgba(199,156,39,1)_100%)] [font-family:'Oxanium',Helvetica] font-semibold text-black text-lg sm:text-xl hover:scale-105 hover:shadow-[0px_0px_40px_#edc84f80] transition-all duration-300 hover:brightness-110"
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


        <FooterSection />
      </div>
    </>
  )
}