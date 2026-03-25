'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  HeartPulse,
  Phone,
  Sparkles,
  Stethoscope,
  ShieldCheck,
  Bone,
  Baby,
  Pill,
  CheckCircle2,
  MapPin,
  Clock,
  Star,
  Users,
  Award,
  Activity,
  ChevronRight,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { doctors } from '@/lib/clinic-data';

/* ─── DATA ─────────────────────────────────────────────── */

const homeServices = [
  {
    title: 'Obstetrics & Gynaecology',
    eyebrow: "Women's Care",
    description: 'Complete maternity care, high-risk pregnancy, IUI/IVF, and comprehensive women\'s health services.',
    icon: HeartPulse,
    href: '/services#obgyn',
    color: 'from-sky-500/15 to-sky-500/5',
    iconBg: 'bg-sky-500/10 text-sky-600 border-sky-500/20',
  },
  {
    title: 'Bone & Joint Care',
    eyebrow: 'Orthopaedics',
    description: 'Fracture management, joint replacement counselling, sports injuries & arthritis rehab.',
    icon: Bone,
    href: '/services#bone-joint',
    color: 'from-teal-500/15 to-teal-500/5',
    iconBg: 'bg-teal-500/10 text-teal-600 border-teal-500/20',
  },
  {
    title: 'Paediatrics & Neonatology',
    eyebrow: 'Child Wellness',
    description: 'Newborn intensive care, vaccination schedules, growth monitoring & adolescent health.',
    icon: Baby,
    href: '/services#paediatrics',
    color: 'from-emerald-500/15 to-emerald-500/5',
    iconBg: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
  },
  {
    title: 'General & Laparoscopic Surgery',
    eyebrow: 'Surgical Excellence',
    description: 'Minimally invasive keyhole surgeries — hernia, gallbladder, appendix & more.',
    icon: ShieldCheck,
    href: '/services#surgery',
    color: 'from-sky-500/15 to-teal-500/5',
    iconBg: 'bg-primary/10 text-primary border-primary/20',
  },
  {
    title: 'Infertility (IVF & IUI)',
    eyebrow: 'Fertility Services',
    description: 'Personalised fertility plans with IVF/IUI cycles, ovulation induction & compassionate counselling.',
    icon: Sparkles,
    href: '/services#infertility',
    color: 'from-teal-500/15 to-emerald-500/5',
    iconBg: 'bg-teal-500/10 text-teal-600 border-teal-500/20',
  },
  {
    title: 'Cosmetic Gynaecology',
    eyebrow: 'Aesthetic & Functional',
    description: 'Precision restorative procedures — vaginal rejuvenation, pelvic floor support & postpartum care.',
    icon: Pill,
    href: '/services#cosmetic',
    color: 'from-emerald-500/15 to-sky-500/5',
    iconBg: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
  },
];

const stats = [
  { number: '35+', label: 'Years Experience', icon: Award },
  { number: '10,000+', label: 'Patients Treated', icon: Users },
  { number: '6', label: 'Specialities', icon: Stethoscope },
  { number: '4', label: 'Expert Doctors', icon: Activity },
];

const whyUs = [
  {
    title: '35+ Years of Clinical Excellence',
    description: 'Founded by Dr Sanjay & Dr Vandana Narula, our clinic has served Najafgarh families for over three decades with unwavering commitment.',
    icon: Award,
  },
  {
    title: 'Multi-Speciality Under One Roof',
    description: 'Gynaecology, surgery, orthopaedics, paediatrics — co-ordinated care without referral delays or fragmented visits.',
    icon: Stethoscope,
  },
  {
    title: 'Modern Diagnostics & Technology',
    description: '4D ultrasound, digital X-ray, laparoscopy suite, and an on-site lab — all under one roof for faster, accurate diagnosis.',
    icon: ShieldCheck,
  },
  {
    title: 'Compassionate, Patient-First Care',
    description: 'Every consultation is unhurried. We listen, explain clearly, involve families, and always respect your choices.',
    icon: HeartPulse,
  },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Patient · Gynaecology',
    quote: 'Dr Vandana handled my high-risk pregnancy with such care and expertise. I felt safe every step of the way.',
    rating: 5,
  },
  {
    name: 'Rahul Mehta',
    role: 'Patient · Orthopaedics',
    quote: 'Dr Sidhant diagnosed my ligament tear quickly and the recovery plan was perfect. Back to the field in 6 weeks!',
    rating: 5,
  },
  {
    name: 'Sunita Verma',
    role: 'Patient · Paediatrics',
    quote: 'Our newborn needed neonatal support and Dr Milind was exceptional — calm, knowledgeable, and so reassuring.',
    rating: 5,
  },
];

/* ─── PAGE ──────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="bg-background overflow-x-hidden">

      {/* ══════════════════════════════════════════
          HERO — new design
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center px-4 sm:px-6 lg:px-8 pt-16 pb-12 overflow-hidden">

        {/* Background atmosphere */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-white to-emerald-50" />
        <div className="absolute -top-32 -right-32 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-sky-400/20 via-teal-400/15 to-emerald-400/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 -z-10 h-[480px] w-[480px] rounded-full bg-gradient-to-tr from-emerald-400/15 via-teal-400/10 to-sky-400/10 blur-3xl" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 -z-10 opacity-[0.025]"
          style={{ backgroundImage: 'linear-gradient(to right, #0284c7 1px, transparent 1px), linear-gradient(to bottom, #0284c7 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">

            {/* ── LEFT COPY ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="space-y-7"
            >
              {/* Trust pill */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-2"
              >
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Trusted multi-speciality care · Najafgarh, Delhi</span>
              </motion.div>

              {/* Headline */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl sm:text-5xl xl:text-6xl font-bold text-slate-900 leading-[1.12] tracking-tight"
                >
                  Compassionate Care.{' '}
                  <span className="relative">
                    <span className="text-primary">Advanced</span>
                  </span>{' '}
                  Medicine.
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-lg"
                >
                  Built on 35+ years of clinical trust — delivering expert, co-ordinated healthcare
                  across six specialities for every stage of your family's life.
                </motion.p>
              </div>

              {/* Quick bullets */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.38 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-6"
              >
                {[
                  'NABH-aligned protocols',
                  '4D ultrasound & laparoscopy',
                  'Same-day appointments',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.45 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 px-7" asChild>
                  <Link href="/contact" className="inline-flex items-center gap-2">
                    Book Appointment
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary/40 text-primary bg-white/60 hover:bg-primary/5 px-7" asChild>
                  <Link href="/contact" className="inline-flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Link>
                </Button>
              </motion.div>

              {/* Quick info strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="flex flex-col sm:flex-row gap-3 pt-1"
              >
                {[
                  { icon: MapPin, text: 'Najafgarh, New Delhi' },
                  { icon: Clock, text: 'Mon–Sat · 9 AM – 7 PM' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-sm text-slate-500">
                    <Icon className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* ── RIGHT — Image card ── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="relative"
            >
              {/* Main card */}
              <div className="relative rounded-3xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-2xl shadow-sky-500/10 overflow-hidden p-4">

                {/* Hero image */}
                <div className="relative h-[340px] sm:h-[380px] rounded-2xl overflow-hidden bg-gradient-to-br from-sky-100 to-teal-50">
                  <Image
                    src={doctors[0]?.image ?? '/images/clinic-logo.png'}
                    alt="Narula Multispeciality Clinic"
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
                </div>

                {/* Doctor chips row */}
                <div className="mt-3 grid grid-cols-2 gap-2.5">
                  {doctors.slice(0, 4).map((doc) => (
                    <div
                      key={doc.id}
                      className="flex items-center gap-2.5 rounded-xl bg-white/70 border border-slate-100 px-3 py-2 hover:bg-white transition-colors"
                    >
                      <div className="h-8 w-8 rounded-lg overflow-hidden shrink-0 border border-white shadow-sm">
                        <Image
                          src={doc.image}
                          alt={doc.name}
                          width={32}
                          height={32}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-slate-900 truncate leading-tight">{doc.name.split(' ').slice(0, 2).join(' ')}</div>
                        <div className="text-[10px] text-slate-500 truncate leading-tight">{doc.speciality}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge — Verified */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 rounded-2xl bg-white border border-slate-100 shadow-lg px-3.5 py-2.5 flex items-center gap-2.5"
              >
                <div className="h-9 w-9 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">NABH-Aligned</div>
                  <div className="text-[10px] text-slate-500">Safe & Ethical Practice</div>
                </div>
              </motion.div>

              {/* Floating badge — Rating */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -right-4 rounded-2xl bg-white border border-slate-100 shadow-lg px-3.5 py-2.5"
              >
                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                    <Star className="w-5 h-5 fill-amber-500" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">4.9 / 5.0</div>
                    <div className="text-[10px] text-slate-500">Patient Rating</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════ */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-50/80 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.07 }}
                  className="flex items-center gap-3 rounded-2xl bg-white border border-slate-200/60 shadow-sm px-4 py-3.5"
                >
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/15">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-900 leading-none">{s.number}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES GRID
      ══════════════════════════════════════════ */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-3">
              6 Specialities · One Clinic
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Our <span className="text-primary">Medical Services</span>
            </h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
              Expert, co-ordinated care across six specialities — all under one roof in Najafgarh, Delhi.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {homeServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  <Card className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    {/* Hover gradient fill */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    <div className="relative flex flex-col h-full">
                      {/* Icon + eyebrow */}
                      <div className="flex items-center gap-3">
                        <div className={`h-10 w-10 rounded-xl flex items-center justify-center border transition-transform group-hover:scale-110 shrink-0 ${service.iconBg}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-semibold text-primary uppercase tracking-wide">{service.eyebrow}</span>
                      </div>

                      <h3 className="mt-3 text-base font-bold text-slate-900 leading-snug">{service.title}</h3>
                      <p className="mt-2 text-sm text-slate-500 leading-relaxed flex-1">{service.description}</p>

                      <Link
                        href={service.href}
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all duration-200"
                      >
                        Learn More <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="mt-8 text-center"
          >
            <Button variant="outline" className="border-primary/40 text-primary hover:bg-primary/5" asChild>
              <Link href="/services" className="inline-flex items-center gap-2">
                View All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT STRIP
      ══════════════════════════════════════════ */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-slate-50/60">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55 }}
            >
              <p className="text-primary font-semibold text-sm uppercase tracking-wide">About Us</p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                A Multi-Generational Legacy of Healing
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
                Founded by <strong className="text-slate-800">Dr Sanjay Narula</strong> and{' '}
                <strong className="text-slate-800">Dr Vandana Narula</strong>, Narula Multispeciality
                Clinic has been a cornerstone of healthcare in Najafgarh, Delhi for over three decades.
                Today, the second generation — Dr Sidhant Narula (Orthopaedics) and Dr Milind Shinde
                (Paediatrics) — continues this legacy with the latest medical advancements.
              </p>
              <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
                From welcoming newborns to managing complex surgical cases, our team offers
                seamless, co-ordinated care under one roof — saving patients time, stress, and uncertainty.
              </p>

              <ul className="mt-5 space-y-2.5">
                {[
                  'Transparent, honest communication with every patient',
                  'Clinically proven, evidence-based treatments',
                  'Affordable care without compromising quality',
                  'Same-day appointments available for urgent cases',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Button className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/about" className="inline-flex items-center gap-2">
                    About the Clinic <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Right — image */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55 }}
            >
              <Card className="rounded-2xl border-slate-200/60 bg-white p-3 shadow-sm overflow-hidden">
                <div className="relative h-[280px] sm:h-[320px] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/clinic-logo.png"
                    alt="Narula Multispeciality Clinic"
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 via-teal-500/10 to-emerald-500/15" />
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 p-1">
                  {[
                    { label: 'Est.', value: '1989', sub: 'Serving since' },
                    { label: 'Location', value: 'Najafgarh', sub: 'New Delhi' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl bg-slate-50 px-3.5 py-3 border border-slate-100">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wide">{item.sub}</div>
                      <div className="text-base font-bold text-slate-900 mt-0.5">{item.value}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MEET OUR DOCTORS
      ══════════════════════════════════════════ */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10"
          >
            <div>
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-3">Expert Team</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Meet Our <span className="text-primary">Doctors</span>
              </h2>
              <p className="mt-2 text-slate-500 text-sm">Specialists who combine precision with compassion.</p>
            </div>
            <Button variant="outline" className="border-primary/40 text-primary hover:bg-primary/5 shrink-0 self-start sm:self-auto" asChild>
              <Link href="/doctors" className="inline-flex items-center gap-1.5">
                View All Doctors <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {doctors.slice(0, 4).map((doc, idx) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
              >
                <Card className="rounded-2xl border-slate-200/60 bg-white shadow-sm overflow-hidden group h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 shrink-0 bg-slate-100 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                    {doc.image ? (
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 25vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
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
                    <div className="text-primary font-semibold text-xs uppercase tracking-wide">{doc.speciality}</div>
                    <h3 className="mt-1 text-sm font-bold text-slate-900 leading-snug">{doc.name}</h3>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-2 flex-1">{doc.bio}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <Badge className="bg-primary/10 text-primary border-primary/20 text-[10px]">{doc.experience}</Badge>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-3 w-full border-primary/40 text-primary hover:bg-primary/5 text-xs"
                      asChild
                    >
                      <Link href={`/doctors#${doc.id}`} className="inline-flex items-center gap-1">
                        View Profile <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════════ */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-slate-50/60">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-3">Why Narula</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Why Thousands of Families <span className="text-primary">Trust Us</span>
            </h2>
            <p className="mt-3 text-slate-500 text-sm max-w-xl mx-auto">
              Four pillars that define how we care for every patient who walks through our doors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {whyUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                >
                  <Card className="rounded-2xl border-slate-200/60 bg-white p-5 shadow-sm hover:shadow-lg transition-shadow h-full">
                    <div className="flex items-start gap-4">
                      <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/15 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900">{item.title}</h3>
                        <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-3">Patient Stories</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              What Our <span className="text-primary">Patients Say</span>
            </h2>
            <p className="mt-3 text-slate-500 text-sm max-w-xl mx-auto">
              Real experiences from families who trust Narula Clinic for their healthcare.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
              >
                <Card className="rounded-2xl border-slate-200/60 bg-white p-5 shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <blockquote className="mt-3 text-sm text-slate-600 leading-relaxed flex-1 italic">
                    "{t.quote}"
                  </blockquote>

                  <div className="mt-4 flex items-center gap-3 pt-3 border-t border-slate-100">
                    <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                      <div className="text-xs text-slate-500">{t.role}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════ */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-white/30 shadow-xl bg-gradient-to-r from-sky-500/20 via-teal-500/20 to-emerald-500/20"
          >
            {/* Decorative blur circles */}
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none" />

            <div className="relative p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="max-w-xl">
                <p className="text-primary font-semibold text-sm">Get Expert Medical Care Today</p>
                <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">
                  Your health, our priority.
                </h2>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  Book a consultation and speak directly with our specialists.
                  Same-day appointments available for urgent cases.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Button className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 px-7" asChild>
                  <Link href="/contact" className="inline-flex items-center gap-2">
                    Book Appointment <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-primary/40 text-primary hover:bg-primary/5 bg-white/60" asChild>
                  <Link href="/doctors">Meet Our Doctors</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MOBILE STICKY CTA
      ══════════════════════════════════════════ */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200/70 bg-white/90 backdrop-blur-sm">
        <div className="px-4 py-3 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-[11px] text-slate-500">Need medical help?</div>
            <div className="text-sm font-semibold text-slate-900">Book a Consultation</div>
          </div>
          <Button size="sm" className="bg-primary hover:bg-primary/90 shrink-0" asChild>
            <Link href="/contact">Book Now</Link>
          </Button>
        </div>
      </div>

    </div>
  );
}