import React, { useRef } from "react";
import Head from "next/head";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { HeaderSection } from "../components/sections/HeaderSection";
import { FooterSection } from "../components/sections/FooterSection";

export default function Community() {
  const socialPlatforms = [
    {
      name: "Discord",
      description:
        "Join our vibrant Discord community for real-time discussions, events, and exclusive content.",
      members: "50K+ Members",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/discord.svg",
      link: "https://discord.gg/RjkvPyrT9m",
      color: "from-[#5865f2] to-[#4752c4]"
    },
    {
      name: "X (Twitter)",
      description:
        "Follow us for the latest updates, behind-the-scenes content, and community highlights.",
      members: "25K+ Followers",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg",
      link: "https://x.com/PenguinPWS",
      color: "from-[#000000] to-[#333333]"
    },
    {
      name: "YouTube",
      description:
        "Watch gameplay videos, developer diaries, and community showcases on our channel.",
      members: "30K+ Subscribers",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg",
      link: "https://www.youtube.com/@penguinpixelworks",
      color: "from-[#ff0000] to-[#cc0000]"
    },
    {
      name: "Instagram",
      description:
        "Visual updates, concept art, and behind-the-scenes glimpses of MYRK's development.",
      members: "20K+ Followers",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg",
      link: "https://www.instagram.com/penguinpixelworks/",
      color: "from-[#e4405f] to-[#c13584]"
    },
    {
      name: "Facebook",
      description:
        "Follow us for community events and game updates directly on your feed.",
      members: "15K+ Followers",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg",
      link: "https://www.facebook.com/MYRK.EotF",
      color: "from-[#3b5998] to-[#1c3b7d]"
    },
    {
      name: "TikTok",
      description:
        "Quick gameplay clips, developer insights, and community challenges in short-form content.",
      members: "40K+ Followers",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tiktok.svg",
      link: "https://www.tiktok.com/@myrkechoesoftheforgotten",
      color: "from-[#000000] to-[#333333]"
    }
  ];

  const communityFeatures = [
    {
      title: "Clan System",
      description:
        "Form alliances with other players, participate in clan quests and bosses.",
      icon: "/figmaAssets/frame-2.svg"
    },
    {
      title: "Player Events",
      description:
        "Join seasonal events, tournaments, and community challenges with exclusive rewards.",
      icon: "/figmaAssets/frame-3.svg"
    },
    {
      title: "Content Creation",
      description:
        "Share your adventures through screenshots, videos, and fan art with the community.",
      icon: "/figmaAssets/frame-4.svg"
    },
    {
      title: "Developer Interaction",
      description:
        "Direct communication with our development team through AMAs and feedback sessions.",
      icon: "/figmaAssets/frame-5.svg"
    }
  ];

  const stats = [
    { number: "75K+", label: "Pre-Registered Players" },
    { number: "12", label: "Active Communities" },
    { number: "500+", label: "Daily Discussions" },
    { number: "50+", label: "Community Events" }
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
        <title>MYRK Community - Join Our Gaming Community & Connect</title>
        <meta
          name="description"
          content="Join the MYRK gaming community! Connect with fellow players, share strategies, participate in events, and stay updated with the latest news and announcements."
        />
        <meta
          name="keywords"
          content="MYRK community, gaming community, player connection, game events, news updates, discord community"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph tags */}
        <meta
          property="og:title"
          content="MYRK Community - Join Our Gaming Community & Connect"
        />
        <meta
          property="og:description"
          content="Join the MYRK gaming community! Connect with fellow players, share strategies, participate in events, and stay updated with the latest news and announcements."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://myrk-game.com/community" />
        <meta
          property="og:image"
          content="https://myrk-game.com/community-og-image.jpg"
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="MYRK Community - Join Our Gaming Community & Connect"
        />
        <meta
          name="twitter:description"
          content="Join the MYRK gaming community! Connect with fellow players, share strategies, participate in events, and stay updated with the latest news and announcements."
        />
        <meta
          name="twitter:image"
          content="https://myrk-game.com/community-twitter-image.jpg"
        />

        <link rel="canonical" href="https://myrk-game.com/community" />
      </Head>

      <div className="min-h-screen bg-[#0a0a0a] text-white optimized-background animate-fade-in">
        <HeaderSection scrollToPreRegister={scrollToPreRegister} />

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0a0a0a] opacity-50"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl [font-family:'Orbitron',Helvetica] font-normal bg-gradient-to-b from-[#edc84f] via-[#f4d966] to-[#c79c27] bg-clip-text text-transparent mb-6 drop-shadow-[0_0_20px_rgba(237,200,79,0.5)]">
              Community
            </h1>
            <p className="text-xl md:text-2xl [font-family:'Oxanium',Helvetica] font-medium text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join thousands of adventurers in the ever-growing MYRK community
            </p>
          </div>
        </section>

        {/* Community Stats */}
        {/* <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl [font-family:'Orbitron',Helvetica] font-normal bg-gradient-to-b from-[#edc84f] to-[#c79c27] bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 [font-family:'Oxanium',Helvetica] font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Social Platforms */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl [font-family:'Orbitron',Helvetica] font-normal text-center text-white mb-12">
              Join Our Communities
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {socialPlatforms.map((platform, index) => (
                <Card
                  key={index}
                  className="bg-[#ffffff08] backdrop-blur-md border-[#ffffff15] rounded-2xl hover:bg-[#ffffff15] hover:border-[#edc84f40] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#edc84f]/30 group cursor-pointer"
                  style={{
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)"
                  }}
                  onClick={() => window.open(platform.link, "_blank")}
                >
                  <CardContent className="p-6 h-full flex flex-col">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-r ${platform.color} flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#edc84f]/50`}
                    >
                      <img
                        className="w-6 h-6 transition-all duration-300 group-hover:brightness-110 filter invert"
                        alt={platform.name}
                        src={platform.icon}
                      />
                    </div>

                    <h3 className="text-2xl text-white font-normal [font-family:'Oxanium',Helvetica] mb-3 transition-all duration-300 group-hover:text-[#edc84f] group-hover:drop-shadow-[0_0_10px_rgba(237,200,79,0.5)]">
                      {platform.name}
                    </h3>

                    <p className="text-gray-300 text-sm font-normal [font-family:'Oxanium',Helvetica] leading-relaxed transition-all duration-300 flex-grow group-hover:text-gray-200 mb-4">
                      {platform.description}
                    </p>

                    <div className="flex justify-between items-center">
                      {/* <span className="text-[#edc84f] [font-family:'Oxanium',Helvetica] font-semibold">
                        {platform.members}
                      </span> */}
                      <Button className="text-xs px-3 py-1 h-auto bg-gradient-to-r from-[#edc84f] to-[#c79c27] text-black hover:scale-105 transition-all duration-300">
                        Join Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Community Features */}
        <section className="py-16 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl [font-family:'Orbitron',Helvetica] font-normal text-center text-white mb-12">
              Community Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {communityFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-[#ffffff08] backdrop-blur-md border-[#ffffff15] rounded-2xl hover:bg-[#ffffff15] hover:border-[#edc84f40] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#edc84f]/30 group"
                  style={{
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)"
                  }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-[linear-gradient(180deg,rgba(237,200,79,1)_0%,rgba(199,156,39,1)_100%)] flex items-center justify-center mb-4 mx-auto transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#edc84f]/50">
                      <img
                        className="w-5 h-5 transition-all duration-300 group-hover:brightness-110"
                        alt={feature.title}
                        src={feature.icon}
                      />
                    </div>
                    <h3 className="text-xl text-white font-normal [font-family:'Oxanium',Helvetica] mb-3 transition-all duration-300 group-hover:text-[#edc84f]">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm font-normal [font-family:'Oxanium',Helvetica] leading-relaxed transition-all duration-300 group-hover:text-gray-200">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl [font-family:'Orbitron',Helvetica] font-normal text-white mb-6">
              Stay Connected
            </h2>
            <p className="text-xl [font-family:'Oxanium',Helvetica] font-medium text-gray-300 mb-8">
              Subscribe to our newsletter for exclusive updates and community
              events
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-[#ffffff08] border border-[#ffffff15] text-white placeholder-gray-400 [font-family:'Oxanium',Helvetica] focus:border-[#edc84f] focus:outline-none transition-all duration-300"
              />
              <Button className="px-6 py-3 rounded-lg bg-[linear-gradient(180deg,rgba(237,200,79,1)_0%,rgba(199,156,39,1)_100%)] [font-family:'Oxanium',Helvetica] font-semibold text-black hover:scale-105 transition-all duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </section>

        <FooterSection />
      </div>
    </>
  );
}
