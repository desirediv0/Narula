'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { doctors } from '@/lib/clinic-data'

import {
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Sparkles,
  GraduationCap,
  Trophy,
  ArrowRight,
  Award,
  Users,
  Star,
  CheckCircle2,
  ChevronRight,
  Phone,
  Clock,
} from 'lucide-react'

/* ─── SPECIALTY COLOR MAP ─────────────────────────────── */
const specialityStyles: Record<string, { bg: string; text: string; border: string; icon: typeof HeartPulse }> = {
  default: { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20', icon: Stethoscope },
  obgyn: { bg: 'bg-sky-500/10', text: 'text-sky-600', border: 'border-sky-500/20', icon: HeartPulse },
  surgery: { bg: 'bg-teal-500/10', text: 'text-teal-600', border: 'border-teal-500/20', icon: ShieldCheck },
  ortho: { bg: 'bg-emerald-500/10', text: 'text-emerald-600', border: 'border-emerald-500/20', icon: Award },
  paediatrics: { bg: 'bg-sky-500/10', text: 'text-sky-600', border: 'border-sky-500/20', icon: Sparkles },
}

function getDoctorStyle(speciality: string) {
  const s = speciality.toLowerCase()
  if (s.includes('gynae') || s.includes('obstet') || s.includes('gynaecol')) return specialityStyles.obgyn
  if (s.includes('surg')) return specialityStyles.surgery
  if (s.includes('ortho') || s.includes('bone') || s.includes('joint')) return specialityStyles.ortho
  if (s.includes('paediat') || s.includes('neonat')) return specialityStyles.paediatrics
  return specialityStyles.default
}

/* ─── STATS ───────────────────────────────────────────── */
const pageStats = [
  { number: '35+', label: 'Years Combined Experience', icon: Award },
  { number: '4', label: 'Expert Specialists', icon: Users },
  { number: '6', label: 'Specialities Covered', icon: Stethoscope },
  { number: '4.9', label: 'Patient Rating', icon: Star },
]

/* ─── TRUST POINTS ────────────────────────────────────── */
const trustPoints = [
  'NABH-aligned clinical protocols',
  'Evidence-based treatment plans',
  'Transparent, unhurried consultations',
  'Multilingual patient support',
]

/* ══════════════════════════════════════════════════════════
   COMPONENT
══════════════════════════════════════════════════════════ */
export function DoctorsContent() {
  const [open, setOpen] = useState(false)
  const [activeDoctorId, setActiveDoctorId] = useState<number | null>(null)

  const activeDoctor = useMemo(
    () => doctors.find((d) => d.id === activeDoctorId) ?? null,
    [activeDoctorId]
  )

  const openDoctor = (id: number) => { setActiveDoctorId(id); setOpen(true) }
  const closeDoctor = () => setOpen(false)

  useEffect(() => {
    const hash = window.location.hash?.replace('#', '')?.trim()
    if (!hash) return
    window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 120)
  }, [])

  const goToDoctorCard = () => {
    const id = activeDoctor?.id
    closeDoctor()
    if (!id) return
    window.setTimeout(() => {
      document.getElementById(String(id))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
  }

  return (
    <div className="bg-background pb-24">

      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section className="relative pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-white to-teal-50" />
        <div className="absolute -top-24 -right-24 -z-10 h-[480px] w-[480px] rounded-full bg-sky-400/15 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 -z-10 h-[360px] w-[360px] rounded-full bg-emerald-400/15 blur-3xl" />
        <div className="absolute inset-0 -z-10 opacity-[0.025]"
          style={{ backgroundImage: 'linear-gradient(to right,#0284c7 1px,transparent 1px),linear-gradient(to bottom,#0284c7 1px,transparent 1px)', backgroundSize: '48px 48px' }} />

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                  Our Expert Team
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="text-4xl sm:text-5xl font-bold text-slate-900 leading-[1.12] tracking-tight"
              >
                Meet Our{' '}
                <span className="text-primary">Specialist</span>{' '}
                Doctors
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.26 }}
                className="text-lg text-slate-600 leading-relaxed max-w-lg"
              >
                A multi-generational team combining decades of surgical expertise with
                modern diagnostic technology — all under one roof in Gurugram, Haryana.
              </motion.p>

              {/* Trust points */}
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.34 }}
                className="space-y-2"
              >
                {trustPoints.map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-base text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {t}
                  </li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.42 }}
                className="flex flex-col sm:flex-row gap-3 pt-1"
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 px-7" asChild>
                  <Link href="/contact" className="inline-flex items-center gap-2">
                    Book Appointment <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary/40 text-primary hover:bg-primary/5" asChild>
                  <Link href="tel:+919810433502" className="inline-flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Call Now
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right — stat cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {pageStats.map((s, idx) => {
                const Icon = s.icon
                return (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 + idx * 0.08 }}
                  >
                    <Card className="rounded-2xl border-slate-200/60 bg-white/80 backdrop-blur shadow-sm p-5 h-full hover:shadow-lg transition-shadow">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/15 mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900">{s.number}</div>
                      <div className="text-sm text-slate-500 mt-0.5 leading-snug">{s.label}</div>
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          DOCTORS GRID
      ══════════════════════════════════ */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Our <span className="text-primary">Specialists</span>
            </h2>
            <p className="mt-2 text-slate-500 text-base max-w-md mx-auto">
              Click on any doctor to view their full profile, qualifications, and expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 items-stretch">
            {doctors.map((doc, idx) => {
              const style = getDoctorStyle(doc.speciality)
              const Icon = style.icon
              return (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: idx * 0.07 }}
                  className="group h-full"
                >
                  <Card
                    id={String(doc.id)}
                    className="rounded-2xl border-slate-200/60 bg-white shadow-sm overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-primary/30 flex flex-col h-full scroll-mt-24"
                    role="button"
                    tabIndex={0}
                    onClick={() => openDoctor(doc.id)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openDoctor(doc.id) }}
                  >
                    {/* Image */}
                    <div className="relative w-full h-56 shrink-0 overflow-hidden bg-slate-100">
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${style.bg.replace('bg-', 'from-').replace('/10', '/20')} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10`} />

                      {doc.image ? (
                        <Image
                          src={doc.image}
                          alt={doc.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                          priority={idx < 2}
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                          <svg className="w-16 h-16 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                          </svg>
                        </div>
                      )}

                      {/* Specialty icon chip — top right */}
                      <div className={`absolute top-3 right-3 z-20 h-8 w-8 rounded-lg ${style.bg} ${style.text} border ${style.border} flex items-center justify-center shadow-sm`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      {/* Eyebrow speciality */}
                      <div className={`text-sm font-semibold uppercase tracking-wide ${style.text}`}>
                        {doc.speciality}
                      </div>

                      <h2 className="mt-1 text-lg font-bold text-slate-900 leading-tight">{doc.name}</h2>

                      <div className="mt-2">
                        <Badge className={`${style.bg} ${style.text} ${style.border} text-xs`}>
                          {doc.experience}
                        </Badge>
                      </div>

                      <p className="mt-3 text-base text-slate-500 leading-relaxed line-clamp-3 flex-1">
                        {doc.bio}
                      </p>

                      {/* CTA row */}
                      <div className="mt-4 flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-primary/40 text-primary hover:bg-primary/5 text-sm"
                          onClick={(e) => { e.stopPropagation(); openDoctor(doc.id) }}
                        >
                          View Profile
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-primary hover:bg-primary/90 text-sm"
                          asChild
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Link href="/contact">Book Now</Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          CLINIC INFO STRIP
      ══════════════════════════════════ */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55 }}
            >
              <p className="text-primary font-semibold text-base uppercase tracking-wide">A Legacy of Trust</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 leading-snug">
                35+ Years of Expert Clinical Care
              </h2>
              <p className="mt-3 text-slate-600 text-base leading-relaxed">
                Our founding doctors — <strong className="text-slate-800">Dr Sanjay Narula</strong> and{' '}
                <strong className="text-slate-800">Dr Vandana Narula</strong> — built Narula Clinic on
                the values of trust, transparency, and clinical excellence. The next generation continues
                that legacy with the latest in medical advancements.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  { icon: Clock, text: 'Mon–Sat · 9 AM – 7 PM' },
                  { icon: ShieldCheck, text: 'NABH-aligned Protocols' },
                  { icon: Stethoscope, text: '7 Specialities Available' },
                  { icon: HeartPulse, text: 'Patient-first Approach' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-base text-slate-600">
                    <Icon className="w-4 h-4 text-primary shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55 }}
              className="grid grid-cols-3 gap-3"
            >
              {[
                { number: '35+', label: 'Years Experience', icon: Award },
                { number: '4', label: 'Expert Doctors', icon: Users },
                { number: '6', label: 'Specialities', icon: Sparkles },
              ].map((s, idx) => {
                const Icon = s.icon
                return (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                  >
                    <Card className="rounded-2xl border-white bg-white shadow-sm p-4 h-full text-center">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/15 mx-auto">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="mt-2 text-xl font-bold text-slate-900">{s.number}</div>
                      <div className="text-sm text-slate-500 mt-0.5 leading-snug">{s.label}</div>
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          CTA
      ══════════════════════════════════ */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
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
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Ready to speak with a specialist?
                </h2>
                <p className="mt-2 text-slate-600 text-base leading-relaxed">
                  Book a consultation and get expert care from our dedicated team.
                  We listen, explain clearly, and always put your health first.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Button className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 px-7" asChild>
                  <Link href="/contact" className="inline-flex items-center gap-2">
                    Book Appointment <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-primary/40 text-primary hover:bg-primary/5 bg-white/60" asChild>
                  <Link href="/services" className="inline-flex items-center gap-2">
                    View Services <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════
          MOBILE STICKY CTA
      ══════════════════════════════════ */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200/70 bg-white/90 backdrop-blur-sm">
        <div className="px-4 py-3 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-[11px] text-slate-500">Expert doctors available</div>
            <div className="text-sm font-semibold text-slate-900">Book a Consultation</div>
          </div>
          <Button size="sm" className="bg-primary hover:bg-primary/90 shrink-0" asChild>
            <Link href="/contact">Book Now</Link>
          </Button>
        </div>
      </div>

      {/* ══════════════════════════════════
          DOCTOR MODAL
      ══════════════════════════════════ */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="!w-[min(580px,calc(100vw-20px))] p-0 gap-0 rounded-2xl overflow-hidden border-0 shadow-2xl">
          <DialogTitle className="sr-only">{activeDoctor?.name ?? 'Doctor Profile'}</DialogTitle>

          <div className="flex flex-col max-h-[92dvh] overflow-y-auto overscroll-contain">

            {/* Modal hero — colored top strip with image */}
            {activeDoctor && (() => {
              const style = getDoctorStyle(activeDoctor.speciality)
              return (
                <div className={`relative bg-gradient-to-br from-sky-50 via-white to-teal-50 px-5 pt-6 pb-5 border-b border-slate-100`}>
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="relative h-20 w-20 rounded-2xl overflow-hidden bg-slate-100 border-2 border-white shadow-md shrink-0">
                      {activeDoctor.image ? (
                        <Image
                          src={activeDoctor.image}
                          alt={activeDoctor.name}
                          fill
                          sizes="80px"
                          className="object-contain"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Name / title */}
                    <div className="flex-1 min-w-0 pt-1">
                      <div className={`text-xs font-semibold uppercase tracking-wide ${style.text} mb-1`}>
                        {activeDoctor.speciality}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 leading-tight">{activeDoctor.name}</h3>
                      <div className="mt-1.5">
                        <Badge className={`${style.bg} ${style.text} ${style.border} text-[10px]`}>
                          {activeDoctor.experience}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })()}

            {/* Modal body */}
            <div className="p-5 sm:p-6 flex flex-col gap-5">

              {/* Bio */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {activeDoctor?.bio ?? ''}
              </p>

              {/* Tabs */}
              <Tabs defaultValue="experience" className="w-full">
                <TabsList className="w-full grid grid-cols-3 bg-slate-100 border border-slate-200/80 rounded-xl p-1 h-auto gap-1">
                  {['experience', 'education', 'achievements'].map((tab) => (
                    <TabsTrigger
                      key={tab}
                      value={tab}
                      className="min-w-0 text-[11px] sm:text-xs font-medium py-2 px-1 rounded-lg capitalize
                        data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-primary truncate"
                    >
                      {tab}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value="experience" className="mt-4">
                  <ul className="space-y-2.5">
                    {(activeDoctor?.experienceHighlights?.length
                      ? activeDoctor.experienceHighlights
                      : [activeDoctor?.experience ?? 'Experienced']
                    ).map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>

                <TabsContent value="education" className="mt-4">
                  <ul className="space-y-2.5">
                    {(activeDoctor?.qualifications ?? []).map((q, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <GraduationCap className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span className="leading-snug">{q}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>

                <TabsContent value="achievements" className="mt-4">
                  {activeDoctor?.achievements?.length ? (
                    <ul className="space-y-2.5">
                      {activeDoctor.achievements.map((a, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <Trophy className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span className="leading-snug">{a}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-slate-400 italic">Achievements will be updated soon.</p>
                  )}
                </TabsContent>
              </Tabs>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-2 pt-3 border-t border-slate-100">
                <Button
                  className="flex-1 bg-primary hover:bg-primary/90"
                  asChild
                >
                  <Link href="/contact" className="inline-flex items-center gap-2">
                    Book Appointment <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-primary/40 text-primary hover:bg-primary/5"
                  onClick={(e) => { e.preventDefault(); goToDoctorCard() }}
                >
                  View on Page
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

    </div>
  )
}