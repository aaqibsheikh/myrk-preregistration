import React, { useRef } from "react";
import Head from "next/head";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { HeaderSection } from "../components/sections/HeaderSection";
import { FooterSection } from "../components/sections/FooterSection";

export default function Rewards() {
  const exclusiveRewards = [
    {
      title: "Legendary Weapon Pack",
      description:
        "Exclusive mythical weapons only available to pre-registered players",
      icon: "/figmaAssets/frame-4.svg",
      rarity: "Legendary",
      value: "$29.99 Value",
      unlocked: "Launch Day"
    },
    {
      title: "Ancient Armor Set",
      description:
        "Complete armor collection with mystical enchantments and unique appearance",
      icon: "/figmaAssets/frame-3.svg",
      rarity: "Epic",
      value: "$19.99 Value",
      unlocked: "Pre-Registration"
    },
    {
      title: "Celestial Mount",
      description:
        "Soar through the skies on this majestic creature with ethereal wings",
      icon: "/figmaAssets/frame-5.svg",
      rarity: "Mythic",
      value: "$39.99 Value",
      unlocked: "Beta Access"
    },
    {
      title: "Founder's Title",
      description:
        "Display your status as an original MYRK adventurer with this prestigious title",
      icon: "/figmaAssets/frame-6.svg",
      rarity: "Unique",
      value: "Priceless",
      unlocked: "Early Access"
    },
    {
      title: "Premium Currency",
      description:
        "1000 Myrk Crystals to enhance your gameplay experience from day one",
      icon: "/figmaAssets/frame-7.svg",
      rarity: "Premium",
      value: "$9.99 Value",
      unlocked: "Account Creation"
    },
    {
      title: "Exclusive Emotes",
      description:
        "Special celebration animations and gestures unique to pre-registered players",
      icon: "/figmaAssets/frame-2.svg",
      rarity: "Rare",
      value: "$14.99 Value",
      unlocked: "Community Goal"
    }
  ];

  const milestones = [
    { count: "10K", reward: "Exclusive Weapon Skin", achieved: true },
    { count: "25K", reward: "Legendary Mount", achieved: true },
    { count: "50K", reward: "Beta Access", achieved: true },
    { count: "100K", reward: "Special Event", achieved: false },
    { count: "250K", reward: "Bonus Chapter", achieved: false }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Legendary":
        return "from-[#ff6b35] to-[#f7931e]";
      case "Mythic":
        return "from-[#9d4edd] to-[#c77dff]";
      case "Epic":
        return "from-[#3d5a80] to-[#98c1d9]";
      case "Rare":
        return "from-[#2d6a4f] to-[#52b788]";
      case "Premium":
        return "from-[#edc84f] to-[#c79c27]";
      case "Unique":
        return "from-[#e63946] to-[#f77f00]";
      default:
        return "from-[#6c757d] to-[#495057]";
    }
  };

  const preRegRef = useRef<HTMLDivElement>(null);
  const scrollToPreRegister = () => {
    if (preRegRef.current) {
      preRegRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>
          MYRK Rewards - Exclusive Pre-Registration Benefits & Items
        </title>
        <meta
          name="description"
          content="Unlock exclusive MYRK rewards through pre-registration including legendary weapons, rare items, early access benefits, and special in-game content."
        />
        <meta
          name="keywords"
          content="MYRK rewards, pre-registration benefits, exclusive items, legendary weapons, early access, in-game rewards"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph tags */}
        <meta
          property="og:title"
          content="MYRK Rewards - Exclusive Pre-Registration Benefits & Items"
        />
        <meta
          property="og:description"
          content="Unlock exclusive MYRK rewards through pre-registration including legendary weapons, rare items, early access benefits, and special in-game content."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://myrk-game.com/rewards" />
        <meta
          property="og:image"
          content="https://myrk-game.com/rewards-og-image.jpg"
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="MYRK Rewards - Exclusive Pre-Registration Benefits & Items"
        />
        <meta
          name="twitter:description"
          content="Unlock exclusive MYRK rewards through pre-registration including legendary weapons, rare items, early access benefits, and special in-game content."
        />
        <meta
          name="twitter:image"
          content="https://myrk-game.com/rewards-twitter-image.jpg"
        />

        <link rel="canonical" href="https://myrk-game.com/rewards" />
      </Head>

      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <HeaderSection scrollToPreRegister={scrollToPreRegister} />

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0a0a0a] opacity-50"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl [font-family:'Orbitron',Helvetica] font-normal bg-gradient-to-b from-[#edc84f] via-[#f4d966] to-[#c79c27] bg-clip-text text-transparent mb-6 drop-shadow-[0_0_20px_rgba(237,200,79,0.5)]">
              Exclusive Rewards
            </h1>
            <p className="text-xl md:text-2xl [font-family:'Oxanium',Helvetica] font-medium text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Unlock incredible rewards by pre-registering for MYRK today
            </p>
            <div className="bg-[#ffffff08] backdrop-blur-md border-[#edc84f40] rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-3xl [font-family:'Orbitron',Helvetica] font-normal text-[#edc84f] mb-2">
                Total Value: $149.94
              </p>
              <p className="text-lg [font-family:'Oxanium',Helvetica] text-gray-300">
                Completely FREE for pre-registered players
              </p>
            </div>
          </div>
        </section>

        {/* Exclusive Rewards Grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {exclusiveRewards.map((reward, index) => (
                <Card
                  key={index}
                  className="bg-[#ffffff08] backdrop-blur-md border-[#ffffff15] rounded-2xl hover:bg-[#ffffff15] hover:border-[#edc84f40] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#edc84f]/30 group overflow-hidden"
                  style={{
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)"
                  }}
                >
                  <CardContent className="p-6 h-full flex flex-col relative">
                    {/* Rarity Badge */}
                    <div
                      className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getRarityColor(
                        reward.rarity
                      )}`}
                    >
                      {reward.rarity}
                    </div>

                    <div className="w-16 h-16 rounded-xl bg-[linear-gradient(180deg,rgba(237,200,79,1)_0%,rgba(199,156,39,1)_100%)] flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#edc84f]/50">
                      <img
                        className="w-6 h-6 transition-all duration-300 group-hover:brightness-110"
                        alt={reward.title}
                        src={reward.icon}
                      />
                    </div>

                    <h3 className="text-xl text-white font-normal [font-family:'Oxanium',Helvetica] mb-3 transition-all duration-300 group-hover:text-[#edc84f] group-hover:drop-shadow-[0_0_10px_rgba(237,200,79,0.5)]">
                      {reward.title}
                    </h3>

                    <p className="text-gray-300 text-sm font-normal [font-family:'Oxanium',Helvetica] leading-relaxed transition-all duration-300 flex-grow group-hover:text-gray-200 mb-4">
                      {reward.description}
                    </p>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400 [font-family:'Oxanium',Helvetica]">
                          Value:
                        </span>
                        <span className="text-sm text-[#edc84f] [font-family:'Oxanium',Helvetica] font-semibold">
                          {reward.value}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400 [font-family:'Oxanium',Helvetica]">
                          Unlocked:
                        </span>
                        <span className="text-sm text-green-400 [font-family:'Oxanium',Helvetica]">
                          {reward.unlocked}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Community Milestones */}
        <section className="py-16 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl [font-family:'Orbitron',Helvetica] font-normal text-center text-white mb-4">
              Community Milestones
            </h2>
            <p className="text-lg [font-family:'Oxanium',Helvetica] font-medium text-gray-300 text-center mb-12">
              Unlock additional rewards as our community grows
            </p>

            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center p-6 rounded-2xl border transition-all duration-300 ${
                    milestone.achieved
                      ? "bg-[#edc84f08] border-[#edc84f40] shadow-lg shadow-[#edc84f]/20"
                      : "bg-[#ffffff08] border-[#ffffff15]"
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold [font-family:'Orbitron',Helvetica] mr-6 ${
                      milestone.achieved
                        ? "bg-gradient-to-r from-[#edc84f] to-[#c79c27] text-black"
                        : "bg-[#ffffff15] text-gray-400"
                    }`}
                  >
                    {milestone.achieved ? "✓" : milestone.count}
                  </div>

                  <div className="flex-grow">
                    <h3
                      className={`text-xl [font-family:'Oxanium',Helvetica] font-semibold mb-1 ${
                        milestone.achieved ? "text-[#edc84f]" : "text-white"
                      }`}
                    >
                      {milestone.count} Pre-Registrations
                    </h3>
                    <p className="text-gray-300 [font-family:'Oxanium',Helvetica]">
                      Unlocks: {milestone.reward}
                    </p>
                  </div>

                  <div
                    className={`px-4 py-2 rounded-full text-sm font-semibold [font-family:'Oxanium',Helvetica] ${
                      milestone.achieved
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                    }`}
                  >
                    {milestone.achieved ? "Achieved" : "Locked"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl [font-family:'Orbitron',Helvetica] font-normal text-white mb-6">
              Claim Your Rewards Today
            </h2>
            <p className="text-xl [font-family:'Oxanium',Helvetica] font-medium text-gray-300 mb-8">
              Pre-register now to secure all exclusive rewards worth $149.94 -
              completely free
            </p>
            <Button className="w-[300px] h-[60px] rounded-xl shadow-[0px_0px_30px_#8b451380] border-0 border-none bg-[linear-gradient(180deg,rgba(237,200,79,1)_0%,rgba(199,156,39,1)_100%)] [font-family:'Oxanium',Helvetica] font-semibold text-black text-xl hover:scale-105 hover:shadow-[0px_0px_40px_#edc84f80] transition-all duration-300 hover:brightness-110">
              <img
                className="w-[25px] h-5 mr-2 transition-transform duration-300 group-hover:scale-110"
                alt="Frame"
                src="/figmaAssets/frame-1.svg"
              />
              Pre-Register Now
            </Button>
          </div>
        </section>

        <FooterSection />
      </div>
    </>
  );
}
