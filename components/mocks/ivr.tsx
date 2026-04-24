import { Phone, ArrowDown } from "lucide-react"

export function IvrMock() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 rounded-lg border border-accent/30 bg-accent/10 p-3">
        <Phone className="h-4 w-4 text-accent" />
        <div>
          <div className="text-xs font-semibold text-foreground">Incoming Call</div>
          <div className="font-mono text-xs text-muted-foreground">+91 98765 43210</div>
        </div>
      </div>

      <ArrowDown className="mx-auto h-4 w-4 text-muted-foreground" />

      <div className="rounded-lg border border-border bg-card p-3">
        <div className="text-xs font-semibold text-foreground">Welcome &amp; Language</div>
        <div className="mt-1 text-xs text-muted-foreground">Hindi · English · Tamil</div>
      </div>

      <ArrowDown className="mx-auto h-4 w-4 text-muted-foreground" />

      <div className="grid grid-cols-3 gap-2">
        {[
          { key: "1", label: "Sales", agents: "5 agents" },
          { key: "2", label: "Support", agents: "8 agents" },
          { key: "3", label: "Billing", agents: "3 agents" },
        ].map((o) => (
          <div key={o.key} className="rounded-lg border border-border bg-card p-3 text-center">
            <div className="mx-auto mb-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-primary font-mono text-xs font-semibold text-primary-foreground">
              {o.key}
            </div>
            <div className="text-xs font-semibold text-foreground">{o.label}</div>
            <div className="text-[10px] text-muted-foreground">{o.agents}</div>
          </div>
        ))}
      </div>

      <ArrowDown className="mx-auto h-4 w-4 text-muted-foreground" />

      <div className="rounded-lg border border-dashed border-accent/50 bg-accent/5 p-3 text-center text-xs font-medium text-foreground">
        Skill-Based Routing → Best Agent
      </div>
    </div>
  )
}
