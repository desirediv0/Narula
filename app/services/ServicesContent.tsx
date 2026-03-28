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
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

type ServiceCard = {
  id: string
  title: string
  eyebrow: string
  description: string
  icon: (props: { className?: string }) => React.ReactNode
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
        eyebrow: "Women's Care",
        title: 'Obstetrics & Gynaecology',
        description:
          'Complete maternity and gynaecological care — from routine check-ups to complex deliveries — with 35+ years of expertise.',
        icon: serviceIcon.obgyn,
        anchor: 'obgyn',
        bullets: [
          'NVD & C-section deliveries',
          'High-risk pregnancy management',
          'IUD insertion & MTP services',
          'Colposcopy & follicular monitoring',
          'Routine gynaecological OPD care',
        ],
      },
      {
        id: 'infertility',
        eyebrow: 'Fertility Services',
        title: 'Infertility (IVF & IUI)',
        description:
          'Personalised fertility treatment plans built around your specific diagnosis, with compassionate counselling at every step.',
        icon: serviceIcon.infertility,
        anchor: 'infertility',
        bullets: [
          'IVF & IUI treatment cycles',
          'Hormonal balancing & ovulation induction',
          'Fertility assessment & semen analysis',
          'Follicular monitoring & timed intercourse',
          'Counselling through the full fertility journey',
        ],
      },
      {
        id: 'cosmetic',
        eyebrow: 'Aesthetic & Functional',
        title: 'Cosmetic Gynaecology',
        description:
          'Discreet, precision-led aesthetic and functional procedures designed to restore comfort and confidence.',
        icon: serviceIcon.cosmetic,
        anchor: 'cosmetic',
        bullets: [
          'Vaginal rejuvenation procedures',
          'Postpartum restorative care',
          'Scar tissue and perineal repair',
          'Labial aesthetic correction',
          'Functional pelvic floor support',
        ],
      },
      {
        id: 'surgery',
        eyebrow: 'Surgical Excellence',
        title: 'General & Laparoscopic Surgery',
        description:
          'Minimally invasive keyhole surgeries for faster recovery, less pain, and shorter hospital stays.',
        icon: serviceIcon.surgery,
        anchor: 'surgery',
        bullets: [
          'Laparoscopic hernia repair',
          'Gallbladder removal (cholecystectomy)',
          'Appendectomy & abdominal surgeries',
          'Medico-legal surgical consultations',
          'Post-operative recovery support',
        ],
      },
      {
        id: 'ortho',
        eyebrow: 'Mobility & Rehabilitation',
        title: 'Bone & Joint Care',
        description:
          'Orthopaedic care focused on restoring your mobility, reducing pain, and getting you back to daily life.',
        icon: serviceIcon.ortho,
        anchor: 'bone-joint',
        bullets: [
          'Fracture & dislocation management',
          'Ligament & sports injury treatment',
          'Joint replacement consultation',
          'Arthritis & chronic joint pain care',
          'Physiotherapy & rehabilitation guidance',
        ],
      },
      {
        id: 'pediatrics',
        eyebrow: 'Child Wellness',
        title: 'Paediatrics & Neonatology',
        description:
          'Specialist care for children from birth through adolescence, including newborn intensive support.',
        icon: serviceIcon.pediatrics,
        anchor: 'paediatrics',
        bullets: [
          'Newborn care & neonatal assessment',
          'Vaccination & immunisation programs',
          'Growth & development monitoring',
          'Paediatric nutrition & dietary guidance',
          'Obesity, puberty, diabetes & growth clinic',
        ],
      },
    ],
    []
  )

  const detailed = useMemo(
    () => [
      {
        id: 'obgyn',
        eyebrow: "Women's Care",
        title: 'Obstetrics & Gynaecology',
        img: '/obstetrics-gynaecology.jpg',
        description:
          'Dr Vandana Narula brings over 35 years of experience in obstetrics and gynaecology, managing everything from routine antenatal care to complex high-risk deliveries. Our women\'s health clinic is designed to be safe, supportive, and fully equipped.',
        bullets: [
          'Normal vaginal delivery (NVD) & C-section',
          'High-risk pregnancy monitoring & management',
          'Infertility (IVF & IUI) referral & counselling',
          'MTP (Medical Termination of Pregnancy)',
          'IUD insertion & contraceptive guidance',
          'Colposcopy & cervical screening',
          'Follicular monitoring & ovulation tracking',
          'Cosmetic gynaecology procedures',
        ],
      },
      {
        id: 'infertility',
        eyebrow: 'Fertility Services',
        title: 'Infertility (IVF & IUI)',
        img: '/Infertility.jpg',
        description:
          'Fertility challenges affect 1 in 6 couples. Our fertility clinic offers personalised, evidence-based treatment plans with consistent monitoring and emotional support — because the journey matters as much as the outcome.',
        bullets: [
          'Comprehensive fertility evaluation for both partners',
          'IUI (Intrauterine Insemination) cycles',
          'IVF counselling & pre-treatment planning',
          'Ovulation induction & hormonal therapy',
          'Follicular monitoring with serial ultrasound',
          'Semen analysis & male infertility support',
          'Advanced reproductive technology pathways',
          'Psychological counselling through the process',
        ],
      },
      {
        id: 'cosmetic',
        eyebrow: 'Aesthetic & Functional',
        title: 'Cosmetic Gynaecology',
        img: '/cosmetic-gynaecology.jpg',
        description:
          'Performed with surgical precision and the utmost confidentiality, our cosmetic gynaecology procedures address both aesthetic concerns and functional discomfort — helping women feel comfortable and confident in their own bodies.',
        bullets: [
          'Vaginal rejuvenation & tightening',
          'Labial aesthetic correction (labiaplasty)',
          'Postpartum perineal restoration',
          'Scar tissue repair & revision',
          'Pelvic floor strengthening support',
          'Stress urinary incontinence management',
        ],
      },
      {
        id: 'surgery',
        eyebrow: 'Surgical Excellence',
        title: 'General & Laparoscopic Surgery',
        img: '/general-laparoscopic-surgery.jpg',
        description:
          'Led by Dr Sanjay Narula — a highly experienced general and medico-legal surgeon — our surgical department offers minimally invasive procedures that mean less pain, faster healing, and shorter stays.',
        bullets: [
          'Laparoscopic hernia repair (inguinal, umbilical)',
          'Cholecystectomy (gallbladder removal)',
          'Appendectomy (emergency & elective)',
          'Abdominal & GI surgical consultations',
          'Medico-legal surgical case documentation',
          'Thyroid & breast lump surgical assessment',
          'Post-operative wound care & recovery guidance',
        ],
      },
      {
        id: 'bone-joint',
        eyebrow: 'Mobility & Rehabilitation',
        title: 'Bone & Joint Care',
        img: '/bone-joint-care.jpg',
        description:
          'Dr Sidhant Narula specialises in orthopaedic care for fractures, joint conditions, and sports injuries. The goal is always to restore your mobility, reduce pain, and help you return to everyday life as quickly and safely as possible.',
        bullets: [
          'Fractures, dislocations & trauma care',
          'Ligament tears & sports injury rehabilitation',
          'Knee, hip & shoulder joint consultations',
          'Joint replacement pre-operative counselling',
          'Arthritis & chronic joint pain management',
          'Bone health & osteoporosis guidance',
          'Physiotherapy referrals & rehab planning',
        ],
      },
      {
        id: 'paediatrics',
        eyebrow: 'Child Wellness',
        title: 'Paediatrics & Neonatology',
        img: '/paediatrics-neonatology.jpg',
        description:
          'Dr Milind Shinde is a consultant paediatrician and neonatologist with expertise in newborn intensive care, childhood development, and adolescent wellness. We support children from their very first breath.',
        bullets: [
          'Newborn assessment & neonatal intensive support',
          'Vaccination & national immunisation schedule',
          'Growth monitoring & developmental milestones',
          'Paediatric nutrition & feeding guidance',
          'Obesity, puberty & diabetes management',
          'Respiratory illness & allergy care',
          'OPD for children aged 0–18 years',
        ],
      },
    ],
    []
  )

  const why = useMemo(
    () => [
      {
        title: 'Advanced Diagnostics',
        description:
          '4D ultrasound, digital X-ray, laparoscopy suite, and modern lab equipment on-site.',
        icon: Microscope,
      },
      {
        title: 'Experienced Specialists',
        description:
          '35+ years of combined clinical expertise across six medical specialities.',
        icon: Shield,
      },
      {
        title: 'Personalised Treatment',
        description:
          'Every plan is tailored to you — your history, lifestyle, and recovery goals.',
        icon: Heart,
      },
      {
        title: 'Safe, Ethical Practice',
        description:
          'NABH-aligned protocols with a strong record of patient safety and outcomes.',
        icon: Activity,
      },
    ],
    []
  )

  return (
    <div className="bg-background pb-20">

      {/* ── HERO ── */}
      <section className="relative pt-16 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-sky-500/15 via-teal-500/10 to-emerald-500/10" />
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
          >
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-3">
              6 Specialities · One Clinic
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Our Medical Services
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
              Expert, co-ordinated care for every stage of life — under one roof in Gurugram, Haryana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE CARDS GRID ── */}
      <section id="services" className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Explore Our <span className="text-primary">Services</span>
            </h2>
            <p className="mt-2 text-slate-500 text-base max-w-xl mx-auto">
              Transparent, patient-first care across six specialities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((s, idx) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                >
                  <Card className="rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm hover:shadow-lg transition-all group h-full flex flex-col">
                    {/* Icon + eyebrow */}
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/15 transition-transform group-hover:scale-105 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                        {s.eyebrow}
                      </span>
                    </div>

                    <h3 className="mt-3 text-lg sm:text-xl font-bold text-slate-900 leading-snug">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{s.description}</p>

                    <ul className="mt-3 space-y-1.5 flex-1">
                      {s.bullets.slice(0, 4).map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="text-primary font-bold mt-0.5 shrink-0">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary/40 text-primary hover:bg-primary/5 text-sm"
                        asChild
                      >
                        <Link href={`#${s.anchor}`}>
                          Learn More
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary/90 text-sm"
                        asChild
                      >
                        <Link href="/contact">Book Now</Link>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── DETAILED SERVICE BLOCKS ── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-slate-50/60">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Service Details</h2>
            <p className="mt-2 text-slate-500 text-base">
              Everything we offer — explained clearly, with no jargon.
            </p>
          </motion.div>

          <div className="space-y-6">
            {detailed.map((block, idx) => (
              <div key={block.id} id={block.id} className="scroll-mt-24">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className={`rounded-2xl border-slate-200/60 bg-white shadow-sm overflow-hidden`}>
                    <div className={`grid md:grid-cols-5 ${idx % 2 !== 0 ? 'md:[direction:rtl]' : ''}`}>

                      {/* Image — 2/5 width on desktop */}
                      <div className="md:col-span-2 relative h-48 md:h-auto bg-slate-100 md:[direction:ltr]">
                        <Image
                          src={block.img}
                          alt={block.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          className="object-cover object-top rounded"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/25 via-teal-500/10 to-emerald-500/20" />
                        {/* Badge pinned bottom */}
                        <div className="absolute bottom-3 left-3">
                          <Badge className="bg-white/90 text-primary border-primary/20 text-sm shadow-sm">
                            {block.eyebrow}
                          </Badge>
                        </div>
                      </div>

                      {/* Content — 3/5 width */}
                      <div className="md:col-span-3 p-5 sm:p-6 md:[direction:ltr]">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{block.title}</h3>
                        <p className="mt-2 text-base text-slate-600 leading-relaxed">{block.description}</p>

                        <ul className="mt-4 grid sm:grid-cols-2 gap-x-4 gap-y-2">
                          {block.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                              <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                              <span className="leading-snug">{b}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-5 flex flex-col sm:flex-row gap-2">
                          <Button
                            size="sm"
                            className="bg-primary hover:bg-primary/90 text-sm"
                            asChild
                          >
                            <Link href="/contact">
                              Book Appointment <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                            </Link>
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-primary/40 text-primary hover:bg-primary/5 text-sm"
                            asChild
                          >
                            <Link href="#services">View All Services</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY OUR SERVICES ── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Why Choose Narula Clinic
            </h2>
            <p className="mt-2 text-slate-500 text-base max-w-xl mx-auto">
              Four pillars that set our services apart.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {why.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                >
                  <Card className="rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm hover:shadow-lg transition-shadow h-full">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/15">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="mt-3 font-bold text-slate-900 text-lg leading-snug">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl border border-white/40 bg-gradient-to-r from-sky-500/15 via-teal-500/10 to-emerald-500/15 shadow-lg overflow-hidden"
          >
            <div className="p-7 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="max-w-xl">
                <p className="text-primary font-semibold text-sm">Get Expert Medical Care Today</p>
                <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">
                  Your care, prioritised.
                </h2>
                <p className="mt-2 text-slate-600 text-sm">
                  Book a consultation and speak directly with our specialists.
                  Same-day appointments available for urgent cases.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Button className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/contact">Book Appointment</Link>
                </Button>
                <Button variant="outline" className="border-primary/40 text-primary hover:bg-primary/5" asChild>
                  <Link href="/doctors">Meet Our Doctors</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STICKY MOBILE CTA ── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200/70 bg-white/90 backdrop-blur-sm">
        <div className="px-4 py-3 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-[11px] text-slate-500">Need help choosing?</div>
            <div className="text-sm font-semibold text-slate-900">Book a Consultation</div>
          </div>
          <Button size="sm" className="bg-primary hover:bg-primary/90 shrink-0" asChild>
            <Link href="/contact">Book Now</Link>
          </Button>
        </div>
      </div>

    </div>
  )
}