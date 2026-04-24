"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const FAQS = [
  {
    q: "How quickly can I get started with Kedeyo?",
    a: "Most teams are up and running within 5 minutes. Sign up, create your campaign, upload leads and start dialing. No IT team needed, no complex configurations.",
  },
  {
    q: "What dialers does Kedeyo offer?",
    a: "Kedeyo offers an Auto Dialer for automated outbound campaigns that connects agents only when calls are answered, and a Preview Dialer that shows agents full lead details before each call — so they can prepare and personalise every conversation.",
  },
  {
    q: "What can Kedeyo Voice Bot do?",
    a: "Kedeyo Voice Bot automates customer conversations with natural, human-like speech. It qualifies leads, answers FAQs, books appointments and routes complex calls to human agents — 24/7. Reports include outcome classification, full transcripts and recordings.",
  },
  {
    q: "Is Kedeyo TRAI compliant?",
    a: "Yes. Kedeyo is fully TRAI compliant with built-in DNC management, SIP encryption, audit trails and consent capture. Your campaigns stay compliant without any extra work on your end.",
  },
  {
    q: "Which CRMs does Kedeyo integrate with?",
    a: "We offer native integrations with popular Indian and global CRMs, plus open REST APIs and webhooks so you can sync leads, tickets and call notes with any tool your team uses.",
  },
  {
    q: "Can I get a free demo?",
    a: "Absolutely. Book a free demo with our team and we&apos;ll walk you through every feature — Auto Dialer, Voice Bot, IVR, Live Monitor and more. See how Kedeyo fits your business before you commit.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="relative bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">FAQ</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Everything you need to know about running your contact center on Kedeyo.
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
