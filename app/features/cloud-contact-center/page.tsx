import type { Metadata } from "next"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { CtaSection } from "@/components/cta-section"
import { CCCHero } from "@/components/cloud-contact-center/ccc-hero"
import { CCCDefinition } from "@/components/cloud-contact-center/ccc-definition"
import { CCCPlatform } from "@/components/cloud-contact-center/ccc-platform"
import { CCCUseCases } from "@/components/cloud-contact-center/ccc-use-cases"
import { CCCComparison } from "@/components/cloud-contact-center/ccc-comparison"
import { CCCSpecs } from "@/components/cloud-contact-center/ccc-specs"
import { CCCFaq } from "@/components/cloud-contact-center/ccc-faq"

export const metadata: Metadata = {
  title: "Cloud Contact Center Software in India | AI CCaaS | Kedeyo",
  description:
    "AI-powered cloud contact center built for India. Voice, WhatsApp, email and chat in one agent desktop. 99.95% uptime. Live in 3 minutes.",
  keywords: [
    "cloud contact center software",
    "CCaaS India",
    "cloud-based call center",
    "omnichannel contact center",
    "AI contact center India",
    "Kedeyo cloud contact center",
  ],
  openGraph: {
    title: "Cloud Contact Center Software in India | AI CCaaS | Kedeyo",
    description:
      "AI-powered cloud contact center built for India. Voice, WhatsApp, email and chat in one agent desktop. 99.95% uptime. Live in 3 minutes.",
    type: "website",
  },
}

export default function CloudContactCenterPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <SiteNav />
      <CCCHero />
      <CCCDefinition />
      <CCCPlatform />
      <CCCUseCases />
      <CCCComparison />
      <CCCSpecs />
      <CCCFaq />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}
