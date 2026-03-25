'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
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
} from 'lucide-react'

export function DoctorsContent() {
  const [open, setOpen] = useState(false)
  const [activeDoctorId, setActiveDoctorId] = useState<number | null>(null)

  const activeDoctor = useMemo(() => {
    return doctors.find((d) => d.id === activeDoctorId) ?? null
  }, [activeDoctorId])

  const openDoctor = (id: number) => {
    setActiveDoctorId(id)
    setOpen(true)
  }

  const closeDoctor = () => {
    setOpen(false)
  }

  return (
    <div className="bg-background pb-24">

      {/* Sticky mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="px-4 py-2 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-[13px] text-slate-700/80">Quick Booking</div>
            <div className="text-sm font-semibold text-slate-900 truncate">Narula Clinic</div>
          </div>
          <Button className="bg-primary hover:bg-primary/90" asChild>
            <Link href="/contact">Book Appointment</Link>
          </Button>
        </div>
      </div>

      {/* SECTION 1: HERO */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-sky-500/15 via-teal-500/10 to-emerald-500/15" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-5xl font-bold text-slate-900">Meet Our Specialists</h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-700/80 max-w-2xl mx-auto">
              Experienced doctors dedicated to your health
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: DOCTORS GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-7">
            {doctors.map((doc, idx) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: idx * 0.03 }}
                className="group"
              >
                <Card
                  id={String(doc.id)}
                  className="rounded-2xl border-slate-200/60 bg-white/80 backdrop-blur shadow-sm overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 flex flex-col h-[430px] scroll-mt-24"
                  role="button"
                  tabIndex={0}
                  onClick={() => openDoctor(doc.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') openDoctor(doc.id)
                  }}
                >
                  <div className="relative h-60 overflow-hidden rounded-t-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-teal-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      priority={idx === 0}
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h2 className="text-lg font-bold text-slate-900">{doc.name}</h2>
                        <div className="mt-1 text-sm text-primary font-semibold">{doc.speciality}</div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <Badge className="bg-primary/10 text-primary border-primary/25">
                        {doc.experience}
                      </Badge>
                    </div>

                    <p className="mt-4 text-sm text-slate-700/80 leading-relaxed flex-1 overflow-hidden line-clamp-4">
                      {doc.bio}
                    </p>

                    <div className="mt-auto flex flex-col gap-3 pt-4">
                      <Button
                        variant="outline"
                        className="w-full border-primary/40 text-primary hover:bg-primary/5 bg-white/60"
                        onClick={(e) => {
                          e.stopPropagation()
                          openDoctor(doc.id)
                        }}
                      >
                        View Profile
                      </Button>
                      <Button
                        className="w-full bg-primary hover:bg-primary/90"
                        asChild
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Link href="/contact">Book Appointment</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: EXPERIENCE HIGHLIGHT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-500/10 via-teal-500/10 to-emerald-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="text-primary font-semibold">Trusted expertise, delivered consistently</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">
                Premium care experience
              </h2>
              <p className="mt-3 text-slate-700/80">
                Dedicated specialists with clinical precision and a patient-first approach.
              </p>
            </div>

            <div className="w-full lg:max-w-2xl">
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { number: '35+', label: 'Years Experience', icon: Stethoscope },
                  { number: '4', label: 'Expert Specialists', icon: ShieldCheck },
                  { number: 'Modern', label: 'Advanced Facilities', icon: Sparkles },
                ].map((s, idx) => {
                  const Icon = s.icon
                  return (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.5, delay: idx * 0.06 }}
                    >
                      <Card className="rounded-2xl border-white/30 bg-white/70 backdrop-blur shadow-sm p-6 h-full">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="text-2xl sm:text-3xl font-bold text-slate-900">
                              {s.number}
                            </div>
                            <div className="text-sm text-slate-700/80 mt-1">{s.label}</div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden border border-slate-200/60 shadow-xl bg-gradient-to-r from-sky-500/20 via-teal-500/20 to-emerald-500/20"
          >
            <div className="p-8 sm:p-10 text-center">
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-3 rounded-2xl bg-white/60 backdrop-blur border border-white/70 px-4 py-2">
                  <HeartPulse className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-slate-900">Book Consultation Today</span>
                </div>
              </div>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
                Talk to an expert specialist
              </h2>
              <div className="mt-6 flex justify-center">
                <Button className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/contact">Book Appointment</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DOCTOR MODAL */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          <div className="grid md:grid-cols-5 gap-0">
            <div className="md:col-span-2 relative min-h-[240px]">
              {activeDoctor ? (
                <div className="absolute inset-0">
                  <Image
                    src={activeDoctor.image}
                    alt={activeDoctor.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent" />
            </div>

            <div className="md:col-span-3 p-6">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-slate-900">
                  {activeDoctor?.name ?? 'Doctor'}
                </DialogTitle>
                <DialogDescription className="text-slate-700/80 mt-1">
                  {activeDoctor?.speciality ?? ''}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4 flex items-center gap-3 flex-wrap">
                {activeDoctor?.experience ? (
                  <Badge className="bg-primary/10 text-primary border-primary/25">
                    {activeDoctor.experience}
                  </Badge>
                ) : null}
              </div>

              <div className="mt-4 text-sm text-slate-700/80 leading-relaxed">
                {activeDoctor?.bio ?? ''}
              </div>

              <div className="mt-6">
                <Tabs defaultValue="experience">
                  <TabsList className="w-full justify-start bg-slate-100/70 border border-slate-200 rounded-xl p-1.5">
                    <TabsTrigger value="experience" className="flex-1">
                      Experience
                    </TabsTrigger>
                    <TabsTrigger value="education" className="flex-1 data-[state=active]:bg-white">
                      Education
                    </TabsTrigger>
                    <TabsTrigger
                      value="achievements"
                      className="flex-1 data-[state=active]:bg-white"
                    >
                      Achievements
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="experience" className="mt-4">
                    <ul className="space-y-2 text-sm text-slate-700/80">
                      {(activeDoctor?.experienceHighlights?.length
                        ? activeDoctor.experienceHighlights
                        : [activeDoctor?.experience ?? 'Experienced']).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-primary font-bold mt-1">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                    </ul>
                  </TabsContent>

                  <TabsContent value="education" className="mt-4">
                    <ul className="space-y-2 text-sm text-slate-700/80">
                      {(activeDoctor?.qualifications?.length ? activeDoctor.qualifications : []).map((q, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-primary font-bold mt-1">
                            <GraduationCap className="w-4 h-4" />
                          </span>
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>

                  <TabsContent value="achievements" className="mt-4">
                    {activeDoctor?.achievements?.length ? (
                      <ul className="space-y-2 text-sm text-slate-700/80">
                        {activeDoctor.achievements.map((a, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-primary font-bold mt-1">
                              <Trophy className="w-4 h-4" />
                            </span>
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="text-sm text-slate-700/80">
                        Achievements information will be updated soon.
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="border-primary/40 text-primary" asChild>
                  <Link href="/contact">Book Appointment</Link>
                </Button>
                <Button
                  className="bg-primary hover:bg-primary/90"
                  asChild
                  onClick={() => closeDoctor()}
                >
                  <Link href={`/doctors#${activeDoctor?.id ?? ''}`}>View Profile</Link>
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

