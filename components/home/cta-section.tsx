'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

export function CTASection() {
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

        {/* ── Main card ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-black/8 dark:border-white/8 bg-black/[0.02] dark:bg-white/[0.03]"
        >
          {/* dot-grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, currentColor 1px, transparent 0)',
              backgroundSize: '28px 28px',
            }}
          />

          {/* corner gold glows */}
          <div
            className="absolute -top-20 -left-20 w-80 h-80 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, hsl(43 96% 56% / 0.12) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />
          <div
            className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, hsl(43 96% 56% / 0.08) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />

          {/* ── Inner content ── */}
          <div className="relative px-8 py-14 sm:px-14 lg:px-20 lg:py-20">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">

              {/* LEFT — headline block */}
              <div className="flex flex-col">

                {/* eyebrow */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-6 h-px bg-gold" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">
                    Ready to Upgrade?
                  </span>
                </div>

                {/* headline — solid */}
                <div className="overflow-hidden">
                  <motion.h2
                    initial={{ y: '100%' }}
                    whileInView={{ y: '0%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-bebas text-[11vw] sm:text-7xl lg:text-8xl leading-[0.88] tracking-tight text-black dark:text-white"
                  >
                    GET YOUR
                  </motion.h2>
                </div>

                {/* headline — outlined gold */}
                <div className="overflow-hidden">
                  <motion.h2
                    initial={{ y: '100%' }}
                    whileInView={{ y: '0%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                    className="font-bebas text-[11vw] sm:text-7xl lg:text-8xl leading-[0.88] tracking-tight text-transparent"
                    style={{ WebkitTextStroke: '2px hsl(43 96% 56%)' }}
                  >
                    DREAM TECH
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
                  Browse our collection of premium gadgets or chat with our team for
                  personalised recommendations. Fast delivery across Nigeria.
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
                    className="group flex items-center justify-center gap-2.5
                      w-full sm:w-auto lg:w-52
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
                <Link href="https://wa.me/2349035986632" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="group flex items-center justify-center gap-2.5
                      w-full sm:w-auto lg:w-52
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

            {/* ── Bottom stat strip ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-14 pt-8 border-t border-black/8 dark:border-white/8 grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {[
                { value: '5,000+', label: 'Happy Customers' },
                { value: '500+',   label: 'Products Listed'  },
                { value: '24 hrs', label: 'Lagos Delivery'   },
                { value: '4.9 ★',  label: 'Average Rating'   },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="font-bebas text-3xl sm:text-4xl leading-none tracking-tight text-gold">
                    {stat.value}
                  </span>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-black/40 dark:text-white/40">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}