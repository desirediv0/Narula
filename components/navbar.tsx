'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 backdrop-blur-md border-b border-slate-200/50 transition-shadow',
        scrolled ? 'shadow-lg bg-white/70' : 'bg-white/55'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo + Name */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/clinic-logo.png"
              alt="Narula Multispeciality Clinic Logo"
              className="h-10 w-10"
            />
            <span className="hidden sm:inline font-semibold text-lg text-slate-900">
              Narula Multispeciality Clinic
            </span>
          </Link>

          {/* Desktop Center Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const active = isLinkActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'group relative text-sm font-medium text-slate-700 transition-colors',
                    active ? 'text-primary' : 'hover:text-primary/90'
                  )}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute left-0 -bottom-2 h-[2px] w-full rounded-full bg-primary origin-left scale-x-0 transition-transform duration-300',
                      active ? 'scale-x-100' : 'group-hover:scale-x-100'
                    )}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              className="border-primary/40 text-primary hover:bg-primary/5"
              asChild
            >
              <Link href="/contact" className="inline-flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Link>
            </Button>
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/contact">Book Appointment</Link>
            </Button>
          </div>

          {/* Mobile: CTA + Hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <Button
              variant="outline"
              className="border-primary/40 text-primary p-2"
              aria-label="Call Now"
              asChild
            >
              <Link href="/contact" aria-label="Call Now" className="inline-flex">
                <Phone className="w-4 h-4" />
              </Link>
            </Button>
            <Button className="bg-primary hover:bg-primary/90 px-3" asChild>
              <Link href="/contact">Book</Link>
            </Button>
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 rounded-md hover:bg-slate-100 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-slate-900" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-slate-900/25 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              className="fixed top-0 right-0 h-full w-[320px] bg-white/80 backdrop-blur-md border-l border-slate-200/60 z-50 shadow-2xl"
              initial={{ x: 24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 24, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              <div className="flex items-center justify-between px-4 py-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/clinic-logo.png"
                    alt="Narula Clinic Logo"
                    className="h-9 w-9"
                  />
                  <span className="font-semibold text-slate-900">Narula Clinic</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-md hover:bg-slate-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-slate-900" />
                </button>
              </div>

              <div className="px-4 pb-6">
                <nav className="space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'block rounded-xl px-3 py-2 text-sm font-medium',
                        isLinkActive(pathname, link.href)
                          ? 'bg-primary/10 text-primary'
                          : 'text-slate-700 hover:bg-slate-100'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-6 flex flex-col gap-3">
                  <Button
                    variant="outline"
                    className="border-primary/40 text-primary"
                    asChild
                  >
                    <Link href="/contact" className="inline-flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Link>
                  </Button>
                  <Button className="bg-primary hover:bg-primary/90" asChild>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Book Appointment
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
