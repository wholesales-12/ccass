import { Activity, Headphones } from "lucide-react"

export function LiveMonitorMock() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
          <Activity className="h-3 w-3" />
          Live Monitor
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Updated · 2s ago</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Active Calls", value: "03", tone: "accent" },
          { label: "In Queue", value: "05", tone: "muted" },
          { label: "Avg Wait", value: "6s", tone: "muted" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg border border-border bg-card p-3">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.label}</div>
            <div className={s.tone === "accent" ? "mt-1 text-2xl font-semibold text-accent" : "mt-1 text-2xl font-semibold text-foreground"}>
              {s.value}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        {[
          { initials: "PS", name: "Priya Sharma", meta: "Inbound · Delhi NCR", time: "02:14" },
          { initials: "SK", name: "Sneha Kapoor", meta: "Outbound · Mumbai", time: "04:08" },
        ].map((agent) => (
          <div
            key={agent.initials}
            className="flex items-center justify-between rounded-lg border border-border bg-card p-3"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                {agent.initials}
              </div>
              <div>
                <div className="text-sm font-medium text-foreground">{agent.name}</div>
                <div className="text-xs text-muted-foreground">{agent.meta}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-accent" />
              <span className="font-mono text-xs text-muted-foreground">On Call {agent.time}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-border bg-card p-4">
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
          <Headphones className="h-3.5 w-3.5 text-accent" />
          Live Transcription
        </div>
        <div className="space-y-1.5 text-xs">
          <p>
            <span className="font-semibold text-foreground">Agent:</span>{" "}
            <span className="text-muted-foreground">Good morning! How can I help?</span>
          </p>
          <p>
            <span className="font-semibold text-foreground">Customer:</span>{" "}
            <span className="text-muted-foreground">I need help tracking my order.</span>
          </p>
          <p>
            <span className="font-semibold text-foreground">Agent:</span>{" "}
            <span className="text-muted-foreground">Sure, let me pull that up for you.</span>
          </p>
        </div>
      </div>
    </div>
  )
}
