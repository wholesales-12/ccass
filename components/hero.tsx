"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Phone,
  PhoneIncoming,
  ShieldCheck,
  Bot,
  PhoneCall,
  Headphones,
  MessageSquare,
  ListTree,
  Activity,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/* ------------------------------------------------------------------ */
/*  Module tab data — these are the actual Kedeyo product modules      */
/* ------------------------------------------------------------------ */

type ModuleId = "ai-recep" | "voice-bot" | "dialer" | "ivr" | "whatsapp" | "monitor"

const MODULES: { id: ModuleId; label: string; icon: any; tag: string }[] = [
  { id: "ai-recep", label: "AI Receptionist", icon: Bot, tag: "NEW" },
  { id: "voice-bot", label: "Voice Bot", icon: Headphones, tag: "" },
  { id: "dialer", label: "Auto Dialer", icon: PhoneCall, tag: "" },
  { id: "ivr", label: "Smart IVR", icon: ListTree, tag: "" },
  { id: "whatsapp", label: "WhatsApp", icon: MessageSquare, tag: "" },
  { id: "monitor", label: "Live Monitor", icon: Activity, tag: "" },
]

const TRUST = ["Made in India", "TRAI Registered", "DPDP Compliant", "ISO 27001", "RBI / IRDAI Ready"]

const STATS = [
  { value: "+45%", label: "Higher contact rate" },
  { value: "-35%", label: "Lower handle time" },
  { value: "-60%", label: "Fewer missed calls" },
  { value: "5 min", label: "Time to go live" },
]

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

export function Hero() {
  const [activeModule, setActiveModule] = useState<ModuleId>("ai-recep")
  const [hovered, setHovered] = useState<ModuleId | null>(null)

  // Auto-cycle modules when nothing is hovered
  useEffect(() => {
    if (hovered) return
    const id = setInterval(() => {
      setActiveModule((curr) => {
        const idx = MODULES.findIndex((m) => m.id === curr)
        return MODULES[(idx + 1) % MODULES.length].id
      })
    }, 3200)
    return () => clearInterval(id)
  }, [hovered])

  const focused: ModuleId = hovered ?? activeModule

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[#0a0612] pt-20 lg:pt-24"
    >
      {/* Background layers */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 45% at 50% -10%, oklch(0.45 0.22 295 / 0.50), transparent 60%), radial-gradient(ellipse 50% 35% at 100% 30%, oklch(0.62 0.24 300 / 0.28), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(168,85,247,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(168,85,247,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 35%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-6 sm:px-6 lg:px-8 lg:pb-14 lg:pt-8">
        {/* ---------------- Centered headline cluster ---------------- */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {/* Eyebrow pill */}
          <Link
            href="/features/ai-receptionist"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-fuchsia-400/50 hover:bg-fuchsia-500/10 hover:shadow-[0_8px_30px_-10px_oklch(0.62_0.24_300/0.7)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-fuchsia-400" />
            </span>
            <span className="font-semibold tracking-wider text-fuchsia-300">NEW</span>
            <span className="h-3 w-px bg-white/20" />
            AI Receptionist · Answers every call in Hindi & English, 24×7
            <ArrowRight className="h-3 w-3 text-fuchsia-300 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>

          {/* H1 — compact, two lines, with hover-highlight on key phrases */}
          <h1 className="mt-4 text-balance text-[2rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-[2.5rem] lg:text-[3rem]">
            <HoverHighlight>AI Contact Center Software</HoverHighlight>{" "}
            <span className="text-white/65">in India</span>
            <br />
            <span className="text-white/90">— With </span>
            <HoverHighlight gradient>AI Receptionist</HoverHighlight>
            <span className="text-white/90"> Built In.</span>
          </h1>

          {/* Sub-headline (concise, primary keyword in first 30 words) */}
          <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-white/70 sm:text-[15px]">
            One cloud platform with an always-on AI Receptionist, voice bots, smart IVR, predictive dialers and live
            dashboards — built for Indian sales and support teams. Answer every call. Close more deals. Resolve faster.
          </p>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button
              size="lg"
              className="group/cta relative h-11 overflow-hidden rounded-full bg-white px-6 text-sm font-semibold text-[#0a0612] shadow-[0_10px_40px_-10px_rgba(232,121,249,0.55)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_16px_50px_-10px_rgba(232,121,249,0.85)]"
              asChild
            >
              <Link href="#demo">
                <span className="relative z-10 flex items-center gap-2">
                  Book a Free Demo
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
                </span>
                <span className="absolute inset-0 -z-0 bg-gradient-to-r from-fuchsia-100 via-white to-violet-100 opacity-0 transition-opacity duration-300 group-hover/cta:opacity-100" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group/cta2 h-11 rounded-full border-white/20 bg-white/5 px-5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-fuchsia-400/50 hover:bg-white/10 hover:text-white"
              asChild
            >
              <Link href="/features/ai-receptionist">
                <Headphones className="mr-1.5 h-4 w-4 text-fuchsia-300 transition-transform duration-300 group-hover/cta2:scale-110" />
                Hear the AI Receptionist
              </Link>
            </Button>
            <a
              href="tel:+917621073586"
              className="group hidden items-center gap-1.5 rounded-full px-2 py-2 text-xs text-white/55 transition-colors duration-300 hover:text-white sm:flex"
            >
              <Phone className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-rotate-12 group-hover:text-fuchsia-300" />
              <span className="font-mono">+91 76210 73586</span>
            </a>
          </div>
          <p className="mt-2.5 text-[11px] text-white/40">
            No credit card · No long contracts · AI Receptionist live in 5 minutes.
          </p>

          {/* Trust strip — single row */}
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-5">
            {TRUST.map((t, i) => (
              <li
                key={t}
                className="flex items-center gap-1.5 text-[10.5px] font-medium text-white/55 transition-colors duration-300 hover:text-white"
              >
                {i === 0 ? (
                  <span className="text-sm" aria-hidden>
                    🇮🇳
                  </span>
                ) : (
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400/80" />
                )}
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* ---------------- Product preview frame ---------------- */}
        <div className="relative mx-auto mt-10 max-w-5xl">
          {/* Soft glow halo */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-10 -inset-y-6 rounded-[40px] opacity-70"
            style={{
              background:
                "radial-gradient(ellipse at center, oklch(0.62 0.24 300 / 0.30), transparent 70%)",
            }}
          />

          {/* Browser chrome */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl shadow-[0_30px_80px_-30px_oklch(0.62_0.24_300/0.7)]">
            {/* Top bar */}
            <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              </div>
              <div className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] text-white/55">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                kedeyo.com / dashboard
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-white/55">
                Live · 24×7
              </span>
            </div>

            {/* Module tabs */}
            <div className="flex items-center gap-1 overflow-x-auto border-b border-white/10 bg-white/[0.02] px-3 py-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {MODULES.map((m) => {
                const isActive = focused === m.id
                const Icon = m.icon
                return (
                  <button
                    key={m.id}
                    type="button"
                    onMouseEnter={() => setHovered(m.id)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => {
                      setActiveModule(m.id)
                      setHovered(m.id)
                    }}
                    className={cn(
                      "group/tab relative flex shrink-0 items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] font-medium transition-all duration-300",
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-white/55 hover:bg-white/[0.06] hover:text-white",
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-3.5 w-3.5 transition-colors duration-300",
                        isActive ? "text-fuchsia-300" : "text-white/50 group-hover/tab:text-fuchsia-300",
                      )}
                    />
                    {m.label}
                    {m.tag && (
                      <span className="rounded-sm bg-fuchsia-500/20 px-1 py-px font-mono text-[8.5px] font-semibold tracking-wider text-fuchsia-300">
                        {m.tag}
                      </span>
                    )}
                    {isActive && (
                      <span
                        aria-hidden
                        className="absolute inset-x-2 -bottom-[8.5px] h-[2px] rounded-full bg-gradient-to-r from-fuchsia-400 to-violet-400"
                      />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Module preview pane */}
            <div
              className="relative min-h-[260px] p-4 sm:min-h-[280px] sm:p-5"
              onMouseLeave={() => setHovered(null)}
            >
              <ModulePreview id={focused} />
            </div>
          </div>

          {/* Floating mini KPI pill — top-right of frame */}
          <div className="absolute -top-3 right-4 hidden items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 backdrop-blur-md sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[10px] font-semibold text-emerald-300">100% answered</span>
          </div>

          {/* Floating mini latency pill — bottom-left of frame */}
          <div className="absolute -bottom-3 left-4 hidden items-center gap-1.5 rounded-full border border-white/15 bg-[#0a0612] px-3 py-1 shadow-lg sm:flex">
            <Sparkles className="h-3 w-3 text-fuchsia-300" />
            <span className="font-mono text-[10px] text-white/80">avg pickup 0.6s</span>
          </div>
        </div>
      </div>

      {/* ---------------- Stat strip ---------------- */}
      <div className="relative border-t border-white/10 bg-black/25 backdrop-blur-sm">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-white/[0.06] sm:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="group/stat relative overflow-hidden bg-[#0a0612] px-4 py-4 transition-colors duration-300 hover:bg-white/[0.03]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-y-full bg-gradient-to-b from-fuchsia-500/15 to-transparent opacity-0 transition-all duration-500 group-hover/stat:translate-y-0 group-hover/stat:opacity-100"
              />
              <div className="relative flex items-baseline gap-2">
                <span className="bg-gradient-to-r from-white via-fuchsia-100 to-violet-200 bg-clip-text font-mono text-2xl font-semibold text-transparent sm:text-3xl">
                  {s.value}
                </span>
              </div>
              <p className="relative mt-1 text-[11px] font-medium text-white/65 sm:text-xs">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  HoverHighlight — gradient underline reveal on hover                */
/* ------------------------------------------------------------------ */

function HoverHighlight({
  children,
  gradient = false,
}: {
  children: React.ReactNode
  gradient?: boolean
}) {
  return (
    <span className="group/hl relative inline-block cursor-default">
      <span
        className={cn(
          "transition-all duration-300",
          gradient
            ? "bg-gradient-to-r from-fuchsia-300 via-violet-200 to-fuchsia-200 bg-clip-text text-transparent"
            : "text-white",
        )}
      >
        {children}
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-1 left-0 right-0 h-[3px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-fuchsia-400 via-violet-400 to-fuchsia-300 transition-transform duration-500 ease-out group-hover/hl:scale-x-100"
      />
    </span>
  )
}

/* ------------------------------------------------------------------ */
/*  Module previews — each shows a meaningful slice of that product    */
/* ------------------------------------------------------------------ */

function ModulePreview({ id }: { id: ModuleId }) {
  return (
    <div key={id} className="animate-in fade-in duration-300">
      {id === "ai-recep" && <PreviewAIRecep />}
      {id === "voice-bot" && <PreviewVoiceBot />}
      {id === "dialer" && <PreviewDialer />}
      {id === "ivr" && <PreviewIVR />}
      {id === "whatsapp" && <PreviewWhatsApp />}
      {id === "monitor" && <PreviewMonitor />}
    </div>
  )
}

function PreviewAIRecep() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {/* Incoming call card */}
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:col-span-2">
        <div className="mb-2 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
            <PhoneIncoming className="h-3 w-3" />
            Incoming call
          </span>
          <span className="font-mono text-[10px] text-white/50">00:04</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-500 text-xs font-semibold text-white">
            AS
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-white">Aarav Sharma</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[9px] text-white/60">
                हिन्दी
              </span>
            </div>
            <span className="font-mono text-[10px] text-white/50">+91 98210 22140</span>
          </div>
          <div className="flex h-6 items-end gap-[2px]">
            {Array.from({ length: 7 }).map((_, i) => (
              <span
                key={i}
                className="block w-[2px] animate-wave rounded-full bg-fuchsia-400"
                style={{
                  height: `${6 + ((i * 5) % 16)}px`,
                  animationDelay: `${i * 0.07}s`,
                }}
              />
            ))}
          </div>
        </div>
        <div className="mt-2.5 rounded-lg border border-white/10 bg-black/30 p-2">
          <p className="text-[11px] text-white/80">"मुझे होम लोन के बारे में जानकारी चाहिए।"</p>
          <p className="mt-0.5 text-[10px] text-white/40">I need information about home loans.</p>
        </div>
        <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
          <span className="rounded-md bg-fuchsia-500/15 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-fuchsia-300">
            INTENT · Loan inquiry
          </span>
          <span className="rounded-md bg-emerald-500/15 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-emerald-300">
            CONFIDENCE · 94%
          </span>
          <span className="rounded-md bg-violet-500/15 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-violet-300">
            ROUTING → Sales · Mumbai
          </span>
        </div>
      </div>

      {/* Stats column */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">
        <Tile label="Calls today" value="1,248" tone="violet" />
        <Tile label="Answered" value="100%" tone="emerald" />
        <Tile label="Avg pickup" value="0.6s" tone="fuchsia" />
        <Tile label="Booked" value="38" tone="violet" />
      </div>
    </div>
  )
}

function PreviewVoiceBot() {
  const turns = [
    { from: "bot", text: "नमस्ते! मैं Kedeyo से बोल रहा हूँ। मैं आपकी कैसे मदद कर सकता हूँ?", lang: "Hindi" },
    { from: "user", text: "I want to check my order status.", lang: "English" },
    { from: "bot", text: "Sure — please share your order ID and I'll fetch it.", lang: "English" },
    { from: "user", text: "It's 4421.", lang: "English" },
    { from: "bot", text: "Order #4421 is out for delivery and arrives by 6 PM today.", lang: "English" },
  ]
  return (
    <div className="grid gap-3 sm:grid-cols-5">
      <div className="space-y-1.5 sm:col-span-3">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-fuchsia-300">
          Conversation transcript
        </span>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <ul className="space-y-1.5">
            {turns.map((t, i) => (
              <li key={i} className={cn("flex gap-2", t.from === "user" ? "justify-end" : "justify-start")}>
                <span
                  className={cn(
                    "max-w-[85%] rounded-lg px-2.5 py-1.5 text-[11px] leading-snug",
                    t.from === "bot"
                      ? "bg-fuchsia-500/15 text-fuchsia-50"
                      : "bg-white/10 text-white/85",
                  )}
                >
                  {t.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="space-y-2 sm:col-span-2">
        <Tile label="FAQs deflected" value="68%" tone="emerald" />
        <Tile label="Languages" value="Hi · En · Ta" tone="violet" />
        <Tile label="Avg cost / call" value="₹2.40" tone="fuchsia" />
      </div>
    </div>
  )
}

function PreviewDialer() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:col-span-2">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-fuchsia-300">
            Campaign · Mumbai Q3 Outreach
          </span>
          <span className="rounded-md bg-emerald-500/15 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-emerald-300">
            PREDICTIVE
          </span>
        </div>
        <div className="space-y-2">
          <ProgressRow label="Dialed" value={4820} max={6000} pct={80} color="fuchsia" />
          <ProgressRow label="Connected" value={1640} max={6000} pct={27} color="violet" />
          <ProgressRow label="Qualified" value={412} max={6000} pct={7} color="emerald" />
        </div>
        <div className="mt-2.5 flex items-center gap-2">
          <span className="rounded-md bg-white/5 px-1.5 py-0.5 font-mono text-[9px] text-white/60">
            AMD ON
          </span>
          <span className="rounded-md bg-white/5 px-1.5 py-0.5 font-mono text-[9px] text-white/60">
            DNC scrubbed
          </span>
          <span className="rounded-md bg-white/5 px-1.5 py-0.5 font-mono text-[9px] text-white/60">
            TRAI compliant
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">
        <Tile label="Contact rate" value="34%" tone="emerald" />
        <Tile label="Dials / agent" value="3×" tone="violet" />
        <Tile label="Active agents" value="24" tone="fuchsia" />
      </div>
    </div>
  )
}

function PreviewIVR() {
  const branches = [
    { key: "1", label: "Sales", queue: "2 free", color: "text-cyan-300", bg: "bg-cyan-500/10", bd: "border-cyan-500/30" },
    { key: "2", label: "Support", queue: "1 in queue", color: "text-emerald-300", bg: "bg-emerald-500/10", bd: "border-emerald-500/30" },
    { key: "3", label: "Billing", queue: "4 in queue", color: "text-amber-300", bg: "bg-amber-500/10", bd: "border-amber-500/30" },
    { key: "0", label: "Operator", queue: "Live", color: "text-fuchsia-300", bg: "bg-fuchsia-500/10", bd: "border-fuchsia-500/30" },
  ]
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:col-span-2">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-fuchsia-300">
            Drag-and-drop IVR
          </span>
          <span className="font-mono text-[9px] text-white/50">Hindi · English · Tamil</span>
        </div>
        <div className="mb-2 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-md border border-violet-500/30 bg-violet-500/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-violet-300">
            Welcome message
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-violet-500/40 to-transparent" />
          <span className="rounded-md bg-violet-500 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-white">
            Menu
          </span>
        </div>
        <div className="space-y-1">
          {branches.map((b) => (
            <div key={b.key} className="flex items-center gap-2">
              <span className={cn("flex h-5 w-5 shrink-0 items-center justify-center rounded-md border font-mono text-[10px] font-bold", b.bd, b.bg, b.color)}>
                {b.key}
              </span>
              <span className={cn("text-[11px] font-semibold", b.color)}>{b.label}</span>
              <div className="h-px flex-1 border-t border-dashed border-white/15" />
              <span className="font-mono text-[9px] text-white/50">{b.queue}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">
        <Tile label="Self-served" value="42%" tone="emerald" />
        <Tile label="Avg wait" value="18s" tone="violet" />
        <Tile label="Languages" value="3" tone="fuchsia" />
      </div>
    </div>
  )
}

function PreviewWhatsApp() {
  return (
    <div className="grid gap-3 sm:grid-cols-5">
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:col-span-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-fuchsia-300">
            Campaign · Diwali offer
          </span>
          <span className="rounded-md bg-emerald-500/15 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-emerald-300">
            DPDP · Approved template
          </span>
        </div>
        <div className="space-y-1.5">
          <div className="flex w-fit max-w-[85%] flex-col gap-0.5 rounded-lg rounded-tl-none bg-emerald-500/15 px-2.5 py-1.5">
            <span className="text-[11px] text-emerald-50">Hi Priya — flat 25% off on your wishlist this Diwali. Use code DIWALI25.</span>
            <span className="font-mono text-[9px] text-emerald-300/70">delivered · 11:42</span>
          </div>
          <div className="ml-auto flex w-fit max-w-[85%] flex-col gap-0.5 rounded-lg rounded-tr-none bg-white/10 px-2.5 py-1.5">
            <span className="text-[11px] text-white/85">Send the link?</span>
            <span className="font-mono text-[9px] text-white/50">read · 11:43</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:col-span-2 sm:grid-cols-1">
        <Tile label="Sent" value="48,210" tone="violet" />
        <Tile label="Read rate" value="92%" tone="emerald" />
        <Tile label="Replies" value="6,140" tone="fuchsia" />
      </div>
    </div>
  )
}

function PreviewMonitor() {
  const agents = [
    { name: "Anita", duration: "02:14", action: "Listen", actionColor: "text-emerald-300 bg-emerald-500/10 border-emerald-500/30" },
    { name: "Rohit", duration: "05:42", action: "Whisper", actionColor: "text-sky-300 bg-sky-500/10 border-sky-500/30" },
    { name: "Priya", duration: "00:38", action: "Barge", actionColor: "text-rose-300 bg-rose-500/10 border-rose-500/30" },
  ]
  return (
    <div className="grid gap-3 sm:grid-cols-5">
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:col-span-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-fuchsia-300">
            Live agents
          </span>
          <span className="font-mono text-[9px] text-white/50">3 active · 1 wrap-up</span>
        </div>
        <div className="space-y-1.5">
          {agents.map((a, i) => (
            <div key={a.name} className="flex items-center gap-2">
              <div className="relative shrink-0">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-semibold text-white">
                  {a.name[0]}
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full border border-[#0a0612] bg-emerald-400" />
                </span>
              </div>
              <span className="text-[11px] font-medium text-white">{a.name}</span>
              <span className="font-mono text-[9px] text-white/50">{a.duration}</span>
              <div className="flex flex-1 items-center justify-center gap-[1.5px]">
                {Array.from({ length: 12 }).map((_, j) => (
                  <span
                    key={j}
                    className="block w-[2px] animate-wave rounded-full bg-emerald-400/70"
                    style={{
                      height: `${4 + Math.abs(Math.sin((j + i) * 0.9)) * 10}px`,
                      animationDelay: `${(j + i) * 0.07}s`,
                    }}
                  />
                ))}
              </div>
              <span className={cn("shrink-0 rounded-md border px-1.5 py-0.5 font-mono text-[9px] font-medium", a.actionColor)}>
                {a.action}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:col-span-2 sm:grid-cols-1">
        <Tile label="Service level" value="98%" tone="emerald" />
        <Tile label="In queue" value="4" tone="violet" />
        <Tile label="QA score" value="A+" tone="fuchsia" />
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Reusable helpers                                                   */
/* ------------------------------------------------------------------ */

function Tile({ label, value, tone }: { label: string; value: string; tone: "fuchsia" | "violet" | "emerald" }) {
  const toneMap = {
    fuchsia: "from-fuchsia-500/15 to-fuchsia-500/0 text-fuchsia-100",
    violet: "from-violet-500/15 to-violet-500/0 text-violet-100",
    emerald: "from-emerald-500/15 to-emerald-500/0 text-emerald-100",
  }
  return (
    <div
      className={cn(
        "group/tile relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br p-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20",
        toneMap[tone],
      )}
    >
      <span className="block font-mono text-[9px] uppercase tracking-wider text-white/45">{label}</span>
      <span className="mt-0.5 block font-mono text-base font-semibold tabular-nums">{value}</span>
    </div>
  )
}

function ProgressRow({
  label,
  value,
  max,
  pct,
  color,
}: {
  label: string
  value: number
  max: number
  pct: number
  color: "fuchsia" | "violet" | "emerald"
}) {
  const colorMap = {
    fuchsia: "from-fuchsia-500 to-fuchsia-400",
    violet: "from-violet-500 to-violet-400",
    emerald: "from-emerald-500 to-emerald-400",
  }
  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between">
        <span className="text-[10px] text-white/65">{label}</span>
        <span className="font-mono text-[10px] text-white/85">
          {value.toLocaleString()}{" "}
          <span className="text-white/40">/ {max.toLocaleString()}</span>
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
        <div
          className={cn("h-full rounded-full bg-gradient-to-r transition-[width] duration-700", colorMap[color])}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
