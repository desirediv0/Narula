'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { doctors } from '@/lib/clinic-data'
import { CLINIC_ADDRESS } from '@/lib/clinic-address'

import {
  HeartPulse,
  Stethoscope,
  ShieldCheck,
  Baby,
  Sparkles,
  Bone,
  Pill,
  Users,
  MapPin,
  Clock,
  Phone,
  CheckCircle2,
} from 'lucide-react'

const specialities = [
  {
    title: 'Obstetrics & Gynaecology',
    icon: HeartPulse,
    description:
      'Complete antenatal and postnatal care, high-risk pregnancy management, and comprehensive women\'s health screening.',
  },
  {
    title: 'Infertility (IVF / IUI)',
    icon: Sparkles,
    description:
      'Evidence-based fertility treatments including IUI, IVF, hormonal therapy, and personalised reproductive planning.',
  },
  {
    title: 'Cosmetic Gynaecology',
    icon: Pill,
    description:
      'Aesthetic and functional restorative procedures performed with surgical precision and utmost patient confidentiality.',
  },
  {
    title: 'General Surgery',
    icon: ShieldCheck,
    description:
      'Hernia repair, appendectomy, gallbladder removal, and comprehensive surgical care.',
  },
  {
    title: 'Bone & Joint Care',
    icon: Bone,
    description:
      'Fracture management, joint replacement counselling, sports injuries, and arthritis rehabilitation.',
  },
  {
    title: 'Paediatrics & Neonatology',
    icon: Baby,
    description:
      'Newborn care, growth monitoring, vaccination schedules, and adolescent wellness support.',
  },
]

const whyChooseUs = [
  {
    title: '35+ Years of Clinical Excellence',
    description:
      'Our founding doctors bring over three decades of hands-on surgical and medical expertise.',
    icon: Users,
  },
  {
    title: 'Multi-Speciality Under One Roof',
    description:
      'Gynaecology, surgery, orthopaedics, and paediatrics — co-ordinated care without long referral waits.',
    icon: Stethoscope,
  },
  {
    title: 'Compassionate Patient-First Care',
    description:
      'Every consultation is unhurried. We explain clearly, involve families, and respect your choices.',
    icon: HeartPulse,
  },
  {
    title: 'Gynaecological Ultrasound & Diagnostics',
    description:
      'Specialized gynaecological ultrasound imaging and evidence-based diagnostic protocols.',
    icon: ShieldCheck,
  },
]

const stats = [
  { number: '35+', label: 'Years of experience' },
  { number: '4', label: 'Expert specialists' },
  { number: '10,000+', label: 'Patients treated' },
  { number: '7', label: 'Specialities offered' },
]

export function AboutContent() {
  return (
    <div className="bg-background">

      {/* ── HERO ── */}
      <section className="relative pt-16 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-sky-500/15 via-teal-500/10 to-emerald-500/10" />
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
          >
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Gurugram, Haryana
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              About Narula Multispeciality Clinic
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
              Compassionate Care. Advanced Medicine. For Every Stage of Life.
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-slate-600 leading-relaxed text-base sm:text-lg">
              Founded by Dr Sanjay Narula and Dr Vandana Narula, Narula Multispeciality Clinic has been
              a cornerstone of healthcare in Gurugram, Haryana for over three decades. We combine
              clinical excellence with a warm, patient-first approach — treating the person, not just
              the symptom.
            </p>
          </motion.div>

          {/* Quick stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white/80 backdrop-blur border border-slate-200/60 shadow-sm px-4 py-3 text-center"
              >
                <div className="text-xl font-bold text-primary">{s.number}</div>
                <div className="text-sm text-slate-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55 }}
            >
              <p className="text-primary font-semibold text-base uppercase tracking-wide">Our Story</p>
              <h2 className="mt-1 text-3xl sm:text-4xl font-bold text-slate-900">
                A Multi-Generational Legacy of Healing
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed text-base sm:text-lg">
                What began as a single-doctor practice has grown into a thriving multispeciality
                clinic trusted by families across Gurugram and the wider NCR. Today,
                our second generation — Dr Sidhant Narula (Orthopaedics) and Dr Milind Shinde
                (Paediatrics) — continues the legacy with the latest medical advancements.
              </p>
              <p className="mt-3 text-slate-600 leading-relaxed text-base sm:text-lg">
                From welcoming newborns to managing complex surgical cases and lifelong chronic
                conditions, our team offers seamless, co-ordinated care under one roof — saving
                patients time, stress, and uncertainty.
              </p>

              <div className="mt-5 grid sm:grid-cols-2 gap-3">
                {[
                  { icon: MapPin, text: CLINIC_ADDRESS },
                  { icon: Clock, text: 'Mon–Sat, 9 AM – 7 PM' },
                  { icon: Phone, text: '9810433502, 9810809067' },
                  { icon: CheckCircle2, text: 'NABH-aligned protocols' },
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
            >
              <Card className="rounded-2xl border-slate-200/60 bg-white/60 backdrop-blur p-3 shadow-sm overflow-hidden">
                <div className="relative h-[280px] sm:h-[320px] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/about.png"
                    alt="Narula Multispeciality Clinic"
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent" />
                </div>
                <div className="mt-3 p-3 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-base">
                      Commitment to patient-first care
                    </div>
                    <div className="text-sm text-slate-500">Experience guided by ethics & empathy</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="bg-slate-50/70 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Mission & Vision</h2>
            <p className="mt-2 text-slate-500 text-base">Built for trust, designed for better outcomes.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
            >
              <Card className="rounded-2xl border-slate-200/60 bg-white/80 p-6 shadow-sm h-full">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <h3 className="mt-3 text-xl font-bold text-slate-900">Our Mission</h3>
                <p className="mt-2 text-base text-slate-600 leading-relaxed">
                  To deliver accessible, ethical, and technology-driven healthcare that puts every
                  patient at the centre of every decision.
                </p>
                <ul className="mt-3 space-y-2">
                  {[
                    'Transparent, honest communication with every patient',
                    'Clinically proven, evidence-based treatments',
                    'Affordable care without compromising quality',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-base text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.06 }}
            >
              <Card className="rounded-2xl border-slate-200/60 bg-white/80 p-6 shadow-sm h-full">
                <div className="h-10 w-10 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="mt-3 text-xl font-bold text-slate-900">Our Vision</h3>
                <p className="mt-2 text-base text-slate-600 leading-relaxed">
                  To be the most trusted multispeciality clinic in the NCR — where families return
                  for every stage of life with confidence.
                </p>
                <ul className="mt-3 space-y-2">
                  {[
                    'World-class healthcare accessible to every family',
                    'Deep community trust built over generations',
                    'Continuous innovation and medical education',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-base text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SPECIALITIES ── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Specialities</h2>
            <p className="mt-2 text-slate-500 text-base max-w-xl mx-auto">
              Expert care across six disciplines — all under one roof.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specialities.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                >
                  <Card className="rounded-2xl border-slate-200/60 bg-white/80 p-5 shadow-sm hover:shadow-lg transition-shadow h-full group">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center transition-transform group-hover:scale-105">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-1.5 text-base text-slate-500 leading-relaxed">{item.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE BAR ── */}
      <section className="bg-gradient-to-r from-sky-500/10 via-teal-500/10 to-emerald-500/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55 }}
              className="text-center lg:text-left"
            >
              <p className="text-primary font-semibold text-base">Led by experienced specialists</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
                Expertise you can trust
              </h2>
            </motion.div>

            <div className="w-full lg:max-w-2xl grid grid-cols-3 gap-3">
              {[
                { number: '35+', label: 'Years Experience', icon: Stethoscope },
                { number: '4', label: 'Expert Doctors', icon: ShieldCheck },
                { number: '6', label: 'Specialities', icon: Sparkles },
              ].map((b, idx) => {
                const Icon = b.icon
                return (
                  <motion.div
                    key={b.label}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: idx * 0.06 }}
                  >
                    <Card className="rounded-2xl border-white/40 bg-white/70 backdrop-blur shadow-sm p-4 h-full">
                      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                        <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="text-center sm:text-left">
                          <div className="text-xl font-bold text-slate-900">{b.number}</div>
                          <div className="text-sm text-slate-500 leading-snug">{b.label}</div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── MEET OUR DOCTORS ── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Meet Our Doctors</h2>
              <p className="mt-1 text-slate-500 text-base">
                Specialists who combine precision with compassion.
              </p>
            </div>
            <Button variant="outline" className="border-primary/40 text-primary hover:bg-primary/5 shrink-0 self-start sm:self-auto" asChild>
              <Link href="/doctors">View All Doctors →</Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {doctors.slice(0, 4).map((doc, idx) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                <Card className="rounded-2xl border-slate-200/60 bg-white shadow-sm overflow-hidden group h-full flex flex-col">
                  {/* Fixed image height — no overflow */}
                  <div className="relative h-44 shrink-0 bg-slate-100 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                    {doc.image ? (
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 25vw"
                        className="object-contain object-top transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <div className="text-primary font-semibold text-sm">{doc.speciality}</div>
                    <h3 className="mt-1 text-base font-bold text-slate-900 leading-snug">{doc.name}</h3>
                    <p className="mt-2 text-sm text-slate-500 leading-relaxed line-clamp-3 flex-1">{doc.bio}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <Badge className="bg-primary/10 text-primary border-primary/20 text-[10px]">
                        {doc.experience}
                      </Badge>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-3 w-full border-primary/40 text-primary hover:bg-primary/5 text-sm"
                      asChild
                    >
                      <Link href={`/doctors#${doc.id}`}>View Full Profile</Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-slate-50/70 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Why Choose Us</h2>
            <p className="mt-2 text-slate-500 text-base">
              Four reasons thousands of families trust Narula Clinic.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                >
                  <Card className="rounded-2xl border-slate-200/60 bg-white/80 p-5 shadow-sm hover:shadow-lg transition-shadow h-full">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                        <p className="mt-1 text-sm text-slate-500 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl overflow-hidden border border-white/30 shadow-lg bg-gradient-to-r from-sky-500/20 via-teal-500/20 to-emerald-500/20 p-8 sm:p-10 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Your Health, Our Priority
            </h2>
            <p className="mt-2 text-slate-600 text-base max-w-md mx-auto">
              Book a consultation today and experience the difference of truly personalised care.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="bg-primary hover:bg-primary/90 px-8" asChild>
                <Link href="/contact">Book Appointment</Link>
              </Button>
              <Button variant="outline" className="border-primary/40 text-primary hover:bg-primary/5" asChild>
                <Link href="/doctors">Meet Our Doctors</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}