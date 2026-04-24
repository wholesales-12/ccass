export function WhatsAppMock() {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-border bg-card p-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="text-xs font-semibold text-foreground">Diwali Mega Sale Campaign</div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-semibold text-accent-foreground/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Live
          </span>
        </div>
        <div className="text-[11px] text-muted-foreground">Audience: 5,200 contacts · Template: Promotional</div>
      </div>

      <div>
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Delivery Funnel
        </div>
        <div className="space-y-2">
          {[
            { label: "Sent", value: 5200, pct: 100 },
            { label: "Delivered", value: 4521, pct: 87 },
            { label: "Read", value: 3526, pct: 68 },
            { label: "Replied", value: 312, pct: 6 },
          ].map((row) => (
            <div key={row.label} className="flex items-center gap-3 text-xs">
              <div className="w-20 font-medium text-foreground">{row.label}</div>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                  style={{ width: `${row.pct}%` }}
                />
              </div>
              <div className="w-14 text-right font-mono text-foreground">{row.value.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-lg border border-border bg-card p-3">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Active Template</div>
          <div className="mt-1 text-sm font-semibold text-foreground">Diwali Sale</div>
          <div className="text-[10px] text-muted-foreground">Promotional · Approved</div>
        </div>
        <div className="rounded-lg border border-border bg-card p-3">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Scheduled</div>
          <div className="mt-1 text-sm font-semibold text-foreground">Republic Day</div>
          <div className="text-[10px] text-muted-foreground">Jan 26 · 10:00 AM</div>
        </div>
        <div className="rounded-lg border border-border bg-card p-3">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Conversion</div>
          <div className="mt-1 text-sm font-semibold text-accent">6.8%</div>
          <div className="text-[10px] text-muted-foreground">▲ 2.1% vs last</div>
        </div>
      </div>
    </div>
  )
}
