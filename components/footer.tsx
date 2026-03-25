import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
  const currentYear = 2026

  return (
    <footer className="bg-[#0f172a] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_20%_0%,rgba(14,165,233,0.25)_0%,transparent_60%),radial-gradient(45%_40%_at_90%_30%,rgba(20,184,166,0.22)_0%,transparent_65%),radial-gradient(45%_40%_at_50%_110%,rgba(34,197,94,0.18)_0%,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/clinic-logo.png"
                alt="Narula Clinic"
                className="h-10 w-10"
              />
              <h3 className="font-bold text-lg">Narula Multispeciality Clinic</h3>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Compassionate care under one roof, backed by advanced medical expertise for
              every stage of life.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm tracking-wide mb-4 text-white/90">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-white transition-colors">
                  Doctors
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm tracking-wide mb-4 text-white/90">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Gynecology
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Orthopedics
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Pediatrics
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Surgery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm tracking-wide mb-4 text-white/90">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>+91-XXXX-XXXX-XX</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>info@narulaClinic.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Your Clinic Address</span>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  aria-label="Twitter"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  aria-label="LinkedIn"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p className="text-sm text-white/60">
            &copy; {currentYear} Narula Multispeciality Clinic. All rights reserved.
          </p>
          <p className="text-sm text-white/60">Designed by</p>
        </div>
      </div>
    </footer>
  )
}

