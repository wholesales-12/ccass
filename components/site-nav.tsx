"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Bot,
  Phone,
  BarChart3,
  Mic,
  MessageSquare,
  FileText,
  Activity,
  ShoppingCart,
  GraduationCap,
  HeartPulse,
  Landmark,
  Building2,
  Plane,
  BookOpen,
  HelpCircle,
  Users,
  Play,
  Newspaper,
  Calendar,
  Sparkles,
  Zap,
  Shield,
  Globe,
  CheckCircle2,
  ArrowUpRight,
  Headphones,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Features data - simplified flat structure
const FEATURES = [
  {
    title: "AI Receptionist",
    description: "24/7 call answering, appointment booking & lead qualification",
    href: "/features/ai-receptionist",
    icon: Headphones,
    color: "bg-primary",
    badge: "New",
  },
  {
    title: "AI Voice Bot",
    description: "Natural conversations in 12+ Indian languages with human-like voice",
    href: "/features/voice-bot",
    icon: Bot,
    color: "bg-violet-500",
    badge: "Most Popular",
  },
  {
    title: "Auto Dialer",
    description: "Predictive & progressive outbound calling campaigns",
    href: "/features/auto-dialer",
    icon: Phone,
    color: "bg-fuchsia-500",
  },
  {
    title: "IVR Designer",
    description: "Visual drag-and-drop flow builder with AI routing",
    href: "/features/ivr-designer",
    icon: FileText,
    color: "bg-indigo-500",
  },
  {
    title: "Live Monitor",
    description: "Real-time supervision, barge-in & whisper coaching",
    href: "/features/live-monitor",
    icon: Activity,
    color: "bg-emerald-500",
    badge: "New",
  },
  {
    title: "WhatsApp Business",
    description: "Official API integration with chatbot automation",
    href: "/features/whatsapp",
    icon: MessageSquare,
    color: "bg-green-500",
  },
  {
    title: "Reports & Analytics",
    description: "Deep insights with customizable dashboards",
    href: "/features/reports",
    icon: BarChart3,
    color: "bg-amber-500",
  },
]

// Industries data
const INDUSTRIES = [
  {
    title: "E-commerce",
    description: "COD confirmation & delivery updates",
    href: "/industries/e-commerce",
    icon: ShoppingCart,
    stat: "45% COD success lift",
    color: "bg-fuchsia-500",
  },
  {
    title: "EdTech",
    description: "Lead nurturing & fee collection",
    href: "/industries/edtech",
    icon: GraduationCap,
    stat: "3x lead conversions",
    color: "bg-violet-500",
  },
  {
    title: "Healthcare",
    description: "Appointments & prescription reminders",
    href: "/industries/healthcare",
    icon: HeartPulse,
    stat: "68% no-show reduction",
    color: "bg-emerald-500",
  },
  {
    title: "BFSI",
    description: "KYC, EMI reminders & fraud alerts",
    href: "/industries/bfsi",
    icon: Landmark,
    stat: "40% faster verification",
    color: "bg-amber-500",
  },
  {
    title: "Real Estate",
    description: "Site visits & follow-up automation",
    href: "/industries/real-estate",
    icon: Building2,
    stat: "2x site visit bookings",
    color: "bg-sky-500",
  },
  {
    title: "Travel",
    description: "Bookings & itinerary updates",
    href: "/industries/travel",
    icon: Plane,
    stat: "35% CSAT improvement",
    color: "bg-rose-500",
  },
]

// Resources data
const RESOURCES = [
  { title: "Documentation", description: "API guides & tutorials", href: "/docs", icon: BookOpen },
  { title: "Help Center", description: "FAQs & support", href: "/help", icon: HelpCircle },
  { title: "Case Studies", description: "Customer success stories", href: "/case-studies", icon: Users },
  { title: "Webinars", description: "Live & recorded sessions", href: "/webinars", icon: Play },
  { title: "Blog", description: "Insights & updates", href: "/blog", icon: Newspaper },
  { title: "Events", description: "Meetups & workshops", href: "/events", icon: Calendar },
]

type MegaMenuType = "features" | "industries" | "resources" | null

export function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState<MegaMenuType>(null)
  const [announcementVisible, setAnnouncementVisible] = useState(true)
  const navRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleMenuEnter = (menu: MegaMenuType) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveMenu(menu)
  }

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150)
  }

  return (
    <>
      {/* Announcement Bar */}
      {announcementVisible && (
        <div className="relative z-50 bg-primary">
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-x-6 px-4 py-2 text-sm text-white">
            <p className="flex items-center gap-2">
              <span className="flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
              </span>
              <span className="hidden sm:inline">Introducing Kedeyo Voice Bot — Automate customer calls with natural, human-like conversations.</span>
              <span className="sm:hidden">New: Kedeyo Voice Bot is here!</span>
            </p>
            <Link href="/demo" className="flex items-center gap-1 font-semibold text-amber-300 hover:text-amber-200">
              Book a free demo
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <button
              onClick={() => setAnnouncementVisible(false)}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-white/60 hover:text-white sm:right-4"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <header
        ref={navRef}
        className={cn(
          "sticky top-0 z-40 transition-all duration-300",
          scrolled ? "border-b bg-background/95 shadow-sm backdrop-blur-xl" : "bg-background",
        )}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/kedeyo-logo.webp" alt="Kedeyo" width={120} height={32} priority className="h-7 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {/* Features */}
            <div onMouseEnter={() => handleMenuEnter("features")} onMouseLeave={handleMenuLeave}>
              <button
                className={cn(
                  "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  activeMenu === "features" ? "bg-primary text-white" : "text-foreground/80 hover:bg-muted",
                )}
              >
                Features
                <ChevronDown className={cn("h-4 w-4 transition-transform", activeMenu === "features" && "rotate-180")} />
              </button>
            </div>

            {/* Industries */}
            <div onMouseEnter={() => handleMenuEnter("industries")} onMouseLeave={handleMenuLeave}>
              <button
                className={cn(
                  "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  activeMenu === "industries" ? "bg-primary text-white" : "text-foreground/80 hover:bg-muted",
                )}
              >
                Industries
                <ChevronDown className={cn("h-4 w-4 transition-transform", activeMenu === "industries" && "rotate-180")} />
              </button>
            </div>

            {/* Resources */}
            <div onMouseEnter={() => handleMenuEnter("resources")} onMouseLeave={handleMenuLeave}>
              <button
                className={cn(
                  "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  activeMenu === "resources" ? "bg-primary text-white" : "text-foreground/80 hover:bg-muted",
                )}
              >
                Resources
                <ChevronDown className={cn("h-4 w-4 transition-transform", activeMenu === "resources" && "rotate-180")} />
              </button>
            </div>

            <Link href="/pricing" className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 hover:bg-muted">
              Pricing
            </Link>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild className="h-9 rounded-full bg-amber-400 px-5 font-semibold text-amber-950 hover:bg-amber-500">
              <Link href="/demo">
                Book a Demo <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-9 rounded-full px-5 font-semibold">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="rounded-lg p-2 text-foreground hover:bg-muted lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mega Menu Panels */}
        <div
          className={cn(
            "absolute inset-x-0 top-full transition-all duration-200",
            activeMenu ? "visible opacity-100" : "invisible opacity-0",
          )}
          onMouseEnter={() => activeMenu && handleMenuEnter(activeMenu)}
          onMouseLeave={handleMenuLeave}
        >
          <div className="border-b bg-background shadow-xl">
            <div className="mx-auto max-w-7xl px-4 py-6 lg:px-6">
              
              {/* Features Mega Menu */}
              {activeMenu === "features" && (
                <div className="grid gap-8 lg:grid-cols-4">
                  {/* Features List - 3 columns */}
                  <div className="lg:col-span-3">
                    <div className="mb-4 flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Platform Features</span>
                    </div>
                    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                      {FEATURES.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setActiveMenu(null)}
                          className="group flex items-start gap-3 rounded-xl p-3 transition-all hover:bg-muted"
                        >
                          <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white", item.color)}>
                            <item.icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1 pt-0.5">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-foreground group-hover:text-primary">{item.title}</span>
                              {item.badge && (
                                <span className={cn(
                                  "rounded px-1.5 py-0.5 text-[10px] font-bold uppercase",
                                  item.badge === "Most Popular" ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"
                                )}>
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="mt-0.5 text-xs text-muted-foreground">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    {/* Bottom links */}
                    <div className="mt-6 flex items-center gap-6 border-t pt-4">
                      <Link href="/features" className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                        View all features <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                      <Link href="/compare" className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground">
                        Compare plans <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Promo Card */}
                  <div className="hidden lg:block">
                    <div className="h-full rounded-2xl bg-gradient-to-br from-primary to-accent p-5 text-white">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20">
                        <Play className="h-4 w-4" />
                      </div>
                      <h3 className="mt-3 font-semibold">See it in action</h3>
                      <p className="mt-1.5 text-sm text-white/80">2-minute demo of Kedeyo transforming your contact center.</p>
                      <Button asChild size="sm" className="mt-4 w-full rounded-full bg-white text-primary hover:bg-white/90">
                        <Link href="/demo">Watch Demo</Link>
                      </Button>
                      <div className="mt-3 flex items-center gap-2 text-xs text-white/70">
                        <Zap className="h-3.5 w-3.5 text-amber-300" />
                        Setup in under 24 hours
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Industries Mega Menu */}
              {activeMenu === "industries" && (
                <div className="grid gap-8 lg:grid-cols-4">
                  <div className="lg:col-span-3">
                    <div className="mb-4 flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-primary" />
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Industry Solutions</span>
                    </div>
                    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                      {INDUSTRIES.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setActiveMenu(null)}
                          className="group flex items-start gap-3 rounded-xl p-3 transition-all hover:bg-muted"
                        >
                          <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white", item.color)}>
                            <item.icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1 pt-0.5">
                            <span className="font-semibold text-foreground group-hover:text-primary">{item.title}</span>
                            <p className="mt-0.5 text-xs text-muted-foreground">{item.description}</p>
                            <span className="mt-1.5 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                              {item.stat}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Compliance Card */}
                  <div className="hidden lg:block">
                    <div className="h-full rounded-2xl border bg-muted/50 p-5">
                      <Shield className="h-8 w-8 text-primary" />
                      <h3 className="mt-3 font-semibold">India-First Compliance</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">Built for Indian regulations from day one.</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {["DPDP Ready", "TRAI Compliant", "SOC 2", "ISO 27001"].map((badge) => (
                          <span key={badge} className="flex items-center gap-1 rounded-full bg-background px-2.5 py-1 text-[11px] font-medium text-foreground">
                            <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Resources Mega Menu */}
              {activeMenu === "resources" && (
                <div className="grid gap-8 lg:grid-cols-4">
                  <div className="lg:col-span-3">
                    <div className="mb-4 flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Resources</span>
                    </div>
                    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                      {RESOURCES.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setActiveMenu(null)}
                          className="group flex items-start gap-3 rounded-xl p-3 transition-all hover:bg-muted"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary">
                            <item.icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1 pt-0.5">
                            <span className="font-semibold text-foreground group-hover:text-primary">{item.title}</span>
                            <p className="mt-0.5 text-xs text-muted-foreground">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Support Card */}
                  <div className="hidden lg:block">
                    <div className="h-full rounded-2xl border bg-muted/50 p-5">
                      <Headphones className="h-8 w-8 text-primary" />
                      <h3 className="mt-3 font-semibold">Need Help?</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">Our support team is available 24/7 to assist you.</p>
                      <Button asChild size="sm" className="mt-4 w-full rounded-full">
                        <Link href="/contact">Contact Support</Link>
                      </Button>
                      <p className="mt-3 text-center text-xs text-muted-foreground">
                        Average response time: <strong className="text-foreground">under 2 hours</strong>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="border-t bg-background lg:hidden">
            <div className="space-y-1 p-4">
              {/* Features Accordion */}
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg p-3 font-medium hover:bg-muted">
                  Features
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="mt-1 space-y-1 pl-4">
                  {FEATURES.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 rounded-lg p-2 text-sm hover:bg-muted"
                    >
                      <div className={cn("flex h-8 w-8 items-center justify-center rounded-lg text-white", item.color)}>
                        <item.icon className="h-4 w-4" />
                      </div>
                      {item.title}
                    </Link>
                  ))}
                </div>
              </details>

              {/* Industries Accordion */}
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg p-3 font-medium hover:bg-muted">
                  Industries
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="mt-1 space-y-1 pl-4">
                  {INDUSTRIES.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 rounded-lg p-2 text-sm hover:bg-muted"
                    >
                      <div className={cn("flex h-8 w-8 items-center justify-center rounded-lg text-white", item.color)}>
                        <item.icon className="h-4 w-4" />
                      </div>
                      {item.title}
                    </Link>
                  ))}
                </div>
              </details>

              {/* Resources Accordion */}
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg p-3 font-medium hover:bg-muted">
                  Resources
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="mt-1 space-y-1 pl-4">
                  {RESOURCES.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 rounded-lg p-2 text-sm hover:bg-muted"
                    >
                      <item.icon className="h-4 w-4 text-muted-foreground" />
                      {item.title}
                    </Link>
                  ))}
                </div>
              </details>

              <Link
                href="/pricing"
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg p-3 font-medium hover:bg-muted"
              >
                Pricing
              </Link>

              {/* Mobile CTAs */}
              <div className="space-y-2 pt-4">
                <Button asChild className="w-full rounded-full bg-amber-400 font-semibold text-amber-950 hover:bg-amber-500">
                  <Link href="/demo">Book a Demo</Link>
                </Button>
                <Button asChild variant="outline" className="w-full rounded-full font-semibold">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
