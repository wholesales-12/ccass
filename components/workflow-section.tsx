"use client"

import { useEffect, useRef, useState } from "react"
import {
  PhoneIncoming,
  Bot,
  Split,
  Headphones,
  CheckCircle2,
  Clock,
  TrendingUp,
  Star,
  IndianRupee,
  Mic,
  Phone,
  Sparkles,
  MicOff,
  Volume2,
  Grid3x3,
  PhoneOff,
  PhoneCall,
  UserCircle2,
  Zap,
  Brain,
  MessageSquare,
  FileText,
} from "lucide-react"
import { cn } from "@/lib/utils"

const STEPS = [
  {
    id: 0,
    icon: PhoneIncoming,
    tag: "Step 01 · 5 minutes",
    title: "Sign Up & Choose Your Number",
    desc: "Create your workspace, pick a virtual number (any city code in India or 100+ countries) or port your existing one. SMS DLT registration is handled inside the platform.",
    highlights: ["Indian + global numbers", "Port existing number", "DLT inside platform"],
  },
  {
    id: 1,
    icon: Split,
    tag: "Step 02 · 15 minutes",
    title: "Build Your IVR & Add Agents",
    desc: "Drag-and-drop your IVR menu, upload greetings or generate them with AI text-to-speech in Hindi, English or Tamil, and add agents with role-based permissions.",
    highlights: ["Drag-and-drop IVR", "AI text-to-speech", "Role-based access"],
  },
  {
    id: 2,
    icon: Headphones,
    tag: "Step 03 · Day 1",
    title: "Go Live & Start Conversations",
    desc: "Inbound calls land. Outbound campaigns dial. WhatsApp campaigns send. Recording is on. Live dashboards show what's happening — all from the first hour.",
    highlights: ["Inbound + outbound", "Recording on", "Live dashboards"],
  },
  {
    id: 3,
    icon: Bot,
    tag: "Step 04 · Week 1",
    title: "Add AI in Layers",
    desc: "Switch on the Voice Bot for high-volume FAQs. Turn on AI summaries. Set up agent assist scripts. Each switch you flip removes hours of repetitive work from your team.",
    highlights: ["Voice Bot", "AI summaries", "Agent assist"],
  },
  {
    id: 4,
    icon: CheckCircle2,
    tag: "Step 05 · Ongoing",
    title: "Optimise with Reports",
    desc: "Use the 50+ reports and AI analytics to find the queues that bleed, the agents that excel, the campaigns that convert and the IVR steps that lose people. Improve. Repeat.",
    highlights: ["50+ reports", "AI analytics", "Continuous improvement"],
  },
] as const

const STATS = [
  { icon: Clock, value: "< 8s", label: "Avg. wait time" },
  { icon: TrendingUp, value: "92%", label: "First call resolution" },
  { icon: Star, value: "4.8/5", label: "Customer rating" },
  { icon: IndianRupee, value: "40%", label: "Cost reduction" },
]

export function WorkflowSection() {
  const [active, setActive] = useState(0)
  const stepRefs = useRef<Array<HTMLLIElement | null>>([])

  // Scroll-driven active step via IntersectionObserver
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top-center of viewport
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) {
          const id = Number((visible[0].target as HTMLElement).dataset.stepId)
          if (!Number.isNaN(id)) setActive(id)
        }
      },
      {
        // Trigger when step is in the middle 40% of viewport
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )
    stepRefs.current.forEach((el) => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="workflow" className="relative bg-secondary/40">
      {/* Soft backgrounds */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,oklch(0.62_0.24_300/0.08),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_100%_80%,oklch(0.45_0.22_295/0.06),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            <Sparkles className="h-3 w-3" />
            How Kedeyo works
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Live in 5 minutes. Scale in 5 hours.{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Optimised in 5 days.
            </span>
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Most contact center go-lives take six weeks. Kedeyo takes a working morning. Here is the exact path most
            Indian teams follow from sign-up to first revenue call.
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground/80">
            <span className="h-1 w-1 animate-pulse rounded-full bg-accent" />
            Scroll through the 5 steps
          </div>
        </div>

        <div className="relative mt-12 lg:flex lg:gap-16">
          {/* LEFT: Step list - this scrolls normally */}
          <ol className="relative flex flex-1 flex-col gap-6 lg:gap-8">
            {/* Vertical connector */}
            <div aria-hidden className="absolute left-5 top-6 bottom-6 w-px bg-border lg:left-6 lg:top-7 lg:bottom-7" />
            {/* Animated connector fill */}
            <div
              aria-hidden
              className="absolute left-5 top-6 w-px bg-gradient-to-b from-primary to-accent transition-all duration-700 ease-out lg:left-6 lg:top-7"
              style={{
                height: `calc(${(active / (STEPS.length - 1)) * 100}% - 48px)`,
              }}
            />

            {STEPS.map((s, idx) => {
              const Icon = s.icon
              const isActive = active === s.id
              const isDone = active > s.id
              return (
                <li
                  key={s.id}
                  data-step-id={s.id}
                  ref={(el) => {
                    stepRefs.current[idx] = el
                  }}
                  className="scroll-mt-28"
                >
                  <div
                    className={cn(
                      "group relative flex items-start gap-4 rounded-2xl border p-5 transition-all duration-500",
                      isActive
                        ? "border-primary/30 bg-card shadow-[0_12px_40px_-18px_oklch(0.45_0.22_295/0.35)] scale-[1.01]"
                        : "border-transparent bg-transparent",
                    )}
                  >
                    {/* Icon bubble */}
                    <div
                      className={cn(
                        "relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-500",
                        isActive
                          ? "bg-primary text-primary-foreground scale-110"
                          : isDone
                            ? "bg-accent/15 text-accent"
                            : "bg-muted text-muted-foreground",
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      {isActive && (
                        <span
                          aria-hidden
                          className="absolute inset-0 animate-ping rounded-lg bg-primary/40"
                          style={{ animationDuration: "1.6s" }}
                        />
                      )}
                      {isDone && (
                        <span
                          aria-hidden
                          className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-sm"
                        >
                          <CheckCircle2 className="h-3 w-3" />
                        </span>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={cn(
                            "font-mono text-[10px] font-semibold uppercase tracking-wider",
                            isActive ? "text-accent" : "text-muted-foreground",
                          )}
                        >
                          {s.tag}
                        </span>
                        {isActive && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                            Live
                          </span>
                        )}
                      </div>
                      <h3
                        className={cn(
                          "mt-0.5 text-base font-semibold tracking-tight transition-colors lg:text-lg",
                          isActive ? "text-foreground" : "text-foreground/80",
                        )}
                      >
                        {s.title}
                      </h3>
                      <p
                        className={cn(
                          "mt-1 text-[13px] leading-relaxed text-muted-foreground transition-opacity duration-300",
                          isActive ? "opacity-100" : "opacity-70",
                        )}
                      >
                        {s.desc}
                      </p>

                      {/* Highlights chips — only for active step */}
                      {isActive && (
                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                          {s.highlights.map((h) => (
                            <span
                              key={h}
                              className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>

          {/* RIGHT: Sticky phone - stays fixed in viewport while steps scroll */}
          <div className="hidden w-[380px] shrink-0 lg:block">
            <div className="sticky top-28">
              <PhoneVisualizer active={active} />
            </div>
          </div>
        </div>

        {/* Mobile: Show phone at the end */}
        <div className="relative mx-auto mt-10 max-w-[300px] lg:hidden">
          <PhoneVisualizer active={active} />
        </div>

        {/* Stats bar */}
        <div className="mt-12 grid grid-cols-2 gap-3 rounded-2xl border border-primary/10 bg-card/70 p-3 shadow-sm backdrop-blur-sm md:mt-16 md:grid-cols-4 md:gap-4 md:p-4">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="group flex items-center gap-3 rounded-xl p-3 transition hover:bg-primary/5"
            >
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">{value}</div>
                <div className="text-xs font-medium text-muted-foreground">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* --------------------- Phone visualizer (shorter, richer) --------------------- */

function PhoneVisualizer({ active }: { active: number }) {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* Floating side badges */}
      <SideBadge
        position="left"
        top="6%"
        icon={Brain}
        title="Intent"
        value="Order tracking"
        active={active >= 1}
      />
      <SideBadge
        position="right"
        top="36%"
        icon={Zap}
        title="Latency"
        value="< 280ms"
        active={active >= 2}
      />
      <SideBadge
        position="left"
        top="62%"
        icon={FileText}
        title="AI Summary"
        value="Auto-drafted"
        active={active >= 4}
      />

      {/* Phone frame */}
      <div
        className="relative mx-auto aspect-[9/16] w-full overflow-hidden rounded-[2.5rem] border-[10px] border-foreground/90 bg-background shadow-[0_40px_80px_-30px_oklch(0.25_0.05_280/0.5)]"
      >
        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-foreground" />

        {/* Status bar */}
        <div className="relative z-10 flex items-center justify-between bg-background px-5 pt-3 text-[11px] font-medium text-foreground">
          <span>9:41</span>
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Kedeyo Live
          </span>
        </div>

        {/* Screen content */}
        <div className="relative h-full w-full">
          {active === 0 && <IncomingCallScreen />}
          {active === 1 && <BotTalkingScreen />}
          {active === 2 && <RoutingScreen />}
          {active === 3 && <AgentChatScreen />}
          {active === 4 && <ResolutionScreen />}
        </div>

        {/* Bottom call controls (always present, changes subtly) */}
        {active < 4 && (
          <div className="absolute inset-x-0 bottom-0 z-20 border-t border-border bg-background/95 px-5 pb-5 pt-4 backdrop-blur">
            <div className="mb-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
              <span className="flex items-center gap-1">
                <span className="h-1 w-1 animate-pulse rounded-full bg-accent" />
                AES-256 · Encrypted
              </span>
              <span>{active === 0 ? "00:00" : active === 1 ? "00:14" : active === 2 ? "00:22" : "00:38"}</span>
            </div>
            <div className="flex items-center justify-between">
              <CallBtn icon={MicOff} label="Mute" />
              <CallBtn icon={Grid3x3} label="Keypad" />
              <CallBtn icon={Volume2} label="Speaker" active />
              <button
                className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-white shadow-lg transition-transform hover:scale-105"
                aria-label="End call"
              >
                <PhoneOff className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function SideBadge({
  position,
  top,
  icon: Icon,
  title,
  value,
  active,
}: {
  position: "left" | "right"
  top: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  value: string
  active: boolean
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute z-20 hidden items-center gap-2 rounded-xl border border-primary/20 bg-card p-2.5 shadow-lg transition-all duration-500 md:flex",
        position === "left" ? "-left-8" : "-right-8",
        active ? "translate-x-0 opacity-100 animate-float-slow" : position === "left" ? "-translate-x-4 opacity-0" : "translate-x-4 opacity-0",
      )}
      style={{ top, animationDelay: position === "left" ? "0.3s" : "0.8s" }}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="text-xs font-semibold text-foreground">{value}</div>
      </div>
    </div>
  )
}

function CallBtn({ icon: Icon, label, active }: { icon: React.ComponentType<{ className?: string }>; label: string; active?: boolean }) {
  return (
    <button
      className="flex flex-col items-center gap-1"
      aria-label={label}
    >
      <span
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-full border transition",
          active ? "border-primary/30 bg-primary/10 text-primary" : "border-border bg-background text-foreground hover:border-primary/30 hover:text-primary",
        )}
      >
        <Icon className="h-4.5 w-4.5" />
      </span>
      <span className="text-[9px] uppercase tracking-wider text-muted-foreground">{label}</span>
    </button>
  )
}

/* ---- Screens ---- */

function IncomingCallScreen() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-between pb-40 pt-14">
      <div className="text-center">
        <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Incoming call
        </div>
        <div className="mt-1 text-[11px] text-muted-foreground">+91 98210 22140 · New Delhi</div>
      </div>

      {/* Animated rings */}
      <div className="relative flex h-32 w-32 items-center justify-center">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            aria-hidden
            className="absolute inset-0 rounded-full border border-primary/30 animate-ping"
            style={{ animationDuration: "2s", animationDelay: `${i * 0.6}s` }}
          />
        ))}
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg">
          <PhoneIncoming className="h-8 w-8" />
        </div>
      </div>

      <div className="w-full px-6">
        <div className="flex items-center justify-between">
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-white">
            <PhoneOff className="h-5 w-5" />
          </button>
          <div className="text-center">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Swipe to answer
            </div>
            <div className="mt-2 inline-flex h-1 w-16 items-center overflow-hidden rounded-full bg-muted">
              <span className="h-full w-1/2 animate-pulse bg-accent" />
            </div>
          </div>
          <button className="relative flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg">
            <span className="absolute inset-0 animate-ping rounded-full bg-accent/40" />
            <PhoneCall className="relative h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

function BotTalkingScreen() {
  return (
    <div className="absolute inset-0 flex flex-col pb-40 pt-3">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-border px-5 pb-3 pt-2">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
          <Bot className="h-5 w-5 text-primary-foreground" />
          <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3 items-center justify-center rounded-full border-2 border-background bg-green-500" />
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">Kedeyo AI</div>
          <div className="text-[10px] text-muted-foreground">Voice bot · Hindi</div>
        </div>
        <div className="ml-auto flex items-end gap-0.5">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="w-0.5 rounded-full bg-primary animate-wave"
              style={{ height: `${8 + ((i * 5) % 14)}px`, animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      {/* Transcript */}
      <div className="flex-1 space-y-2 overflow-hidden px-4 py-3">
        <Bubble from="bot" hi="नमस्ते! मैं केदेयो AI हूं।" en="Hi! I'm Kedeyo AI." />
        <Bubble from="customer" hi="मेरा ऑर्डर कहां है?" en="Where's my order?" />
        <Bubble from="bot" hi="एक सेकंड, चेक कर रही हूं…" en="One second, checking…" typing />
      </div>

      {/* Intent detection pill */}
      <div className="absolute left-4 right-4 bottom-44 rounded-xl border border-primary/20 bg-card p-2.5 shadow-sm">
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          <Brain className="h-3 w-3 text-primary" />
          Intent detected
        </div>
        <div className="mt-0.5 flex items-center justify-between">
          <span className="text-xs font-semibold text-foreground">Order tracking</span>
          <span className="font-mono text-[10px] text-accent">94%</span>
        </div>
        <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-muted">
          <div className="h-full rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: "94%" }} />
        </div>
      </div>
    </div>
  )
}

function RoutingScreen() {
  return (
    <div className="absolute inset-0 flex flex-col pb-40 pt-3">
      <div className="border-b border-border px-5 pb-3 pt-2 text-center">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Routing to best agent
        </div>
      </div>
      {/* Routing graph */}
      <div className="relative flex-1">
        <svg viewBox="0 0 300 300" className="h-full w-full">
          <defs>
            <linearGradient id="route-ai" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#0891b2" />
            </linearGradient>
            <linearGradient id="route-active" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
          {/* Center node */}
          <circle cx="150" cy="50" r="20" fill="url(#route-ai)" />
          <text x="150" y="54" textAnchor="middle" fontSize="10" fontWeight="600" fill="white">
            AI
          </text>
          {/* Candidate agents */}
          {[
            { x: 60, y: 170, label: "PS", color: "#f59e0b" },
            { x: 150, y: 190, label: "RK", active: true, color: "#10b981" },
            { x: 240, y: 170, label: "AM", color: "#6366f1" },
          ].map((n, i) => (
            <g key={i}>
              <line
                x1="150"
                y1="70"
                x2={n.x}
                y2={n.y - 18}
                stroke={n.active ? "#10b981" : "#e5e7eb"}
                strokeWidth={n.active ? "2" : "1.5"}
                strokeDasharray={n.active ? "0" : "4 4"}
                opacity={n.active ? 1 : 0.6}
              />
              <circle
                cx={n.x}
                cy={n.y}
                r={n.active ? 22 : 16}
                fill={n.active ? "url(#route-active)" : n.color}
                opacity={n.active ? 1 : 0.2}
              >
                {n.active && (
                  <animate attributeName="r" values="22;26;22" dur="1.4s" repeatCount="indefinite" />
                )}
              </circle>
              <text
                x={n.x}
                y={n.y + 4}
                textAnchor="middle"
                fontSize="10"
                fontWeight="600"
                fill={n.active ? "white" : n.color}
              >
                {n.label}
              </text>
              <text x={n.x} y={n.y + 40} textAnchor="middle" fontSize="9" fill="#9ca3af">
                {n.active ? "Match · 98%" : "Busy"}
              </text>
            </g>
          ))}
          {/* Flying dot */}
          <circle cx="150" cy="50" r="4" fill="#10b981">
            <animateMotion dur="1.8s" repeatCount="indefinite" path="M 0 0 L 0 140" />
          </circle>
        </svg>
      </div>
      <div className="mx-4 mb-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-3">
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-emerald-600">
          <Split className="h-3 w-3" />
          Skill match
        </div>
        <div className="mt-0.5 text-xs text-foreground">
          Hindi · Orders · Tier 2 · Priority queue
        </div>
      </div>
    </div>
  )
}

function AgentChatScreen() {
  return (
    <div className="absolute inset-0 flex flex-col pb-40 pt-3">
      <div className="flex items-center gap-3 border-b border-border px-5 pb-3 pt-2">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-semibold text-primary-foreground">
          PS
          <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3 items-center justify-center rounded-full border-2 border-background bg-green-500" />
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">Agent · Priya S.</div>
          <div className="text-[10px] text-muted-foreground">Connected · 00:42</div>
        </div>
      </div>

      <div className="flex-1 space-y-2 overflow-hidden px-4 py-3">
        <Bubble from="agent" hi="Priya speaking. I've pulled up your order." en="" />
        <Bubble from="customer" hi="When will it arrive?" en="" />
        <Bubble from="agent" hi="Out for delivery · 6 PM today." en="" />
      </div>

      {/* AI assist card */}
      <div className="absolute left-3 right-3 bottom-44 rounded-xl border border-primary/20 bg-card p-2.5 shadow-sm">
        <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
          <Sparkles className="h-3 w-3" />
          AI Assist · suggested reply
        </div>
        <div className="mt-0.5 text-xs text-foreground">
          &ldquo;I&apos;ve shared the tracking link on SMS just now.&rdquo;
        </div>
      </div>
    </div>
  )
}

function ResolutionScreen() {
  return (
    <div className="absolute inset-0 flex flex-col pt-3">
      <div className="flex items-center justify-between border-b border-border px-5 pb-3 pt-2">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
            <CheckCircle2 className="h-4 w-4" />
          </div>
          <div>
            <div className="text-sm font-semibold text-foreground">Call resolved</div>
            <div className="text-[10px] text-muted-foreground">Duration · 02:14</div>
          </div>
        </div>
        <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-[10px] font-semibold text-green-600">
          Closed
        </span>
      </div>

      <div className="flex-1 space-y-3 overflow-hidden px-4 py-3">
        {/* AI Summary */}
        <div className="rounded-xl border border-primary/15 bg-primary/5 p-3">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
            <FileText className="h-3 w-3" />
            AI Summary
          </div>
          <p className="mt-1 text-xs leading-relaxed text-foreground">
            Customer asked about order status. Agent confirmed delivery at 6 PM &amp; shared tracking link via SMS.
          </p>
          <div className="mt-2 flex flex-wrap gap-1">
            {["#order-tracking", "#delivery", "#resolved"].map((t) => (
              <span
                key={t}
                className="rounded-full bg-card px-2 py-0.5 font-mono text-[9px] font-medium text-primary"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* CSAT */}
        <div className="rounded-xl border border-border bg-card p-3">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Customer rated this call
          </div>
          <div className="mt-1.5 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-yellow-400 text-yellow-400 animate-in zoom-in duration-300"
                style={{ animationDelay: `${i * 120}ms` }}
              />
            ))}
            <span className="ml-2 text-sm font-semibold text-foreground">5.0</span>
          </div>
        </div>

        {/* CRM sync */}
        <div className="rounded-xl border border-border bg-card p-3">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            <UserCircle2 className="h-3 w-3 text-accent" />
            Synced to CRM · Salesforce
          </div>
          <div className="mt-1 flex items-center justify-between text-xs">
            <span className="text-foreground">Case #ORD-84213</span>
            <span className="text-muted-foreground">just now</span>
          </div>
        </div>
      </div>

      {/* Next call strip */}
      <div className="mx-4 mb-4 flex items-center justify-between rounded-xl border border-accent/20 bg-accent/5 p-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-accent">
          <Phone className="h-3.5 w-3.5" />
          Next call incoming
        </div>
        <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-semibold text-accent">
          Queue · 3
        </span>
      </div>
    </div>
  )
}

function Bubble({
  from,
  hi,
  en,
  typing,
}: {
  from: "bot" | "customer" | "agent"
  hi: string
  en?: string
  typing?: boolean
}) {
  const isRight = from === "customer"
  const bubbleClass =
    from === "customer"
      ? "bg-primary text-primary-foreground"
      : from === "agent"
        ? "bg-accent/15 text-foreground border border-accent/20"
        : "bg-secondary text-foreground"
  return (
    <div className={cn("flex", isRight ? "justify-end" : "justify-start")}>
      <div className={cn("max-w-[80%] rounded-2xl px-3 py-2 text-xs animate-in fade-in slide-in-from-bottom-1", bubbleClass)}>
        {typing ? (
          <div className="flex items-center gap-1 py-1">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-current" style={{ animationDelay: "0s" }} />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-current" style={{ animationDelay: "0.15s" }} />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-current" style={{ animationDelay: "0.3s" }} />
          </div>
        ) : (
          <>
            <div>{hi}</div>
            {en && (
              <div className={cn("mt-0.5 text-[10px]", from === "customer" ? "text-primary-foreground/70" : "text-muted-foreground")}>
                {en}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
