import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { TrustedByStrip } from "@/components/trusted-by-strip"
import { ProblemSection } from "@/components/problem-section"
import { FeaturesGrid } from "@/components/features-grid"
import { AiShowcase } from "@/components/ai-showcase"
import { WhyChooseSection } from "@/components/why-choose-section"
import { WorkflowSection } from "@/components/workflow-section"
import { IndustriesSection } from "@/components/industries-section"
import { ComplianceSection } from "@/components/compliance-section"
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
      <ProblemSection />
      <FeaturesGrid />
      <AiShowcase />
      <WhyChooseSection />
      <WorkflowSection />
      <IndustriesSection />
      <ComplianceSection />
      <Testimonials />
      <FaqSection />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}
