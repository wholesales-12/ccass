"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import {
  ArrowRight,
  Phone,
  PhoneIncoming,
  Calendar,
  ShieldCheck,
  Globe2,
  Sparkles,
  Activity,
  PlayCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Three.js scene loaded client-side only (avoids SSR issues with WebGL)
const Hero3DScene = dynamic(() => import("./hero-3d-scene").then((m) => m.Hero3DScene), {
  ssr: false,
  loading: () => <div className="h-full w-full" />,
})

const LANGS = [
  "हिन्दी",
  "English",
  "தமிழ்",
  "తెలుగు",
  "বাংলা",
  "मराठी",
  "ગુજરાતી",
  "ಕನ್ನಡ",
  "ਪੰਜਾਬੀ",
  "മലയാളം",
]

export function ReceptionistHero() {
  const [lang, setLang] = useState(0)
  const [bookings, setBookings] = useState(38)

  useEffect(() => {
    const a = setInterval(() => setLang((i) => (i + 1) % LANGS.length), 1500)
    const b = setInterval(() => setBookings((n) => n + 1), 4200)
    return () => {
      clearInterval(a)
      clearInterval(b)
    }
  }, [])

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[#0a0612] pb-12 pt-24 lg:pb-20 lg:pt-28"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.45 0.22 295 / 0.45), transparent 65%), radial-gradient(ellipse 60% 50% at 80% 90%, oklch(0.62 0.24 300 / 0.3), transparent 70%), radial-gradient(ellipse 60% 50% at 10% 80%, oklch(0.55 0.2 280 / 0.25), transparent 70%)",
      }}
    >
      {/* Ambient grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(168,85,247,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(168,85,247,0.35) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 75% 70% at 50% 50%, black 30%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* TOP: Centered headline */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-500/[0.06] px-3 py-1 text-[11px] font-medium text-fuchsia-200 backdrop-blur sm:text-xs">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
            </span>
            AI Receptionist · Live in 5 minutes
          </div>

          <h1 className="mt-5 text-balance text-[2.25rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[4rem]">
            The voice that{" "}
            <span className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-fuchsia-200 bg-clip-text text-transparent">
              never sleeps.
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-white/70 sm:text-base">
            An AI receptionist that picks up every call in under a second, books appointments, qualifies leads
            and speaks{" "}
            <span className="font-semibold text-white">12+ Indian languages</span> &mdash; 24&times;7.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Button
              size="lg"
              className="h-11 rounded-full bg-white px-6 text-sm font-semibold text-[#0a0612] shadow-[0_10px_40px_-10px_rgba(232,121,249,0.6)] hover:bg-white/90 sm:h-12"
              asChild
            >
              <Link href="#demo">
                Start free trial
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 rounded-full border-white/20 bg-white/5 px-6 text-sm font-medium text-white backdrop-blur hover:bg-white/10 hover:text-white sm:h-12"
              asChild
            >
              <Link href="#how-it-works">
                <PlayCircle className="mr-1.5 h-4 w-4" />
                Hear a sample call
              </Link>
            </Button>
          </div>
        </div>

        {/* MIDDLE: 3D scene with floating UI cards */}
        <div className="relative mt-10 lg:mt-14">
          <div className="relative mx-auto h-[420px] w-full max-w-5xl sm:h-[480px] lg:h-[560px]">
            {/* Bottom radial glow under orb */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 50% 100%, oklch(0.62 0.24 300 / 0.45), transparent 70%)",
              }}
            />

            <Hero3DScene />

            {/* Floating UI cards positioned around the orb */}
            <FloatingCard
              className="left-2 top-6 sm:left-6 lg:left-10"
              animationDelay="0s"
              accent="fuchsia"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-fuchsia-500/20 text-fuchsia-300">
                  <PhoneIncoming className="h-3.5 w-3.5" />
                </span>
                <div>
                  <div className="text-[9px] font-semibold uppercase tracking-wider text-white/50">
                    Incoming &middot; Mumbai
                  </div>
                  <div className="font-mono text-[11px] text-white">+91 98210 22140</div>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard
              className="right-2 top-10 sm:right-6 lg:right-10"
              animationDelay="0.6s"
              accent="violet"
            >
              <div className="flex items-center gap-2">
                <Globe2 className="h-3.5 w-3.5 text-violet-300" />
                <div>
                  <div className="text-[9px] font-semibold uppercase tracking-wider text-white/50">
                    Detected
                  </div>
                  <div className="relative h-4 w-[80px] overflow-hidden text-[12px] font-semibold">
                    {LANGS.map((l, i) => (
                      <span
                        key={l}
                        className={cn(
                          "absolute inset-0 flex items-center text-white transition-all duration-500",
                          i === lang ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                        )}
                      >
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard
              className="bottom-24 left-2 sm:bottom-28 sm:left-6 lg:bottom-32 lg:left-12"
              animationDelay="1.2s"
              accent="fuchsia"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                <div>
                  <div className="text-[9px] font-semibold uppercase tracking-wider text-white/50">
                    Intent
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-medium text-white">Book appointment</span>
                    <span className="rounded-full bg-emerald-500/20 px-1.5 py-px text-[9px] font-semibold text-emerald-300">
                      96%
                    </span>
                  </div>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard
              className="bottom-20 right-2 sm:bottom-24 sm:right-6 lg:bottom-28 lg:right-12"
              animationDelay="1.8s"
              accent="violet"
            >
              <div className="flex items-center gap-2">
                <Calendar className="h-3.5 w-3.5 text-violet-300" />
                <div>
                  <div className="text-[9px] font-semibold uppercase tracking-wider text-white/50">
                    Booked today
                  </div>
                  <div className="font-mono text-[14px] font-semibold tabular-nums text-white">
                    {bookings}
                  </div>
                </div>
              </div>
            </FloatingCard>

            {/* Bottom-center latency pill */}
            <div
              className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-emerald-400/25 bg-emerald-500/[0.08] px-3 py-1.5 backdrop-blur-xl"
              style={{ animation: "rec-latency 6s ease-in-out infinite" }}
            >
              <div className="flex items-center gap-2 text-[11px]">
                <Activity className="h-3 w-3 text-emerald-300" />
                <span className="font-mono font-semibold text-emerald-300">280ms</span>
                <span className="text-white/50">avg pickup</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM: Trust strip */}
        <div className="mt-2 lg:mt-6">
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 backdrop-blur">
            <TrustItem icon={<Phone className="h-3.5 w-3.5" />} value="100%" label="Calls answered" />
            <Divider />
            <TrustItem icon={<Activity className="h-3.5 w-3.5" />} value="<1s" label="Pickup time" />
            <Divider />
            <TrustItem icon={<Globe2 className="h-3.5 w-3.5" />} value="12+" label="Languages" />
            <Divider />
            <TrustItem icon={<ShieldCheck className="h-3.5 w-3.5" />} value="DPDP" label="Compliant" />
            <Divider />
            <TrustItem icon={<Sparkles className="h-3.5 w-3.5" />} value="68%" label="AI resolved" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes rec-latency {
          0%, 100% { transform: translate(-50%, 0) }
          50% { transform: translate(-50%, -8px) }
        }
        @keyframes rec-card-float {
          0%, 100% { transform: translateY(0) }
          50% { transform: translateY(-10px) }
        }
      `}</style>
    </section>
  )
}

function FloatingCard({
  children,
  className,
  animationDelay,
  accent,
}: {
  children: React.ReactNode
  className?: string
  animationDelay?: string
  accent: "fuchsia" | "violet"
}) {
  return (
    <div
      className={cn(
        "absolute z-10 rounded-xl border bg-[#120a1f]/80 px-3 py-2 shadow-2xl backdrop-blur-xl",
        accent === "fuchsia"
          ? "border-fuchsia-400/20 shadow-[0_10px_40px_-15px_rgba(232,121,249,0.4)]"
          : "border-violet-400/20 shadow-[0_10px_40px_-15px_rgba(167,139,250,0.4)]",
        className,
      )}
      style={{
        animation: "rec-card-float 5s ease-in-out infinite",
        animationDelay,
      }}
    >
      {children}
    </div>
  )
}

function TrustItem({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode
  value: string
  label: string
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.06] text-fuchsia-300">
        {icon}
      </span>
      <div className="leading-tight">
        <div className="font-mono text-sm font-semibold text-white">{value}</div>
        <div className="text-[10px] text-white/50">{label}</div>
      </div>
    </div>
  )
}

function Divider() {
  return <span className="hidden h-6 w-px bg-white/10 sm:block" />
}
