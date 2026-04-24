export function AutoDialerMock() {
  const bars = [28, 42, 36, 55, 68, 74, 62, 81, 90, 72, 58, 44]
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Total Calls", value: "150" },
          { label: "Connected", value: "121" },
          { label: "Contact Rate", value: "80.6%" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg border border-border bg-card p-3">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.label}</div>
            <div className="mt-1 text-2xl font-semibold text-foreground">{s.value}</div>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between rounded-lg border border-border bg-card p-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/20 text-xs font-semibold text-accent-foreground/90">
              AD
            </div>
            <div>
              <div className="text-sm font-medium text-foreground">Amit Desai</div>
              <div className="text-xs text-muted-foreground">Dialing...</div>
            </div>
          </div>
          <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground/80">
            Ringing
          </span>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-border bg-card p-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
              SK
            </div>
            <div>
              <div className="text-sm font-medium text-foreground">Sneha Kapoor</div>
              <div className="text-xs text-muted-foreground">Campaign: Renewal</div>
            </div>
          </div>
          <span className="font-mono text-xs text-muted-foreground">On Call 01:42</span>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card p-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="text-xs font-semibold text-muted-foreground">Hourly Call Volume</div>
          <div className="text-[10px] text-muted-foreground">Today</div>
        </div>
        <div className="flex h-24 items-end gap-1.5">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-gradient-to-t from-primary/40 to-accent"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
