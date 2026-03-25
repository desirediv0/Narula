'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { doctors } from '@/lib/clinic-data'

import {
  HeartPulse,
  Stethoscope,
  ShieldCheck,
  Baby,
  Sparkles,
  Bone,
  Pill,
  Users,
} from 'lucide-react'

const specialities = [
  {
    title: 'Obstetrics & Gynaecology',
    icon: HeartPulse,
    description: 'High-risk pregnancy, prenatal care & comprehensive women’s health.',
  },
  {
    title: 'Infertility (IVF/IUI)',
    icon: Sparkles,
    description: 'Personalized fertility journeys with hormonal balancing & advanced tech.',
  },
  {
    title: 'Cosmetic Gynaecology',
    icon: Pill,
    description: 'Specialized aesthetic and functional restorative procedures for women.',
  },
  {
    title: 'General Surgery',
    icon: ShieldCheck,
    description: 'Minimally invasive (laparoscopic) procedures and routine surgical care.',
  },
  {
    title: 'Bone & Joint Care',
    icon: Bone,
    description: 'Fracture management, joint pain support, and sports injury expertise.',
  },
  {
    title: 'Paediatrics',
    icon: Baby,
    description: 'Newborn care, vaccinations & adolescent health management.',
  },
]

const whyChooseUs = [
  {
    title: 'Experienced doctors',
    description: '35+ years of combined expertise across specialties.',
    icon: Users,
  },
  {
    title: 'Multi-speciality care',
    description: 'Integrated care under one roof for faster coordination.',
    icon: Stethoscope,
  },
  {
    title: 'Patient-first approach',
    description: 'Compassion, clarity, and support at every step.',
    icon: HeartPulse,
  },
  {
    title: 'Advanced equipment',
    description: 'Modern diagnostics and evidence-based treatment pathways.',
    icon: ShieldCheck,
  },
]

export function AboutContent() {
  return (
    <div className="bg-background">

      {/* SECTION 1: HERO / INTRO */}
      <section className="pt-20 pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-sky-500/15 via-teal-500/10 to-emerald-500/10" />

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-5xl font-bold text-slate-900">
              About Narula Multispeciality Clinic
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-700/80 font-medium">
              Compassionate Care. Advanced Medicine. For Every Stage of Life.
            </p>
            <p className="mt-6 max-w-3xl mx-auto text-slate-700/80 leading-relaxed">
              At Narula Multi-speciality Clinic, established in year of ………, we stand as a pillar
              of health and wellness—combining clinical excellence with a patient-first approach. Our
              mission is simple: providing world-class care that treats the person, not just the
              symptom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: OUR STORY / LEGACY */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-slate-900">Our Story, Our Legacy</h2>
              <p className="mt-4 text-slate-700/80 leading-relaxed">
                Multi-generational legacy of healing, built with unwavering integrity and updated
                with modern medical advancements. From welcoming a new life to advanced surgical
                solutions and lifelong wellness, our team is here under one roof.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <Card className="rounded-2xl border-slate-200/60 bg-white/70 backdrop-blur p-5 shadow-sm">
                  <div className="text-primary font-semibold">35+ Years</div>
                  <div className="mt-1 text-sm text-slate-700/80">Years of experience</div>
                </Card>
                <Card className="rounded-2xl border-slate-200/60 bg-white/70 backdrop-blur p-5 shadow-sm">
                  <div className="text-primary font-semibold">Patient-first</div>
                  <div className="mt-1 text-sm text-slate-700/80">Clarity, compassion, trust</div>
                </Card>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Card className="rounded-2xl border-slate-200/60 bg-white/60 backdrop-blur p-3 shadow-sm overflow-hidden">
                <div className="relative h-[320px] sm:h-[380px] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/clinic-logo.png"
                    alt="Narula Multispeciality Clinic"
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent" />
                </div>
                <div className="mt-3 p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">
                        Commitment to patient-first care
                      </div>
                      <div className="text-sm text-slate-700/80">Experience guided by ethics</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MISSION & VISION */}
      <section className="bg-slate-50/60 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold text-slate-900"
            >
              Mission & Vision
            </motion.h2>
            <p className="mt-3 text-slate-700/80 max-w-2xl mx-auto">
              Built for trust, designed for better outcomes.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55 }}
            >
              <Card className="rounded-2xl border-slate-200/60 bg-white/70 backdrop-blur p-8 shadow-sm hover:shadow-xl transition-shadow h-full">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-2xl font-bold text-slate-900">Mission</h3>
                <ul className="mt-4 space-y-3 text-slate-700/80">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span> Patient-first care
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span> Advanced treatments
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span> Ethical practice
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: 0.06 }}
            >
              <Card className="rounded-2xl border-slate-200/60 bg-white/70 backdrop-blur p-8 shadow-sm hover:shadow-xl transition-shadow h-full">
                <div className="h-12 w-12 rounded-2xl bg-teal-500/10 text-teal-700 flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-2xl font-bold text-slate-900">Vision</h3>
                <ul className="mt-4 space-y-3 text-slate-700/80">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span> World-class healthcare
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span> Community trust
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span> Continuous innovation
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR SPECIALITIES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Specialities</h2>
            <p className="mt-3 text-slate-700/80 max-w-2xl mx-auto">
              Expertise across disciplines—designed to support you at every stage of life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialities.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: idx * 0.03 }}
                >
                  <Card className="rounded-2xl border-slate-200/60 bg-white/70 backdrop-blur p-7 shadow-sm hover:shadow-xl transition-shadow h-full group">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center transition-transform group-hover:scale-105">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-sm text-slate-700/80 leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: DOCTORS EXPERIENCE HIGHLIGHT */}
      <section className="bg-gradient-to-r from-sky-500/10 via-teal-500/10 to-emerald-500/10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-primary font-semibold">Led by experienced specialists</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">
                Expertise you can trust
              </h2>
            </motion.div>

            <div className="w-full lg:max-w-3xl">
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { number: '35+', label: 'Years Experience', icon: Stethoscope },
                  { number: '4', label: 'Expert Surgeons', icon: ShieldCheck },
                  { number: 'Modern', label: 'Advanced Technology', icon: Sparkles },
                ].map((b, idx) => {
                  const Icon = b.icon
                  return (
                    <motion.div
                      key={b.label}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.55, delay: idx * 0.06 }}
                    >
                      <Card className="rounded-2xl border-white/40 bg-white/60 backdrop-blur shadow-sm p-6 hover:shadow-lg transition-shadow h-full">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="text-2xl sm:text-3xl font-bold text-slate-900">
                              {b.number}
                            </div>
                            <div className="text-sm text-slate-700/80 mt-1">{b.label}</div>
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

      {/* SECTION 6: DOCTOR FOCUS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Meet Our Doctors</h2>
            <p className="mt-3 text-slate-700/80 max-w-2xl mx-auto">
              Premium profiles with real expertise—built to reassure patients instantly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {doctors.slice(0, 4).map((doc, idx) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: idx * 0.03 }}
              >
                <Card className="rounded-2xl border-slate-200/60 bg-white/70 backdrop-blur shadow-sm overflow-hidden group">
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-teal-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-primary font-semibold text-sm">{doc.speciality}</div>
                    <h3 className="mt-2 text-lg font-bold text-slate-900">{doc.name}</h3>
                    <p className="mt-3 text-sm text-slate-700/80">{doc.bio}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <div className="text-sm text-slate-700/80 font-medium">{doc.experience}</div>
                    </div>
                    <div className="mt-5">
                      <Button
                        variant="outline"
                        className="w-full border-primary/40 text-primary hover:bg-primary/5"
                        asChild
                      >
                        <Link href={`/doctors#${doc.id}`}>View Full Profile</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: WHY CHOOSE US */}
      <section className="bg-slate-50/60 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Why Choose Us</h2>
            <p className="mt-3 text-slate-700/80 max-w-2xl mx-auto">
              Trust-building care with a premium patient experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55, delay: idx * 0.04 }}
                >
                  <Card className="rounded-2xl border-slate-200/60 bg-white/70 backdrop-blur p-8 shadow-sm hover:shadow-xl transition-shadow h-full">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900">{item.title}</h3>
                        <p className="mt-2 text-sm text-slate-700/80 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8: CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden border border-white/30 shadow-xl bg-gradient-to-r from-sky-500/20 via-teal-500/20 to-emerald-500/20"
          >
            <div className="p-8 sm:p-10 flex flex-col items-center text-center gap-5">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Your Health, Our Priority
              </h2>
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                asChild
              >
                <Link href="/contact">Book Appointment</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

