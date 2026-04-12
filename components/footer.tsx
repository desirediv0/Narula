import Link from 'next/link'
import Image from 'next/image'
import {
  CLINIC_ADDRESS,
  CLINIC_AREA_SHORT,
  CLINIC_MAPS_URL,
  CLINIC_EMAIL,
  CLINIC_TIMINGS,
  CLINIC_APPOINTMENT_NOTE,
} from '@/lib/clinic-address'
import {
  Mail, Phone, MapPin, Clock,
  Facebook, Twitter, Linkedin, Instagram,
  HeartPulse, Bone, Baby, ShieldCheck, Sparkles, Pill,
  ArrowRight, MessageCircle,
} from 'lucide-react'

const PHONE_TEL = 'tel:+919810433502'
const WHATSAPP_TEL = 'https://wa.me/919810433502'


const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Doctors', href: '/doctors' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

const services = [
  { label: 'Obstetrics & Gynaecology', href: '/services#obgyn', icon: HeartPulse },
  { label: 'Infertility (IVF & IUI)', href: '/services#infertility', icon: Sparkles },
  { label: 'Cosmetic Gynaecology', href: '/services#cosmetic', icon: Pill },
  { label: 'General Surgery', href: '/services#surgery', icon: ShieldCheck },
  { label: 'Bone & Joint Care', href: '/services#bone-joint', icon: Bone },
  { label: 'Paediatrics & Neonatology', href: '/services#paediatrics', icon: Baby },
]

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#0b1628] text-white overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-sky-500/10 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-1/2 w-[700px] h-[300px] bg-emerald-500/8 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/3" />
      </div>

      {/* Top CTA strip */}
      <div className="relative border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-primary/20 text-sky-400 flex items-center justify-center border border-primary/20 shrink-0">
                <HeartPulse className="w-4.5 h-4.5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Need medical advice?</p>
                <p className="text-xs text-white/50">Same-day appointments available for urgent cases.</p>
              </div>
            </div>
            <div className="flex gap-2.5 shrink-0">
              <Link
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/8 hover:bg-white/15 px-4 py-2 text-xs font-semibold text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5" /> Call Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary hover:bg-primary/90 px-4 py-2 text-xs font-semibold text-white transition-colors shadow-sm shadow-primary/30"
              >
                Book Appointment <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* ── COL 1: Brand ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 group mb-5">
              <div className="relative h-16 w-16 rounded-2xl overflow-hidden border border-white/15 bg-white/10 shrink-0 transition-transform group-hover:scale-105 shadow-lg">
                <Image
                  src="/images/clinic-logo.png"
                  alt="Narula Clinic Logo"
                  fill
                  sizes="64px"
                  className="object-contain p-0"
                />
              </div>
              <div>
                <div className="font-bold text-white text-base leading-tight">
                  Narula Multispeciality
                </div>
                <div className="text-xs text-sky-400 font-medium leading-tight mt-0.5">
                  Clinic · {CLINIC_AREA_SHORT}
                </div>
              </div>
            </Link>

            <p className="text-sm text-white/55 leading-relaxed mb-5">
              Compassionate, advanced healthcare under one roof — trusted by thousands
              of families across Gurugram &amp; NCR for over 35 years.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-9 w-9 rounded-xl border border-white/12 bg-white/6 hover:bg-white/15 hover:border-white/25 flex items-center justify-center text-white/60 hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* ── COL 2: Quick Links ── */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary/60 group-hover:bg-primary group-hover:scale-125 transition-all shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COL 3: Services ── */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map(({ label, href, icon: Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5 text-sky-500/60 group-hover:text-sky-400 transition-colors shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COL 4: Contact ── */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3.5">
              {[
                {
                  icon: Phone,
                  label: '98104 33502, 98108 09067',
                  href: PHONE_TEL,
                  sub: `${CLINIC_TIMINGS} (${CLINIC_APPOINTMENT_NOTE})`,
                },

                {
                  icon: MessageCircle,
                  label: 'WhatsApp Us',
                  href: WHATSAPP_TEL,
                  sub: 'Quick queries answered fast',
                },
                {
                  icon: Mail,
                  label: CLINIC_EMAIL,
                  href: `mailto:${CLINIC_EMAIL}`,
                  sub: 'Reply within 24 hours',
                },

                {
                  icon: MapPin,
                  label: CLINIC_ADDRESS,
                  href: CLINIC_MAPS_URL,
                  sub: 'View on Google Maps',
                },
              ].map(({ icon: Icon, label, href, sub }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    className="group flex items-start gap-3"
                  >
                    <div className="h-7 w-7 rounded-lg bg-white/8 border border-white/12 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors">
                      <Icon className="w-3.5 h-3.5 text-white/50 group-hover:text-sky-400 transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70 group-hover:text-white transition-colors leading-tight">{label}</div>
                      <div className="text-[10px] text-white/35 mt-0.5 leading-tight">{sub}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Hours badge */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/6 px-3 py-2">
              <Clock className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <div>
                <div className="text-[11px] font-semibold text-white/80">{CLINIC_TIMINGS}</div>
                <div className="text-[10px] text-white/40">{CLINIC_APPOINTMENT_NOTE}</div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/8 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <p className="text-xs text-white/35">
            &copy; {currentYear} Narula Multispeciality Clinic. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  )
}