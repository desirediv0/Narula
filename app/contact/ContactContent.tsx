'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import {
  CLINIC_ADDRESS,
  CLINIC_AREA_SHORT,
  CLINIC_MAP_EMBED_SRC,
} from '@/lib/clinic-address'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  PhoneCall,
  ArrowRight,
  CheckCircle2,
  HeartPulse,
  Stethoscope,
  ShieldCheck,
  Send,
  ChevronRight,
} from 'lucide-react'

/* ─── CONSTANTS ─────────────────────────────────────────── */
const PHONE_DISPLAY = '+91-XXXX-XXXX-XX'
const PHONE_TEL = 'tel:+91XXXXXXXXXX'
const WHATSAPP_TEL = 'https://wa.me/91XXXXXXXXXX'
const EMAIL = 'info@narulaClinic.com'
/* ─── SCHEMA ────────────────────────────────────────────── */
const schema = z.object({
  fullName: z.string().min(2, 'Please enter your full name.'),
  phone: z.string().min(10, 'Please enter a valid phone number.').max(15),
  email: z.string().email('Please enter a valid email.').optional().or(z.literal('')),
  service: z.string().optional(),
  message: z.string().min(10, 'Please enter your message (min 10 characters).'),
})
type FormValues = z.infer<typeof schema>

const SERVICES = [
  'Obstetrics & Gynaecology',
  'Infertility (IVF / IUI)',
  'Cosmetic Gynaecology',
  'General & Laparoscopic Surgery',
  'Bone & Joint Care',
  'Paediatrics & Neonatology',
  'Other / General Query',
]

/* ─── CONTACT CARDS DATA ───────────────────────────────── */
const contactCards = [
  {
    icon: MapPin,
    title: 'Our Address',
    lines: ['NH 2, Sector 15', 'Gurugram, Haryana 122001'],
    action: null,
    color: 'bg-sky-500/10 text-sky-600 border-sky-500/20',
  },
  {
    icon: Phone,
    title: 'Phone Number',
    lines: [PHONE_DISPLAY],
    action: { label: 'Call Now', href: PHONE_TEL },
    color: 'bg-teal-500/10 text-teal-600 border-teal-500/20',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: [EMAIL],
    action: { label: 'Send Email', href: `mailto:${EMAIL}` },
    color: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Mon–Sat: 9:00 AM – 7:00 PM', 'Sunday: Emergency Only'],
    action: null,
    color: 'bg-primary/10 text-primary border-primary/20',
  },
]

/* ─── QUICK LINKS ──────────────────────────────────────── */
const quickLinks = [
  { icon: HeartPulse, label: 'Obstetrics & Gynaecology', href: '/services#obgyn' },
  { icon: Stethoscope, label: 'Bone & Joint Care', href: '/services#bone-joint' },
  { icon: ShieldCheck, label: 'General Surgery', href: '/services#surgery' },
  { icon: HeartPulse, label: 'Paediatrics', href: '/services#paediatrics' },
]

/* ══════════════════════════════════════════════════════════
   COMPONENT
══════════════════════════════════════════════════════════ */
export function ContactContent() {
  const [submitted, setSubmitted] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const defaultValues = useMemo<FormValues>(
    () => ({ fullName: '', phone: '', email: '', service: '', message: '' }),
    []
  )

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: 'onTouched',
  })

  const onSubmit = async (values: FormValues) => {
    setSubmitted(true)
    await new Promise((r) => setTimeout(r, 1200))
    reset(defaultValues)
    setSubmitted(false)
    setSubmitSuccess(true)
    setTimeout(() => setSubmitSuccess(false), 5000)
    console.log('Contact form:', values)
  }

  return (
    <div className="bg-background pb-24">

      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section className="relative pt-16 pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-white to-teal-50" />
        <div className="absolute -top-24 -right-24 -z-10 h-[480px] w-[480px] rounded-full bg-sky-400/15 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 -z-10 h-[360px] w-[360px] rounded-full bg-emerald-400/15 blur-3xl" />
        <div className="absolute inset-0 -z-10 opacity-[0.025]"
          style={{ backgroundImage: 'linear-gradient(to right,#0284c7 1px,transparent 1px),linear-gradient(to bottom,#0284c7 1px,transparent 1px)', backgroundSize: '48px 48px' }} />

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-3">
                  We're Here to Help
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="text-4xl sm:text-5xl font-bold text-slate-900 leading-[1.12] tracking-tight"
              >
                Get in Touch With{' '}
                <span className="text-primary">Our Team</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.26 }}
                className="text-lg text-slate-600 leading-relaxed max-w-lg"
              >
                Book an appointment, ask a question, or simply reach out. Our team responds
                promptly — because your health can't wait.
              </motion.p>

              {/* Trust bullets */}
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.34 }}
                className="space-y-2"
              >
                {[
                  'Same-day appointments for urgent cases',
                  'Replies within 24 hours for email queries',
                  'WhatsApp consultation available',
                  'Mon–Sat, 9 AM – 7 PM',
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-base text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {t}
                  </li>
                ))}
              </motion.ul>

              {/* Quick action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42 }}
                className="flex flex-col sm:flex-row gap-3 pt-1"
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 px-7" asChild>
                  <Link href={PHONE_TEL} className="inline-flex items-center gap-2">
                    <PhoneCall className="w-4 h-4" /> Call Now
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary/40 text-primary hover:bg-primary/5" asChild>
                  <Link href={WHATSAPP_TEL} target="_blank" className="inline-flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" /> WhatsApp Us
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right — contact info quick cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {contactCards.map((c, idx) => {
                const Icon = c.icon
                return (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.28 + idx * 0.08 }}
                  >
                    <Card className="rounded-2xl border-slate-200/60 bg-white/80 backdrop-blur shadow-sm p-5 h-full hover:shadow-lg transition-shadow">
                      <div className={`h-10 w-10 rounded-xl flex items-center justify-center border mb-3 ${c.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-slate-900 text-base">{c.title}</h3>
                      {c.lines.map((line, i) => (
                        <p key={i} className="mt-1 text-sm text-slate-500 leading-snug">{line}</p>
                      ))}
                      {c.action && (
                        <a
                          href={c.action.href}
                          className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                        >
                          {c.action.label} <ChevronRight className="w-3 h-3" />
                        </a>
                      )}
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FORM + MAP
      ══════════════════════════════════ */}
      <section id="contact-form" className="py-12 px-4 sm:px-6 lg:px-8 scroll-mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">

            {/* ── FORM ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-7">
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-3">Book an Appointment</Badge>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Send Us a Message</h2>
                <p className="mt-2 text-slate-500 text-base">
                  Fill in your details and our team will get back to you to confirm your appointment.
                </p>
              </div>

              <Card className="rounded-2xl border-slate-200/60 bg-white shadow-sm p-6 sm:p-7">
                {/* Success banner */}
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-5 flex items-start gap-3 p-4 rounded-xl border border-emerald-200 bg-emerald-50"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-base font-semibold text-emerald-800">Message Sent!</p>
                      <p className="text-sm text-emerald-700 mt-0.5">Our team will contact you shortly to confirm your appointment.</p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Name + Phone row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-800 mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <Input
                        placeholder="Your full name"
                        className="bg-slate-50/70 border-slate-200 focus:bg-white transition-colors"
                        {...register('fullName')}
                      />
                      {errors.fullName && (
                        <p className="mt-1.5 text-sm text-red-500">{errors.fullName.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-800 mb-1.5">
                        Phone <span className="text-red-400">*</span>
                      </label>
                      <Input
                        placeholder="+91 98765 43210"
                        className="bg-slate-50/70 border-slate-200 focus:bg-white transition-colors"
                        {...register('phone')}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-sm text-red-500">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-slate-800 mb-1.5">
                      Email <span className="text-slate-400 font-normal text-sm">(optional)</span>
                    </label>
                    <Input
                      placeholder="your@email.com"
                      className="bg-slate-50/70 border-slate-200 focus:bg-white transition-colors"
                      {...register('email')}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-medium text-slate-800 mb-1.5">
                      Speciality / Service Needed
                    </label>
                    <select
                      {...register('service')}
                      className="w-full rounded-md border border-slate-200 bg-slate-50/70 px-3 py-2 text-base text-slate-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors"
                    >
                      <option value="">Select a speciality...</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-slate-800 mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <Textarea
                      rows={4}
                      placeholder="Tell us what you need help with — symptoms, preferred timing, or any questions..."
                      className="bg-slate-50/70 border-slate-200 focus:bg-white transition-colors resize-none"
                      {...register('message')}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={isSubmitting || submitted}
                    className="w-full bg-primary hover:bg-primary/90 shadow-sm shadow-primary/20 h-11"
                  >
                    {submitted ? (
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" /> Send Message
                      </span>
                    )}
                  </Button>

                  <p className="text-center text-sm text-slate-400">
                    By submitting, you agree to be contacted by our clinic team.
                  </p>
                </form>
              </Card>
            </motion.div>

            {/* ── MAP + QUICK LINKS ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="space-y-5"
            >
              {/* Map */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div>
                    <Badge className="bg-primary/10 text-primary border-primary/20 mb-2">Find Us</Badge>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Visit the Clinic</h2>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 rounded-full bg-white border border-slate-200/70 px-3 py-1.5 shadow-sm shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    <span className="text-sm font-semibold text-slate-700">{CLINIC_AREA_SHORT}</span>
                  </div>
                </div>

                <Card className="rounded-2xl overflow-hidden border-slate-200/70 shadow-sm">
                  <div className="relative w-full" style={{ aspectRatio: '16/10' }}>
                    <iframe
                      title="Clinic location map"
                      src={CLINIC_MAP_EMBED_SRC}
                      className="absolute inset-0 w-full h-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                    {/* Overlay label */}
                    <div className="pointer-events-none absolute bottom-3 left-3">
                      <div className="flex items-center gap-2 rounded-xl bg-white/90 backdrop-blur border border-slate-200/80 px-3 py-2 shadow-sm w-fit">
                        <MapPin className="w-4 h-4 text-primary shrink-0" />
                        <div>
                          <div className="text-sm font-bold text-slate-900">Narula Multispeciality Clinic</div>
                          <div className="text-xs text-slate-500 leading-snug">{CLINIC_ADDRESS}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Quick service links */}
              <Card className="rounded-2xl border-slate-200/60 bg-white shadow-sm p-5">
                <h3 className="font-bold text-slate-900 text-base mb-3">Book by Speciality</h3>
                <div className="space-y-2">
                  {quickLinks.map(({ icon: Icon, label, href }) => (
                    <Link
                      key={label}
                      href={href}
                      className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50/70 px-3.5 py-2.5 hover:bg-primary/5 hover:border-primary/20 transition-colors group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="h-7 w-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm font-medium text-slate-700 group-hover:text-primary transition-colors">{label}</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary transition-colors" />
                    </Link>
                  ))}
                </div>
              </Card>

              {/* WhatsApp CTA card */}
              <Card className="rounded-2xl border-emerald-200/60 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-sm p-5 flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-emerald-500/15 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-slate-900">Chat on WhatsApp</div>
                  <p className="text-sm text-slate-500 mt-0.5 leading-snug">Quick queries answered in minutes</p>
                </div>
                <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm shrink-0" asChild>
                  <Link href={WHATSAPP_TEL} target="_blank" className="inline-flex items-center gap-1.5">
                    Chat <ArrowRight className="w-3 h-3" />
                  </Link>
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          CTA BANNER
      ══════════════════════════════════ */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-white/30 shadow-xl bg-gradient-to-r from-sky-500/20 via-teal-500/20 to-emerald-500/20"
          >
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none" />

            <div className="relative p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/60 border border-white/70 px-3 py-1.5 mb-3">
                  <HeartPulse className="w-3.5 h-3.5 text-primary" />
                  <span className="text-sm font-semibold text-slate-800">Same-day appointments available</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Your health, our priority.</h2>
                <p className="mt-2 text-slate-600 text-base leading-relaxed">
                  Can't wait? Call us directly or message on WhatsApp for a quick response.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Button className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 px-7" asChild>
                  <Link href={PHONE_TEL} className="inline-flex items-center gap-2">
                    <PhoneCall className="w-4 h-4" /> Call Now
                  </Link>
                </Button>
                <Button variant="outline" className="border-primary/40 text-primary hover:bg-primary/5 bg-white/60" asChild>
                  <Link href="#contact-form" className="inline-flex items-center gap-2">
                    Send Message <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════
          MOBILE STICKY BAR
      ══════════════════════════════════ */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200/70 bg-white/90 backdrop-blur-sm">
        <div className="px-4 py-3 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-xs text-slate-500 leading-snug">{CLINIC_ADDRESS}</div>
            <div className="text-sm font-semibold text-slate-900">Narula Clinic</div>
          </div>
          <div className="flex gap-2 shrink-0">
            <Button size="sm" variant="outline" className="border-primary/40 text-primary" asChild>
              <Link href={PHONE_TEL}><PhoneCall className="w-4 h-4" /></Link>
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="#contact-form">Book Now</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          DESKTOP FLOATING ACTIONS
      ══════════════════════════════════ */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-3">
        <Button className="rounded-full w-12 h-12 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25" asChild>
          <Link href={PHONE_TEL} aria-label="Call Now" className="inline-flex items-center justify-center">
            <PhoneCall className="w-5 h-5" />
          </Link>
        </Button>
        <Button className="rounded-full w-12 h-12 bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-500/25" asChild>
          <Link href={WHATSAPP_TEL} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="inline-flex items-center justify-center">
            <MessageCircle className="w-5 h-5" />
          </Link>
        </Button>
      </div>

    </div>
  )
}