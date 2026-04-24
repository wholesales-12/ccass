"use client"

import { useEffect, useState } from "react"
import {
  Activity,
  Zap,
  Globe2,
  ShieldCheck,
  Languages,
  TrendingUp,
  Radio,
  Users,
  Clock,
  Star,
  Bot,
} from "lucide-react"

const SPARK = [40, 55, 50, 45, 58, 52, 68, 62, 75, 70, 82, 78, 88, 84]
const SPARK_PREV = [24, 30, 22, 38, 30, 48, 40, 55, 48, 62, 58, 72, 68, 80]
const CITIES = [
  "Delhi NCR",
  "Mumbai",
  "Bengaluru",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
]
const LANGS = ["Hindi", "English", "Tamil", "Telugu", "Bengali", "Marathi", "Gujarati", "Kannada", "Punjabi"]
const LANG_CHIPS = ["हि", "EN", "த", "తె", "বা", "म", "ગુ", "ಕ", "ਪੰ"]

export function TrustBar() {
  const [calls, setCalls] = useState(2_412_884)
  const [city, setCity] = useState(0)
  const [lang, setLang] = useState(0)
  const [agents, setAgents] = useState(8_524)

  useEffect(() => {
    const c = setInterval(() => setCalls((n) => n + Math.floor(Math.random() * 5) + 1), 820)
    const ct = setInterval(() => setCity((i) => (i + 1) % CITIES.length), 1600)
    const lg = setInterval(() => setLang((i) => (i + 1) % LANGS.length), 1200)
    const a = setInterval(() => setAgents((n) => n + (Math.random() > 0.5 ? 1 : -1)), 1800)
    return () => {
      clearInterval(c)
      clearInterval(ct)
      clearInterval(lg)
      clearInterval(a)
    }
  }, [])

  return (
    <section className="relative border-b border-border bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,oklch(0.62_0.24_300/0.06),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* Header */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <Radio className="h-3.5 w-3.5 text-accent" />
            Live network activity
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[11px] text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" />
            DPDP · TRAI · SOC 2 · ISO 27001
          </div>
        </div>

        {/* Row 1: Calls counter (lg-7) + AI Resolution (lg-5) */}
        <div className="grid grid-cols-12 gap-4">
          {/* Calls counter */}
          <div className="col-span-12 overflow-hidden rounded-2xl border border-border bg-card p-5 lg:col-span-7">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  <Activity className="h-3.5 w-3.5 text-accent" />
                  Calls handled this month
                </div>
                <div className="mt-3 font-mono text-3xl font-semibold tabular-nums tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  {calls.toLocaleString("en-IN")}
                </div>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-accent">
                  <TrendingUp className="h-3.5 w-3.5" />
                  <span className="font-semibold">+18.2%</span>
                  <span className="text-muted-foreground">vs last month</span>
                </div>
              </div>
              <div className="text-right text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                <div>Peak</div>
                <div className="mt-1 font-mono text-sm text-foreground">14,820/min</div>
                <div className="mt-3 hidden sm:block">Active agents</div>
                <div className="mt-1 hidden font-mono text-sm text-foreground tabular-nums sm:block">
                  {agents.toLocaleString("en-IN")}
                </div>
              </div>
            </div>

            {/* Dual sparkline */}
            <svg viewBox="0 0 280 70" className="mt-4 h-16 w-full sm:h-20" preserveAspectRatio="none">
              <defs>
                <linearGradient id="tb-a" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.62 0.24 300)" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="oklch(0.62 0.24 300)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="tb-b" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="oklch(0.45 0.22 295)" />
                  <stop offset="100%" stopColor="oklch(0.62 0.24 300)" />
                </linearGradient>
              </defs>
              <path
                d={`M 0 70 ${SPARK.map((v, i) => `L ${(i / (SPARK.length - 1)) * 280} ${70 - v * 0.6}`).join(" ")} L 280 70 Z`}
                fill="url(#tb-a)"
              />
              <path
                d={`M 0 ${70 - SPARK[0] * 0.6} ${SPARK.map((v, i) => `L ${(i / (SPARK.length - 1)) * 280} ${70 - v * 0.6}`).join(" ")}`}
                fill="none"
                stroke="url(#tb-b)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d={`M 0 ${70 - SPARK_PREV[0] * 0.4} ${SPARK_PREV.map((v, i) => `L ${(i / (SPARK_PREV.length - 1)) * 280} ${70 - v * 0.4}`).join(" ")}`}
                fill="none"
                stroke="oklch(0.45 0.22 295 / 0.35)"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                strokeLinecap="round"
              />
              <circle cx="280" cy={70 - SPARK[SPARK.length - 1] * 0.6} r="4" fill="oklch(0.62 0.24 300)">
                <animate attributeName="r" values="4;7;4" dur="1.6s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0.4;1" dur="1.6s" repeatCount="indefinite" />
              </circle>
            </svg>

            <div className="mt-2 flex items-center justify-between text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              <span>00:00</span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-3 rounded-full bg-primary" />
                This month
              </span>
              <span className="hidden items-center gap-2 sm:flex">
                <span className="h-0.5 w-3 border-t border-dashed border-primary/50" />
                Last month
              </span>
              <span>now</span>
            </div>
          </div>

          {/* AI Resolution gauge + breakdown */}
          <div className="col-span-12 overflow-hidden rounded-2xl border border-border bg-card p-5 lg:col-span-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                <Bot className="h-3.5 w-3.5 text-accent" />
                AI Resolution breakdown
              </div>
              <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold text-accent">
                Last 24h
              </span>
            </div>
            <div className="mt-4 grid grid-cols-5 items-center gap-4">
              {/* Gauge */}
              <div className="col-span-2 flex items-center justify-center">
                <svg viewBox="0 0 120 80" className="h-20 w-full max-w-[140px]">
                  <defs>
                    <linearGradient id="gauge-g" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="oklch(0.45 0.22 295)" />
                      <stop offset="100%" stopColor="oklch(0.62 0.24 300)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 10 70 A 50 50 0 0 1 110 70"
                    fill="none"
                    stroke="oklch(0.92 0.015 295)"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 10 70 A 50 50 0 0 1 110 70"
                    fill="none"
                    stroke="url(#gauge-g)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray="157"
                    strokeDashoffset="50"
                  />
                  <text x="60" y="58" textAnchor="middle" className="fill-foreground" fontSize="20" fontWeight="700">
                    68%
                  </text>
                  <text x="60" y="72" textAnchor="middle" className="fill-muted-foreground" fontSize="8">
                    Zero-touch
                  </text>
                </svg>
              </div>
              {/* Breakdown bars */}
              <div className="col-span-3 space-y-2.5">
                {[
                  { l: "Bot self-serve", v: 68, c: "bg-primary" },
                  { l: "Agent assisted", v: 24, c: "bg-accent" },
                  { l: "Escalated", v: 8, c: "bg-muted-foreground/40" },
                ].map((b) => (
                  <div key={b.l}>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-muted-foreground">{b.l}</span>
                      <span className="font-mono font-semibold text-foreground">{b.v}%</span>
                    </div>
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-secondary">
                      <div className={`h-full rounded-full ${b.c}`} style={{ width: `${b.v}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Languages (lg-4) + India map (lg-4) + Latency radar (lg-4) */}
          {/* Languages */}
          <div className="col-span-12 overflow-hidden rounded-2xl border border-border bg-card p-5 md:col-span-6 lg:col-span-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                <Languages className="h-3.5 w-3.5 text-accent" />
                Speaking right now
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">12+</span>
            </div>
            <div className="relative mt-3 h-8">
              {LANGS.map((l, i) => (
                <span
                  key={l}
                  className={`absolute inset-0 flex items-center text-2xl font-semibold tracking-tight text-foreground transition-all duration-500 ${
                    i === lang ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                  }`}
                >
                  {l}
                </span>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {LANG_CHIPS.map((s, i) => (
                <span
                  key={s}
                  className={`flex h-7 min-w-7 items-center justify-center rounded-md px-2 text-xs font-semibold transition-all duration-500 ${
                    i === lang ? "scale-110 bg-primary text-primary-foreground shadow-sm" : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-3 border-t border-border pt-3 text-[11px] text-muted-foreground">
              Native voice · low-latency · barge-in ready
            </div>
          </div>

          {/* India dot-map */}
          <div className="col-span-12 overflow-hidden rounded-2xl border border-border bg-card p-5 md:col-span-6 lg:col-span-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                <Globe2 className="h-3.5 w-3.5 text-accent" />
                Active across India
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">120+ cities</span>
            </div>
            <div className="mt-3 flex items-center gap-4">
              <div className="relative h-20 w-24 flex-none">
                <svg viewBox="0 0 110 95" className="h-full w-full">
                  {Array.from({ length: 40 }).map((_, i) => {
                    const x = 8 + (i % 8) * 12 + (i % 3) * 2
                    const y = 8 + Math.floor(i / 8) * 17 + (i % 2) * 2
                    const active = i % 7 === city % 7 || i % 9 === city % 9
                    return (
                      <circle
                        key={i}
                        cx={x}
                        cy={y}
                        r={active ? 2.5 : 1.3}
                        fill={active ? "oklch(0.62 0.24 300)" : "oklch(0.85 0.04 295)"}
                      >
                        {active && (
                          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.4s" repeatCount="indefinite" />
                        )}
                      </circle>
                    )
                  })}
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Call just placed in
                </div>
                <div className="relative mt-1 h-7 overflow-hidden">
                  {CITIES.map((c, i) => (
                    <div
                      key={c}
                      className={`absolute inset-0 flex items-center text-lg font-semibold text-foreground transition-all duration-500 ${
                        i === city ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                      }`}
                    >
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-1">
              {CITIES.slice(0, 6).map((c, i) => (
                <span
                  key={c}
                  className={`rounded-full px-2 py-0.5 text-[10px] font-medium transition-colors ${
                    i === city % 6 ? "bg-accent/10 text-accent" : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Latency radar */}
          <div className="col-span-12 overflow-hidden rounded-2xl border border-border bg-card p-5 md:col-span-12 lg:col-span-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                <Zap className="h-3.5 w-3.5 text-accent" />
                Voice AI latency
              </div>
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
                Healthy
              </span>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-mono text-3xl font-semibold tracking-tight text-foreground">280</span>
              <span className="text-sm font-semibold text-muted-foreground">ms</span>
              <span className="ml-auto text-[11px] text-muted-foreground">Target &lt; 400ms</span>
            </div>
            {/* Bar chart */}
            <div className="mt-3 flex h-12 items-end gap-1">
              {[32, 28, 35, 30, 26, 31, 24, 29, 27, 25, 28, 26, 30, 24, 28, 26, 25, 27, 24, 28].map((v, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-primary/30 to-accent"
                  style={{ height: `${(v / 40) * 100}%` }}
                />
              ))}
            </div>
            <div className="mt-2 flex items-center justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
              <span>20s ago</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-500" />
                Live
              </span>
              <span>now</span>
            </div>
          </div>

          {/* Row 3: 4 stat pills */}
          {[
            { v: "5,000+", l: "Businesses", sub: "Startups to Fortune 500", icon: Users },
            { v: "2M+", l: "Calls daily", sub: "Peak-load tested", icon: Activity },
            { v: "4.8/5", l: "CSAT score", sub: "Post-call survey", icon: Star },
            { v: "6 min", l: "Go-live time", sub: "From signup to first call", icon: Clock },
          ].map((s) => (
            <div
              key={s.l}
              className="group relative col-span-6 overflow-hidden rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_8px_30px_-10px_oklch(0.62_0.24_300/0.25)] md:col-span-3"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/10 opacity-0 transition-opacity group-hover:opacity-100"
              />
              <div className="relative flex items-start gap-3">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <div className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">{s.v}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {s.l}
                  </div>
                  <div className="mt-0.5 truncate text-[10px] text-muted-foreground/80">{s.sub}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
