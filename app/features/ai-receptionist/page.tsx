"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { CtaSection } from "@/components/cta-section"
import { cn } from "@/lib/utils"
import {
  Phone,
  PhoneCall,
  PhoneOff,
  Mic,
  MicOff,
  Volume2,
  Calendar,
  CheckCircle2,
  Clock,
  MessageSquare,
  Bot,
  User,
  ArrowRight,
  Play,
  Star,
  Sparkles,
  Brain,
  Languages,
  Shield,
  Zap,
  TrendingUp,
  Building2,
  ChevronRight,
  X,
  Check,
  Headphones as HeadphonesIcon,
  Globe,
  Users,
  IndianRupee,
  Send,
  Pause,
  Stethoscope,
  GraduationCap,
  ShoppingBag,
  Home,
  HeartPulse,
  BookOpen,
} from "lucide-react"

// Industry showcase data with unique conversations
const INDUSTRIES = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Stethoscope,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500",
    stat: "68%",
    statLabel: "No-show reduction",
    companies: ["Apollo", "Fortis", "Max Healthcare", "Dr. Lal PathLabs"],
    conversation: [
      { speaker: "ai", text: "Namaste! Sharma Dental Clinic, Priya speaking. How may I help you?" },
      { speaker: "caller", text: "I need to book a cleaning appointment" },
      { speaker: "ai", text: "Sure! Tomorrow 4 PM works with Dr. Sharma. Shall I book it?" },
      { speaker: "caller", text: "Yes please" },
      { speaker: "ai", text: "Done! SMS confirmation sent. See you tomorrow!" },
    ],
    features: ["Appointment booking", "Prescription reminders", "Lab report delivery", "Follow-up calls"],
  },
  {
    id: "realestate",
    name: "Real Estate",
    icon: Home,
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-500",
    stat: "3x",
    statLabel: "Lead conversion",
    companies: ["Lodha", "Godrej Properties", "DLF", "Prestige"],
    conversation: [
      { speaker: "ai", text: "Good evening! HomeFinder Realty. Looking for property in Mumbai?" },
      { speaker: "caller", text: "Yes, 3BHK in Andheri, budget 2 crore" },
      { speaker: "ai", text: "Great! We have 5 options. Can I schedule a site visit for Sunday?" },
      { speaker: "caller", text: "Sunday morning works" },
      { speaker: "ai", text: "Booked for 10 AM. Our agent Rajesh will call to confirm." },
    ],
    features: ["Property inquiries", "Site visit scheduling", "Price negotiations", "Document follow-ups"],
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500",
    stat: "45%",
    statLabel: "Enrollment increase",
    companies: ["BYJU'S", "Unacademy", "WhiteHat Jr", "Vedantu"],
    conversation: [
      { speaker: "ai", text: "Hello! Bright Future Academy. Admission inquiry?" },
      { speaker: "caller", text: "Yes, for my daughter, Class 6" },
      { speaker: "ai", text: "Wonderful! We have seats. Can you visit Saturday for counseling?" },
      { speaker: "caller", text: "What's the fee structure?" },
      { speaker: "ai", text: "₹1.2L annually. I'll WhatsApp the brochure now." },
    ],
    features: ["Admission queries", "Fee collection calls", "Demo scheduling", "Parent follow-ups"],
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    icon: ShoppingBag,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500",
    stat: "92%",
    statLabel: "COD confirmation",
    companies: ["Myntra", "Nykaa", "Lenskart", "Mamaearth"],
    conversation: [
      { speaker: "ai", text: "Hi! This is Myntra. Calling about your order #MYN4521." },
      { speaker: "caller", text: "Yes, what about it?" },
      { speaker: "ai", text: "It's COD ₹2,499. Delivery tomorrow. Please confirm." },
      { speaker: "caller", text: "Confirmed" },
      { speaker: "ai", text: "Thank you! Pay cash to delivery partner. Happy shopping!" },
    ],
    features: ["COD confirmation", "Delivery updates", "Return pickups", "Review collection"],
  },
]

// Comparison data
const COMPARISON = [
  { feature: "Availability", ai: "24/7/365", human: "8-10 hours/day" },
  { feature: "Languages", ai: "12+ Indian", human: "1-2 languages" },
  { feature: "Simultaneous Calls", ai: "Unlimited", human: "1 at a time" },
  { feature: "Monthly Cost", ai: "₹4,999", human: "₹25,000+" },
  { feature: "Response Time", ai: "< 0.5 seconds", human: "2-5 seconds" },
  { feature: "Accuracy", ai: "98.4%", human: "~85%" },
]

// Testimonials with Indian business owners
const TESTIMONIALS = [
  {
    quote: "We were missing 40% of patient calls. Now Kedeyo handles everything - bookings, reminders, even follow-ups. Our no-show rate dropped by 68%.",
    name: "Dr. Priya Sharma",
    role: "Founder, Sharma Dental Clinic",
    location: "Delhi NCR",
    avatar: "PS",
    rating: 5,
  },
  {
    quote: "The Hindi-English code-switching is incredible. Our customers from Tier 2 cities feel completely comfortable.",
    name: "Rajesh Agarwal",
    role: "CEO, HomeFinder Realty",
    location: "Mumbai",
    avatar: "RA",
    rating: 5,
  },
  {
    quote: "Parents call at all hours with admission queries. Now they get instant answers even at 2 AM. Enrollments up 35%.",
    name: "Sneha Iyer",
    role: "Director, Bright Future Academy",
    location: "Chennai",
    avatar: "SI",
    rating: 5,
  },
]

// FAQs
const FAQS = [
  { q: "How natural does the AI voice sound?", a: "Our AI uses the latest neural voice technology trained specifically on Indian accents and speech patterns. Most callers can't tell they're speaking to an AI. We support natural Hindi-English code-switching just like real conversations." },
  { q: "Can it handle complex queries?", a: "Yes! The AI understands context, remembers conversation history, and can handle multi-turn conversations. For truly complex issues, it seamlessly escalates to your team with full context." },
  { q: "What about data privacy and compliance?", a: "We're DPDP compliant, TRAI registered, and follow ISO 27001 standards. All data is encrypted, stored in India, and you have full control over retention policies." },
  { q: "How quickly can I get started?", a: "Most businesses are live within 24 hours. Our team handles the setup - you just need to share your business details, FAQs, and calendar integration." },
  { q: "What if the AI makes a mistake?", a: "Every call is monitored and logged. You can review transcripts, provide feedback, and the AI learns from corrections. Plus, you can set up instant escalation rules for specific scenarios." },
]

export default function AIReceptionistPage() {
  const [activeIndustry, setActiveIndustry] = useState(0)
  const [conversationStep, setConversationStep] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [statsVisible, setStatsVisible] = useState(false)
  const statsRef = useRef<HTMLElement>(null)

  // Auto-cycle industries
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndustry((prev) => (prev + 1) % INDUSTRIES.length)
      setConversationStep(0)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  // Auto-play conversation for active industry
  useEffect(() => {
    setConversationStep(0)
    const industry = INDUSTRIES[activeIndustry]
    const interval = setInterval(() => {
      setConversationStep((prev) => {
        if (prev < industry.conversation.length - 1) return prev + 1
        return prev
      })
    }, 1500)
    return () => clearInterval(interval)
  }, [activeIndustry])

  // Stats animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true)
      },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  const currentIndustry = INDUSTRIES[activeIndustry]

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a0612] pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* Background effects */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-violet-500/20 blur-[100px]" />
          <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Content */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                AI Receptionist
              </span>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Never Miss a{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
                    Customer Call
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="8"
                    viewBox="0 0 200 8"
                    fill="none"
                  >
                    <path
                      d="M2 6C50 2 150 2 198 6"
                      stroke="url(#hero-underline)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className="animate-[draw_1s_ease-out_forwards]"
                      style={{ strokeDasharray: 200, strokeDashoffset: 200 }}
                    />
                    <defs>
                      <linearGradient id="hero-underline" x1="0" y1="0" x2="200" y2="0">
                        <stop stopColor="#d946ef" />
                        <stop offset="1" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <style>{`@keyframes draw { to { stroke-dashoffset: 0 } }`}</style>
                </span>{" "}
                Again
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-white/60">
                Your AI receptionist answers every call in Hindi, English, or 10+ Indian languages. 
                Books appointments, qualifies leads, and handles FAQs — 24/7.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-fuchsia-500 to-violet-500 hover:from-fuchsia-600 hover:to-violet-600">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/10 pt-8">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {["PS", "RA", "SI"].map((initials, i) => (
                      <div
                        key={initials}
                        className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0a0612] bg-gradient-to-br from-fuchsia-500 to-violet-500 text-xs font-bold text-white"
                      >
                        {initials}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-white/60">5,000+ businesses</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1 text-sm text-white/60">4.9/5</span>
                </div>
              </div>
            </div>

            {/* Right: Animated Phone */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Glowing rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-72 w-72 animate-pulse rounded-full border border-violet-500/20" />
                <div className="absolute h-56 w-56 animate-pulse rounded-full border border-fuchsia-500/30" style={{ animationDelay: "0.5s" }} />
              </div>

              {/* Phone mockup */}
              <div className="relative w-72 rounded-[2.5rem] border-4 border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-950 p-2 shadow-2xl">
                <div className="rounded-[2rem] bg-zinc-900 overflow-hidden">
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-6 py-3 text-white/70">
                    <span className="text-xs font-medium">9:41</span>
                    <div className="h-6 w-20 rounded-full bg-black" />
                    <div className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs">Live</span>
                    </div>
                  </div>

                  {/* Call screen */}
                  <div className="px-6 py-4">
                    {/* Caller info */}
                    <div className="text-center">
                      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-500">
                        <Bot className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-white">AI Receptionist</h3>
                      <p className="text-sm text-white/50">Handling call...</p>

                      {/* Animated waveform */}
                      <div className="mt-4 flex items-center justify-center gap-0.5">
                        {[...Array(20)].map((_, i) => (
                          <div
                            key={i}
                            className="w-1 rounded-full bg-gradient-to-t from-fuchsia-500 to-violet-500"
                            style={{
                              height: `${Math.random() * 24 + 8}px`,
                              animation: `wave 0.5s ease-in-out ${i * 0.05}s infinite alternate`,
                            }}
                          />
                        ))}
                      </div>
                      <style>{`@keyframes wave { from { transform: scaleY(0.5) } to { transform: scaleY(1) } }`}</style>
                    </div>

                    {/* Live transcript */}
                    <div className="mt-6 rounded-xl bg-white/5 p-4">
                      <div className="flex items-center gap-2 text-xs text-white/50">
                        <MessageSquare className="h-3.5 w-3.5" />
                        Live Transcript
                      </div>
                      <p className="mt-2 text-sm text-white/80 leading-relaxed">
                        &ldquo;Sure! I&apos;ve booked your appointment for tomorrow at 4 PM with Dr. Sharma. You&apos;ll receive an SMS confirmation shortly.&rdquo;
                      </p>
                    </div>

                    {/* Intent badge */}
                    <div className="mt-4 flex items-center justify-center gap-2">
                      <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-400">
                        <CheckCircle2 className="mr-1 inline h-3 w-3" />
                        Appointment Booked
                      </span>
                    </div>
                  </div>

                  {/* Call controls */}
                  <div className="flex items-center justify-center gap-6 py-6">
                    <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                      <MicOff className="h-5 w-5 text-white/70" />
                    </button>
                    <button className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500">
                      <PhoneOff className="h-6 w-6 text-white" />
                    </button>
                    <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                      <Volume2 className="h-5 w-5 text-white/70" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-4 top-1/4 animate-float rounded-xl border border-white/10 bg-zinc-900/90 px-3 py-2 shadow-xl backdrop-blur">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-white">142 calls today</p>
                    <p className="text-[10px] text-white/50">100% answered</p>
                  </div>
                </div>
              </div>
              <style>{`@keyframes float { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-10px) } }`}</style>
              <style>{`.animate-float { animation: float 3s ease-in-out infinite }`}</style>

              <div className="absolute -right-4 bottom-1/3 animate-float rounded-xl border border-white/10 bg-zinc-900/90 px-3 py-2 shadow-xl backdrop-blur" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <Languages className="h-4 w-4 text-violet-400" />
                  <span className="text-xs text-white">Hindi + English</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="border-b py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { value: 62, suffix: "%", label: "Calls go unanswered without AI", color: "text-destructive" },
              { value: 85, suffix: "%", label: "Never call back after missed call", color: "text-destructive" },
              { value: 100, suffix: "%", label: "Calls answered with Kedeyo", color: "text-emerald-500" },
              { value: 24, suffix: "h", label: "Average setup time", color: "text-primary" },
            ].map((stat, i) => (
              <AnimatedStatCard key={stat.label} visible={statsVisible} {...stat} delay={i * 150} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Showcase - NEW DESIGN */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
              <Building2 className="h-3.5 w-3.5" />
              Industries
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              See It Work for Your Business
            </h2>
            <p className="mt-3 text-muted-foreground">
              Watch real conversations in action
            </p>
          </div>

          {/* Industry Tabs */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {INDUSTRIES.map((ind, i) => {
              const Icon = ind.icon
              return (
                <button
                  key={ind.id}
                  onClick={() => {
                    setActiveIndustry(i)
                    setConversationStep(0)
                  }}
                  className={cn(
                    "group flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all",
                    activeIndustry === i
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {ind.name}
                  {activeIndustry === i && (
                    <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px]">{ind.stat}</span>
                  )}
                </button>
              )
            })}
          </div>

          {/* Showcase Panel */}
          <div className="mt-10 overflow-hidden rounded-2xl border bg-card shadow-lg">
            <div className="grid lg:grid-cols-2">
              {/* Left: Live Conversation */}
              <div className="relative border-b lg:border-b-0 lg:border-r">
                {/* Header */}
                <div className="flex items-center justify-between border-b px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className={cn("flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-white", currentIndustry.color)}>
                      <currentIndustry.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{currentIndustry.name}</h3>
                      <p className="text-xs text-muted-foreground">Live demo</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                    Active call
                  </span>
                </div>

                {/* Conversation */}
                <div className="h-80 overflow-y-auto p-6">
                  <div className="space-y-4">
                    {currentIndustry.conversation.slice(0, conversationStep + 1).map((msg, i) => (
                      <div
                        key={i}
                        className={cn(
                          "flex gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300",
                          msg.speaker === "caller" && "flex-row-reverse"
                        )}
                      >
                        <div
                          className={cn(
                            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
                            msg.speaker === "ai"
                              ? `bg-gradient-to-br ${currentIndustry.color} text-white`
                              : "bg-muted text-muted-foreground"
                          )}
                        >
                          {msg.speaker === "ai" ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                        </div>
                        <div
                          className={cn(
                            "max-w-[80%] rounded-2xl px-4 py-2.5",
                            msg.speaker === "ai"
                              ? "bg-primary/10 border border-primary/20"
                              : "bg-muted"
                          )}
                        >
                          <p className="text-sm text-foreground">{msg.text}</p>
                        </div>
                      </div>
                    ))}

                    {/* Typing indicator */}
                    {conversationStep < currentIndustry.conversation.length - 1 && (
                      <div className="flex gap-3">
                        <div className={cn("flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br text-white", currentIndustry.color)}>
                          <Bot className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-1 rounded-2xl bg-primary/10 border border-primary/20 px-4 py-2.5">
                          <span className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: "0ms" }} />
                          <span className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: "150ms" }} />
                          <span className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Progress */}
                <div className="border-t bg-muted/30 px-6 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                        <div
                          className={cn("h-full rounded-full bg-gradient-to-r transition-all duration-500", currentIndustry.color)}
                          style={{ width: `${((conversationStep + 1) / currentIndustry.conversation.length) * 100}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {conversationStep + 1}/{currentIndustry.conversation.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Industry Info */}
              <div className="p-6 lg:p-8">
                {/* Stat highlight */}
                <div className="inline-flex items-baseline gap-2 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-3">
                  <span className={cn("text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent", currentIndustry.color)}>
                    {currentIndustry.stat}
                  </span>
                  <span className="text-sm text-muted-foreground">{currentIndustry.statLabel}</span>
                </div>

                {/* Features */}
                <h4 className="mt-6 text-sm font-semibold text-foreground">What AI handles:</h4>
                <ul className="mt-3 grid grid-cols-2 gap-2">
                  {currentIndustry.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Trusted by */}
                <h4 className="mt-6 text-sm font-semibold text-foreground">Trusted by:</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {currentIndustry.companies.map((company) => (
                    <span key={company} className="rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground">
                      {company}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <Link
                    href={`/industries/${currentIndustry.id}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    See {currentIndustry.name} solution
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="border-y bg-muted/30 py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
              <TrendingUp className="h-3.5 w-3.5" />
              Compare
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              AI vs Human Receptionist
            </h2>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border bg-card shadow-sm">
            <div className="grid grid-cols-3 border-b bg-muted/50 px-6 py-4 text-sm font-semibold">
              <div>Feature</div>
              <div className="text-center text-primary">Kedeyo AI</div>
              <div className="text-center text-muted-foreground">Human</div>
            </div>
            {COMPARISON.map((row, i) => (
              <div key={row.feature} className={cn("grid grid-cols-3 items-center px-6 py-4 text-sm", i !== COMPARISON.length - 1 && "border-b")}>
                <div className="font-medium text-foreground">{row.feature}</div>
                <div className="flex items-center justify-center gap-2 text-center">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span className="text-foreground">{row.ai}</span>
                </div>
                <div className="text-center text-muted-foreground">{row.human}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
              <Star className="h-3.5 w-3.5 fill-current" />
              Testimonials
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Trusted by 5,000+ Indian Businesses
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-xl border bg-card p-6 transition-shadow hover:shadow-lg">
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5 flex items-center gap-3 border-t pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-500 text-sm font-bold text-white">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                  <span className="ml-auto rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Frequently Asked Questions</h2>
          </div>

          <div className="mt-10 space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="overflow-hidden rounded-xl border bg-card transition-shadow hover:shadow-md">
                <button
                  className="flex w-full items-center justify-between p-5 text-left font-medium text-foreground"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  <ChevronRight className={cn("h-5 w-5 text-muted-foreground transition-transform", openFaq === i && "rotate-90")} />
                </button>
                {openFaq === i && (
                  <div className="border-t bg-muted/30 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection />

      <SiteFooter />
    </div>
  )
}

// Animated stat card component
function AnimatedStatCard({
  visible,
  value,
  suffix,
  label,
  color,
  delay,
}: {
  visible: boolean
  value: number
  suffix: string
  label: string
  color: string
  delay: number
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!visible) return
    const timeout = setTimeout(() => {
      const duration = 1500
      const steps = 30
      const increment = value / steps
      let current = 0
      const interval = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(interval)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timeout)
  }, [visible, value, delay])

  return (
    <div className="rounded-2xl border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md">
      <div className={cn("text-4xl font-bold", color)}>
        {count}{suffix}
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  )
}
