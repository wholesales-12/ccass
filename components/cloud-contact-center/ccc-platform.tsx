"use client"

import { useEffect, useState } from "react"
import {
  Headphones,
  Activity,
  Brain,
  Inbox,
  Phone,
  MessageSquare,
  Mail,
  MessagesSquare,
  Mic,
  PhoneOff,
  PhoneForwarded,
  Pause,
  CheckCircle2,
} from "lucide-react"

/**
 * Inside the platform — alternating left/right editorial blocks.
 * Each block: one micro-diagram + one set of copy. No card chrome.
 */

export function CCCPlatform() {
  return (
    <section className="relative bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Section heading */}
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-fuchsia-600">
              Inside the Kedeyo platform
            </p>
            <h2
              className="mt-4 text-balance font-semibold leading-[1.06] tracking-tight text-foreground"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Not marketing screenshots.{" "}
              <span className="bg-gradient-to-r from-fuchsia-600 to-violet-600 bg-clip-text text-transparent">
                The actual interface.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-pretty text-[15.5px] leading-relaxed text-muted-foreground">
              Four surfaces your team uses every day — agent desktop, supervisor
              dashboard, AI router, and the omnichannel inbox that ties them together.
            </p>
          </div>
        </div>

        {/* Block 1 — Agent Desktop */}
        <Block
          eyebrow="01 · Agent Desktop"
          title="Every conversation, one screen."
          desc="When a call or WhatsApp message lands, the agent sees the customer&apos;s full history, sentiment score and open tickets — without switching tabs."
          bullets={[
            "Live conversation panel with full customer context",
            "AI sentiment detection flags frustrated callers in real time",
            "Screen-pop with order, lifetime value and recent tickets",
            "One-click hold, mute, transfer, conference, warm handover",
          ]}
          Icon={Headphones}
          accent="fuchsia"
          diagram={<AgentDesktopDiagram />}
          align="right"
        />

        {/* Block 2 — Supervisor */}
        <Block
          eyebrow="02 · Supervisor Dashboard"
          title="Monitor 200 agents in real time."
          desc="Live view of every conversation. See who&apos;s on a call, where queues are building, and whose AHT is breaking SLA — whisper coaching is one click away."
          bullets={[
            "Live agent status with call duration timers",
            "Whisper, listen and barge-in from the same row",
            "Custom alerts on SLA, AHT and queue thresholds",
          ]}
          Icon={Activity}
          accent="violet"
          diagram={<SupervisorDiagram />}
          align="left"
        />

        {/* Block 3 — AI Routing */}
        <Block
          eyebrow="03 · AI Routing"
          title="The right agent, every time."
          desc="Kedeyo reads caller history, detected language and issue type, then connects the call to the agent most likely to resolve it on the first try. Average routing decision: 8 seconds."
          bullets={[
            "Language detection across major Indian languages",
            "Sticky agent — repeat callers reach the person they spoke to last",
            "Skill, queue, time-of-day, VIP and after-hours rules",
            "Callback offers when queue exceeds threshold",
          ]}
          Icon={Brain}
          accent="indigo"
          diagram={<RoutingDiagram />}
          align="right"
        />

        {/* Block 4 — Omnichannel Inbox */}
        <Block
          eyebrow="04 · Omnichannel Inbox"
          title="Four channels, one timeline."
          desc="A customer starts on WhatsApp, calls back later, then emails. Your agent sees one conversation — not three disconnected tickets."
          bullets={[
            "Official WhatsApp Business API with green-tick verification",
            "Bot-to-human handoff with full transcript context",
            "Unified customer timeline across voice, WhatsApp, email and chat",
          ]}
          Icon={Inbox}
          accent="emerald"
          diagram={<InboxDiagram />}
          align="left"
        />
      </div>
    </section>
  )
}

/* ---------------- Block ---------------- */

type BlockProps = {
  eyebrow: string
  title: string
  desc: string
  bullets: string[]
  Icon: typeof Headphones
  accent: "fuchsia" | "violet" | "indigo" | "emerald"
  diagram: React.ReactNode
  align: "left" | "right"
}

const ACCENT_TEXT: Record<BlockProps["accent"], string> = {
  fuchsia: "text-fuchsia-600",
  violet: "text-violet-600",
  indigo: "text-indigo-600",
  emerald: "text-emerald-600",
}

function Block({ eyebrow, title, desc, bullets, Icon, accent, diagram, align }: BlockProps) {
  const isRightDiagram = align === "right"
  return (
    <div className="mt-20 grid gap-12 border-t border-border pt-14 lg:grid-cols-12 lg:items-center lg:gap-16">
      <div className={`lg:col-span-5 ${isRightDiagram ? "lg:order-1" : "lg:order-2"}`}>
        <div className={`flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.22em] ${ACCENT_TEXT[accent]}`}>
          <Icon className="h-3.5 w-3.5" />
          <span>{eyebrow}</span>
        </div>
        <h3
          className="mt-4 text-balance font-semibold leading-tight tracking-tight text-foreground"
          style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
        >
          {title}
        </h3>
        <p
          className="mt-4 text-pretty text-[15px] leading-relaxed text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: desc }}
        />
        <ul className="mt-5 space-y-2.5">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-foreground/85">
              <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${ACCENT_TEXT[accent]}`} />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={`lg:col-span-7 ${isRightDiagram ? "lg:order-2" : "lg:order-1"}`}>
        {diagram}
      </div>
    </div>
  )
}

/* ---------------- Diagrams ---------------- */

function AgentDesktopDiagram() {
  return (
    <div className="relative">
      {/* caller header */}
      <div className="flex items-end justify-between border-b border-border pb-4">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-fuchsia-600">
            Active call · 02:14
          </div>
          <div className="mt-1 text-[20px] font-semibold tracking-tight text-foreground">
            Priya Sharma
          </div>
          <div className="font-mono text-[11px] text-muted-foreground">
            +91 98••• ••2140 · Mumbai · Hindi
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <ToolBtn Icon={Mic} label="Mute" />
          <ToolBtn Icon={Pause} label="Hold" />
          <ToolBtn Icon={PhoneForwarded} label="Transfer" />
          <ToolBtn Icon={PhoneOff} label="End" tone="rose" />
        </div>
      </div>

      {/* sentiment bar */}
      <div className="mt-5 flex items-center gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Sentiment
        </span>
        <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-border">
          <span className="absolute inset-y-0 left-0 w-[72%] rounded-full bg-gradient-to-r from-amber-400 via-emerald-400 to-emerald-500" />
          <span
            className="absolute -top-1 h-3 w-3 rounded-full border-2 border-background bg-emerald-500"
            style={{ left: "calc(72% - 6px)" }}
          />
        </div>
        <span className="font-mono text-[11px] font-semibold text-emerald-600">Positive</span>
      </div>

      {/* context columns */}
      <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3">
        {[
          { k: "LTV", v: "₹48,200" },
          { k: "Tickets", v: "3 open" },
          { k: "Last order", v: "#A92314" },
          { k: "Tier", v: "Gold · 18 mo" },
          { k: "Last call", v: "Anita · 4d ago" },
          { k: "Channel mix", v: "WA · Voice · Email" },
        ].map((c) => (
          <div key={c.k} className="flex flex-col">
            <span className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-muted-foreground">
              {c.k}
            </span>
            <span className="mt-1 text-[14px] font-semibold tracking-tight text-foreground">
              {c.v}
            </span>
          </div>
        ))}
      </div>

      {/* live transcript */}
      <div className="mt-6 border-t border-border pt-4">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Live transcript
        </div>
        <p className="mt-2 text-[15px] leading-relaxed text-foreground">
          “मेरा order कब deliver होगा? Tracking ID
          <span className="ml-1 rounded bg-fuchsia-50 px-1.5 py-0.5 font-mono text-[12px] text-fuchsia-700">
            #A92314
          </span>
          {" "}— please check.”
        </p>
        <p className="mt-1 text-[13px] italic text-muted-foreground">
          When will my order be delivered? Tracking #A92314 — please check.
        </p>
      </div>
    </div>
  )
}

function ToolBtn({ Icon, label, tone = "default" }: { Icon: typeof Mic; label: string; tone?: "default" | "rose" }) {
  return (
    <button
      type="button"
      aria-label={label}
      className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors ${
        tone === "rose"
          ? "border-rose-200 bg-rose-50 text-rose-600 hover:bg-rose-100"
          : "border-border bg-white text-foreground/70 hover:bg-muted"
      }`}
    >
      <Icon className="h-3.5 w-3.5" />
    </button>
  )
}

function SupervisorDiagram() {
  const [tick, setTick] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setTick((x) => x + 1), 1000)
    return () => clearInterval(t)
  }, [])

  const agents = [
    { name: "Anita S.", queue: "Sales · Hindi", duration: 134, slaPct: 88, status: "On call", tone: "emerald" },
    { name: "Rohit M.", queue: "Support · EN", duration: 67, slaPct: 96, status: "On call", tone: "violet" },
    { name: "Meera P.", queue: "Billing · Tamil", duration: 0, slaPct: 91, status: "Wrap-up", tone: "fuchsia" },
    { name: "Karan T.", queue: "Sales · Marathi", duration: 312, slaPct: 62, status: "On call · breach", tone: "rose" },
  ]

  return (
    <div className="relative">
      {/* live wallboard tiles */}
      <div className="grid grid-cols-3 gap-6 border-b border-border pb-6">
        {[
          { k: "Live calls", v: "42" },
          { k: "In queue", v: "08" },
          { k: "Avg wait", v: "12s" },
        ].map((t) => (
          <div key={t.k}>
            <div
              className="bg-gradient-to-r from-fuchsia-600 to-violet-600 bg-clip-text font-semibold leading-none tracking-tight text-transparent"
              style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
            >
              {t.v}
            </div>
            <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              {t.k}
            </div>
          </div>
        ))}
      </div>

      {/* agent rows */}
      <div className="mt-5 space-y-3">
        {agents.map((a) => {
          const live = (a.duration + (a.duration > 0 ? tick : 0)) || 0
          const m = Math.floor(live / 60)
          const s = String(live % 60).padStart(2, "0")
          const dot =
            a.tone === "rose"
              ? "bg-rose-500"
              : a.tone === "emerald"
              ? "bg-emerald-500"
              : a.tone === "violet"
              ? "bg-violet-500"
              : "bg-fuchsia-500"
          return (
            <div key={a.name} className="grid grid-cols-12 items-center gap-3 border-b border-border/60 pb-3 last:border-b-0">
              <div className="col-span-5 flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  {a.duration > 0 && (
                    <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${dot} opacity-60`} />
                  )}
                  <span className={`relative inline-flex h-2 w-2 rounded-full ${dot}`} />
                </span>
                <span className="text-[14px] font-semibold tracking-tight text-foreground">{a.name}</span>
                <span className="font-mono text-[10.5px] text-muted-foreground">{a.queue}</span>
              </div>
              <div className="col-span-2 font-mono text-[12px] tabular-nums text-foreground/85">
                {a.duration > 0 ? `${m}:${s}` : "—"}
              </div>
              <div className="col-span-3">
                <div className="relative h-1 overflow-hidden rounded-full bg-border">
                  <span
                    className={`absolute inset-y-0 left-0 rounded-full ${
                      a.slaPct < 70 ? "bg-rose-500" : a.slaPct < 90 ? "bg-amber-500" : "bg-emerald-500"
                    }`}
                    style={{ width: `${a.slaPct}%` }}
                  />
                </div>
                <div className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted-foreground">
                  SLA {a.slaPct}%
                </div>
              </div>
              <div className="col-span-2 flex justify-end gap-1">
                {["W", "L", "B"].map((t) => (
                  <button
                    key={t}
                    type="button"
                    className="flex h-6 w-6 items-center justify-center rounded-full border border-border text-[10px] font-bold text-muted-foreground transition-colors hover:border-fuchsia-300 hover:text-fuchsia-600"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-3 flex items-center justify-end gap-3 font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted-foreground">
        <span>W · whisper</span>
        <span>L · listen</span>
        <span>B · barge-in</span>
      </div>
    </div>
  )
}

function RoutingDiagram() {
  return (
    <div className="relative h-[380px]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 380" fill="none" aria-hidden>
        <defs>
          <linearGradient id="route-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(99,102,241,0)" />
            <stop offset="50%" stopColor="rgba(99,102,241,0.7)" />
            <stop offset="100%" stopColor="rgba(217,70,239,0)" />
          </linearGradient>
        </defs>
        {/* Caller node */}
        {[
          { y: 60, label: "Hindi · Repeat", color: "rgba(217,70,239,0.85)" },
          { y: 190, label: "English · VIP", color: "rgba(99,102,241,0.85)" },
          { y: 320, label: "Tamil · After-hours", color: "rgba(124,58,237,0.85)" },
        ].map((c, i) => {
          const targetY = i === 0 ? 100 : i === 1 ? 200 : 280
          return (
            <g key={i}>
              <path
                d={`M 60 ${c.y} C 200 ${c.y}, 260 ${targetY}, 320 ${targetY}`}
                stroke="rgba(15,23,42,0.12)"
                strokeWidth="1.5"
              />
              <path
                d={`M 60 ${c.y} C 200 ${c.y}, 260 ${targetY}, 320 ${targetY}`}
                stroke={c.color}
                strokeWidth="2"
                strokeDasharray="6 8"
                style={{ animation: `ccc-flow-r 1.6s linear ${i * 0.4}s infinite` }}
              />
            </g>
          )
        })}
        {/* Router → agents */}
        {[
          { y: 100, name: "Anita · Sales · Hindi" },
          { y: 200, name: "Rohit · Support · EN · VIP" },
          { y: 280, name: "Meera · Billing · Tamil" },
        ].map((a, i) => (
          <g key={i}>
            <path
              d={`M 360 ${a.y} L 540 ${a.y}`}
              stroke="url(#route-line)"
              strokeWidth="2"
              strokeDasharray="6 8"
              style={{ animation: `ccc-flow-r 1.6s linear ${i * 0.4 + 0.6}s infinite` }}
            />
          </g>
        ))}
      </svg>

      {/* Caller labels */}
      {[
        { y: 60, label: "Priya · Mumbai", meta: "Hindi · Repeat caller", Icon: Phone, accent: "text-fuchsia-600", bg: "bg-fuchsia-50" },
        { y: 190, label: "Arjun · Delhi", meta: "EN · VIP tier", Icon: Phone, accent: "text-indigo-600", bg: "bg-indigo-50" },
        { y: 320, label: "Suresh · Chennai", meta: "Tamil · 11 PM", Icon: Phone, accent: "text-violet-600", bg: "bg-violet-50" },
      ].map((c, i) => (
        <div key={i} className="absolute flex items-center gap-3" style={{ left: 0, top: c.y - 22 }}>
          <div className={`flex h-10 w-10 items-center justify-center rounded-full ${c.bg}`}>
            <c.Icon className={`h-4 w-4 ${c.accent}`} />
          </div>
          <div>
            <div className="text-[13px] font-semibold tracking-tight text-foreground">{c.label}</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{c.meta}</div>
          </div>
        </div>
      ))}

      {/* Router center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <span aria-hidden className="absolute inset-0 -m-3 rounded-full border border-indigo-300/50" style={{ animation: "ccc-halo 3s ease-out infinite" }} />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-600 shadow-[0_18px_40px_-10px_rgba(99,102,241,0.6)]">
            <Brain className="h-7 w-7 text-white" />
          </div>
        </div>
        <div className="mt-2 text-center">
          <div className="text-[11.5px] font-semibold text-foreground">AI Router</div>
          <div className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted-foreground">avg 8s</div>
        </div>
      </div>

      {/* Agents right */}
      {[
        { y: 100, name: "Anita", role: "Sales · Hindi · Sticky" },
        { y: 200, name: "Rohit", role: "Support · EN · VIP queue" },
        { y: 280, name: "Meera", role: "Billing · Tamil · After-hours" },
      ].map((a, i) => (
        <div key={i} className="absolute flex items-center justify-end gap-3 text-right" style={{ right: 0, top: a.y - 18 }}>
          <div>
            <div className="text-[13px] font-semibold tracking-tight text-foreground">{a.name}</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{a.role}</div>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-indigo-200 bg-indigo-50">
            <Headphones className="h-3.5 w-3.5 text-indigo-600" />
          </div>
        </div>
      ))}

      <style>{`@keyframes ccc-flow-r { to { stroke-dashoffset: -28; } }`}</style>
    </div>
  )
}

function InboxDiagram() {
  const events = [
    { Icon: MessageSquare, label: "WhatsApp · 14:02", text: "Hi, where is my order #A92314?", tone: "emerald" },
    { Icon: Phone, label: "Voice · 16:48", text: "Same caller — wants ETA confirmation", tone: "fuchsia" },
    { Icon: Mail, label: "Email · 21:11", text: "Forwarded shipping invoice for review", tone: "amber" },
    { Icon: MessagesSquare, label: "Web chat · next day 09:30", text: "Thanks — order received, all good.", tone: "violet" },
  ]
  const tone = (t: string) =>
    t === "emerald"
      ? { dot: "bg-emerald-500", text: "text-emerald-700", bg: "bg-emerald-50" }
      : t === "fuchsia"
      ? { dot: "bg-fuchsia-500", text: "text-fuchsia-700", bg: "bg-fuchsia-50" }
      : t === "amber"
      ? { dot: "bg-amber-500", text: "text-amber-700", bg: "bg-amber-50" }
      : { dot: "bg-violet-500", text: "text-violet-700", bg: "bg-violet-50" }

  return (
    <div className="relative">
      <div className="flex items-end justify-between border-b border-border pb-4">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-600">
            One conversation
          </div>
          <div className="mt-1 text-[18px] font-semibold tracking-tight text-foreground">
            Customer #C0481 — Priya Sharma
          </div>
        </div>
        <div className="font-mono text-[10.5px] text-muted-foreground">4 channels · 18h span</div>
      </div>

      {/* timeline */}
      <ol className="relative mt-6 space-y-5 pl-6">
        <span aria-hidden className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-emerald-300 via-fuchsia-300 to-violet-300" />
        {events.map((e) => {
          const t = tone(e.tone)
          return (
            <li key={e.label} className="relative">
              <span className={`absolute -left-[19px] top-1 flex h-4 w-4 items-center justify-center rounded-full ${t.bg}`}>
                <span className={`h-2 w-2 rounded-full ${t.dot}`} />
              </span>
              <div className="flex items-center gap-2">
                <e.Icon className={`h-3.5 w-3.5 ${t.text}`} />
                <span className={`font-mono text-[10.5px] uppercase tracking-[0.18em] ${t.text}`}>
                  {e.label}
                </span>
              </div>
              <p className="mt-1 text-[14px] leading-relaxed text-foreground/85">{e.text}</p>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
