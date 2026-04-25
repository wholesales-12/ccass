"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import {
  ShoppingBag,
  GraduationCap,
  HeartPulse,
  Landmark,
  Building2,
  Plane,
  ArrowRight,
  Play,
  CheckCircle2,
  Truck,
  Briefcase,
  Megaphone,
  Wifi,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

type Industry = {
  icon: LucideIcon
  name: string
  tagline: string
  useCases: string[]
  href: string
  gradient: string
  stat: { value: string; label: string }
}

const INDUSTRIES: Industry[] = [
  {
    icon: Landmark,
    name: "BFSI",
    tagline:
      "Banking, lending, insurance and fintech teams use Kedeyo for collections, lead qualification, IRDAI-compliant tele-verification and RBI-compliant call recording with full audit trails.",
    useCases: ["Collections", "Tele-verification", "Audit-ready recording"],
    href: "/industries/bfsi",
    gradient: "from-amber-500 to-orange-500",
    stat: { value: "100%", label: "Audit-ready" },
  },
  {
    icon: Briefcase,
    name: "Finance & BPO",
    tagline:
      "Outsourcers run multi-client campaigns on Kedeyo with strict RBAC, per-client compliance, dialing modes and reports — all under one platform.",
    useCases: ["Multi-client campaigns", "Strict RBAC", "Per-client reports"],
    href: "/industries/bpo",
    gradient: "from-violet-500 to-indigo-500",
    stat: { value: "3×", label: "More dials / agent" },
  },
  {
    icon: ShoppingBag,
    name: "E-Commerce & D2C",
    tagline:
      "Recover abandoned carts, run COD verification calls, handle order inquiries and broadcast offers on WhatsApp — without growing your team.",
    useCases: ["Cart recovery", "COD verification", "WhatsApp offers"],
    href: "/industries/ecommerce",
    gradient: "from-fuchsia-500 to-pink-500",
    stat: { value: "+67%", label: "Cart recovery" },
  },
  {
    icon: HeartPulse,
    name: "Healthcare & Hospitals",
    tagline:
      "Manage appointment booking, reminders, no-show recovery and patient support across multiple specialties with HIPAA-aware workflows.",
    useCases: ["Appointments", "No-show recovery", "Patient support"],
    href: "/industries/healthcare",
    gradient: "from-emerald-500 to-teal-500",
    stat: { value: "-30%", label: "No-shows" },
  },
  {
    icon: GraduationCap,
    name: "EdTech & Coaching",
    tagline:
      "Scale admissions outreach, counselor follow-ups, EMI reminders and parent communications in Hindi, English and regional languages.",
    useCases: ["Admissions", "Counselor follow-ups", "Fee reminders"],
    href: "/industries/edtech",
    gradient: "from-violet-500 to-purple-500",
    stat: { value: "+85%", label: "Applications" },
  },
  {
    icon: Building2,
    name: "Real Estate & Property",
    tagline:
      "Capture every property inquiry, route by location, run site-visit reminders and broadcast new launches on WhatsApp.",
    useCases: ["Inquiry capture", "Site-visit reminders", "New launches"],
    href: "/industries/real-estate",
    gradient: "from-sky-500 to-blue-500",
    stat: { value: "+30%", label: "Site visits" },
  },
  {
    icon: Truck,
    name: "Logistics & Delivery",
    tagline:
      "Cut driver-customer coordination chaos with masked calling, delivery confirmations, RTO recovery and live SLA dashboards.",
    useCases: ["Masked calling", "RTO recovery", "Live SLA"],
    href: "/industries/logistics",
    gradient: "from-rose-500 to-red-500",
    stat: { value: "-50%", label: "Wait times" },
  },
  {
    icon: Plane,
    name: "Travel & Hospitality",
    tagline:
      "Manage booking, modification and refund calls in multiple languages with seasonal scaling that does not require new hardware.",
    useCases: ["Bookings", "Modifications", "Seasonal scaling"],
    href: "/industries/travel",
    gradient: "from-orange-500 to-amber-500",
    stat: { value: "24×7", label: "Coverage" },
  },
  {
    icon: Megaphone,
    name: "Government & Citizen",
    tagline:
      "Run citizen helplines, grievance redressal and outbound awareness campaigns with multilingual IVR and full audit logging.",
    useCases: ["Helplines", "Grievance redressal", "Awareness drives"],
    href: "/industries/government",
    gradient: "from-indigo-500 to-violet-500",
    stat: { value: "Multi", label: "Lingual" },
  },
  {
    icon: Wifi,
    name: "Telecom & ISP",
    tagline:
      "Handle service activation, complaint resolution, retention and upsell at scale — with carrier-grade voice quality.",
    useCases: ["Activations", "Complaints", "Retention"],
    href: "/industries/telecom",
    gradient: "from-cyan-500 to-sky-500",
    stat: { value: "+45%", label: "Retention" },
  },
]

export function IndustriesSection() {
  const [active, setActive] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Auto-cycle through industries
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % INDUSTRIES.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  // Scroll to active card on mobile
  useEffect(() => {
    if (scrollRef.current) {
      const card = scrollRef.current.children[active] as HTMLElement
      if (card) {
        card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
      }
    }
  }, [active])

  const current = INDUSTRIES[active]
  const Icon = current.icon

  return (
    <section id="industries" className="relative overflow-hidden bg-secondary/30 py-16 lg:py-24">
      {/* Background gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_30%_70%,oklch(0.45_0.22_295/0.08),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_70%_30%,oklch(0.62_0.24_300/0.06),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-primary">
            Industries
          </span>
          <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            AI Contact Center Software for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Every Indian Industry
            </span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Each industry gets a tuned setup — workflows, integrations, scripts, IVR flows and compliance settings
            designed for the way that industry actually operates.
          </p>
        </div>

        {/* Main display area */}
        <div className="mt-12 lg:mt-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left: Featured industry showcase */}
            <div className="relative">
              <div
                className={cn(
                  "relative overflow-hidden rounded-2xl border bg-card p-6 shadow-lg transition-all duration-500 sm:p-8",
                )}
              >
                {/* Gradient accent top bar */}
                <div className={cn("absolute inset-x-0 top-0 h-1 bg-gradient-to-r", current.gradient)} />

                {/* Icon and label */}
                <div className="flex items-start justify-between">
                  <div
                    className={cn(
                      "flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg sm:h-16 sm:w-16",
                      current.gradient,
                    )}
                  >
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>
                  <div className="text-right">
                    <div className={cn("text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent sm:text-3xl", current.gradient)}>
                      {current.stat.value}
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{current.stat.label}</div>
                  </div>
                </div>

                <h3 className="mt-5 text-xl font-semibold text-foreground sm:text-2xl">{current.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">{current.tagline}</p>

                {/* Use cases with animated check marks */}
                <ul className="mt-5 space-y-2.5">
                  {current.useCases.map((uc, i) => (
                    <li
                      key={uc}
                      className="flex items-center gap-2.5 text-sm text-foreground/80"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
                      {uc}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={current.href}
                  className={cn(
                    "mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg",
                    current.gradient,
                  )}
                >
                  <Play className="h-4 w-4" />
                  See {current.name} demo
                  <ArrowRight className="h-4 w-4" />
                </Link>

                {/* Decorative floating elements */}
                <div
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-br opacity-20 blur-3xl",
                    current.gradient,
                  )}
                />
              </div>

              {/* Progress indicators */}
              <div className="mt-4 flex justify-center gap-1.5">
                {INDUSTRIES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      i === active ? "w-8 bg-gradient-to-r from-primary to-accent" : "w-1.5 bg-border hover:bg-muted-foreground/50",
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Right: Industry quick-select grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              {INDUSTRIES.map((ind, i) => {
                const IndIcon = ind.icon
                const isActive = i === active
                return (
                  <button
                    key={ind.name}
                    onClick={() => setActive(i)}
                    className={cn(
                      "group relative flex flex-col items-start overflow-hidden rounded-xl border p-4 text-left transition-all duration-300",
                      isActive
                        ? "border-primary/30 bg-card shadow-lg"
                        : "border-border bg-card/50 hover:border-primary/20 hover:bg-card hover:shadow-md",
                    )}
                  >
                    {/* Active indicator bar */}
                    {isActive && (
                      <div className={cn("absolute inset-y-0 left-0 w-1 bg-gradient-to-b", ind.gradient)} />
                    )}

                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300",
                        isActive ? `bg-gradient-to-br ${ind.gradient} text-white` : "bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary",
                      )}
                    >
                      <IndIcon className="h-5 w-5" />
                    </div>
                    <span
                      className={cn(
                        "mt-2.5 text-sm font-semibold transition-colors",
                        isActive ? "text-foreground" : "text-foreground/70 group-hover:text-foreground",
                      )}
                    >
                      {ind.name}
                    </span>
                    <span className="mt-0.5 text-[11px] text-muted-foreground line-clamp-1">{ind.stat.value} {ind.stat.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile horizontal scroll alternative */}
        <div
          ref={scrollRef}
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:hidden scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {INDUSTRIES.map((ind, i) => {
            const IndIcon = ind.icon
            return (
              <Link
                key={ind.name}
                href={ind.href}
                className={cn(
                  "flex-shrink-0 snap-center rounded-xl border p-4 transition-all",
                  i === active
                    ? "w-64 border-primary/30 bg-card shadow-lg"
                    : "w-48 border-border bg-card/50",
                )}
              >
                <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br text-white", ind.gradient)}>
                  <IndIcon className="h-5 w-5" />
                </div>
                <div className="mt-3 text-sm font-semibold text-foreground">{ind.name}</div>
                <div className="mt-1 text-xs text-muted-foreground line-clamp-2">{ind.tagline}</div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
