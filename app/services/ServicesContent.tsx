'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useMemo } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

import {
  HeartPulse,
  Sparkles,
  ShieldCheck,
  Stethoscope,
  Baby,
  Bone,
  Heart,
  Pill,
  Microscope,
  Activity,
  Shield,
} from 'lucide-react'

type ServiceCard = {
  id: string
  title: string
  description: string
  icon: (props: { className?: string }) => JSX.Element
  bullets: string[]
  anchor: string
}

const serviceIcon = {
  obgyn: HeartPulse,
  infertility: Sparkles,
  cosmetic: Pill,
  surgery: Stethoscope,
  ortho: Bone,
  pediatrics: Baby,
} as const

export function ServicesContent() {
  const cards = useMemo<ServiceCard[]>(
    () => [
      {
        id: 'obgyn',
        title: 'Obstetrics & Gynaecology',
        description: 'Complete women’s healthcare with compassion and clinical excellence.',
        icon: serviceIcon.obgyn,
        anchor: 'obgyn',
        bullets: [
          'NVD & C-section',
          'Infertility (IVF & IUI)',
          'MTP',
          'IUD insertion',
          'Colposcopy & follicular monitoring',
        ],
      },
      {
        id: 'infertility',
        title: 'Infertility (IVF & IUI)',
        description: 'Personalized fertility journeys with evidence-based support.',
        icon: serviceIcon.infertility,
        anchor: 'infertility',
        bullets: [
          'IVF & IUI counseling',
          'Hormonal balancing & treatment planning',
          'Fertility assessment & monitoring',
          'Support across the full fertility cycle',
          'Advanced reproductive technology pathways',
        ],
      },
      {
        id: 'cosmetic',
        title: 'Cosmetic Gynaecology',
        description: 'Aesthetic and functional restorative procedures for women.',
        icon: serviceIcon.cosmetic,
        anchor: 'cosmetic',
        bullets: [
          'Specialized aesthetic wellness procedures',
          'Functional restorative care',
          'Postpartum cosmetic support',
          'Vaginal rejuvenation options',
          'Scar tissue restoration approaches',
        ],
      },
      {
        id: 'surgery',
        title: 'General Surgery',
        description: 'Minimally invasive and routine surgical care with patient-first guidance.',
        icon: serviceIcon.surgery,
        anchor: 'surgery',
        bullets: [
          'Minimally invasive (laparoscopic) procedures',
          'Hernia repair & surgical consultations',
          'Trauma and surgical care support',
          'Routine surgical treatment guidance',
          'Recovery partnership and clear explanations',
        ],
      },
      {
        id: 'ortho',
        title: 'Bone & Joint Care',
        description: 'Orthopaedic care to restore mobility, comfort, and confidence.',
        icon: serviceIcon.ortho,
        anchor: 'bone-joint',
        bullets: [
          'Fractures & dislocation care',
          'Ligament injuries & sports injury support',
          'Joint replacement consultation',
          'Physiotherapy & rehabilitation guidance',
          'Joint pain and mobility improvement',
        ],
      },
      {
        id: 'pediatrics',
        title: 'Paediatrics',
        description: 'Newborn care, immunizations, growth monitoring, and adolescent wellness.',
        icon: serviceIcon.pediatrics,
        anchor: 'paediatrics',
        bullets: [
          'Newborn care & early assessment',
          'Vaccination programs',
          'Growth & development follow-up',
          'Nutrition & dietary consultation',
          'OPD services for children aged 0–18 years',
        ],
      },
    ],
    []
  )

  const detailed = useMemo(
    () => [
      {
        id: 'obgyn',
        eyebrow: 'Women’s Care',
        title: 'Obstetrics & Gynaecology',
        bullets: [
          'NVD & C-section',
          'Infertility (IVF & IUI)',
          'MTP',
          'IUD insertion',
          'Colposcopy',
          'Follicular Monitoring',
          'Cosmetic Gynaecology',
        ],
      },
      {
        id: 'infertility',
        eyebrow: 'Fertility Services',
        title: 'Infertility (IVF & IUI)',
        bullets: [
          'Personalized fertility journeys',
          'Hormonal balancing and monitoring',
          'Fertility counseling & treatment planning',
          'Advanced reproductive technology pathways',
          'Support through every step of the cycle',
        ],
      },
      {
        id: 'cosmetic',
        eyebrow: 'Cosmetic & Functional Care',
        title: 'Cosmetic Gynaecology',
        bullets: [
          'Specialized aesthetic and functional restorative procedures for women',
          'Vaginal rejuvenation support',
          'Postpartum cosmetic care',
          'Scar tissue restoration guidance',
          'Comfort & confidence-focused approach',
        ],
      },
      {
        id: 'surgery',
        eyebrow: 'Surgical Excellence',
        title: 'General Surgery',
        bullets: [
          'Minimally invasive (laparoscopic) procedures',
          'Routine surgical care with clear explanations',
          'Surgical consultations for common conditions',
          'Trauma surgery support',
          'Recovery partnership and follow-up guidance',
        ],
      },
      {
        id: 'bone-joint',
        eyebrow: 'Mobility & Rehabilitation',
        title: 'Bone & Joint Care',
        bullets: [
          'Fractures & dislocation',
          'Ligament injuries',
          'Sports injuries',
          'Physiotherapy and rehabilitation',
          'Joint replacement consultation',
        ],
      },
      {
        id: 'paediatrics',
        eyebrow: 'Child Wellness',
        title: 'Paediatrics',
        bullets: [
          'Newborn care',
          'Vaccination',
          'Growth & development follow up',
          'Nutrition & dietary consultation',
          'Speciality clinic for Obesity, puberty, Diabetes & growth failure',
        ],
      },
    ],
    []
  )

  const why = useMemo(
    () => [
      {
        title: 'Advanced Technology',
        description: 'Modern diagnostics and evidence-based workflows.',
        icon: Microscope,
      },
      {
        title: 'Experienced Doctors',
        description: 'Specialists with deep clinical expertise.',
        icon: Shield,
      },
      {
        title: 'Personalized Care',
        description: 'Treatment plans tailored to your needs.',
        icon: Heart,
      },
      {
        title: 'Safe Procedures',
        description: 'Quality assurance with patient-first safety.',
        icon: Activity,
      },
    ],
    []
  )

  return (
    <div className="bg-background pb-24">

      {/* HERO */}
      <section className="relative pt-20 pb-14 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-sky-500/15 via-teal-500/10 to-emerald-500/10" />
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-5xl font-bold text-slate-900">
              Our Medical Services
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-700/80 max-w-2xl mx-auto">
              Comprehensive care for every stage of life
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Explore <span className="text-primary">Services</span>
            </h2>
            <p className="mt-3 text-slate-700/80 max-w-2xl mx-auto">
              Clear offerings, premium care, and a patient-first approach.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((s, idx) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55, delay: idx * 0.03 }}
                >
                  <Card className="rounded-2xl border border-slate-200/60 bg-white/80 backdrop-blur p-6 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <div className="absolute -inset-8 bg-gradient-to-r from-sky-500/20 via-teal-500/20 to-emerald-500/20 blur-2xl" />
                    </div>

                    <div className="relative">
                      <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 transition-transform group-hover:scale-105">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="mt-5 text-xl font-bold text-slate-900">{s.title}</h3>
                      <p className="mt-2 text-sm text-slate-700/80 leading-relaxed">
                        {s.description}
                      </p>

                      <div className="mt-5">
                        <Badge className="bg-primary/10 text-primary border-primary/25">{s.id}</Badge>
                      </div>

                      <ul className="mt-5 space-y-2">
                        {s.bullets.slice(0, 4).map((b, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-slate-700/80">
                            <span className="text-primary font-bold mt-1">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Button
                          variant="outline"
                          className="border-primary/40 text-primary bg-white/60 hover:bg-white/90"
                          asChild
                        >
                          <Link href={`#${s.anchor}`}>Learn More</Link>
                        </Button>
                        <Button className="bg-primary hover:bg-primary/90" asChild>
                          <Link href="/contact">Book Appointment</Link>
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

      {/* DETAILED SERVICE BLOCKS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
        <div className="max-w-7xl mx-auto space-y-10">
          {detailed.map((block, idx) => (
            <div key={block.id} id={block.id} className="scroll-mt-24">
              <div
                className={`grid md:grid-cols-2 gap-10 items-center ${
                  idx % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                <div className="relative">
                  <Card className="rounded-2xl border-slate-200/60 bg-white/70 backdrop-blur overflow-hidden p-3">
                    <div className="relative h-64 rounded-xl overflow-hidden border border-slate-200/60">
                      <Image
                        src="/images/clinic-logo.png"
                        alt={block.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 via-teal-500/10 to-emerald-500/20" />
                    </div>
                    <div className="mt-3 px-2 pb-1">
                      <div className="text-primary font-semibold">{block.eyebrow}</div>
                      <h3 className="mt-1 text-lg font-bold text-slate-900">{block.title}</h3>
                    </div>
                  </Card>
                </div>

                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.55 }}
                  >
                    <h2 className="text-2xl font-bold text-slate-900">{block.title}</h2>
                    <p className="mt-3 text-slate-700/80 leading-relaxed">
                      Premium care designed to help patients feel confident and supported—before,
                      during, and after treatment.
                    </p>
                    <ul className="mt-6 space-y-3">
                      {block.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700/80">
                          <span className="text-primary font-bold mt-1">✓</span>
                          <span className="text-sm leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 flex flex-col sm:flex-row gap-3">
                      <Button variant="outline" className="border-primary/40 text-primary bg-white/70" asChild>
                        <Link href="#services">Learn More</Link>
                      </Button>
                      <Button className="bg-primary hover:bg-primary/90" asChild>
                        <Link href="/contact">Book Appointment</Link>
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY SERVICES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Why Our <span className="text-primary">Services</span>
            </h2>
            <p className="mt-3 text-slate-700/80 max-w-2xl mx-auto">
              Advanced technology, experienced specialists, personalized care, and safe procedures.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {why.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55, delay: idx * 0.03 }}
                >
                  <Card className="rounded-2xl border border-slate-200/60 bg-white/80 backdrop-blur p-6 shadow-sm hover:shadow-xl transition-shadow h-full">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="mt-5 font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-700/80 leading-relaxed">{item.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-500/15 via-teal-500/10 to-emerald-500/15">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/40 bg-white/50 backdrop-blur shadow-xl overflow-hidden"
          >
            <div className="p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="max-w-xl">
                <div className="text-primary font-semibold">Get Expert Medical Care Today</div>
                <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">
                  Your care, prioritized.
                </h2>
                <p className="mt-3 text-slate-700/80">
                  Book a consultation and speak with experienced specialists across multiple departments.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <Button className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/contact">Book Appointment</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="px-4 py-2 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-[13px] text-slate-700/80">Need help choosing a service?</div>
            <div className="text-sm font-semibold text-slate-900 truncate">Book Consultation</div>
          </div>
          <Button className="bg-primary hover:bg-primary/90 px-4" asChild>
            <Link href="/contact">Book</Link>
          </Button>
        </div>
      </div>

    </div>
  )
}

