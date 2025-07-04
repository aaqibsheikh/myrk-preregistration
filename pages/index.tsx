import React, { useRef } from 'react'
import Head from 'next/head'
import { HeaderSection } from '../components/sections/HeaderSection'
import { HeroSection } from '../components/sections/HeroSection'
import { GameFeaturesSection } from '../components/sections/GameFeaturesSection'
import { TrailerGameplaySection } from '../components/sections/TrailerGameplaySection'
import { ExclusiveRewardsSection } from '../components/sections/ExclusiveRewardsSection'
import { PreRegistrationSection } from '../components/sections/PreRegistrationSection'
import { CountdownTimerSection } from '../components/sections/CountdownTimerSection'
import { CommunityEngagementSection } from '../components/sections/CommunityEngagementSection'
import { StorylineSection } from '../components/sections/StorylineSection'
import { OptionalFeaturesSection } from '../components/sections/OptionalFeaturesSection'
import { FooterSection } from '../components/sections/FooterSection'

export default function Home() {
    const preRegRef = useRef<HTMLDivElement>(null);
    const scrollToPreRegister = () => {
    if (preRegRef.current) {
      preRegRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <Head>
        <title>MYRK - Epic Gaming Experience | Pre-Register Now</title>
        <meta name="description" content="Embark on an epic gaming journey with MYRK. Pre-register now to secure exclusive rewards and early access to the most anticipated game of the year." />
        <meta name="keywords" content="MYRK, gaming, pre-register, epic game, exclusive rewards, early access" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="MYRK - Epic Gaming Experience | Pre-Register Now" />
        <meta property="og:description" content="Embark on an epic gaming journey with MYRK. Pre-register now to secure exclusive rewards and early access to the most anticipated game of the year." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://myrk-game.com" />
        <meta property="og:image" content="https://myrk-game.com/og-image.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MYRK - Epic Gaming Experience | Pre-Register Now" />
        <meta name="twitter:description" content="Embark on an epic gaming journey with MYRK. Pre-register now to secure exclusive rewards and early access to the most anticipated game of the year." />
        <meta name="twitter:image" content="https://myrk-game.com/twitter-image.jpg" />
        
        <link rel="canonical" href="https://myrk-game.com" />
      </Head>
      
      <div className="min-h-screen bg-[#0a0a0a] text-white optimized-background animate-fade-in">
        <HeaderSection scrollToPreRegister={scrollToPreRegister} />

        <HeroSection scrollToPreRegister={scrollToPreRegister} />
        <GameFeaturesSection />
        <TrailerGameplaySection />
        <ExclusiveRewardsSection />
        <PreRegistrationSection ref={preRegRef} />
        <CountdownTimerSection />
        <CommunityEngagementSection />
        <StorylineSection />
        <OptionalFeaturesSection />
        <FooterSection />
      </div>
    </>
  )
}