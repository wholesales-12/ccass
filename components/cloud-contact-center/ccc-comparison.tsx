import { Server, Cloud } from "lucide-react"

/**
 * Cloud vs On-premise — open ledger, no card chrome.
 * Two columns of values per row, separated only by hairlines.
 */

const ROWS = [
  { label: "Time to go live", onprem: "8–14 weeks", cloud: "Under 3 minutes" },
  { label: "Upfront cost", onprem: "₹15L–₹40L CAPEX", cloud: "Zero CAPEX, pay per agent" },
  { label: "Adding 50 agents", onprem: "2–3 weeks, new servers", cloud: "Same day, dashboard add" },
  { label: "Channels", onprem: "Voice + email plug-in", cloud: "Voice, WhatsApp, email, chat" },
  { label: "Peak-hour stability", onprem: "Capped by hardware", cloud: "Auto-scaling on AWS" },
  { label: "Remote agents", onprem: "VPN, drops common", cloud: "Browser login, anywhere" },
  { label: "AI features", onprem: "Third-party add-ons", cloud: "Built in, no extra licence" },
  { label: "Compliance updates", onprem: "Your team patches", cloud: "Platform handles it" },
  { label: "3-year cost (120 agents)", onprem: "≈ ₹95L", cloud: "≈ ₹52L", emphasis: true },
]

export function CCCComparison() {
  return (
    <section className="relative bg-[#0a0612] py-20 text-white lg:py-24">
      {/* ambient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(217,70,239,0.45) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 25%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-fuchsia-300">
              Cloud vs on-premise
            </p>
            <h2
              className="mt-4 text-balance font-semibold leading-[1.06] tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              The side-by-side most teams want{" "}
              <span className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
                before they switch.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-pretty text-[15.5px] leading-relaxed text-white/70">
              Same workload, two architectures. The difference shows up in deployment time,
              cash burn, and how often the floor goes down at peak.
            </p>
          </div>
        </div>

        {/* Header row */}
        <div className="mt-14 grid grid-cols-12 items-end gap-6 border-b border-white/15 pb-4">
          <div className="col-span-4 font-mono text-[10.5px] uppercase tracking-[0.22em] text-white/50">
            What you compare
          </div>
          <div className="col-span-4 flex items-center gap-2 text-white/60">
            <Server className="h-4 w-4" />
            <span className="text-[13px] font-semibold tracking-tight">On-premise</span>
          </div>
          <div className="col-span-4 flex items-center gap-2">
            <Cloud className="h-4 w-4 text-fuchsia-300" />
            <span className="text-[13px] font-semibold tracking-tight text-white">Kedeyo (cloud)</span>
          </div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-white/10">
          {ROWS.map((r) => (
            <div key={r.label} className="grid grid-cols-12 items-center gap-6 py-4">
              <div className="col-span-4 text-[14px] font-semibold tracking-tight text-white/85">
                {r.label}
              </div>
              <div
                className={`col-span-4 ${r.emphasis ? "text-rose-300" : "text-white/55"} font-mono text-[13px]`}
              >
                {r.onprem}
              </div>
              <div
                className={`col-span-4 font-mono text-[13.5px] ${
                  r.emphasis ? "text-emerald-300" : "text-white"
                }`}
              >
                {r.cloud}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
