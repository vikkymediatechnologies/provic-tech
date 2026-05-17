'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
  Send,
  ArrowUpRight,
} from 'lucide-react'

// ─── Data ─────────────────────────────────────────────────────────────────────
const footerLinks = {
  products: [
    { label: 'Laptops',       href: '/products?category=laptops'      },
    { label: 'Earbuds',       href: '/products?category=earbuds'      },
    { label: 'Keyboards',     href: '/products?category=keyboards'    },
    { label: 'Power Banks',   href: '/products?category=power-banks'  },
    { label: 'Smartwatches',  href: '/products?category=smartwatches' },
    { label: 'Accessories',   href: '/products?category=accessories'  },
  ],
  company: [
    { label: 'About Us', href: '/about'   },
    { label: 'Services', href: '/services'},
    { label: 'FAQ',      href: '/faq'     },
    { label: 'Contact',  href: '/contact' },
  ],
}

const socialLinks = [
  { icon: Twitter,     href: 'https://twitter.com/provictech',          label: 'Twitter'   },
  { icon: Instagram,   href: 'https://instagram.com/provictech',        label: 'Instagram' },
  { icon: Facebook,    href: 'https://facebook.com/provictech',         label: 'Facebook'  },
  { icon: Linkedin,    href: 'https://linkedin.com/company/provictech', label: 'LinkedIn'  },
  { icon: MessageCircle, href: 'https://wa.me/2349035986632',           label: 'WhatsApp'  },
]

const contactItems = [
  { icon: Phone,         label: 'Sales',   value: '0903 598 6632',        href: 'tel:09035986632'           },
  { icon: MessageCircle, label: 'Support', value: '+234 806 878 6708',    href: 'tel:+2348068786708'        },
  { icon: Mail,          label: 'Email',   value: 'hello@provictech.com', href: 'mailto:hello@provictech.com'},
  { icon: MapPin,        label: 'Address', value: 'Lagos, Nigeria',       href: 'https://maps.google.com/?q=Lagos,Nigeria'},
]

// ─── Link column ──────────────────────────────────────────────────────────────
function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-5">
        <div className="w-4 h-px bg-gold" />
        <span className="text-[10px] tracking-[0.25em] uppercase text-gold font-bold">{title}</span>
      </div>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group flex items-center gap-1 text-sm text-black/45 dark:text-white/45
                hover:text-black dark:hover:text-white transition-colors duration-200"
            >
              {link.label}
              <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-gold" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ─── Main Footer ──────────────────────────────────────────────────────────────
export function Footer() {
  const [email, setEmail] = useState('')
  const [subbed, setSubbed] = useState(false)

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubbed(true)
  }

  return (
    <footer className="relative bg-white dark:bg-[#080808] overflow-hidden">

      {/* ── Top hairline ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-black/[0.07] dark:bg-white/[0.07]" />

      {/* ── Ambient gold glow ── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[50vw] h-80 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, hsl(43 96% 56% / 0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* ══════════════ MAIN BODY ══════════════ */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-14 pt-16 pb-12 lg:pt-20 lg:pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* ── Brand column (wide) ── */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col gap-7">

            {/* Logo */}
            <Link href="/" className="inline-block w-fit">
              <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
                <Image
                  src="/provic.png"
                  alt="Provic Technologies"
                  width={220}
                  height={66}
                  className="h-14 w-auto object-contain"
                  priority
                />
              </motion.div>
            </Link>

            {/* tagline */}
            <p className="text-sm text-black/45 dark:text-white/45 leading-relaxed max-w-xs">
              Your trusted partner for premium tech gadgets. Delivering quality, reliability,
              and exceptional service to students, developers, and creators across Nigeria.
            </p>

            {/* Newsletter */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-4 h-px bg-gold" />
                <span className="text-[10px] tracking-[0.25em] uppercase text-gold font-bold">
                  Newsletter
                </span>
              </div>

              {subbed ? (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-gold font-semibold"
                >
                  You&apos;re subscribed ✓
                </motion.p>
              ) : (
                <form onSubmit={handleNewsletter} className="flex gap-2 max-w-xs">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 h-10 px-4 rounded-xl text-sm
                      bg-black/[0.03] dark:bg-white/[0.04]
                      border border-black/10 dark:border-white/10
                      text-black dark:text-white placeholder:text-black/25 dark:placeholder:text-white/25
                      focus:outline-none focus:border-gold/50
                      transition-all duration-200"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-gold text-black
                      flex items-center justify-center shrink-0
                      hover:bg-gold/90 transition-colors duration-200
                      shadow-md shadow-gold/20"
                  >
                    <Send className="w-4 h-4" />
                  </motion.button>
                </form>
              )}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2 flex-wrap">
              {socialLinks.map((s) => {
                const Icon = s.icon
                return (
                  <Link
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="group w-9 h-9 rounded-xl
                      bg-black/[0.03] dark:bg-white/[0.04]
                      border border-black/8 dark:border-white/8
                      hover:border-gold/35 hover:bg-gold/[0.06]
                      flex items-center justify-center transition-all duration-300"
                  >
                    <Icon className="w-4 h-4 text-black/40 dark:text-white/40 group-hover:text-gold transition-colors duration-300" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* ── Products column ── */}
          <div className="lg:col-span-2 lg:col-start-6">
            <LinkColumn title="Products" links={footerLinks.products} />
          </div>

          {/* ── Company column ── */}
          <div className="lg:col-span-2">
            <LinkColumn title="Company" links={footerLinks.company} />
          </div>

          {/* ── Contact column ── */}
          <div className="sm:col-span-2 lg:col-span-3">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-4 h-px bg-gold" />
              <span className="text-[10px] tracking-[0.25em] uppercase text-gold font-bold">Contact</span>
            </div>
            <ul className="flex flex-col gap-3">
              {contactItems.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.label === 'Address' ? '_blank' : undefined}
                      rel="noreferrer"
                      className="group flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg shrink-0
                        bg-black/[0.03] dark:bg-white/[0.04]
                        border border-black/8 dark:border-white/8
                        group-hover:border-gold/35 group-hover:bg-gold/[0.06]
                        flex items-center justify-center transition-all duration-300">
                        <Icon className="w-3.5 h-3.5 text-black/40 dark:text-white/40 group-hover:text-gold transition-colors duration-300" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] tracking-[0.15em] uppercase text-black/30 dark:text-white/30">
                          {item.label}
                        </p>
                        <p className="text-xs font-semibold text-black/55 dark:text-white/55
                          group-hover:text-black dark:group-hover:text-white truncate transition-colors duration-200">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* ══════════════ BOTTOM BAR ══════════════ */}
      <div className="relative border-t border-black/[0.06] dark:border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-14 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

            <p className="text-[11px] text-black/35 dark:text-white/35 tracking-wide">
              © {new Date().getFullYear()} Provic Technologies. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              {[
                { label: 'Privacy Policy',    href: '/privacy' },
                { label: 'Terms of Service',  href: '/terms'   },
              ].map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-[11px] text-black/35 dark:text-white/35 hover:text-gold transition-colors duration-200 tracking-wide whitespace-nowrap"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}