"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ShoppingBag,
  GraduationCap,
  HeartPulse,
  Landmark,
  Building2,
  Plane,
  Truck,
  Megaphone,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

type Industry = {
  id: string
  name: string
  short: string
  icon: LucideIcon
  title: string
  description: string
  highlights: string[]
  stats: { value: string; label: string }[]
  href: string
  dot: string
  gradient: string
  panelGlow: string
  preview: "ecommerce" | "bfsi" | "healthcare" | "edtech" | "realestate" | "logistics" | "travel" | "government"
}

const INDUSTRIES: Industry[] = [
  {
    id: "ecommerce",
    name: "E-Commerce & D2C",
    short: "Cart recovery & COD",
    icon: ShoppingBag,
    title: "Recover carts. Verify COD. Sell on WhatsApp.",
    description:
      "Recover abandoned carts, run COD verification calls, handle order inquiries and broadcast offers on WhatsApp — without growing your team.",
    highlights: ["Abandoned cart recovery", "COD verification calls", "Order inquiry routing", "WhatsApp offers"],
    stats: [
      { value: "+67%", label: "Cart recovery" },
      { value: "98%", label: "WhatsApp open" },
      { value: "24×7", label: "Coverage" },
    ],
    href: "/industries/ecommerce",
    dot: "bg-fuchsia-500",
    gradient: "from-fuchsia-600 via-pink-600 to-rose-500",
    panelGlow: "from-fuchsia-500/12 via-pink-500/8 to-transparent",
    preview: "ecommerce",
  },
  {
    id: "bfsi",
    name: "BFSI",
    short: "Audit-ready calls",
    icon: Landmark,
    title: "Collections, KYC and audit-ready recordings",
    description:
      "Banking, lending, insurance and fintech teams use Kedeyo for collections, lead qualification, IRDAI-compliant tele-verification and RBI-compliant call recording with full audit trails.",
    highlights: ["Predictive collections", "IRDAI tele-verification", "RBI-grade recording", "Full audit trails"],
    stats: [
      { value: "100%", label: "Audit-ready" },
      { value: "3×", label: "More dials" },
      { value: "0", label: "Compliance gaps" },
    ],
    href: "/industries/bfsi",
    dot: "bg-amber-500",
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    panelGlow: "from-amber-500/12 via-orange-500/8 to-transparent",
    preview: "bfsi",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    short: "Appointments & reminders",
    icon: HeartPulse,
    title: "Bookings, reminders and no-show recovery",
    description:
      "Manage appointment booking, reminders, no-show recovery and patient support across multiple specialties — keep your front desk free for patients in front of them.",
    highlights: ["Appointment booking", "Smart reminders", "No-show recovery", "Patient support"],
    stats: [
      { value: "−30%", label: "No-shows" },
      { value: "5×", label: "Faster booking" },
      { value: "1-tap", label: "Confirm" },
    ],
    href: "/industries/healthcare",
    dot: "bg-emerald-500",
    gradient: "from-emerald-600 via-teal-600 to-cyan-500",
    panelGlow: "from-emerald-500/12 via-teal-500/8 to-transparent",
    preview: "healthcare",
  },
  {
    id: "edtech",
    name: "EdTech",
    short: "Admissions & EMIs",
    icon: GraduationCap,
    title: "Admissions, counselor follow-ups & fee reminders",
    description:
      "Scale admissions outreach, counselor follow-ups, EMI reminders and parent communications in Hindi, English and regional languages.",
    highlights: ["Admissions outreach", "Counselor follow-ups", "EMI reminders", "Multilingual parent calls"],
    stats: [
      { value: "+85%", label: "Applications" },
      { value: "Hi · En · Ta", label: "Languages" },
      { value: "+62%", label: "Counselor reach" },
    ],
    href: "/industries/edtech",
    dot: "bg-violet-500",
    gradient: "from-violet-600 via-purple-600 to-fuchsia-500",
    panelGlow: "from-violet-500/12 via-purple-500/8 to-transparent",
    preview: "edtech",
  },
  {
    id: "realestate",
    name: "Real Estate",
    short: "Inquiries & site visits",
    icon: Building2,
    title: "Capture every inquiry. Route by location.",
    description:
      "Capture every property inquiry, route by location, run site-visit reminders and broadcast new launches on WhatsApp.",
    highlights: ["Inquiry capture", "Location routing", "Site-visit reminders", "WhatsApp launch blasts"],
    stats: [
      { value: "+30%", label: "Site visits" },
      { value: "0", label: "Missed inquiries" },
      { value: "24×7", label: "Capture" },
    ],
    href: "/industries/real-estate",
    dot: "bg-sky-500",
    gradient: "from-sky-600 via-blue-600 to-indigo-500",
    panelGlow: "from-sky-500/12 via-blue-500/8 to-transparent",
    preview: "realestate",
  },
  {
    id: "logistics",
    name: "Logistics",
    short: "Masked calls & SLA",
    icon: Truck,
    title: "Masked calling, RTO recovery and live SLA",
    description:
      "Cut driver-customer coordination chaos with masked calling, delivery confirmations, RTO recovery and live SLA dashboards.",
    highlights: ["Masked driver-customer calls", "Delivery confirmations", "RTO recovery", "Live SLA dashboards"],
    stats: [
      { value: "−50%", label: "Wait times" },
      { value: "100%", label: "Privacy" },
      { value: "Live", label: "SLA" },
    ],
    href: "/industries/logistics",
    dot: "bg-rose-500",
    gradient: "from-rose-600 via-red-600 to-orange-500",
    panelGlow: "from-rose-500/12 via-red-500/8 to-transparent",
    preview: "logistics",
  },
  {
    id: "travel",
    name: "Travel",
    short: "Bookings & refunds",
    icon: Plane,
    title: "Bookings, modifications and seasonal scaling",
    description:
      "Manage booking, modification and refund calls in multiple languages with seasonal scaling that does not require new hardware.",
    highlights: ["Booking calls", "Modification & refunds", "Multilingual support", "Seasonal scaling"],
    stats: [
      { value: "24×7", label: "Coverage" },
      { value: "10×", label: "Peak ready" },
      { value: "0", label: "New hardware" },
    ],
    href: "/industries/travel",
    dot: "bg-orange-500",
    gradient: "from-orange-500 via-amber-500 to-rose-500",
    panelGlow: "from-orange-500/12 via-amber-500/8 to-transparent",
    preview: "travel",
  },
  {
    id: "government",
    name: "Government",
    short: "Helplines & awareness",
    icon: Megaphone,
    title: "Citizen helplines and awareness campaigns",
    description:
      "Run citizen helplines, grievance redressal and outbound awareness campaigns with multilingual IVR and full audit logging.",
    highlights: ["Citizen helplines", "Grievance redressal", "Awareness campaigns", "Full audit logging"],
    stats: [
      { value: "Multi", label: "Lingual" },
      { value: "100%", label: "Audit log" },
      { value: "12+", label: "Languages" },
    ],
    href: "/industries/government",
    dot: "bg-indigo-500",
    gradient: "from-indigo-600 via-violet-600 to-purple-500",
    panelGlow: "from-indigo-500/12 via-violet-500/8 to-transparent",
    preview: "government",
  },
]

/* Animations only run while the parent .group is hovered. */
const PAUSE = "[animation-play-state:paused] group-hover:[animation-play-state:running]"

/* ---------------- Per-industry preview visualizations ---------------- */

function EcommercePreview({ gradient }: { gradient: string }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between rounded-lg border border-fuchsia-500/20 bg-fuchsia-500/5 px-3 py-2">
        <div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Cart recovered today</div>
          <div className={cn("bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent", gradient)}>
            ₹4,82,640
          </div>
        </div>
        <div className="flex items-end gap-[2px]">
          {[40, 55, 35, 70, 50, 85, 65].map((h, i) => (
            <span
              key={i}
              className={cn("block w-1.5 rounded-sm bg-gradient-to-t from-fuchsia-500 to-pink-400", PAUSE)}
              style={{ height: `${h}%`, minHeight: "8px", animation: `ind-bar 1.4s ease-in-out ${i * 0.1}s infinite` }}
            />
          ))}
        </div>
      </div>
      {[
        { name: "Priya · Mumbai", item: "Kurta set", action: "COD verified" },
        { name: "Arjun · Pune", item: "Wireless earbuds", action: "Reordered" },
        { name: "Neha · Delhi", item: "Skincare bundle", action: "Paid online" },
      ].map((row, i) => (
        <div
          key={row.name}
          className={cn("flex items-center gap-2 rounded-md border border-border bg-card px-2 py-1.5", PAUSE)}
          style={{ animation: `ind-slide 2.4s ease-in-out ${i * 0.3}s infinite` }}
        >
          <div className={cn("h-6 w-6 rounded-md bg-gradient-to-br", gradient)} />
          <div className="flex-1">
            <div className="text-[11px] font-semibold text-foreground">{row.name}</div>
            <div className="font-mono text-[9px] text-muted-foreground">{row.item}</div>
          </div>
          <span className="rounded-md bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-medium text-emerald-700">
            {row.action}
          </span>
        </div>
      ))}
      <style>{`@keyframes ind-bar { 0%,100% { transform: scaleY(0.5); transform-origin: bottom } 50% { transform: scaleY(1); transform-origin: bottom } } @keyframes ind-slide { 0%,100% { transform: translateX(0); opacity: 0.85 } 50% { transform: translateX(2px); opacity: 1 } }`}</style>
    </div>
  )
}

function BfsiPreview({ gradient }: { gradient: string }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between rounded-lg border border-amber-500/20 bg-amber-500/5 px-3 py-2">
        <div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Audit-ready recordings</div>
          <div className={cn("bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent", gradient)}>100%</div>
        </div>
        <div className="relative">
          <div className={cn("h-10 w-10 rounded-full bg-gradient-to-br", gradient)} />
          <span className={cn("absolute inset-0 rounded-full bg-amber-500/40", PAUSE)} style={{ animation: "ind-ping 1.8s ease-out infinite" }} />
        </div>
      </div>
      {[
        { tag: "RBI", label: "Tamper-proof recording", icon: "✓" },
        { tag: "IRDAI", label: "Tele-verification log", icon: "✓" },
        { tag: "TRAI", label: "DLT consent capture", icon: "✓" },
      ].map((row, i) => (
        <div
          key={row.tag}
          className={cn("flex items-center gap-2 rounded-md border border-border bg-card px-2 py-1.5", PAUSE)}
          style={{ animation: `ind-row 2.4s ease-in-out ${i * 0.3}s infinite` }}
        >
          <span className="rounded-md bg-amber-500/15 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-amber-700">
            {row.tag}
          </span>
          <span className="flex-1 text-[11px] text-foreground/80">{row.label}</span>
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
        </div>
      ))}
      <style>{`@keyframes ind-ping { 0% { transform: scale(1); opacity: 0.75 } 100% { transform: scale(2); opacity: 0 } } @keyframes ind-row { 0%,100% { opacity: 0.85 } 50% { opacity: 1 } }`}</style>
    </div>
  )
}

function HealthcarePreview({ gradient }: { gradient: string }) {
  const slots = [
    { time: "09:00", state: "Booked" },
    { time: "09:30", state: "Free" },
    { time: "10:00", state: "Booked" },
    { time: "10:30", state: "Free" },
    { time: "11:00", state: "Booked" },
    { time: "11:30", state: "Reminded" },
  ]
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-2">
        <div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">No-show reduction</div>
          <div className={cn("bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent", gradient)}>−30%</div>
        </div>
        <div className="text-right">
          <div className="font-mono text-[10px] text-muted-foreground">Today</div>
          <div className="text-sm font-semibold text-foreground">Apr 25</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {slots.map((s, i) => (
          <div
            key={s.time}
            className={cn(
              "rounded-md border px-1.5 py-1.5 text-center",
              s.state === "Booked"
                ? "border-emerald-500/30 bg-emerald-500/10"
                : s.state === "Reminded"
                  ? "border-cyan-500/30 bg-cyan-500/10"
                  : "border-border bg-card",
              PAUSE,
            )}
            style={{ animation: `ind-slot 2.4s ease-in-out ${i * 0.15}s infinite` }}
          >
            <div className="font-mono text-[10px] font-semibold text-foreground">{s.time}</div>
            <div
              className={cn(
                "mt-0.5 text-[8.5px] font-medium uppercase tracking-wide",
                s.state === "Booked" ? "text-emerald-700" : s.state === "Reminded" ? "text-cyan-700" : "text-muted-foreground",
              )}
            >
              {s.state}
            </div>
          </div>
        ))}
      </div>
      <style>{`@keyframes ind-slot { 0%,100% { transform: translateY(0); opacity: 0.85 } 50% { transform: translateY(-1.5px); opacity: 1 } }`}</style>
    </div>
  )
}

function EdtechPreview({ gradient }: { gradient: string }) {
  const langs = ["हिन्दी", "English", "தமிழ்", "বাংলা", "मराठी", "ગુજરાતી"]
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between rounded-lg border border-violet-500/20 bg-violet-500/5 px-3 py-2">
        <div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Applications this week</div>
          <div className={cn("bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent", gradient)}>+85%</div>
        </div>
        <div className="text-right">
          <div className="font-mono text-[10px] text-muted-foreground">Counselors</div>
          <div className="text-sm font-semibold text-foreground">12 live</div>
        </div>
      </div>
      <div className="rounded-md border border-border bg-card p-2">
        <div className="text-[10px] font-medium text-muted-foreground">Reaching parents in</div>
        <div className="mt-1.5 flex flex-wrap gap-1">
          {langs.map((l, i) => (
            <span
              key={l}
              className={cn(
                "rounded-full border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 px-2 py-0.5 text-[10px] font-medium text-violet-900",
                PAUSE,
              )}
              style={{ animation: `ind-pop 3s ease-in-out ${i * 0.18}s infinite` }}
            >
              {l}
            </span>
          ))}
        </div>
      </div>
      <style>{`@keyframes ind-pop { 0%,100% { transform: translateY(0); opacity: 0.75 } 50% { transform: translateY(-2px); opacity: 1 } }`}</style>
    </div>
  )
}

function RealEstatePreview({ gradient }: { gradient: string }) {
  const inquiries = [
    { city: "Bandra", units: 4 },
    { city: "Andheri", units: 3 },
    { city: "Powai", units: 6 },
  ]
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between rounded-lg border border-sky-500/20 bg-sky-500/5 px-3 py-2">
        <div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Site visits booked</div>
          <div className={cn("bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent", gradient)}>+30%</div>
        </div>
        <div className="text-right">
          <div className="font-mono text-[10px] text-muted-foreground">Inquiries</div>
          <div className="text-sm font-semibold text-foreground">142 today</div>
        </div>
      </div>
      {inquiries.map((row, i) => (
        <div
          key={row.city}
          className={cn("flex items-center gap-2 rounded-md border border-border bg-card px-2 py-1.5", PAUSE)}
          style={{ animation: `ind-row 2.4s ease-in-out ${i * 0.3}s infinite` }}
        >
          <span className="relative flex h-2 w-2">
            <span className={cn("absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-500 opacity-75", PAUSE)} />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500" />
          </span>
          <span className="text-[11px] font-semibold text-foreground">{row.city}</span>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="font-mono text-[9px] text-muted-foreground">{row.units} units</span>
            <span className="rounded-md bg-sky-500/10 px-1.5 py-0.5 text-[9px] font-medium text-sky-700">Routed</span>
          </div>
        </div>
      ))}
      <style>{`@keyframes ind-row { 0%,100% { opacity: 0.85 } 50% { opacity: 1 } }`}</style>
    </div>
  )
}

function LogisticsPreview({ gradient }: { gradient: string }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between rounded-lg border border-rose-500/20 bg-rose-500/5 px-3 py-2">
        <div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Wait time reduction</div>
          <div className={cn("bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent", gradient)}>−50%</div>
        </div>
        <div className="text-right">
          <div className="font-mono text-[10px] text-muted-foreground">Active routes</div>
          <div className="text-sm font-semibold text-foreground">38 live</div>
        </div>
      </div>
      <div className="relative h-16 overflow-hidden rounded-md border border-border bg-card">
        <svg viewBox="0 0 200 60" className="h-full w-full" preserveAspectRatio="none">
          <path d="M 5 40 Q 50 10, 100 30 T 195 20" stroke="oklch(0.6 0.22 30)" strokeWidth="2" strokeDasharray="4 3" fill="none" strokeLinecap="round" />
          <circle cx="5" cy="40" r="3" fill="oklch(0.6 0.22 30)" />
          <circle cx="195" cy="20" r="3" fill="oklch(0.55 0.22 350)" />
          <circle
            cx="100"
            cy="28"
            r="4"
            fill="oklch(0.6 0.22 30)"
            className={PAUSE}
            style={{ animation: "ind-truck 2.4s ease-in-out infinite" }}
          />
        </svg>
        <span className="absolute bottom-1 left-2 font-mono text-[9px] text-muted-foreground">Hub</span>
        <span className="absolute bottom-1 right-2 font-mono text-[9px] text-muted-foreground">Customer</span>
      </div>
      <div className="flex items-center gap-2 rounded-md border border-rose-500/20 bg-rose-500/5 px-2 py-1">
        <span className="rounded-md bg-rose-500/15 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-rose-700">
          MASKED
        </span>
        <span className="font-mono text-[9px] text-muted-foreground">Driver ↔ Customer · Numbers hidden</span>
      </div>
      <style>{`@keyframes ind-truck { 0%,100% { cx: 100 } 50% { cx: 150 } }`}</style>
    </div>
  )
}

function TravelPreview({ gradient }: { gradient: string }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between rounded-lg border border-orange-500/20 bg-orange-500/5 px-3 py-2">
        <div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Coverage</div>
          <div className={cn("bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent", gradient)}>24×7</div>
        </div>
        <div className="text-right">
          <div className="font-mono text-[10px] text-muted-foreground">Languages</div>
          <div className="text-sm font-semibold text-foreground">Hi · En · Ta</div>
        </div>
      </div>
      {[
        { code: "BLR → BOM", state: "Confirmed", color: "text-emerald-700 bg-emerald-500/10" },
        { code: "DEL → GOA", state: "Modified", color: "text-cyan-700 bg-cyan-500/10" },
        { code: "BOM → DXB", state: "Refunded", color: "text-orange-700 bg-orange-500/10" },
      ].map((row, i) => (
        <div
          key={row.code}
          className={cn("flex items-center gap-2 rounded-md border border-border bg-card px-2 py-1.5", PAUSE)}
          style={{ animation: `ind-row 2.4s ease-in-out ${i * 0.3}s infinite` }}
        >
          <span className="font-mono text-[10px] font-semibold text-foreground">{row.code}</span>
          <div className="h-px flex-1 border-t border-dashed border-border" />
          <span className={cn("rounded-md px-1.5 py-0.5 text-[9px] font-medium", row.color)}>{row.state}</span>
        </div>
      ))}
      <style>{`@keyframes ind-row { 0%,100% { opacity: 0.85 } 50% { opacity: 1 } }`}</style>
    </div>
  )
}

function GovernmentPreview({ gradient }: { gradient: string }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between rounded-lg border border-indigo-500/20 bg-indigo-500/5 px-3 py-2">
        <div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Languages live</div>
          <div className={cn("bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent", gradient)}>12+</div>
        </div>
        <div className="text-right">
          <div className="font-mono text-[10px] text-muted-foreground">Audit log</div>
          <div className="text-sm font-semibold text-foreground">100%</div>
        </div>
      </div>
      {[
        { num: "1", label: "Helpline", queue: "08 calls" },
        { num: "2", label: "Grievance", queue: "12 calls" },
        { num: "3", label: "Awareness", queue: "Outbound" },
      ].map((row, i) => (
        <div
          key={row.num}
          className={cn("flex items-center gap-2 rounded-md border border-border bg-card px-2 py-1.5", PAUSE)}
          style={{ animation: `ind-row 2.4s ease-in-out ${i * 0.3}s infinite` }}
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-md border border-indigo-500/30 bg-indigo-500/10 font-mono text-[10px] font-bold text-indigo-700">
            {row.num}
          </span>
          <span className="text-[11px] font-semibold text-foreground">{row.label}</span>
          <div className="h-px flex-1 border-t border-dashed border-border" />
          <span className="font-mono text-[9px] text-muted-foreground">{row.queue}</span>
        </div>
      ))}
      <style>{`@keyframes ind-row { 0%,100% { opacity: 0.85 } 50% { opacity: 1 } }`}</style>
    </div>
  )
}

function IndustryPreview({ kind, gradient }: { kind: Industry["preview"]; gradient: string }) {
  switch (kind) {
    case "ecommerce":
      return <EcommercePreview gradient={gradient} />
    case "bfsi":
      return <BfsiPreview gradient={gradient} />
    case "healthcare":
      return <HealthcarePreview gradient={gradient} />
    case "edtech":
      return <EdtechPreview gradient={gradient} />
    case "realestate":
      return <RealEstatePreview gradient={gradient} />
    case "logistics":
      return <LogisticsPreview gradient={gradient} />
    case "travel":
      return <TravelPreview gradient={gradient} />
    case "government":
      return <GovernmentPreview gradient={gradient} />
    default:
      return null
  }
}

/* ---------------- Section ---------------- */

export function IndustriesSection() {
  const [active, setActive] = useState<string>(INDUSTRIES[0].id)
  const current = INDUSTRIES.find((i) => i.id === active) ?? INDUSTRIES[0]
  const ActiveIcon = current.icon

  return (
    <section id="industries" className="relative overflow-hidden bg-background py-20 lg:py-28">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[8%] top-[5%] h-64 w-64 rounded-full bg-violet-400/15 blur-3xl" />
        <div className="absolute right-[6%] top-[10%] h-72 w-72 rounded-full bg-fuchsia-400/12 blur-3xl" />
        <div className="absolute left-1/2 top-[55%] h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-400/10 blur-3xl" />
        <div className="absolute right-[12%] bottom-[8%] h-56 w-56 rounded-full bg-emerald-400/8 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary backdrop-blur-sm">
            <Sparkles className="h-3 w-3" />
            Industries
          </span>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Built for every Indian{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
                business vertical
              </span>
              <svg
                aria-hidden
                viewBox="0 0 320 12"
                className="absolute -bottom-1 left-0 h-2.5 w-full"
                preserveAspectRatio="none"
              >
                <path d="M2 8 Q 80 2, 160 6 T 318 4" stroke="url(#ind-underline)" strokeWidth="3" strokeLinecap="round" fill="none" />
                <defs>
                  <linearGradient id="ind-underline" x1="0" x2="1">
                    <stop offset="0%" stopColor="oklch(0.45 0.22 295)" />
                    <stop offset="50%" stopColor="oklch(0.65 0.25 320)" />
                    <stop offset="100%" stopColor="oklch(0.62 0.24 300)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Each industry gets a tuned setup — workflows, IVR flows, scripts and compliance settings — designed for how
            that industry actually operates.
          </p>
        </div>

        {/* Tab bar */}
        <div
          role="tablist"
          aria-label="Industries"
          className="mx-auto mt-12 flex max-w-5xl flex-wrap items-center justify-center gap-2 sm:gap-2.5"
        >
          {INDUSTRIES.map((tab) => {
            const Icon = tab.icon
            const isActive = tab.id === active
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                type="button"
                onClick={() => setActive(tab.id)}
                className={cn(
                  "group relative inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all",
                  isActive
                    ? "border-transparent text-white shadow-lg shadow-primary/25 scale-[1.03]"
                    : "border-border bg-card text-foreground/75 hover:border-primary/30 hover:bg-secondary hover:text-foreground",
                )}
              >
                {isActive && (
                  <span aria-hidden className={cn("absolute inset-0 rounded-full bg-gradient-to-r", tab.gradient)} />
                )}
                {!isActive && (
                  <span aria-hidden className={cn("relative h-1.5 w-1.5 shrink-0 rounded-full", tab.dot)} />
                )}
                <Icon className={cn("relative h-4 w-4", isActive ? "text-white" : "text-foreground/60")} />
                <span className="relative">{tab.name}</span>
              </button>
            )
          })}
        </div>

        {/* Detail panel */}
        <div className="relative mx-auto mt-10 max-w-6xl">
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br opacity-60 blur-3xl transition-all duration-700",
              current.panelGlow,
            )}
          />

          <div className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-primary/5">
            {/* Thin gradient bar at top */}
            <div aria-hidden className={cn("h-1 w-full bg-gradient-to-r", current.gradient)} />

            <div className="p-6 sm:p-8 lg:p-10">
              {/* Header row */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span
                    className={cn(
                      "relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg sm:h-14 sm:w-14",
                      current.gradient,
                    )}
                  >
                    <ActiveIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-40",
                        current.gradient,
                        PAUSE,
                      )}
                      style={{ animation: "ind-icon-ping 2.6s ease-in-out infinite" }}
                    />
                  </span>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                      {current.name}
                    </div>
                    <h3 className="mt-1 text-balance text-xl font-semibold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
                      {current.title}
                    </h3>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className={cn("absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75", PAUSE)} />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>
                  Live preview
                </span>
              </div>

              {/* Description */}
              <p className="mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                {current.description}
              </p>

              {/* Two-column body */}
              <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] lg:gap-8">
                {/* Highlights column */}
                <div className="flex flex-col gap-3">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    What you get
                  </div>
                  <ul className="grid gap-2.5">
                    {current.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-3 rounded-xl border border-border bg-secondary/40 px-3.5 py-2.5 text-sm font-medium text-foreground"
                      >
                        <span
                          aria-hidden
                          className={cn(
                            "flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br text-white",
                            current.gradient,
                          )}
                        >
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Stats block */}
                  <div className="mt-3 grid grid-cols-3 divide-x divide-border overflow-hidden rounded-xl border border-border bg-background">
                    {current.stats.map((s) => (
                      <div key={s.label} className="px-3 py-3 text-center">
                        <div
                          className={cn(
                            "bg-gradient-to-br bg-clip-text text-lg font-semibold tracking-tight text-transparent sm:text-xl",
                            current.gradient,
                          )}
                        >
                          {s.value}
                        </div>
                        <div className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={current.href}
                    className={cn(
                      "group/cta mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]",
                      current.gradient,
                    )}
                  >
                    Explore {current.name}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-0.5" />
                  </Link>
                </div>

                {/* Preview column */}
                <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-background via-secondary/30 to-background p-4 shadow-inner sm:p-6">
                  <div
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-25 blur-2xl",
                      current.gradient,
                    )}
                  />
                  <div
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-20 blur-2xl",
                      current.gradient,
                    )}
                  />
                  <div className="relative">
                    <IndustryPreview kind={current.preview} gradient={current.gradient} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style>{`@keyframes ind-icon-ping { 0%,100% { transform: scale(1); opacity: 0.4 } 50% { transform: scale(1.15); opacity: 0.15 } }`}</style>
        </div>
      </div>
    </section>
  )
}
