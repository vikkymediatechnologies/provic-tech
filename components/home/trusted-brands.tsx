'use client'

import { motion } from 'framer-motion'
import { trustedBrands } from '@/lib/data'

export function TrustedBrands() {
  return (
    <section className="relative py-14 overflow-hidden bg-white dark:bg-[#080808]">

      {/* ── Hairlines ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-black/[0.05] dark:bg-white/[0.05]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-black/[0.05] dark:bg-white/[0.05]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">

        {/* eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div className="w-6 h-px bg-gold" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">
            Trusted Brands We Work With
          </span>
          <div className="w-6 h-px bg-gold" />
        </motion.div>
      </div>

      {/* ── Marquee ── */}
      <div className="relative overflow-hidden">

        {/* edge fade — matches section bg */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, hsl(0 0% 100%) , transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, hsl(0 0% 100%), transparent)' }} />
        {/* dark-mode fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none hidden dark:block"
          style={{ background: 'linear-gradient(to right, #080808, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none hidden dark:block"
          style={{ background: 'linear-gradient(to left, #080808, transparent)' }} />

        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            x: { repeat: Infinity, repeatType: 'loop', duration: 22, ease: 'linear' },
          }}
          className="flex items-center gap-14 w-fit"
        >
          {[...trustedBrands, ...trustedBrands, ...trustedBrands].map((brand, i) => (
            <div key={`${brand}-${i}`} className="group flex items-center gap-14 shrink-0">
              <span className="font-bebas text-2xl sm:text-3xl tracking-widest
                text-black/20 dark:text-white/20
                group-hover:text-gold
                transition-colors duration-300 whitespace-nowrap select-none">
                {brand}
              </span>
              {/* dot separator */}
              <span className="w-1 h-1 rounded-full bg-gold/30 shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}