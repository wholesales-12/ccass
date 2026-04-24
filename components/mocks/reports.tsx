export function ReportsMock() {
  const weekly = [40, 58, 72, 65, 84, 90, 76]
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-3">
        {[
          { label: "Total Calls", value: "3,421" },
          { label: "Inbound", value: "1,102" },
          { label: "Outbound", value: "2,319" },
          { label: "CSAT", value: "98%", tone: "accent" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg border border-border bg-card p-3">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.label}</div>
            <div className={s.tone === "accent" ? "mt-1 text-xl font-semibold text-accent" : "mt-1 text-xl font-semibold text-foreground"}>
              {s.value}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-border bg-card p-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="text-xs font-semibold text-muted-foreground">Weekly Performance</div>
          <div className="text-[10px] text-muted-foreground">Mon – Sun</div>
        </div>
        <div className="flex h-28 items-end gap-2">
          {weekly.map((h, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <div className="w-full rounded-sm bg-gradient-to-t from-primary/50 to-accent" style={{ height: `${h}%` }} />
              <div className="text-[9px] text-muted-foreground">{["M", "T", "W", "T", "F", "S", "S"][i]}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between rounded-lg border border-border bg-card p-3 text-xs">
          <div>
            <div className="font-medium text-foreground">Call #4521 · Priya Sharma</div>
            <div className="text-muted-foreground">4m 08s · Resolved · Delhi NCR</div>
          </div>
          <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-semibold text-accent-foreground/80">
            Recorded
          </span>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-border bg-card p-3 text-xs">
          <div>
            <div className="font-medium text-foreground">Call #4522 · Amit Desai</div>
            <div className="text-muted-foreground">2m 31s · Follow-up · Mumbai</div>
          </div>
          <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold text-foreground">
            In Progress
          </span>
        </div>
      </div>
    </div>
  )
}
