'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  MessageCircle, // WhatsApp stand-in
  ArrowUpRight,
} from 'lucide-react'

// ─── Data ─────────────────────────────────────────────────────────────────────
const contactInfo = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'contact@provictech.com',
    href: 'mailto:contact@provictech.com',
  },
  {
    icon: Phone,
    label: 'Call / WhatsApp',
    value: '+234 903 598 6632',
    href: 'tel:+2349035986632',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Lagos, Nigeria',
    href: 'https://maps.google.com/?q=Lagos,Nigeria',
  },
]

const socials = [
  {
    icon: Instagram,
    label: 'Instagram',
    handle: '@provictech',
    href: 'https://instagram.com/provictech',
  },
  {
    icon: Twitter,
    label: 'Twitter / X',
    handle: '@provictech',
    href: 'https://twitter.com/provictech',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    handle: 'Provic Tech',
    href: 'https://facebook.com/provictech',
  },
  {
    icon: Youtube,
    label: 'YouTube',
    handle: '@provictech',
    href: 'https://youtube.com/@provictech',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    handle: '+234 903 598 6632',
    href: 'https://wa.me/2349035986632',
  },
]

const subjects = [
  'Product Enquiry',
  'Order Support',
  'Bulk / Corporate Order',
  'Partnership',
  'Other',
]

// ─── Main Component ────────────────────────────────────────────────────────────
export default function ContactContent() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    // TODO: wire up to your API / email service
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSent(true)
  }

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white dark:bg-[#080808]">

      {/* ── Hairlines ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-black/[0.05] dark:bg-white/[0.05]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-black/[0.05] dark:bg-white/[0.05]" />

      {/* ── Ambient glow ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] aspect-square rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(43 96% 56% / 0.05) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-10"
          >
            {/* eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-gold" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">
                Contact Info
              </span>
            </div>

            {/* Contact tiles */}
            <div className="flex flex-col gap-3">
              {contactInfo.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.label === 'Visit Us' ? '_blank' : undefined}
                    rel="noreferrer"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="group flex items-center gap-4 p-5 rounded-2xl
                      bg-black/[0.02] dark:bg-white/[0.03]
                      border border-black/8 dark:border-white/8
                      hover:border-gold/35 hover:bg-gold/[0.03]
                      transition-all duration-300"
                  >
                    {/* icon tile */}
                    <div className="w-11 h-11 rounded-xl bg-black/5 dark:bg-white/8 group-hover:bg-gold/10
                      flex items-center justify-center shrink-0 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-black/50 dark:text-white/50 group-hover:text-gold transition-colors duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] tracking-[0.2em] uppercase text-black/35 dark:text-white/35 mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold text-black/70 dark:text-white/70
                        group-hover:text-black dark:group-hover:text-white truncate transition-colors duration-200">
                        {item.value}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-black/20 dark:text-white/20 group-hover:text-gold
                      opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0
                      transition-all duration-300 shrink-0" />
                  </motion.a>
                )
              })}
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-black/8 dark:bg-white/8" />

            {/* Social handles */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-gold" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">
                  Follow Us
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {socials.map((s, i) => {
                  const Icon = s.icon
                  return (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                      className="group flex items-center gap-3 p-4 rounded-xl
                        bg-black/[0.02] dark:bg-white/[0.03]
                        border border-black/8 dark:border-white/8
                        hover:border-gold/35 hover:bg-gold/[0.03]
                        transition-all duration-300"
                    >
                      <div className="w-9 h-9 rounded-lg bg-black/5 dark:bg-white/8 group-hover:bg-gold/10
                        flex items-center justify-center shrink-0 transition-colors duration-300">
                        <Icon className="w-4 h-4 text-black/50 dark:text-white/50 group-hover:text-gold transition-colors duration-300" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] tracking-[0.15em] uppercase text-black/35 dark:text-white/35">
                          {s.label}
                        </p>
                        <p className="text-xs font-semibold text-black/60 dark:text-white/60
                          group-hover:text-black dark:group-hover:text-white truncate transition-colors duration-200">
                          {s.handle}
                        </p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Business hours */}
            <div className="p-5 rounded-2xl
              bg-black/[0.02] dark:bg-white/[0.03]
              border border-black/8 dark:border-white/8">
              <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-bold mb-4">
                Business Hours
              </p>
              <div className="space-y-2">
                {[
                  { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM' },
                  { day: 'Saturday', hours: '10:00 AM – 4:00 PM' },
                  { day: 'Sunday', hours: 'Closed' },
                ].map((row) => (
                  <div key={row.day} className="flex justify-between items-center text-sm">
                    <span className="text-black/50 dark:text-white/50">{row.day}</span>
                    <span className={`font-semibold ${row.hours === 'Closed'
                      ? 'text-black/30 dark:text-white/30'
                      : 'text-black/70 dark:text-white/70'}`}>
                      {row.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN — Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative p-7 sm:p-10 rounded-2xl
              bg-black/[0.02] dark:bg-white/[0.03]
              border border-black/8 dark:border-white/8">

              {/* subtle inner glow */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 70% 10%, hsl(43 96% 56% / 0.05) 0%, transparent 60%)',
                }}
              />

              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-6 h-px bg-gold" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">
                    Send a Message
                  </span>
                </div>

                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center gap-4 py-20 text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
                      <Send className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-bebas text-4xl text-black dark:text-white tracking-tight">
                      MESSAGE SENT
                    </h3>
                    <p className="text-sm text-black/50 dark:text-white/50 max-w-xs">
                      We&apos;ll get back to you within 24 hours. Thank you for reaching out!
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-2 text-xs text-gold underline underline-offset-4"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] tracking-[0.2em] uppercase text-black/40 dark:text-white/40">
                          Full Name *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="John Doe"
                          className="h-11 px-4 rounded-xl text-sm
                            bg-black/[0.03] dark:bg-white/[0.04]
                            border border-black/10 dark:border-white/10
                            text-black dark:text-white placeholder:text-black/25 dark:placeholder:text-white/25
                            focus:outline-none focus:border-gold/50 focus:bg-gold/[0.02]
                            transition-all duration-200"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] tracking-[0.2em] uppercase text-black/40 dark:text-white/40">
                          Email Address *
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="john@example.com"
                          className="h-11 px-4 rounded-xl text-sm
                            bg-black/[0.03] dark:bg-white/[0.04]
                            border border-black/10 dark:border-white/10
                            text-black dark:text-white placeholder:text-black/25 dark:placeholder:text-white/25
                            focus:outline-none focus:border-gold/50 focus:bg-gold/[0.02]
                            transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] tracking-[0.2em] uppercase text-black/40 dark:text-white/40">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+234 800 000 0000"
                        className="h-11 px-4 rounded-xl text-sm
                          bg-black/[0.03] dark:bg-white/[0.04]
                          border border-black/10 dark:border-white/10
                          text-black dark:text-white placeholder:text-black/25 dark:placeholder:text-white/25
                          focus:outline-none focus:border-gold/50 focus:bg-gold/[0.02]
                          transition-all duration-200"
                      />
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] tracking-[0.2em] uppercase text-black/40 dark:text-white/40">
                        Subject *
                      </label>
                      <select
                        required
                        defaultValue=""
                        className="h-11 px-4 rounded-xl text-sm
                          bg-black/[0.03] dark:bg-white/[0.04]
                          border border-black/10 dark:border-white/10
                          text-black dark:text-white
                          focus:outline-none focus:border-gold/50 focus:bg-gold/[0.02]
                          transition-all duration-200 appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="text-black/30">
                          Select a subject…
                        </option>
                        {subjects.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] tracking-[0.2em] uppercase text-black/40 dark:text-white/40">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Tell us how we can help you…"
                        className="px-4 py-3 rounded-xl text-sm resize-none
                          bg-black/[0.03] dark:bg-white/[0.04]
                          border border-black/10 dark:border-white/10
                          text-black dark:text-white placeholder:text-black/25 dark:placeholder:text-white/25
                          focus:outline-none focus:border-gold/50 focus:bg-gold/[0.02]
                          transition-all duration-200"
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: loading ? 1 : 1.02 }}
                      whileTap={{ scale: loading ? 1 : 0.98 }}
                      className="group mt-1 flex items-center justify-center gap-2.5 h-12 rounded-xl
                        bg-gold text-black text-sm font-bold tracking-wide
                        hover:bg-gold/90 disabled:opacity-60
                        transition-all duration-300 shadow-lg shadow-gold/20"
                    >
                      {loading ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </motion.button>

                    <p className="text-center text-[10px] text-black/30 dark:text-white/30">
                      We typically reply within 24 hours on business days.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}