import React from "react";
import Head from "next/head";
import Link from "next/link";
import { HeaderSection } from "../components/sections/HeaderSection";
import { FooterSection } from "../components/sections/FooterSection";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - MYRK: Echoes of the Forgotten</title>
        <meta name="description" content="Privacy Policy for MYRK: Echoes of the Forgotten game. Learn how we collect, use, and protect your personal information." />
        <meta name="keywords" content="MYRK, privacy policy, data protection, game privacy, location data, email communications" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://myrk-game.com/privacy" />
      </Head>

      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <HeaderSection scrollToPreRegister={() => {}} />
        
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 [font-family:'Oxanium',Helvetica] bg-gradient-to-r from-[#edc84f] to-[#ff6b6b] bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-gray-300 text-lg [font-family:'Oxanium',Helvetica]">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 [font-family:'Oxanium',Helvetica]">
            
            <section className="bg-[#ffffff1a] border border-[#ffffff33] rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#edc84f]">Location Data</h2>
              <p className="text-gray-300 leading-relaxed">
                Our game MYRK uses GPS/location features for gameplay purposes such as map synchronization and in-game events. 
                Location data is processed in real time and is not stored or sold. You may disable location permissions in your 
                device settings, though some features may not function.
              </p>
            </section>

            <section className="bg-[#ffffff1a] border border-[#ffffff33] rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#edc84f]">Email Communications</h2>
              <p className="text-gray-300 leading-relaxed">
                When you register, we collect your email to send updates and rewards. You can unsubscribe at any time using 
                the link in each email.
              </p>
            </section>

            <section className="bg-[#ffffff1a] border border-[#ffffff33] rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#edc84f]">Age Restrictions</h2>
              <p className="text-gray-300 leading-relaxed">
                Our games are not directed to children under 13. If you are under 18, you may only use our services with 
                parental permission.
              </p>
            </section>

            <section className="bg-[#ffffff1a] border border-[#ffffff33] rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#edc84f]">Information We Collect</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Register for game updates and rewards</li>
                <li>Contact us for support</li>
                <li>Participate in community features</li>
                <li>Use location-based gameplay features</li>
              </ul>
            </section>

            <section className="bg-[#ffffff1a] border border-[#ffffff33] rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#edc84f]">How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Send you game updates and rewards</li>
                <li>Process transactions and send related information</li>
                <li>Respond to your comments and questions</li>
                <li>Enable location-based gameplay features</li>
              </ul>
            </section>

            <section className="bg-[#ffffff1a] border border-[#ffffff33] rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#edc84f]">Information Sharing</h2>
              <p className="text-gray-300 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except as described in this policy or as required by law.
              </p>
            </section>

            <section className="bg-[#ffffff1a] border border-[#ffffff33] rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#edc84f]">Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="bg-[#ffffff1a] border border-[#ffffff33] rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#edc84f]">Changes to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new 
                privacy policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="bg-[#ffffff1a] border border-[#ffffff33] rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#edc84f]">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about this privacy policy, please contact us through our support channels.
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
