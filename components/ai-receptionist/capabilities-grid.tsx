import {
  CalendarCheck,
  CheckCheck,
  Headphones,
  Inbox,
  Languages,
  PhoneForwarded,
  Sparkles,
  UserCheck,
  Zap,
} from "lucide-react"

export function CapabilitiesGrid() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Decorative gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 50% 40% at 0% 100%, oklch(0.94 0.06 295 / 0.5), transparent 60%), radial-gradient(ellipse 40% 30% at 100% 0%, oklch(0.95 0.05 220 / 0.4), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            What it handles for you
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Everything a great receptionist does — only{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              always on
            </span>
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Built for clinics, salons, consultants, retailers and service businesses. Set it up once — the AI handles
            calls 24/7/365.
          </p>
        </div>

        {/* Bento grid */}
        <div className="mt-12 grid gap-3 sm:gap-4 lg:grid-cols-12 lg:grid-rows-[auto_auto_auto]">
          {/* Featured: 100% pickup — large hero card */}
          <article className="group relative overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/[0.06] via-card to-accent/[0.05] p-6 lg:col-span-7 lg:row-span-2">
            {/* Floating glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full opacity-50 blur-3xl"
              style={{ background: "radial-gradient(circle, oklch(0.6 0.22 295 / 0.4), transparent 70%)" }}
            />
            <div className="relative flex h-full flex-col">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                  <PhoneForwarded className="h-4.5 w-4.5" />
                </span>
                <span className="rounded-full border bg-background/80 px-2 py-0.5 font-mono text-[10px] font-medium text-muted-foreground backdrop-blur">
                  &lt;1s pickup
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
                Answers 100% of calls instantly
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                No rings, no queues, no missed calls — even if 20 customers call at the same time. Each one gets
                picked up in under a second by a dedicated AI line.
              </p>

              {/* Concurrent line illustration */}
              <div className="relative mt-6 flex-1 rounded-xl border bg-background/70 p-4 backdrop-blur">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Live · Parallel calls
                  </span>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                    All answered
                  </span>
                </div>

                <div className="mt-3 grid grid-cols-6 gap-1.5 sm:grid-cols-12">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-1 rounded-md border border-border/60 bg-background/80 px-1 py-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" style={{ animation: `cap-blink 1.4s ease-in-out ${i * 0.08}s infinite` }} />
                      <div className="flex h-5 items-center gap-[1.5px]">
                        {Array.from({ length: 4 }).map((_, j) => (
                          <span
                            key={j}
                            className="block w-[2px] rounded-full bg-primary/70"
                            style={{
                              height: `${4 + ((i * 3 + j * 2) % 12)}px`,
                              animation: `cap-bar 0.9s ease-in-out ${(i + j) * 0.07}s infinite`,
                            }}
                          />
                        ))}
                      </div>
                      <span className="font-mono text-[8px] text-muted-foreground">L{i + 1}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Zap className="h-3.5 w-3.5 text-amber-500" />
                    <span>Auto-scales with traffic</span>
                  </div>
                  <span className="font-mono text-emerald-600">0 missed</span>
                </div>
              </div>
            </div>
            <style>{`
              @keyframes cap-bar { 0%,100% { transform: scaleY(0.3) } 50% { transform: scaleY(1) } }
              @keyframes cap-blink { 0%,100% { opacity: 0.4 } 50% { opacity: 1 } }
            `}</style>
          </article>

          {/* Languages */}
          <article className="group relative overflow-hidden rounded-2xl border bg-card p-5 lg:col-span-5">
            <div className="flex items-start justify-between">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                <Languages className="h-4.5 w-4.5" />
              </span>
              <span className="rounded-full border bg-background px-2 py-0.5 font-mono text-[10px] font-medium text-muted-foreground">
                12+ languages
              </span>
            </div>
            <h3 className="mt-4 text-base font-semibold text-foreground">Speaks natural Hindi &amp; English</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Switches mid-call based on what the caller uses. Regional accents and code-mixed Hinglish, fully supported.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {["हिन्दी", "English", "मराठी", "தமிழ்", "తెలుగు", "বাংলা", "ગુજરાતી", "ಕನ್ನಡ", "ਪੰਜਾਬੀ"].map((l, i) => (
                <span
                  key={l}
                  className="rounded-full border border-violet-200/70 bg-violet-50 px-2 py-0.5 text-[11px] font-medium text-violet-800"
                  style={{ animation: `cap-fade 600ms ease-out ${i * 60}ms both` }}
                >
                  {l}
                </span>
              ))}
            </div>
            <style>{`@keyframes cap-fade { from { opacity: 0; transform: translateY(4px) } to { opacity: 1; transform: translateY(0) } }`}</style>
          </article>

          {/* Bookings */}
          <article className="group relative overflow-hidden rounded-2xl border bg-card p-5 lg:col-span-5">
            <div className="flex items-start justify-between">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <CalendarCheck className="h-4.5 w-4.5" />
              </span>
              <span className="rounded-full border bg-background px-2 py-0.5 font-mono text-[10px] font-medium text-muted-foreground">
                Calendar sync
              </span>
            </div>
            <h3 className="mt-4 text-base font-semibold text-foreground">Books appointments directly</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Syncs with Google Calendar, Outlook or your booking tool. Sends SMS &amp; WhatsApp confirmations
              automatically.
            </p>
            {/* Mini calendar slot strip */}
            <div className="mt-4 grid grid-cols-5 gap-1.5">
              {[
                { t: "10:00", booked: true },
                { t: "11:30", booked: false },
                { t: "12:00", booked: true },
                { t: "16:00", booked: true },
                { t: "17:30", booked: false },
              ].map((slot, i) => (
                <div
                  key={slot.t}
                  className={`rounded-md border px-1.5 py-1 text-center font-mono text-[10px] ${
                    slot.booked
                      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                      : "border-border bg-background text-muted-foreground"
                  }`}
                >
                  {slot.t}
                  <div className="mt-0.5 text-[8px] font-semibold uppercase tracking-wider">
                    {slot.booked ? "Booked" : "Free"}
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Lead qualification */}
          <article className="group relative overflow-hidden rounded-2xl border bg-card p-5 lg:col-span-4">
            <div className="flex items-start justify-between">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <UserCheck className="h-4.5 w-4.5" />
              </span>
              <span className="rounded-full border bg-background px-2 py-0.5 font-mono text-[10px] font-medium text-muted-foreground">
                Hot-lead
              </span>
            </div>
            <h3 className="mt-4 text-base font-semibold text-foreground">Qualifies leads before they reach you</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Captures name, service, budget and urgency — pings you with a structured summary so you only handle hot leads.
            </p>
            <ul className="mt-4 space-y-1 rounded-lg border bg-background/60 p-2.5 font-mono text-[10px] text-muted-foreground">
              <li className="flex justify-between"><span className="text-foreground/70">Name</span><span>Anjali M.</span></li>
              <li className="flex justify-between"><span className="text-foreground/70">Service</span><span>Root canal</span></li>
              <li className="flex justify-between"><span className="text-foreground/70">Urgency</span><span className="font-semibold text-rose-600">High</span></li>
            </ul>
          </article>

          {/* Knowledge base */}
          <article className="group relative overflow-hidden rounded-2xl border bg-card p-5 lg:col-span-4">
            <div className="flex items-start justify-between">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                <Headphones className="h-4.5 w-4.5" />
              </span>
              <span className="rounded-full border bg-background px-2 py-0.5 font-mono text-[10px] font-medium text-muted-foreground">
                Trained on your docs
              </span>
            </div>
            <h3 className="mt-4 text-base font-semibold text-foreground">Answers FAQs in your brand voice</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Pricing, hours, location, services, delivery status — answered from documents you upload.
            </p>
            <div className="mt-4 space-y-1.5 text-[11px]">
              <div className="rounded-md bg-muted/60 px-2.5 py-1.5 text-foreground/80">
                <span className="text-muted-foreground">Q · </span>What are your timings?
              </div>
              <div className="rounded-md border border-cyan-200/70 bg-cyan-50 px-2.5 py-1.5 text-cyan-900">
                <span className="font-semibold">A · </span>Mon–Sat, 9 AM to 8 PM.
              </div>
            </div>
          </article>

          {/* Smart escalation */}
          <article className="group relative overflow-hidden rounded-2xl border bg-card p-5 lg:col-span-4">
            <div className="flex items-start justify-between">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-rose-100 text-rose-700">
                <PhoneForwarded className="h-4.5 w-4.5" />
              </span>
              <span className="rounded-full border bg-background px-2 py-0.5 font-mono text-[10px] font-medium text-muted-foreground">
                Smart escalation
              </span>
            </div>
            <h3 className="mt-4 text-base font-semibold text-foreground">Routes urgent calls to your mobile</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Escalates VIP clients or emergencies to a live human in seconds, with full call context and intent.
            </p>
            {/* Tiny flow diagram */}
            <div className="mt-4 flex items-center gap-1.5 text-[10px]">
              <span className="rounded-md border bg-background px-2 py-1 font-medium text-foreground">AI</span>
              <span className="h-px flex-1 bg-gradient-to-r from-rose-300 to-rose-500" />
              <span className="rounded-md border border-rose-200 bg-rose-50 px-2 py-1 font-medium text-rose-700">
                VIP detected
              </span>
              <span className="h-px flex-1 bg-rose-500" />
              <span className="rounded-md bg-foreground px-2 py-1 font-medium text-background">Owner</span>
            </div>
          </article>

          {/* Daily digest */}
          <article className="group relative overflow-hidden rounded-2xl border bg-card p-5 lg:col-span-7">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                <Inbox className="h-4.5 w-4.5" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-semibold text-foreground">Sends a daily call summary</h3>
                  <span className="rounded-full border bg-background px-2 py-0.5 font-mono text-[10px] font-medium text-muted-foreground">
                    Email · WhatsApp
                  </span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  Every call, every transcript, every booking — delivered to your inbox each morning.
                </p>

                {/* Mock digest preview */}
                <div className="mt-3 grid grid-cols-3 gap-2 rounded-lg border bg-background/60 p-2.5">
                  <DigestStat label="Calls" value="142" />
                  <DigestStat label="Bookings" value="38" />
                  <DigestStat label="Hot leads" value="11" tone="amber" />
                </div>
              </div>
            </div>
          </article>

          {/* Setup speed */}
          <article className="group relative overflow-hidden rounded-2xl border bg-gradient-to-br from-foreground to-foreground/90 p-5 text-background lg:col-span-5">
            <div className="flex items-center justify-between">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-background/10 text-background">
                <CheckCheck className="h-4.5 w-4.5" />
              </span>
              <span className="rounded-full border border-background/20 bg-background/10 px-2 py-0.5 font-mono text-[10px] font-medium text-background/80">
                Live in 24h
              </span>
            </div>
            <h3 className="mt-4 text-base font-semibold">Set up in under an hour</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-background/70">
              Forward your existing landline, mobile or toll-free number into Kedeyo. No porting, no hardware, no coding.
            </p>
            <ol className="mt-4 space-y-1.5 text-[11px]">
              {["Connect your number", "Upload knowledge base", "Pick a voice", "You're live"].map((step, i) => (
                <li key={step} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-background/15 font-mono text-[10px] font-semibold text-background">
                    {i + 1}
                  </span>
                  <span className="text-background/85">{step}</span>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </div>
    </section>
  )
}

function DigestStat({ label, value, tone = "default" }: { label: string; value: string; tone?: "default" | "amber" }) {
  return (
    <div className="rounded-md bg-background px-2 py-1.5 text-center">
      <div className="text-[9px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div
        className={`font-mono text-base font-semibold tabular-nums ${
          tone === "amber" ? "text-amber-600" : "text-foreground"
        }`}
      >
        {value}
      </div>
    </div>
  )
}
