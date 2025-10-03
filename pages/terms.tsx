import React from "react";
import Head from "next/head";
import Link from "next/link";
import { HeaderSection } from "../components/sections/HeaderSection";
import { FooterSection } from "../components/sections/FooterSection";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - MYRK: Echoes of the Forgotten</title>
        <meta name="description" content="Terms of Service for MYRK: Echoes of the Forgotten game. Read our terms and conditions for using our services." />
        <meta name="keywords" content="MYRK, terms of service, terms and conditions, game terms, user agreement" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://myrk-game.com/terms" />
      </Head>

      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <HeaderSection />
        
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 [font-family:'Oxanium',Helvetica] bg-gradient-to-r from-[#edc84f] to-[#ff6b6b] bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-gray-300 text-lg [font-family:'Oxanium',Helvetica]">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 [font-family:'Oxanium',Helvetica]">
            
            <section className="bg-[#ffffff1a] border border-[#ffffff33] rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#edc84f]">Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using MYRK: Echoes of the Forgotten ("the Game") and our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="bg-[#ffffff1a] border border-[#ffffff33] rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#edc84f]">Age Restrictions</h2>
              <p className="text-gray-300 leading-relaxed">
                Our games are not directed to children under 13. If you are under 18, you may only use our services with 
                parental permission. By using our services, you represent and warrant that you are at least 13 years old 
                and have the legal capacity to enter into this agreement.
              </p>
            </section>

            <section className="bg-[#ffffff1a] border border-[#ffffff33] rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#edc84f]">Use License</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the Game per device for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained in the Game</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="bg-[#ffffff1a] border border-[#ffffff33] rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#edc84f]">User Conduct</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You agree to use the Game and our services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Transmit any harmful, threatening, abusive, or harassing content</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Interfere with or disrupt the Game or servers</li>
                <li>Attempt to gain unauthorized access to any part of the Game</li>
              </ul>
            </section>

            <section className="bg-[#ffffff1a] border border-[#ffffff33] rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#edc84f]">Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Game, to understand our practices. By using our services, you consent to the collection and use of information in accordance with our Privacy Policy.
              </p>
            </section>

            <section className="bg-[#ffffff1a] border border-[#ffffff33] rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#edc84f]">Intellectual Property Rights</h2>
              <p className="text-gray-300 leading-relaxed">
                The Game and its original content, features, and functionality are and will remain the exclusive property of Penguin Pixel Works and its licensors. The Game is protected by copyright, trademark, and other laws. Our trademarks may not be used in connection with any product or service without our prior written consent.
              </p>
            </section>

            <section className="bg-[#ffffff1a] border border-[#ffffff33] rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#edc84f]">Disclaimer</h2>
              <p className="text-gray-300 leading-relaxed">
                The information on this Game is provided on an "as is" basis. To the fullest extent permitted by law, Penguin Pixel Works excludes all representations, warranties, conditions and terms relating to our Game and the use of this Game.
              </p>
            </section>

            <section className="bg-[#ffffff1a] border border-[#ffffff33] rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#edc84f]">Limitations</h2>
              <p className="text-gray-300 leading-relaxed">
                In no event shall Penguin Pixel Works or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the Game, even if Penguin Pixel Works or a Penguin Pixel Works authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section className="bg-[#ffffff1a] border border-[#ffffff33] rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#edc84f]">Termination</h2>
              <p className="text-gray-300 leading-relaxed">
                We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Game will cease immediately.
              </p>
            </section>

            <section className="bg-[#ffffff1a] border border-[#ffffff33] rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#edc84f]">Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section className="bg-[#ffffff1a] border border-[#ffffff33] rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#edc84f]">Contact Information</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us through our support channels.
              </p>
            </section>

          </div>

          {/* <div className="mt-12 text-center">
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#edc84f] to-[#ff6b6b] text-black font-semibold rounded-lg hover:from-[#d4a842] hover:to-[#e55a5a] transition-all duration-300 [font-family:'Oxanium',Helvetica]"
            >
              ← Back to Home
            </Link>
          </div> */}
        </div>

        <FooterSection />
      </div>
    </>
  );
}
