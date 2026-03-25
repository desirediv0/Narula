import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/Header'
import './globals.css'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Narula Multispeciality Clinic - Premium Healthcare Services',
  description: 'Leading multispeciality clinic offering Gynecology, Orthopedics, Pediatrics, and Surgery services. Expert doctors providing compassionate healthcare.',
  generator: 'v0.app',
  icons: {
    icon: '/images/clinic-logo.png',
    apple: '/images/clinic-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 bg-background">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
