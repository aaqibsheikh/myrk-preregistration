import React, { useRef, useState } from "react";
import Head from "next/head";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { HeaderSection } from "../components/sections/HeaderSection";
import { FooterSection } from "../components/sections/FooterSection";

export default function Rewards() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [previewTitle, setPreviewTitle] = useState<string | null>(null);
  const exclusiveRewards = [
    {
      title: "Gold Starter Pack",
      description:
        "Begin your journey with 2,500 Gold—perfect for upgrades, crafting, and essential gear.",
      icon: "/rewards/myrk-gold-coin.png",
      rarity: "Premium",
      value: "$4.99 Value",
      unlocked: "Account Creation"
    },
    {
      title: "Gem Bundle",
      description:
        "Receive 200 Gems to summon companions, unlock boosts, and power up your adventure.",
      icon: "/rewards/gem.png",
      rarity: "Premium",
      value: "$9.99 Value",
      unlocked: "Account Creation"
    },
    {
      title: "Founder's Achievement",
      description:
        "A one-of-a-kind title and badge commemorating your place as an original MYRK adventurer.",
      icon: "/rewards/founder.png",
      rarity: "Unique",
      value: "Priceless",
      unlocked: "Early Access"
    },
    {
      title: "Echo Feast Pack",
      description:
        "50 rare meats to help level up your Echo companions—obtainable only through victory in battle.",
      icon: "/rewards/meat.png",
      rarity: "Legendary",
      value: "Exclusive",
      unlocked: "Launch Day"
    }
  ];
  

  // const milestones = [
  //   { count: "10K", reward: "Exclusive Weapon Gearfang Talon", achieved: true },
  //   { count: "25K", reward: "Exclusive Armor MagTech Aegis", achieved: true },
  //   { count: "50K", reward: "Exclusive Helm Shockspire Crown", achieved: true },
  //   { count: "100K", reward: "2500 Gold", achieved: false },
  //   {
  //     count: "250K",
  //     reward: "250 Gems + 50 Shards for Bruisic",
  //     achieved: false
  //   }
  // ];

  const milestones = [
    {
      count: "10K",
      reward: "Exclusive Weapon Gearfang Talon",
      achieved: true,
      image: "/rewards/gearfang-talon.png"
    },
    {
      count: "25K",
      reward: "Exclusive Armor MagTech Aegis",
      achieved: true,
      image: "/rewards/magtech-aegis.png"
    },
    {
      count: "50K",
      reward: "Exclusive Helm Shockspire Crown",
      achieved: true,
      image: "/rewards/shockspire-crown.png"
    },
    {
      count: "100K",
      reward: "2500 Gold",
      achieved: false,
      image: "/rewards/myrk-gold-coin.png"
    },
    {
      count: "250K",
      reward: "250 Gems + 50 Shards for Bruisic",
      achieved: false,
      image: "/rewards/premium-gem-and-bruisic-shard.png"
    }
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

      <div className="min-h-screen bg-[#0a0a0a] text-white optimized-background animate-fade-in">
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
            {/* <div className="bg-[#ffffff08] backdrop-blur-md border-[#edc84f40] rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-3xl [font-family:'Orbitron',Helvetica] font-normal text-[#edc84f] mb-2">
                Total Value: $149.94
              </p>
              <p className="text-lg [font-family:'Oxanium',Helvetica] text-gray-300">
                Completely FREE for pre-registered players
              </p>
            </div> */}
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
                    {/* <div
                      className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getRarityColor(
                        reward.rarity
                      )}`}
                    >
                      {reward.rarity}
                    </div> */}

                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ">
                      <img
                        className="w-16 h-16 transition-all duration-300 group-hover:brightness-110"
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
        {/* <section className="py-16 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e]">
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
                  className={`flex sm:items-center sm:flex-row flex-col sm:space-y-0 space-y-4 p-6 rounded-2xl border transition-all duration-300 ${
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
                    <div className="flex items-center space-x-10">
                      <div className="flex flex-col">
                        <h3
                          className={`text-xl [font-family:'Oxanium',Helvetica] font-semibold ${
                            milestone.achieved ? "text-[#edc84f]" : "text-white"
                          }`}
                        >
                          {milestone.count} Pre-Registrations
                        </h3>

                        <p className="text-sm text-gray-300 [font-family:'Oxanium',Helvetica]">
                          Unlocks:{" "}
                          <span className="text-white">{milestone.reward}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-10">
                    {milestone.image && (
                      <div
                        className="w-14 h-14 rounded-lg bg-[#1e1e1e] border border-[#ffffff20] flex items-center justify-center shadow-md cursor-pointer transition hover:ring-2 hover:ring-[#edc84f] hover:bg-[#2a2a2a]"
                        onClick={() => {
                          setPreviewImage(milestone.image);
                          setPreviewTitle(milestone.reward);
                        }}
                        title="Click to preview"
                      >
                        <img
                          src={milestone.image}
                          alt={milestone.reward}
                          className="max-w-[80%] max-h-[80%] object-contain filter drop-shadow-md"
                        />
                      </div>
                    )}
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
                </div>
              ))}
            </div>
          </div>
        </section> */}

 {/* Community Milestones */}
        <section className="py-16 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e] relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/3 left-1/6 w-40 h-40 bg-[#edc84f] rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/6 w-32 h-32 bg-[#c79c27] rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block p-1 rounded-full bg-gradient-to-r from-[#edc84f] to-[#c79c27] mb-6">
                <div className="bg-[#1a1a2e] rounded-full px-6 py-2">
                  <span className="text-sm font-semibold text-[#edc84f] [font-family:'Orbitron',Helvetica]">
                    COMMUNITY ACHIEVEMENTS
                  </span>
                </div>
              </div>
              
              <h2 className="text-4xl [font-family:'Orbitron',Helvetica] font-normal text-center text-white mb-4">
                Milestone Rewards
              </h2>
              <p className="text-lg [font-family:'Oxanium',Helvetica] font-medium text-gray-300 text-center mb-8">
                Unlock legendary treasures as our community grows stronger
              </p>
              
              {/* Progress overview */}
              <div className="bg-[#ffffff08] backdrop-blur-md border-[#edc84f40] rounded-2xl p-6 max-w-md mx-auto">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-400 [font-family:'Oxanium',Helvetica]">Community Progress</span>
                  <span className="text-sm text-[#edc84f] [font-family:'Oxanium',Helvetica] font-semibold">3 / 5 Unlocked</span>
                </div>
                <div className="w-full h-2 bg-[#ffffff10] rounded-full overflow-hidden">
                  <div className="h-full w-3/5 bg-gradient-to-r from-[#edc84f] to-[#c79c27] rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-2xl border transition-all duration-500 hover:scale-105 group cursor-pointer ${
                    milestone.achieved
                      ? "bg-gradient-to-br from-[#edc84f15] via-[#edc84f08] to-[#c79c2708] border-[#edc84f40] shadow-lg shadow-[#edc84f]/20"
                      : "bg-gradient-to-br from-[#ffffff08] via-[#ffffff05] to-[#ffffff03] border-[#ffffff15]"
                  }`}
                  onClick={() => {
                    if (milestone.image) {
                      setPreviewImage(milestone.image);
                      setPreviewTitle(milestone.reward);
                    }
                  }}
                >
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                    <img
                      src={milestone.image}
                      alt={milestone.reward}
                      className="w-full h-full object-cover scale-150 blur-sm"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col">
                    {/* Header with Count and Status */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold [font-family:'Orbitron',Helvetica] ${
                          milestone.achieved
                            ? "bg-gradient-to-r from-[#edc84f] to-[#c79c27] text-black"
                            : "bg-[#ffffff15] text-gray-400"
                        }`}
                      >
                        {milestone.achieved ? "✓" : milestone.count}
                      </div>

                      <div
                        className={`px-3 py-1 rounded-full text-xs font-semibold [font-family:'Oxanium',Helvetica] ${
                          milestone.achieved
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                        }`}
                      >
                        {milestone.achieved ? "Achieved" : "Locked"}
                      </div>
                    </div>

                    {/* Central Reward Image */}
                    <div className="flex-grow flex items-center justify-center mb-4">
                      <div className="w-20 h-20 rounded-xl bg-[#000000aa] backdrop-blur-sm border border-[#ffffff20] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={milestone.image}
                          alt={milestone.reward}
                          className="max-w-[70%] max-h-[70%] object-contain filter drop-shadow-lg"
                        />
                      </div>
                    </div>

                    {/* Title and Description */}
                    <div className="text-center">
                      <h3
                        className={`text-lg [font-family:'Orbitron',Helvetica] font-semibold mb-2 ${
                          milestone.achieved ? "text-[#edc84f]" : "text-white"
                        }`}
                      >
                        {milestone.count} Goal
                      </h3>

                      <p className="text-sm text-gray-300 [font-family:'Oxanium',Helvetica] leading-relaxed">
                        {milestone.reward}
                      </p>
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-4 pt-3 border-t border-[#ffffff10]">
                      <div className="w-full h-1 bg-[#ffffff10] rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all duration-1000 ${
                            milestone.achieved
                              ? "w-full bg-gradient-to-r from-[#edc84f] to-[#c79c27]"
                              : "w-0 bg-gray-400"
                          }`}
                        ></div>
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#edc84f10] to-[#c79c2710] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  </div>

                  {/* Glow Effect */}
                  {milestone.achieved && (
                    <div className="absolute inset-0 rounded-2xl shadow-lg shadow-[#edc84f]/20 group-hover:shadow-[#edc84f]/40 transition-shadow duration-300"></div>
                  )}
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

        {previewImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-2 sm:p-8 overflow-y-auto">
            <div className="relative bg-transparent w-full max-w-xl mx-auto flex flex-col items-center">
              <button
                className="absolute top-2 right-2 text-white text-3xl bg-[#222] rounded-full p-3 hover:bg-[#edc84f] hover:text-black transition z-10"
                style={{ touchAction: "manipulation" }}
                onClick={() => {
                  setPreviewImage(null);
                  setPreviewTitle(null);
                }}
                title="Close"
              >
                &times;
              </button>
              <img
                src={previewImage}
                alt={previewTitle || "Preview"}
                className="w-full max-w-[90vw] max-h-[70vh] sm:max-h-[80vh] rounded-xl shadow-2xl border-2 border-[#edc84f] object-contain bg-[#111]"
                style={{ marginTop: "2.5rem" }}
              />
              {previewTitle && (
                <div className="mt-4 text-center text-base sm:text-lg text-[#edc84f] font-semibold [font-family:'Oxanium',Helvetica] drop-shadow-lg">
                  {previewTitle}
                </div>
              )}
            </div>
          </div>
        )}
        <FooterSection />
      </div>
    </>
  );
}
