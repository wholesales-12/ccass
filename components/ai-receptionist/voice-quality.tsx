"use client"

import { useEffect, useState } from "react"
import { ArrowLeftRight, FileText, Gauge, Globe2, Heart, Mic2, Volume2 } from "lucide-react"
import { cn } from "@/lib/utils"

const FEATURES = [
  {
    icon: Globe2,
    title: "Multilingual TTS",
    description: "Hindi, English & code-mixed Hinglish. Additional Indian languages available on request.",
  },
  {
    icon: FileText,
    title: "Real-time transcription",
    description: "Every word on every call — searchable, exportable and shareable with your team.",
  },
  {
    icon: Heart,
    title: "Sentiment & intent scoring",
    description: "Know which calls were hot leads vs. just shopping around — automatically tagged.",
  },
  {
    icon: ArrowLeftRight,
    title: "Barge-in support",
    description: "Callers can interrupt naturally — the AI listens, adjusts, and responds like a person.",
  },
]

const SENTIMENT_FRAMES = [
  { label: "Calm", value: 32, color: "from-emerald-400 to-emerald-500" },
  { label: "Curious", value: 58, color: "from-sky-400 to-sky-500" },
  { label: "Frustrated", value: 81, color: "from-amber-400 to-amber-500" },
  { label: "Resolved", value: 24, color: "from-emerald-400 to-emerald-500" },
]

export function VoiceQuality() {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setFrame((f) => (f + 1) % SENTIMENT_FRAMES.length), 1800)
    return () => clearInterval(t)
  }, [])

  const current = SENTIMENT_FRAMES[frame]

  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Visual */}
          <div className="relative order-2 lg:order-1">
            {/* Decorative blur */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 rounded-[40px] opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse at center, oklch(0.62 0.24 300 / 0.3), transparent 70%)",
              }}
            />

            <div className="relative overflow-hidden rounded-3xl border bg-card p-6 shadow-xl">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white">
                    <Mic2 className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Voice engine</div>
                    <div className="text-[10px] text-muted-foreground">Real-time analysis</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-600">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                  Active
                </div>
              </div>

              {/* Live waveform */}
              <div className="mt-5 rounded-2xl border bg-muted/40 p-5">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Volume2 className="h-3 w-3 text-primary" />
                    Live audio
                  </div>
                  <span className="font-mono text-foreground">−12 dB</span>
                </div>
                <div className="mt-3 flex h-16 items-center justify-center gap-[3px]">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <span
                      key={i}
                      className="w-[3px] rounded-full bg-gradient-to-t from-primary/50 to-accent animate-wave"
                      style={{
                        height: `${10 + ((i * 13) % 40)}px`,
                        animationDelay: `${i * 0.04}s`,
                        animationDuration: `${0.7 + (i % 5) * 0.12}s`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Sentiment meter */}
              <div className="mt-4 rounded-2xl border bg-background p-4">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 font-semibold text-foreground">
                    <Heart className="h-3.5 w-3.5 text-rose-500" />
                    Sentiment
                  </div>
                  <span className="font-mono text-muted-foreground">caller · live</span>
                </div>

                <div className="mt-3 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-foreground">{current.label}</span>
                    <span className="font-mono text-muted-foreground tabular-nums">{current.value}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${current.color} transition-all duration-700`}
                      style={{ width: `${current.value}%` }}
                    />
                  </div>
                </div>

                {/* Auto-action notice when frustrated */}
                <div
                  className={cn(
                    "mt-3 flex items-center gap-2 rounded-lg border px-3 py-2 text-[11px] transition-all",
                    current.label === "Frustrated"
                      ? "border-amber-300 bg-amber-50 text-amber-800"
                      : "border-border bg-muted/40 text-muted-foreground",
                  )}
                >
                  <Gauge className="h-3.5 w-3.5 shrink-0" />
                  {current.label === "Frustrated"
                    ? "Tone softened · Live transfer offered"
                    : "Conversation flowing naturally"}
                </div>
              </div>

              {/* Language switching pill */}
              <div className="mt-4 flex items-center justify-between rounded-xl border bg-background px-3 py-2.5">
                <div className="flex items-center gap-2">
                  <Globe2 className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium text-foreground">Language</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                  <span className="rounded bg-primary/10 px-1.5 py-0.5 font-semibold text-primary">EN</span>
                  <ArrowLeftRight className="h-3 w-3" />
                  <span className="rounded bg-primary/10 px-1.5 py-0.5 font-semibold text-primary">हिन्दी</span>
                  <span className="text-muted-foreground/60">· auto-detect</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Copy */}
          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
              <Mic2 className="h-3.5 w-3.5" />
              Sounds like a person
            </span>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Not a phone tree.{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                A real conversation.
              </span>
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              Kedeyo&apos;s voice engine combines human-grade text-to-speech, barge-in support, and real-time sentiment
              detection. If a caller sounds frustrated, the AI softens its tone, apologises, and offers a live transfer
              before the caller has to ask.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <li key={f.title} className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <f.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{f.title}</div>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{f.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
