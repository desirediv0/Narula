'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { Phone, Mail, MapPin, Clock, MessageCircle, PhoneCall } from 'lucide-react'

const PHONE_DISPLAY = '+91-XXXX-XXXX-XX'
const PHONE_TEL = 'tel:+91XXXXXXXXXX'
const WHATSAPP_TEL = 'https://wa.me/91XXXXXXXXXX'

const schema = z.object({
  fullName: z.string().min(2, 'Please enter your full name.'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number.')
    .max(15, 'Please enter a valid phone number.'),
  email: z
    .string()
    .email('Please enter a valid email.')
    .optional()
    .or(z.literal('')),
  message: z.string().min(10, 'Please enter your message (min 10 characters).'),
})

type FormValues = z.infer<typeof schema>

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false)

  const defaultValues = useMemo<FormValues>(
    () => ({
      fullName: '',
      phone: '',
      email: '',
      message: '',
    }),
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
    // TODO: connect to backend / API route
    await new Promise((r) => setTimeout(r, 1200))
    reset(defaultValues)
    setTimeout(() => setSubmitted(false), 2000)
    // eslint-disable-next-line no-console
    console.log('Contact form values:', values)
  }

  const mapSrc =
    'https://www.google.com/maps?q=Narula%20Multispeciality%20Clinic&output=embed'

  return (
    <div className="bg-background pb-24">

      {/* HERO */}
      <section className="pt-20 pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-sky-500/15 via-teal-500/10 to-emerald-500/15" />
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-5xl font-bold text-slate-900">Contact Us</h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-700/80">
              We&apos;re here to help you with your healthcare needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: CONTACT INFO CARDS */}
      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 -mt-6">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              <Card className="rounded-2xl border-slate-200/60 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-xl transition-all h-full">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900">Address</h3>
                <p className="mt-2 text-sm text-slate-700/80 leading-relaxed">
                  Your Clinic Address, City, State - PIN Code
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.04 }}
            >
              <Card className="rounded-2xl border-slate-200/60 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-xl transition-all h-full">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900">Phone Number</h3>
                <a href={PHONE_TEL} className="mt-2 inline-flex text-sm text-primary font-semibold hover:underline">
                  {PHONE_DISPLAY}
                </a>
                <p className="mt-2 text-sm text-slate-700/80">Available for appointments</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <Card className="rounded-2xl border-slate-200/60 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-xl transition-all h-full">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900">Email</h3>
                <a
                  href="mailto:info@narulaClinic.com"
                  className="mt-2 inline-flex text-sm text-primary font-semibold hover:underline"
                >
                  info@narulaClinic.com
                </a>
                <p className="mt-2 text-sm text-slate-700/80">Reply within 24 hours</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.12 }}
            >
              <Card className="rounded-2xl border-slate-200/60 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-xl transition-all h-full">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900">Working Hours</h3>
                <p className="mt-2 text-sm text-slate-700/80 leading-relaxed">
                  Mon–Fri: 9:00 AM – 9:00 PM
                  <br />
                  Sat: 10:00 AM – 6:00 PM
                  <br />
                  Sun: Emergency Only
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 + 4: FORM + MAP */}
      <section id="contact-form" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Send us a message</h2>
              <p className="mt-3 text-slate-700/80">
                Share your details and our team will contact you to schedule the right appointment.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Full Name</label>
                  <Input
                    placeholder="Your full name"
                    className="bg-white/60 border-slate-200/80"
                    {...register('fullName')}
                  />
                  {errors.fullName && (
                    <p className="mt-2 text-sm text-red-600">{errors.fullName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Phone Number</label>
                  <Input
                    placeholder="+91 98765 43210"
                    className="bg-white/60 border-slate-200/80"
                    {...register('phone')}
                  />
                  {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Email <span className="text-slate-500 font-normal">(optional)</span>
                  </label>
                  <Input
                    placeholder="your@email.com"
                    className="bg-white/60 border-slate-200/80"
                    {...register('email')}
                  />
                  {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Message</label>
                  <Textarea
                    rows={5}
                    placeholder="Tell us what you need help with..."
                    className="bg-white/60 border-slate-200/80"
                    {...register('message')}
                  />
                  {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    type="submit"
                    disabled={isSubmitting || submitted}
                    className="bg-primary hover:bg-primary/90 flex-1"
                  >
                    {submitted ? 'Submitting...' : 'Submit'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="border-primary/40 text-primary bg-white/70 hover:bg-white/90 flex-1"
                    asChild
                  >
                    <Link href="#contact-form">Book Appointment</Link>
                  </Button>
                </div>

                {submitted && (
                  <div className="p-4 rounded-xl border border-primary/30 bg-primary/10 text-primary text-sm">
                    Thank you! Our team will contact you soon to confirm your appointment.
                  </div>
                )}
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="relative"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-slate-900">Visit us</h3>
                <div className="hidden sm:flex items-center gap-2 rounded-full bg-white/70 border border-slate-200/70 px-3 py-1.5">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Clinic location</span>
                </div>
              </div>

              <Card className="rounded-2xl overflow-hidden border-slate-200/70 shadow-sm">
                <div className="relative w-full" style={{ aspectRatio: '16/10' }}>
                  <iframe
                    title="Clinic location map"
                    src={mapSrc}
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="pointer-events-none absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 rounded-2xl bg-white/80 backdrop-blur border border-slate-200/80 px-4 py-3 w-fit">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-sm font-bold text-slate-900">Narula Multispeciality Clinic</div>
                        <div className="text-xs text-slate-700/80">Gurgaon (placeholder)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA BANNER */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-500/15 via-teal-500/10 to-emerald-500/15">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/40 bg-white/50 backdrop-blur shadow-xl overflow-hidden"
          >
            <div className="p-8 sm:p-10 text-center">
              <div className="text-primary font-semibold">Your Health is Our Priority</div>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">
                Book your appointment today
              </h2>
              <p className="mt-3 text-slate-700/80 max-w-2xl mx-auto">
                Tell us your requirement and we will connect you with the right specialist.
              </p>

              <div className="mt-6 flex justify-center">
                <Button className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/contact#contact-form">Book Appointment</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile sticky Call */}
      <div className="md:hidden fixed bottom-[72px] left-0 right-0 z-50 px-3">
        <Button
          className="w-full bg-primary hover:bg-primary/90"
          asChild
        >
          <Link href={PHONE_TEL} className="inline-flex items-center justify-center gap-2">
            <PhoneCall className="w-4 h-4" />
            Call Now
          </Link>
        </Button>
      </div>

      {/* Floating buttons (bottom-right) */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 md:gap-2">
        <div className="hidden md:flex flex-col gap-3">
          <Button className="rounded-full w-12 h-12 bg-primary hover:bg-primary/90 shadow-lg" asChild>
            <Link href={PHONE_TEL} aria-label="Call Now" className="inline-flex items-center justify-center">
              <PhoneCall className="w-5 h-5" />
            </Link>
          </Button>
          <Button
            className="rounded-full w-12 h-12 bg-teal-500 hover:bg-teal-500/90 shadow-lg"
            asChild
          >
            <Link href={WHATSAPP_TEL} target="_blank" rel="noreferrer" aria-label="WhatsApp Chat" className="inline-flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </Link>
          </Button>
        </div>

        <Button className="rounded-full w-12 h-12 bg-primary hover:bg-primary/90 shadow-lg md:hidden" asChild>
          <Link href="/contact#contact-form" aria-label="Book Appointment" className="inline-flex items-center justify-center">
            <Phone className="w-5 h-5" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

