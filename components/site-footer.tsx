"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Linkedin, Twitter, Youtube, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const PRODUCT_LINKS = [
  { label: "Voice Bot", href: "/features/voice-bot" },
  { label: "Auto Dialer", href: "/features/auto-dialer" },
  { label: "IVR Designer", href: "/features/ivr" },
  { label: "Live Monitor", href: "/features/live-monitor" },
  { label: "WhatsApp", href: "/features/whatsapp" },
  { label: "Reports", href: "/features/reports" },
]

const INDUSTRY_LINKS = [
  { label: "E-commerce", href: "/industries/ecommerce" },
  { label: "EdTech", href: "/industries/edtech" },
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "BFSI", href: "/industries/bfsi" },
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Travel", href: "/industries/travel" },
]

const COMPANY_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Customers", href: "#customers" },
  { label: "Careers", href: "#careers" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
]

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
  { label: "TRAI Compliance", href: "#trai" },
  { label: "Security", href: "#security" },
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-[#0a0612]">
      {/* Background gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_100%,oklch(0.45_0.22_295/0.15),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_90%_80%,oklch(0.62_0.24_300/0.1),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Top CTA banner */}
        <div className="mb-12 rounded-2xl border border-white/10 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 p-6 sm:p-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <h3 className="text-lg font-semibold text-white sm:text-xl">Ready to transform your contact center?</h3>
              <p className="mt-1 text-sm text-white/60">Join 5,000+ Indian businesses using Kedeyo</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10">
                Talk to sales
              </Button>
              <Button className="bg-white text-[#0a0612] hover:bg-white/90">
                Start free trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <Link href="/" className="inline-flex items-center" aria-label="Kedeyo home">
              <Image src="/kedeyo-logo.webp" alt="Kedeyo" width={130} height={36} className="h-8 w-auto brightness-0 invert" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              AI-powered cloud contact center software built for Indian sales and support teams.
            </p>

            {/* Contact info */}
            <div className="mt-6 space-y-3">
              <a href="tel:+911234567890" className="flex items-center gap-2.5 text-sm text-white/60 transition hover:text-white">
                <Phone className="h-4 w-4 text-primary" />
                +91 12345 67890
              </a>
              <a href="mailto:hello@kedeyo.com" className="flex items-center gap-2.5 text-sm text-white/60 transition hover:text-white">
                <Mail className="h-4 w-4 text-primary" />
                hello@kedeyo.com
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                Bangalore, India
              </div>
            </div>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
                { icon: Twitter, href: "#twitter", label: "Twitter" },
                { icon: Youtube, href: "#youtube", label: "YouTube" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-white">Product</div>
            <ul className="mt-4 space-y-2.5">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industry links */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-white">Industries</div>
            <ul className="mt-4 space-y-2.5">
              {INDUSTRY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-white">Company</div>
            <ul className="mt-4 space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-white">Legal</div>
            <ul className="mt-4 space-y-2.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8">
          {[
            { label: "DPDP Compliant", color: "text-emerald-400" },
            { label: "TRAI Registered", color: "text-sky-400" },
            { label: "SOC 2 Type II", color: "text-amber-400" },
            { label: "ISO 27001", color: "text-violet-400" },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-xs text-white/60">
              <span className={`h-1.5 w-1.5 rounded-full ${badge.color} bg-current`} />
              {badge.label}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <div className="flex items-center gap-2 text-xs text-white/40">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            All systems operational
          </div>
          <div className="text-xs text-white/40">
            © {new Date().getFullYear()} Kedeyo Technologies Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-xs text-white/40">
            Made with
            <span className="text-red-400">♥</span>
            in India
          </div>
        </div>
      </div>
    </footer>
  )
}
