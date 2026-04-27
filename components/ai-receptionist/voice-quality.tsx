"use client"

import { useEffect, useState } from "react"
import { ArrowLeftRight, FileText, Gauge, Globe2, Heart, Mic2, Volume2 } from "lucide-react"
import { cn } from "@/lib/utils"

const FEATURES = [
  {
    icon: Globe2,
    title: "Multilingual TTS",
    description: "Hindi, English & code-mixed Hinglish. 10+ Indian languages available.",
  },
  {
    icon: FileText,
    title: "Real-time transcription",
    description: "Every word on every call — searchable, exportable, shareable with your team.",
  },
  {
    icon: Heart,
    title: "Sentiment & intent scoring",
    description: "Hot leads vs. casual shoppers — automatically tagged in your dashboard.",
  },
  {
    icon: ArrowLeftRight,
    title: "Barge-in support",
    description: "Callers can interrupt naturally — the AI listens, adjusts, and responds like a person.",
  },
]

const SENTIMENT_FRAMES = [
  { label: "Calm", value: 32, color: "from-emerald-400 to-emerald-500", textColor: "text-emerald-600" },
  { label: "Curious", value: 58, color: "from-sky-400 to-sky-500", textColor: "text-sky-600" },
  { label: "Frustrated", value: 81, color: "from-amber-400 to-amber-500", textColor: "text-amber-600" },
  { label: "Resolved", value: 24, color: "from-emerald-400 to-emerald-500", textColor: "text-emerald-600" },
]

export function VoiceQuality() {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setFrame((f) => (f + 1) % SENTIMENT_FRAMES.length), 1800)
    return () => clearInterval(t)
  }, [])

  const current = SENTIMENT_FRAMES[frame]

  return (
    <section className="relative bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Left: open visual — no nested boxes */}
          <div className="relative order-2 lg:order-1 lg:col-span-6">
            {/* Decorative blur */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-x-6 -inset-y-12 -z-10"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.62 0.24 300 / 0.18), transparent 70%)",
              }}
            />

            <div className="relative mx-auto max-w-md">
              {/* Header row */}
              <div className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.18em]">
                <div className="flex items-center gap-2">
                  <Mic2 className="h-3.5 w-3.5 text-primary" />
                  <span className="font-semibold text-foreground">Voice engine</span>
                  <span className="text-muted-foreground/40">·</span>
                  <span className="text-muted-foreground">real-time analysis</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-600">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                  Active
                </div>
              </div>

              {/* Live waveform — full bleed, no card */}
              <div className="mt-8">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Volume2 className="h-3 w-3 text-primary" />
                    Live audio
                  </div>
                  <span className="text-foreground">−12 dB</span>
                </div>
                <div className="mt-4 flex h-24 items-center gap-[3px]">
                  {Array.from({ length: 60 }).map((_, i) => (
                    <span
                      key={i}
                      className="block w-[3px] flex-1 rounded-full bg-gradient-to-t from-primary/30 via-primary to-accent"
                      style={{
                        height: `${10 + ((i * 17 + 11) % 70)}%`,
                        animation: `vq-wave ${0.7 + (i % 5) * 0.12}s ease-in-out ${i * 0.04}s infinite alternate`,
                      }}
                    />
                  ))}
                </div>
                <span aria-hidden className="mt-1 block h-px w-full bg-border" />
              </div>

              {/* Sentiment readout */}
              <div className="mt-10">
                <div className="flex items-baseline justify-between">
                  <div className="flex items-center gap-2">
                    <Heart className="h-3.5 w-3.5 text-rose-500" />
                    <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-foreground">
                      Sentiment
                    </span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    caller · live
                  </span>
                </div>

                <div className="mt-4 flex items-baseline gap-3">
                  <span
                    className={`font-semibold leading-none tracking-tight transition-colors ${current.textColor}`}
                    style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
                  >
                    {current.label}
                  </span>
                  <span className="font-mono text-2xl font-semibold tabular-nums text-muted-foreground">
                    {current.value}%
                  </span>
                </div>

                <div className="mt-3 h-[3px] w-full overflow-hidden rounded-full bg-border">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${current.color} transition-all duration-700`}
                    style={{ width: `${current.value}%` }}
                  />
                </div>

                {/* Auto-action notice */}
                <p
                  className={cn(
                    "mt-4 flex items-center gap-2 text-[13px] transition-colors",
                    current.label === "Frustrated" ? "text-amber-700" : "text-muted-foreground",
                  )}
                >
                  <Gauge className="h-3.5 w-3.5 shrink-0" />
                  {current.label === "Frustrated"
                    ? "Tone softened · Live transfer offered"
                    : "Conversation flowing naturally"}
                </p>
              </div>

              {/* Language switching — typographic */}
              <div className="mt-10 flex items-center justify-between border-t border-border pt-5">
                <div className="flex items-center gap-2">
                  <Globe2 className="h-4 w-4 text-primary" />
                  <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-foreground">
                    Language
                  </span>
                </div>
                <div className="flex items-baseline gap-2 font-mono text-[12px] tabular-nums">
                  <span className="font-semibold text-primary">EN</span>
                  <ArrowLeftRight className="h-3 w-3 text-muted-foreground" />
                  <span className="font-semibold text-primary">हिन्दी</span>
                  <span className="text-[10px] text-muted-foreground">· auto-detect</span>
                </div>
              </div>
            </div>

            <style>{`
              @keyframes vq-wave {
                from { transform: scaleY(0.4) }
                to   { transform: scaleY(1)   }
              }
            `}</style>
          </div>

          {/* Right: copy */}
          <div className="order-1 lg:order-2 lg:col-span-6">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              <Mic2 className="h-3.5 w-3.5" />
              Sounds like a person
            </span>
            <h2 className="mt-4 text-balance text-[2rem] font-semibold leading-[1.05] tracking-tight text-foreground sm:text-[2.5rem] lg:text-[3rem]">
              Not a phone tree.{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                A real conversation.
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-[17px] leading-relaxed text-muted-foreground">
              Kedeyo&apos;s voice engine combines human-grade text-to-speech, barge-in support, and real-time
              sentiment detection. If a caller sounds frustrated, the AI softens its tone, apologises, and offers
              a live transfer before the caller has to ask.
            </p>

            {/* Features — 2-col list, no cards */}
            <ul className="mt-10 grid gap-y-7 sm:grid-cols-2 sm:gap-x-10">
              {FEATURES.map((f) => (
                <li key={f.title} className="border-t border-border pt-5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/25 bg-primary/[0.04] text-primary">
                      <f.icon className="h-3.5 w-3.5" />
                    </span>
                    <h3 className="text-[15px] font-semibold tracking-tight text-foreground">
                      {f.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                    {f.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
