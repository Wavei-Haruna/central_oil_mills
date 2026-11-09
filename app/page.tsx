import { AnnouncementBar } from "@/components/AnnouncementBar";
import { BulkEnquiry } from "@/components/BulkEnquiry";
import { Delivery } from "@/components/Delivery";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ShopSection } from "@/components/ShopSection";
import { Story } from "@/components/Story";
import { TrustStrip } from "@/components/TrustStrip";
import { WhyKakum } from "@/components/WhyKakum";


// Server component: no 'use client' here, so you can export `metadata` from this file too.
export default function Page() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="min-h-screen overflow-x-clip bg-[#fffdf7] text-[#15352b]">
        <Hero />
        {/* <TrustStrip /> */}
        <ShopSection />
        <Story />
        <WhyKakum />
        <Delivery />
        <BulkEnquiry />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
