import { Cpu, ShieldCheck, Globe, Settings2 } from "lucide-react"

/**
 * Tech specs — 4 typographic columns separated only by hairlines.
 */

const PILLARS = [
  {
    Icon: Cpu,
    eyebrow: "Infrastructure",
    accent: "text-fuchsia-600",
    items: [
      ["Hosting", "AWS Mumbai + Chennai"],
      ["Uptime SLA", "99.95% contractual"],
      ["Failover", "Under 30 seconds"],
      ["Concurrent calls", "10,000+ per tenant"],
      ["Call quality", "HD Voice (G.722)"],
      ["Latency", "Under 150ms in India"],
    ],
  },
  {
    Icon: ShieldCheck,
    eyebrow: "Security & compliance",
    accent: "text-violet-600",
    items: [
      ["Encryption", "TLS 1.3 + AES-256"],
      ["Certifications", "PCI-DSS L1, SOC 2, ISO 27001"],
      ["Indian compliance", "TRAI, IT Act, DPDP"],
      ["Recordings", "Encrypted vault, configurable retention"],
      ["Access control", "Role-based + 2FA + SSO"],
      ["Data residency", "India only"],
    ],
  },
  {
    Icon: Globe,
    eyebrow: "Channels & routing",
    accent: "text-indigo-600",
    items: [
      ["Channels", "Voice, WhatsApp, email, chat"],
      ["Languages", "12+ Indian languages"],
      ["Routing", "AI, skill, VIP, time, sticky"],
      ["Dialer modes", "Predictive, preview, progressive"],
      ["IVR", "Drag-and-drop, multilingual"],
      ["Number porting", "3–5 business days, zero downtime"],
    ],
  },
  {
    Icon: Settings2,
    eyebrow: "Deployment",
    accent: "text-emerald-600",
    items: [
      ["Access", "Browser-based, zero install"],
      ["White-label", "Available for BPOs and resellers"],
      ["Authentication", "SAML 2.0 + OAuth + 2FA"],
      ["Setup time", "Under 3 minutes to first call"],
      ["Onboarding", "Dedicated India-based manager"],
      ["First-call support", "30 days chat support included"],
    ],
  },
]

export function CCCSpecs() {
  return (
    <section className="relative bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-fuchsia-600">
              Specs · Compliance · Deployment
            </p>
            <h2
              className="mt-4 text-balance font-semibold leading-[1.06] tracking-tight text-foreground"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Built for scale.{" "}
              <span className="bg-gradient-to-r from-fuchsia-600 to-violet-600 bg-clip-text text-transparent">
                Secured by default.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-pretty text-[15.5px] leading-relaxed text-muted-foreground">
              Enterprise-grade infrastructure at India pricing — every spec, every audit
              trail, every compliance update handled by us.
            </p>
          </div>
        </div>

        {/* 4 pillars */}
        <div className="mt-14 grid gap-x-12 gap-y-12 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <div key={p.eyebrow} className="relative flex flex-col">
              {/* Vertical hairline divider on lg+ */}
              {i > 0 && (
                <span aria-hidden className="pointer-events-none absolute -left-6 top-0 bottom-0 hidden w-px bg-border lg:block" />
              )}
              <div className={`flex items-center gap-2 ${p.accent}`}>
                <p.Icon className="h-4 w-4" strokeWidth={1.8} />
                <span className="font-mono text-[10.5px] uppercase tracking-[0.22em]">
                  {p.eyebrow}
                </span>
              </div>
              <dl className="mt-5 space-y-4">
                {p.items.map(([k, v]) => (
                  <div key={k} className="border-b border-border/60 pb-3 last:border-b-0">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {k}
                    </dt>
                    <dd className="mt-1 text-[13.5px] font-medium leading-snug text-foreground">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
