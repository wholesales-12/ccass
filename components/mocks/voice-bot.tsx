import { Bot, CheckCircle2 } from "lucide-react"

export function VoiceBotMock() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Bot Calls Today", value: "142" },
          { label: "Resolved by Bot", value: "78%", tone: "accent" },
          { label: "Escalated", value: "22%" },
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
        <div className="flex items-start gap-2">
          <div className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Bot className="h-3.5 w-3.5" />
          </div>
          <div className="rounded-xl rounded-tl-sm bg-secondary p-3 text-xs text-foreground">
            Namaste! Welcome to Kedeyo. How can I help you today?
          </div>
        </div>

        <div className="flex items-start justify-end gap-2">
          <div className="rounded-xl rounded-tr-sm bg-primary p-3 text-xs text-primary-foreground">
            Can you check the status of order #4521?
          </div>
          <div className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-secondary text-xs font-semibold text-foreground">
            KK
          </div>
        </div>

        <div className="flex items-start gap-2">
          <div className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Bot className="h-3.5 w-3.5" />
          </div>
          <div className="rounded-xl rounded-tl-sm bg-secondary p-3 text-xs text-foreground">
            Your order shipped via Delhivery yesterday. Tracking: DL4521IN. Estimated delivery: tomorrow by 6 PM.
            I&apos;ve sent the link to your WhatsApp.
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 rounded-lg border border-accent/30 bg-accent/10 p-3 text-xs">
        <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
          <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
          Resolved by Bot
        </span>
        <span className="text-muted-foreground">Duration: 45s</span>
        <span className="text-muted-foreground">Languages: Hindi, English</span>
        <span className="ml-auto font-semibold text-foreground">CSAT 4.8/5</span>
      </div>
    </div>
  )
}
