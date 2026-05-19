'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

export function AboutCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white dark:bg-[#080808]">

      {/* ── Hairlines ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-black/[0.05] dark:bg-white/[0.05]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-black/[0.05] dark:bg-white/[0.05]" />

      {/* ── Center spine ── */}
      <div className="absolute inset-y-0 left-[50%] w-px bg-black/[0.03] dark:bg-white/[0.03] hidden lg:block pointer-events-none" />

      {/* ── Ambient gold glow ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] aspect-square rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(43 96% 56% / 0.06) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">

        {/* ── Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl
            border border-black/8 dark:border-white/8
            bg-black/[0.02] dark:bg-white/[0.03]"
        >
          {/* dot-grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, currentColor 1px, transparent 0)',
              backgroundSize: '28px 28px',
            }}
          />

          {/* corner gold glows */}
          <div
            className="absolute -top-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, hsl(43 96% 56% / 0.10) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />
          <div
            className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, hsl(43 96% 56% / 0.07) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />

          {/* ── Inner content ── */}
          <div className="relative px-8 py-14 sm:px-14 lg:px-20 lg:py-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">

            {/* LEFT — text */}
            <div className="flex flex-col">

              {/* eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-gold" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">
                  The Provic Difference
                </span>
              </div>

              {/* headline — solid */}
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: '100%' }}
                  whileInView={{ y: '0%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="font-bebas text-[11vw] sm:text-6xl lg:text-7xl leading-[0.88] tracking-tight text-black dark:text-white"
                >
                  READY TO
                </motion.h2>
              </div>

              {/* headline — outlined gold */}
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: '100%' }}
                  whileInView={{ y: '0%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                  className="font-bebas text-[11vw] sm:text-6xl lg:text-7xl leading-[0.88] tracking-tight text-transparent"
                  style={{ WebkitTextStroke: '2px hsl(43 96% 56%)' }}
                >
                  GET STARTED?
                </motion.h2>
              </div>

              {/* sub-copy */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 max-w-md text-sm sm:text-base text-black/50 dark:text-white/50 leading-relaxed"
              >
                Join thousands of satisfied customers who trust us for their tech needs.
                Browse our products or chat with our team today.
              </motion.p>
            </div>

            {/* RIGHT — CTAs */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0"
            >
              {/* Primary — gold fill */}
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group w-full sm:w-auto lg:w-52 flex items-center justify-center gap-2.5
                    h-12 px-7 rounded-xl
                    bg-gold text-black text-sm font-bold tracking-wide
                    hover:bg-gold/90 transition-all duration-300
                    shadow-lg shadow-gold/20"
                >
                  Browse Products
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </Link>

              {/* Secondary — ghost */}
              <Link
                href="https://wa.me/2349035986632"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group w-full sm:w-auto lg:w-52 flex items-center justify-center gap-2.5
                    h-12 px-7 rounded-xl
                    border border-black/15 dark:border-white/15
                    text-black/60 dark:text-white/60
                    hover:border-gold/40 hover:text-black dark:hover:text-white
                    text-sm font-semibold tracking-wide
                    transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 transition-colors duration-300 group-hover:text-gold" />
                  Chat With Us
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}