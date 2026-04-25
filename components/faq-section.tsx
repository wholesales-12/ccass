"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const FAQS = [
  {
    q: "What is AI contact center software?",
    a: "AI contact center software is a cloud platform that uses artificial intelligence — voice bots, AI receptionists, intelligent routing, AI quality scoring and AI-driven analytics — to automate, augment and improve every customer conversation. Instead of just connecting calls, an AI contact center understands intent, routes intelligently, helps agents in real time and learns from every interaction. Kedeyo is one such platform, designed specifically for Indian businesses.",
  },
  {
    q: "What makes Kedeyo the best AI contact center software in India?",
    a: "Three things. First, Kedeyo is genuinely India-first — Hindi, English and Tamil voice bots, INR pricing, Indian carrier routing and India-only data residency. Second, AI is included in every paid plan, not behind a premium upsell. Third, you can go live in under five minutes without a single line of hardware, which makes it equally suitable for a 5-agent startup and a 500-seat BPO.",
  },
  {
    q: "Is Kedeyo TRAI compliant?",
    a: "Yes. Kedeyo is a TRAI-registered platform with DLT integration, NDNC scrubbing, content template enforcement and opt-out handling on every outbound campaign. You stay compliant whether you are running marketing, transactional or service calls and SMS.",
  },
  {
    q: "Does Kedeyo support Hindi and regional languages?",
    a: "Yes. Kedeyo's voice bots, AI receptionist and IVR support Hindi and English natively, and Tamil is available with more languages on the roadmap. You can mix languages in the same flow — for example, greet in Hindi, ask preferences, then switch to English on demand.",
  },
  {
    q: "How fast can we go live with Kedeyo?",
    a: "Most teams are taking live calls within an hour of sign-up. The platform is fully cloud-based — sign up, pick or port a number, build your IVR with the drag-and-drop builder, add agents, and you are live. No PBX, no PRI, no on-premise hardware.",
  },
  {
    q: "Can Kedeyo replace my existing call center setup?",
    a: "Yes. Kedeyo replaces traditional EPABX/PBX systems, on-premise dialers, separate WhatsApp tools, manual call recording solutions and ad-hoc reporting. Most Indian customers consolidate three to five tools into Kedeyo within their first month.",
  },
  {
    q: "How does Kedeyo's AI reduce contact center costs?",
    a: "Three layers of savings. Voice bots and AI receptionist deflect 40-70% of repetitive calls so you do not need to hire those agents. AI auto-summaries and dispositions cut after-call work by up to 60%. AI QA replaces sample-based manual review and finds issues the humans miss. Most customers see ROI in 60-90 days.",
  },
  {
    q: "Is Kedeyo suitable for small businesses and startups?",
    a: "Absolutely. Kedeyo is one of the few AI contact center platforms in India with a real Starter plan for 2 to 10 agents, INR pricing, no setup fees and no minimum contract. You can run a five-person inside-sales team or a two-person support desk on the same platform an enterprise uses.",
  },
  {
    q: "What integrations does Kedeyo support?",
    a: "Kedeyo's API and webhooks allow integration with virtually any CRM, helpdesk, ERP or BI tool. Call data, recordings, transcripts and AI summaries can be synced both ways. Click-to-call from your CRM, trigger outbound calls from automation, and stream events into your data warehouse.",
  },
  {
    q: "Where is my data stored?",
    a: "Inside India. Kedeyo's primary infrastructure runs in Mumbai with India-only data residency by default. Recordings, transcripts and customer data never leave the country unless you explicitly enable cross-border export. The platform is ISO 27001 certified and DPDP Act 2023 ready.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="relative bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">FAQ</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            AI Contact Center Software India — Frequently Asked Questions
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Everything Indian sales and support teams ask before switching to Kedeyo.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-10 w-full">
          {FAQS.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
