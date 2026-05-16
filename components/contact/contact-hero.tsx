'use client'

import { motion } from 'framer-motion'

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#080808] py-24 lg:py-32">

      {/* ── Hairline borders ── */}
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
        <div className="flex flex-col items-start">

          {/* eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="w-6 h-px bg-gold" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">
              Get In Touch
            </span>
          </motion.div>

          {/* headline — solid */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-bebas text-[16vw] sm:text-8xl lg:text-9xl leading-[0.88] tracking-tight text-black dark:text-white"
            >
              LET&apos;S
            </motion.h1>
          </div>

          {/* headline — outlined gold */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="font-bebas text-[16vw] sm:text-8xl lg:text-9xl leading-[0.88] tracking-tight text-transparent"
              style={{ WebkitTextStroke: '2px hsl(43 96% 56%)' }}
            >
              TALK
            </motion.h1>
          </div>

          {/* sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-lg text-sm sm:text-base text-black/50 dark:text-white/50 leading-relaxed"
          >
            Have questions about a product? Need support? Want to place a bulk order?
            We&apos;re here to help — reach out through any channel and we&apos;ll get back to you fast.
          </motion.p>
        </div>
      </div>
    </section>
  )
}