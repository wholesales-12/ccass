"use client"

import { useEffect, useState } from "react"
import {
  Brain,
  Sparkles,
  Languages,
  Mic,
  Gauge,
  ShieldCheck,
  Waves,
  BarChart3,
  MessageSquareText,
  Bot,
  Zap,
  TrendingUp,
  Lock,
  CheckCircle2,
} from "lucide-react"

export function AiShowcase() {
  return (
    <section
      id="ai"
      className="relative overflow-hidden bg-[oklch(0.14_0.05_295)] py-24 text-white sm:py-32"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-grid-dark absolute inset-0 opacity-60" />
        <div className="absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-[120px]" />
        <div className="absolute -bottom-40 right-0 h-[400px] w-[600px] rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute top-1/2 left-0 h-[300px] w-[400px] rounded-full bg-purple-500/15 blur-[100px]" />
      </div>

      <FloatingParticles />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-fuchsia-400" />
            </span>
            <span className="text-xs font-medium tracking-wider text-white/80 uppercase">
              Kedeyo AI Intelligence Layer
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            The AI brain behind every{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-300 to-violet-400 bg-clip-text text-transparent">
              great conversation
            </span>
          </h2>
          <p className="mt-5 text-lg text-white/60 text-pretty">
            Six proprietary AI models working in parallel — so your team spends
            time on customers, not call scripts.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-6 md:grid-rows-[auto_auto_auto]">
          {/* Hero card — Intent Engine with live demo, takes 4 cols */}
          <IntentEngineCard />

          {/* Accuracy metric card, 2 cols */}
          <AccuracyCard />

          {/* Sentiment radar, 3 cols */}
          <SentimentCard />

          {/* Voice clone, 3 cols */}
          <VoiceCloneCard />

          {/* Languages, 2 cols */}
          <LanguagesCard />

          {/* Compliance, 2 cols */}
          <ComplianceCard />

          {/* Predictive, 2 cols */}
          <PredictiveCard />
        </div>

        {/* Capability marquee */}
        <div className="mt-20">
          <div className="mb-4 flex items-center justify-center gap-2 text-xs tracking-wider text-white/50 uppercase">
            <Zap className="h-3.5 w-3.5 text-fuchsia-400" />
            Shipping weekly — powered by Kedeyo AI
          </div>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <div className="animate-marquee flex w-max gap-3 py-2">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white/80 backdrop-blur-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const marqueeItems = [
  "Hindi · Tamil · Bengali · Marathi · Telugu · Gujarati",
  "Real-time transcription",
  "Barge-in detection",
  "Silence suppression",
  "Accent normalization",
  "Whisper coaching",
  "Auto-summarization",
  "PII redaction",
  "Emotion scoring",
  "Multi-turn memory",
  "Tool calling",
  "Voice cloning",
]

/* ============================ INTENT ENGINE CARD ========================== */

type FeedItem = {
  icon: React.ElementType
  label: string
  text: string
  tone: "neutral" | "positive" | "warning"
}

const feedSeed: FeedItem[] = [
  {
    icon: MessageSquareText,
    label: "Transcript · Hindi",
    text: '"Meri delivery kab aayegi?"',
    tone: "neutral",
  },
  {
    icon: Languages,
    label: "Translated",
    text: '"When will my delivery arrive?"',
    tone: "neutral",
  },
  {
    icon: Gauge,
    label: "Sentiment",
    text: "Anxious · 0.68 · escalation risk low",
    tone: "warning",
  },
  {
    icon: Bot,
    label: "Intent",
    text: "order.delivery_status · confidence 0.97",
    tone: "positive",
  },
  {
    icon: CheckCircle2,
    label: "Action",
    text: "Fetched tracking · replied in 0.8s",
    tone: "positive",
  },
]

function IntentEngineCard() {
  const [visible, setVisible] = useState(1)

  useEffect(() => {
    const id = setInterval(() => {
      setVisible((v) => (v >= feedSeed.length ? 1 : v + 1))
    }, 1400)
    return () => clearInterval(id)
  }, [])

  return (
    <BentoCard className="md:col-span-4 md:row-span-1" featured>
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/20 via-transparent to-violet-600/10" />
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />

      <div className="relative flex flex-col gap-6 p-7 sm:flex-row sm:items-start sm:gap-8">
        {/* Left */}
        <div className="flex-1">
          <div className="flex items-center gap-2 text-xs tracking-wider text-fuchsia-300 uppercase">
            <Brain className="h-3.5 w-3.5" />
            Intent Engine
          </div>
          <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Understands any caller
            <br />
            in <span className="text-fuchsia-300">real time</span>
          </h3>
          <p className="mt-3 text-sm text-white/60 text-pretty">
            Proprietary NLU trained on 1.2B+ Indian voice samples — catches
            intent, urgency, and emotion on the first word.
          </p>

          {/* Metrics row */}
          <div className="mt-6 grid grid-cols-3 gap-2">
            {[
              { label: "Intent acc.", value: "98.4%" },
              { label: "Languages", value: "12+" },
              { label: "Latency", value: "264ms" },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2"
              >
                <div className="text-lg font-bold text-white">{m.value}</div>
                <div className="text-[10px] tracking-wider text-white/50 uppercase">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — live decoding feed */}
        <div className="w-full sm:w-[340px]">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-3 backdrop-blur-md">
            <div className="mb-2.5 flex items-center justify-between px-1">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>
              <div className="text-[10px] tracking-wider text-white/40 uppercase">
                Live decode · call #4812
              </div>
            </div>

            <div className="space-y-1.5">
              {feedSeed.slice(0, visible).map((item, i) => {
                const Icon = item.icon
                const toneClasses =
                  item.tone === "positive"
                    ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                    : item.tone === "warning"
                      ? "border-amber-400/30 bg-amber-400/10 text-amber-200"
                      : "border-white/15 bg-white/5 text-white/85"
                const isLast = i === visible - 1
                return (
                  <div
                    key={i}
                    className={`flex items-start gap-2 rounded-lg border px-2.5 py-2 text-xs ${toneClasses}`}
                    style={isLast ? { animation: "slide-in 400ms ease-out" } : undefined}
                  >
                    <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="text-[9px] tracking-wider text-white/50 uppercase">
                        {item.label}
                      </div>
                      <div className="mt-0.5 leading-snug">{item.text}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </BentoCard>
  )
}

/* ============================== ACCURACY CARD ============================= */

function AccuracyCard() {
  return (
    <BentoCard className="md:col-span-2">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/15 to-transparent" />
      <div className="relative flex h-full flex-col justify-between p-6">
        <div>
          <div className="flex items-center gap-2 text-xs tracking-wider text-fuchsia-300 uppercase">
            <TrendingUp className="h-3.5 w-3.5" />
            Accuracy
          </div>
          <div className="mt-3 flex items-baseline gap-1.5">
            <div className="bg-gradient-to-br from-white to-fuchsia-200 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
              98.4
            </div>
            <div className="text-2xl font-semibold text-white/60">%</div>
          </div>
          <div className="mt-1 text-sm text-white/60">intent accuracy</div>
        </div>

        {/* Animated bars */}
        <div className="mt-4">
          <div className="flex items-end gap-1.5 h-16">
            {[0.4, 0.55, 0.5, 0.7, 0.65, 0.85, 0.8, 0.95, 0.9, 1].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-fuchsia-500/80 to-fuchsia-300"
                style={{
                  height: `${h * 100}%`,
                  animation: `grow-up 1.4s ease-out ${i * 60}ms both`,
                }}
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-[10px] text-white/40">
            <span>2023</span>
            <span className="text-fuchsia-300">Today</span>
          </div>
        </div>
      </div>
    </BentoCard>
  )
}

/* ============================ SENTIMENT CARD ============================== */

function SentimentCard() {
  const [tick, setTick] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1600)
    return () => clearInterval(id)
  }, [])

  const emotions = ["Calm", "Curious", "Anxious", "Happy", "Urgent"]
  const active = emotions[tick % emotions.length]

  return (
    <BentoCard className="md:col-span-3">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/15 via-transparent to-fuchsia-600/10" />

      <div className="relative flex h-full flex-col p-6">
        <div className="flex items-center gap-2 text-xs tracking-wider text-fuchsia-300 uppercase">
          <Gauge className="h-3.5 w-3.5" />
          Sentiment Radar
        </div>
        <h3 className="mt-2 text-xl font-semibold">Live mood tracking</h3>
        <p className="mt-1 text-sm text-white/60">
          14 emotion signals per second — nudging agents before frustration hits.
        </p>

        {/* Radar visualization */}
        <div className="relative mt-4 flex flex-1 items-center justify-center">
          <svg viewBox="0 0 200 140" className="h-full w-full max-h-[160px]">
            <defs>
              <radialGradient id="radarGrad" cx="50%" cy="100%" r="80%">
                <stop offset="0%" stopColor="oklch(0.75 0.2 310 / 0.4)" />
                <stop offset="100%" stopColor="oklch(0.75 0.2 310 / 0)" />
              </radialGradient>
            </defs>
            {/* Arcs */}
            {[30, 55, 80, 105].map((r) => (
              <path
                key={r}
                d={`M ${100 - r},100 A ${r},${r} 0 0 1 ${100 + r},100`}
                fill="none"
                stroke="oklch(1 0 0 / 0.08)"
                strokeWidth="1"
              />
            ))}
            {/* Ray lines */}
            {emotions.map((_, i) => {
              const angle = Math.PI - (i / (emotions.length - 1)) * Math.PI
              const x = 100 + Math.cos(angle) * 105
              const y = 100 - Math.sin(angle) * 105
              return (
                <line
                  key={i}
                  x1="100"
                  y1="100"
                  x2={x}
                  y2={y}
                  stroke="oklch(1 0 0 / 0.08)"
                  strokeWidth="1"
                />
              )
            })}
            {/* Filled fan */}
            <path
              d="M 100,100 L 20,100 A 80,80 0 0 1 180,100 Z"
              fill="url(#radarGrad)"
            />
            {/* Sweeping needle */}
            <g transform="translate(100 100)" className="[transform-box:fill-box] origin-center">
              <line
                x1="0"
                y1="0"
                x2={Math.cos(Math.PI - ((tick % emotions.length) / (emotions.length - 1)) * Math.PI) * 95}
                y2={-Math.sin(Math.PI - ((tick % emotions.length) / (emotions.length - 1)) * Math.PI) * 95}
                stroke="oklch(0.85 0.22 310)"
                strokeWidth="2"
                strokeLinecap="round"
                style={{ transition: "all 1s cubic-bezier(0.4,0,0.2,1)" }}
              />
              <circle r="5" fill="oklch(0.85 0.22 310)" />
            </g>
            {/* Labels */}
            {emotions.map((e, i) => {
              const angle = Math.PI - (i / (emotions.length - 1)) * Math.PI
              const x = 100 + Math.cos(angle) * 122
              const y = 100 - Math.sin(angle) * 122
              return (
                <text
                  key={e}
                  x={x}
                  y={y + 3}
                  textAnchor="middle"
                  className={e === active ? "fill-fuchsia-200" : "fill-white/40"}
                  fontSize="9"
                  fontFamily="system-ui"
                  style={{ transition: "fill 0.4s" }}
                >
                  {e}
                </text>
              )
            })}
          </svg>
        </div>

        <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-3">
          <div className="text-xs text-white/60">
            Current mood ·{" "}
            <span className="font-semibold text-fuchsia-300">{active}</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-[10px] text-emerald-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Live
          </div>
        </div>
      </div>
    </BentoCard>
  )
}

/* ============================= VOICE CLONE CARD =========================== */

function VoiceCloneCard() {
  return (
    <BentoCard className="md:col-span-3">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/15 via-transparent to-fuchsia-600/15" />

      <div className="relative flex h-full flex-col p-6">
        <div className="flex items-center gap-2 text-xs tracking-wider text-fuchsia-300 uppercase">
          <Mic className="h-3.5 w-3.5" />
          Voice Clone Studio
        </div>
        <h3 className="mt-2 text-xl font-semibold">
          Your brand voice, spoken by AI
        </h3>
        <p className="mt-1 text-sm text-white/60">
          Clone your CEO in 30 seconds — or pick from 200+ natural Indian voices.
        </p>

        {/* Waveform visualization */}
        <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-500 shadow-lg shadow-fuchsia-500/30">
                <Mic className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium">Priya · Hindi</div>
                <div className="text-[10px] text-white/50">Warm · Professional</div>
              </div>
            </div>
            <div className="text-[10px] text-white/50">0:24 / 0:30</div>
          </div>

          <div className="mt-4 flex h-14 items-center gap-[3px]">
            {Array.from({ length: 48 }).map((_, i) => {
              const h = 0.25 + Math.abs(Math.sin(i * 0.9)) * 0.75
              return (
                <div
                  key={i}
                  className="flex-1 rounded-full bg-gradient-to-b from-fuchsia-400 to-violet-500 animate-wave"
                  style={{
                    height: `${h * 100}%`,
                    animationDelay: `${i * 40}ms`,
                    animationDuration: `${1 + (i % 4) * 0.2}s`,
                    opacity: i < 32 ? 1 : 0.35,
                  }}
                />
              )
            })}
          </div>

          {/* Voice chips */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {["Priya · HI", "Arjun · EN", "Meera · TA", "Ravi · BN", "+ 196"].map(
              (v, i) => (
                <div
                  key={v}
                  className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${
                    i === 0
                      ? "bg-fuchsia-500/30 text-fuchsia-100 ring-1 ring-fuchsia-400/50"
                      : "bg-white/5 text-white/60"
                  }`}
                >
                  {v}
                </div>
              ),
            )}
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4 text-[11px] text-white/50">
          <span>&lt; 280ms latency end-to-end</span>
          <span className="flex items-center gap-1 text-fuchsia-300">
            <Sparkles className="h-3 w-3" />
            Human-grade
          </span>
        </div>
      </div>
    </BentoCard>
  )
}

/* =============================== LANGUAGES ================================ */

function LanguagesCard() {
  const [active, setActive] = useState(0)
  const langs = [
    { flag: "हि", name: "Hindi", script: "hi" },
    { flag: "த", name: "Tamil", script: "ta" },
    { flag: "বা", name: "Bengali", script: "bn" },
    { flag: "म", name: "Marathi", script: "mr" },
    { flag: "తె", name: "Telugu", script: "te" },
    { flag: "ગુ", name: "Gujarati", script: "gu" },
    { flag: "ಕ", name: "Kannada", script: "kn" },
    { flag: "മ", name: "Malayalam", script: "ml" },
    { flag: "ਪ", name: "Punjabi", script: "pa" },
    { flag: "ଓ", name: "Odia", script: "or" },
    { flag: "EN", name: "English", script: "en" },
    { flag: "+1", name: "Urdu", script: "ur" },
  ]

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % langs.length), 1000)
    return () => clearInterval(id)
  }, [langs.length])

  return (
    <BentoCard className="md:col-span-2">
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/15 to-transparent" />
      <div className="relative flex h-full flex-col p-6">
        <div className="flex items-center gap-2 text-xs tracking-wider text-fuchsia-300 uppercase">
          <Languages className="h-3.5 w-3.5" />
          12+ Languages
        </div>
        <h3 className="mt-2 text-xl font-semibold">Speaks every Indian dialect</h3>

        <div className="mt-4 grid grid-cols-4 gap-2">
          {langs.map((l, i) => (
            <div
              key={l.script}
              className={`flex aspect-square items-center justify-center rounded-xl border text-base font-semibold transition-all duration-300 ${
                i === active
                  ? "scale-110 border-fuchsia-400/60 bg-gradient-to-br from-fuchsia-500/30 to-violet-500/30 text-white shadow-lg shadow-fuchsia-500/20"
                  : "border-white/10 bg-white/5 text-white/60"
              }`}
            >
              {l.flag}
            </div>
          ))}
        </div>

        <div className="mt-auto pt-3 text-[11px] text-white/50">
          Now speaking:{" "}
          <span className="font-semibold text-fuchsia-300">
            {langs[active].name}
          </span>
        </div>
      </div>
    </BentoCard>
  )
}

/* ============================== COMPLIANCE ================================ */

function ComplianceCard() {
  return (
    <BentoCard className="md:col-span-2">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-transparent to-violet-600/15" />

      <div className="relative flex h-full flex-col p-6">
        <div className="flex items-center gap-2 text-xs tracking-wider text-fuchsia-300 uppercase">
          <ShieldCheck className="h-3.5 w-3.5" />
          Compliance Guard
        </div>
        <h3 className="mt-2 text-xl font-semibold">DPDP &amp; PCI-DSS ready</h3>
        <p className="mt-1 text-sm text-white/60">
          Automatic PII redaction baked in.
        </p>

        {/* Animated shield */}
        <div className="relative mt-auto flex items-center justify-center pt-4">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-2xl [animation:ping_3s_ease-out_infinite]" />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-emerald-400/40 bg-gradient-to-br from-emerald-500/20 to-violet-500/20">
              <ShieldCheck className="h-9 w-9 text-emerald-300" />
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-1.5">
          {["DPDP", "PCI-DSS", "SOC 2", "ISO 27001"].map((b) => (
            <span
              key={b}
              className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-200"
            >
              <Lock className="mr-1 inline h-2.5 w-2.5" />
              {b}
            </span>
          ))}
        </div>
      </div>
    </BentoCard>
  )
}

/* ============================= PREDICTIVE ================================= */

function PredictiveCard() {
  return (
    <BentoCard className="md:col-span-2">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/15 via-transparent to-fuchsia-600/10" />

      <div className="relative flex h-full flex-col p-6">
        <div className="flex items-center gap-2 text-xs tracking-wider text-fuchsia-300 uppercase">
          <BarChart3 className="h-3.5 w-3.5" />
          Predictive Insights
        </div>
        <h3 className="mt-2 text-xl font-semibold">Know before they churn</h3>
        <p className="mt-1 text-sm text-white/60">
          Every call scored for retention risk.
        </p>

        {/* Animated line chart */}
        <div className="mt-4 flex-1">
          <svg viewBox="0 0 200 80" className="h-full w-full">
            <defs>
              <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.75 0.2 310 / 0.4)" />
                <stop offset="100%" stopColor="oklch(0.75 0.2 310 / 0)" />
              </linearGradient>
            </defs>
            <path
              d="M0,60 Q25,55 40,50 T80,35 T120,30 T160,15 L200,10 L200,80 L0,80 Z"
              fill="url(#lineFill)"
            />
            <path
              d="M0,60 Q25,55 40,50 T80,35 T120,30 T160,15 L200,10"
              fill="none"
              stroke="oklch(0.85 0.22 310)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="400"
              strokeDashoffset="400"
              style={{ animation: "draw-line 2s ease-out 0.2s forwards" }}
            />
            <circle cx="200" cy="10" r="4" fill="oklch(0.85 0.22 310)">
              <animate
                attributeName="r"
                values="4;7;4"
                dur="1.6s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>

        <div className="flex items-baseline justify-between border-t border-white/10 pt-3">
          <div>
            <div className="text-2xl font-bold text-white">3.2×</div>
            <div className="text-[10px] tracking-wider text-white/50 uppercase">
              Faster QA cycles
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-xs font-semibold text-emerald-300">
              <TrendingUp className="h-3 w-3" />
              +42%
            </div>
            <div className="text-[10px] text-white/50">CSAT</div>
          </div>
        </div>
      </div>
    </BentoCard>
  )
}

/* =========================== SHARED BENTO CARD ============================ */

function BentoCard({
  children,
  className,
  featured,
}: {
  children: React.ReactNode
  className?: string
  featured?: boolean
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.04] ${
        featured
          ? "border-fuchsia-400/25 shadow-[0_0_40px_-10px_oklch(0.75_0.2_310/0.3)]"
          : "border-white/10 hover:border-fuchsia-400/25"
      } ${className || ""}`}
    >
      {/* Shine on hover */}
      <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-3xl bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,oklch(0.75_0.2_310/0.35)_90deg,transparent_180deg)] [animation:spin_4s_linear_infinite]" />
      </div>
      <div className="relative h-full rounded-3xl bg-[oklch(0.14_0.05_295)]/80">
        {children}
      </div>
    </div>
  )
}

/* ============================ Floating Particles ========================== */

function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 8 + 8,
    delay: Math.random() * 6,
  }))

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-fuchsia-300/40"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `float-slow ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes slide-in {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes grow-up {
          from { transform: scaleY(0); transform-origin: bottom; }
          to { transform: scaleY(1); transform-origin: bottom; }
        }
        @keyframes draw-line {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  )
}
