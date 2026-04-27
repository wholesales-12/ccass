import type { Metadata } from "next"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { CtaSection } from "@/components/cta-section"
import { ReceptionistHero } from "@/components/ai-receptionist/receptionist-hero"
import { MissedCallStats } from "@/components/ai-receptionist/missed-call-stats"
import { CapabilitiesGrid } from "@/components/ai-receptionist/capabilities-grid"
import { HowItWorks } from "@/components/ai-receptionist/how-it-works"
import { VoiceQuality } from "@/components/ai-receptionist/voice-quality"
import { ComparisonTable } from "@/components/ai-receptionist/comparison-table"
import { PerfectFor } from "@/components/ai-receptionist/perfect-for"
import { ReceptionistFaq } from "@/components/ai-receptionist/receptionist-faq"

export const metadata: Metadata = {
  title: "AI Receptionist for Small Business | 24/7 Kedeyo",
  description:
    "Kedeyo's AI Receptionist answers every call, books appointments & qualifies leads 24/7 in Hindi & English. Built for small businesses. Book a free demo.",
  keywords: [
    "AI Receptionist",
    "virtual receptionist",
    "24/7 call answering",
    "AI call answering service",
    "automated receptionist",
    "Hindi AI receptionist",
    "small business receptionist",
  ],
  openGraph: {
    title: "AI Receptionist for Small Business | 24/7 Kedeyo",
    description:
      "Answer every call, book appointments & qualify leads 24/7 in Hindi & English. Built for Indian small businesses.",
    type: "website",
  },
}

export default function AIReceptionistPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <SiteNav />
      <ReceptionistHero />
      <MissedCallStats />
      <CapabilitiesGrid />
      <HowItWorks />
      <VoiceQuality />
      <ComparisonTable />
      <PerfectFor />
      <ReceptionistFaq />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}
