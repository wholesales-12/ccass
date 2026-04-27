import { ShieldCheck, Lock, FileCheck, Building2 } from "lucide-react"

const STANDARDS = [
  {
    icon: FileCheck,
    name: "TRAI",
    desc: "Registered telemarketer, DLT-aware SMS, NDNC scrubbing, content template enforcement, opt-out handling on every campaign.",
  },
  {
    icon: Lock,
    name: "DPDP Act 2023",
    desc: "Consent capture, purpose limitation, data subject rights workflows, India-only data residency by default, deletion APIs.",
  },
  {
    icon: ShieldCheck,
    name: "ISO 27001",
    desc: "Annual certified information security management, encrypted SIP, encrypted recordings, key rotation, segregation of duties.",
  },
  {
    icon: Building2,
    name: "RBI / IRDAI",
    desc: "Tamper-proof recordings, retention policies, role-based access, full audit trails, regulator-export packages on demand.",
  },
]

export function ComplianceSection() {
  return (
    <section id="compliance" className="relative overflow-hidden bg-[#0a0612] py-20 lg:py-24">
      {/* Backgrounds */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 40% at 50% 0%, oklch(0.45 0.22 295 / 0.35), transparent 65%), radial-gradient(ellipse 50% 35% at 100% 100%, oklch(0.62 0.24 300 / 0.22), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(168,85,247,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 35%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300 backdrop-blur">
            <ShieldCheck className="h-3 w-3" />
            Compliance &amp; Security
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]">
            Built for India.{" "}
            <span className="bg-gradient-to-r from-fuchsia-300 via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
              Compliant by Design.
            </span>
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-white/65">
            Indian regulations are not a checklist for Kedeyo — they are part of the architecture. Whether you are a
            private bank or a 10-person D2C startup, your conversations stay on infrastructure designed to pass audits
            the day they happen.
          </p>
        </div>

        {/* Standards grid — 4 in one row at lg, 2 cols at md, 1 on mobile */}
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {STANDARDS.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.name}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-400/40 hover:bg-white/[0.06] hover:shadow-[0_24px_60px_-22px_oklch(0.62_0.24_300/0.5)]"
              >
                {/* Glow on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-fuchsia-500/10 to-violet-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 transition-colors duration-300 group-hover:border-fuchsia-400/40 group-hover:bg-fuchsia-500/15 group-hover:text-fuchsia-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold tracking-tight text-white">{s.name}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-white/60">{s.desc}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
