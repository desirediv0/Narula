'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, X, ChevronRight, MapPin, Clock } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CLINIC_ADDRESS, CLINIC_AREA_SHORT, CLINIC_TIMINGS, CLINIC_APPOINTMENT_NOTE } from '@/lib/clinic-address';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Doctors', href: '/doctors' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

function isLinkActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = '' };
  }, [isOpen]);

  return (
    <>
      <nav
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md shadow-slate-200/50 border-b border-slate-200/60'
            : 'bg-white/70 backdrop-blur-sm border-b border-slate-200/30'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[80px]">

            {/* ── LOGO ── */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative h-20 w-20 rounded overflow-hidden shrink-0 transition-transform group-hover:scale-105">
                <Image
                  src="/images/clinic-logo.png"
                  alt="Narula Clinic Logo"
                  fill
                  sizes="106px"
                  className="object-contain p-0 w-full h-full"
                  priority
                />
              </div>
              <div className="block">
                <div className="md:font-bold font-medium text-slate-900 md:text-base text-xs leading-tight">
                  Narula Multispeciality
                </div>
                <div className="md:text-xs text-[10px] text-primary font-medium leading-tight tracking-wide">
                  Clinic · {CLINIC_AREA_SHORT}
                </div>
              </div>
            </Link>

            {/* ── DESKTOP NAV ── */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isLinkActive(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                      active
                        ? 'text-primary bg-primary/8'
                        : 'text-slate-700 hover:text-primary hover:bg-primary/5'
                    )}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-5 rounded-full bg-primary"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* ── DESKTOP CTAs ── */}
            <div className="hidden md:flex items-center gap-2.5">
              <Button
                variant="outline"
                size="sm"
                className="border-primary/40 text-primary hover:bg-primary/5 gap-1.5"
                asChild
              >
                <Link href="tel:+919810433502" className="inline-flex items-center">
                  <Phone className="w-3.5 h-3.5" />
                  Call Now
                </Link>
              </Button>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 shadow-sm shadow-primary/20"
                asChild
              >
                <Link href="/contact">Book Appointment</Link>
              </Button>
            </div>

            {/* ── MOBILE: icons + hamburger ── */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                variant="outline"
                size="sm"
                className="border-primary/40 text-primary h-9 w-9 p-0"
                aria-label="Call Now"
                asChild
              >
                <Link href="tel:+919810433502">
                  <Phone className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 h-9 px-3 text-xs font-semibold hidden sm:inline-flex"
                asChild
              >
                <Link href="/contact">Book</Link>
              </Button>
              <button
                onClick={() => setIsOpen(true)}
                className="h-9 w-9 flex items-center justify-center rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5 text-slate-700" />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer panel */}
            <motion.aside
              className="fixed top-0 right-0 h-full w-[300px] sm:w-[340px] bg-white z-70 shadow-2xl flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-2 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="relative h-16 w-16 rounded overflow-hidden border border-slate-200/60 bg-white shrink-0">
                    <Image
                      src="/images/clinic-logo.png"
                      alt="Narula Clinic Logo"
                      fill
                      sizes="44px"
                      className="object-contain p-0"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm leading-tight">Narula Clinic</div>
                    <div className="text-[11px] text-primary font-medium leading-tight">Multispeciality · {CLINIC_AREA_SHORT}</div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 flex items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4 text-slate-700" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-4 py-4">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest px-3 mb-2">
                  Navigation
                </p>
                <ul className="space-y-1">
                  {navLinks.map((link, idx) => {
                    const active = isLinkActive(pathname, link.href);
                    return (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            'flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-all',
                            active
                              ? 'bg-primary/10 text-primary'
                              : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                          )}
                        >
                          <span>{link.label}</span>
                          <ChevronRight className={cn(
                            'w-4 h-4 transition-colors',
                            active ? 'text-primary' : 'text-slate-400'
                          )} />
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>

                {/* Info strip */}
                <div className="mt-5 space-y-2.5 px-1">
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest px-2 mb-2">
                    Clinic Info
                  </p>
                  <div className="flex items-center gap-2.5 rounded-xl bg-slate-50 border border-slate-100 px-3 py-2.5">
                    <div className="h-7 w-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-800 leading-snug">{CLINIC_ADDRESS}</div>
                      <div className="text-[10px] text-slate-500">Narula Multispeciality Clinic</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl bg-slate-50 border border-slate-100 px-3 py-2.5">
                    <div className="h-7 w-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Clock className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-800">{CLINIC_TIMINGS}</div>
                      <div className="text-[10px] text-slate-500">{CLINIC_APPOINTMENT_NOTE}</div>
                    </div>

                  </div>
                </div>
              </nav>

              {/* Drawer footer CTAs */}
              <div className="px-4 py-4 border-t border-slate-100 space-y-2.5 bg-slate-50/60">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 shadow-sm shadow-primary/15 h-10"
                  asChild
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)} className="inline-flex items-center gap-2">
                    Book Appointment
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-primary/40 text-primary hover:bg-primary/5 h-10"
                  asChild
                >
                  <Link href="tel:+919810433502" className="inline-flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Link>
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}