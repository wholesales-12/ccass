import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { TrustedByStrip } from "@/components/trusted-by-strip"
import { PlatformExplorer } from "@/components/platform-explorer"
import { WorkflowSection } from "@/components/workflow-section"
import { AiShowcase } from "@/components/ai-showcase"
import { FeaturesGrid } from "@/components/features-grid"
import { IndustriesSection } from "@/components/industries-section"
import { Testimonials } from "@/components/testimonials"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background">
      <SiteNav />
      <Hero />
      <TrustedByStrip />
      <FeaturesGrid />
      <PlatformExplorer />
      <WorkflowSection />
      <AiShowcase />
      <IndustriesSection />
      <Testimonials />
      <FaqSection />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}
