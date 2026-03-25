'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, HeartPulse, Phone, Sparkles, Stethoscope, ShieldCheck, Bone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { doctors } from '@/lib/clinic-data';

const homeServices = [
  {
    title: 'Gynecology',
    description: 'Obstetrics, infertility & compassionate women’s healthcare.',
    icon: HeartPulse,
  },
  {
    title: 'Orthopedics',
    description: 'Joint care, fractures, rehabilitation & mobility restoration.',
    icon: Bone,
  },
  {
    title: 'Pediatrics',
    description: 'Newborn care, growth monitoring, immunization & child wellness.',
    icon: Stethoscope,
  },
  {
    title: 'Surgery',
    description: 'Advanced procedures with minimally invasive, patient-first care.',
    icon: ShieldCheck,
  },
];

const featureBlocks = [
  { title: '35+ Years Experience', description: 'Deep clinical expertise built over decades.', icon: Sparkles },
  { title: 'Multi-speciality Care', description: 'One roof, integrated care across departments.', icon: Stethoscope },
  { title: 'Advanced Technology', description: 'Modern diagnostics and evidence-based treatment.', icon: ShieldCheck },
  { title: 'Patient-first Approach', description: 'Clarity, compassion, and support at every step.', icon: HeartPulse },
];

export default function Home() {
  return (
    <div className="bg-background">

      {/* HERO */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 via-teal-500/20 to-emerald-500/20" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-sky-500/20 via-teal-500/10 to-emerald-500/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/30 backdrop-blur px-4 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                <span className="text-sm font-medium text-slate-800">
                  Trusted multi-speciality healthcare
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Compassionate Care. Advanced Medicine.
              </h1>

              <p className="text-lg sm:text-xl text-slate-700/80 max-w-xl">
                Built on trust, clinical excellence, and years of experience—delivering world-class
                care for every stage of life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <Link href="/contact" className="inline-flex items-center">
                    Book Appointment
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 text-primary bg-white/30 hover:bg-white/50"
                  asChild
                >
                  <Link href="/contact" className="inline-flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Link>
                </Button>
              </div>

              <div className="grid sm:grid-cols-3 gap-3 pt-2">
                {[
                  { label: '35+ Years', value: 'Experience' },
                  { label: '4 Specialities', value: 'Under One Roof' },
                  { label: 'Patient-first', value: 'Care' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl bg-white/55 backdrop-blur border border-white/60 shadow-sm px-4 py-3"
                  >
                    <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                    <div className="text-xs text-slate-700/80">{item.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative"
            >
              <div className="relative rounded-3xl bg-white/55 backdrop-blur border border-white/70 shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-teal-500/10 to-emerald-500/10" />

                <div className="relative p-6 sm:p-8">
                  <div className="relative h-[320px] sm:h-[360px]">
                    <Image
                      src={doctors[0]?.image ?? '/images/clinic-logo.png'}
                      alt="Doctors at Narula Multispeciality Clinic"
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover rounded-2xl shadow-sm"
                      priority
                    />

                    {/* Floating trust elements */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute -top-3 -left-3 rounded-2xl bg-white/70 backdrop-blur border border-white/70 shadow-sm px-3 py-2 flex items-center gap-2"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-700">
                        <ShieldCheck className="w-5 h-5" />
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Verified Care</div>
                        <div className="text-xs text-slate-700/80">Evidence-based approach</div>
                      </div>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                      className="absolute -bottom-3 -right-3 rounded-2xl bg-white/70 backdrop-blur border border-white/70 shadow-sm px-3 py-2"
                    >
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-700">
                          <Sparkles className="w-5 h-5" />
                        </span>
                        <div>
                          <div className="text-sm font-semibold text-slate-900">Premium Treatment</div>
                          <div className="text-xs text-slate-700/80">Precision & compassion</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Mini doctor chips */}
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {doctors.slice(0, 4).map((doc) => (
                      <div
                        key={doc.id}
                        className="group flex items-center gap-3 rounded-2xl bg-white/55 backdrop-blur border border-white/70 px-3 py-2 hover:bg-white/70 transition-colors"
                      >
                        <div className="h-10 w-10 rounded-xl overflow-hidden flex-shrink-0 shadow-sm border border-white/60">
                          <Image
                            src={doc.image}
                            alt={doc.name}
                            width={40}
                            height={40}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-slate-900 truncate">{doc.name.split(' ')[0]}</div>
                          <div className="text-xs text-slate-700/80 truncate">{doc.speciality}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="mt-3 text-slate-700/80 max-w-2xl mx-auto">
              Comprehensive care across key specialities—designed to build trust and deliver better outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {homeServices.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55 }}
                  className="group"
                >
                  <Card className="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/60 backdrop-blur shadow-sm p-6 hover:shadow-xl transition-shadow">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute -inset-8 bg-gradient-to-r from-sky-500/20 via-teal-500/20 to-emerald-500/20 blur-2xl" />
                    </div>

                    <div className="relative">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="mt-5 text-lg font-bold text-slate-900">{service.title}</h3>
                      <p className="mt-2 text-sm text-slate-700/80 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50/60 to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Meet Our <span className="text-primary">Expert Doctors</span>
            </h2>
            <p className="mt-3 text-slate-700/80 max-w-2xl mx-auto">
              Skilled specialists dedicated to compassionate, high-quality care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
            {doctors.slice(0, 4).map((doc, idx) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: idx * 0.04 }}
                className="group"
              >
                <Card className="relative rounded-2xl border border-slate-200/60 bg-white/65 backdrop-blur shadow-sm overflow-hidden p-0 hover:shadow-xl transition-shadow">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-500/15 via-teal-500/15 to-emerald-500/15 blur-xl" />
                  </div>

                  <div className="relative p-6">
                    <div className="relative">
                      <div className="rounded-2xl overflow-hidden border border-white/70 shadow-sm bg-slate-100">
                        <div className="relative h-56">
                          <Image
                            src={doc.image}
                            alt={doc.name}
                            fill
                            sizes="(max-width: 640px) 100vw, 25vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-slate-900">{doc.name}</h3>
                    <p className="text-primary font-semibold mt-1">{doc.speciality}</p>
                    <p className="text-sm text-slate-700/80 mt-2">{doc.experience}</p>

                    <div className="mt-6">
                      <Button
                        variant="outline"
                        className="w-full border-primary/40 text-primary hover:bg-primary/5"
                        asChild
                      >
                        <Link href={`/doctors#${doc.id}`}>View Profile</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Why Choose <span className="text-primary">Narula</span> Clinic?
            </h2>
            <p className="mt-3 text-slate-700/80 max-w-2xl mx-auto">
              Trust-building care—combining multi-speciality expertise with a patient-first experience.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-5 sm:gap-6">
            {featureBlocks.map((block, idx) => {
              const Icon = block.icon;
              return (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55, delay: idx * 0.04 }}
                  className="flex-1"
                >
                  <Card className="relative rounded-2xl border border-slate-200/60 bg-white/60 backdrop-blur shadow-sm p-6 hover:shadow-xl transition-shadow h-full">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900">{block.title}</h3>
                        <p className="text-sm text-slate-700/80 mt-2 leading-relaxed">{block.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden border border-white/30 shadow-xl bg-gradient-to-r from-sky-500/20 via-teal-500/20 to-emerald-500/20"
          >
            <div className="p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                  Book Your Appointment Today
                </h2>
                <p className="text-slate-700/80 max-w-xl">
                  Choose the speciality you need and speak with our experienced team.
                </p>
              </div>
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-7"
                asChild
              >
                <Link href="/contact" className="inline-flex items-center">
                  Book Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
