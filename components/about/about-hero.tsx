'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#080808] pt-12 pb-20 lg:pt-16 lg:pb-28">

      {/* ── Architectural grid lines ── */}
      <div className="absolute inset-0 pointer-events-none">
        {[20, 40, 60, 80].map((pct, i) => (
          <motion.div
            key={pct}
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.6, delay: 0.06 * i, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 bottom-0 w-px bg-black/[0.04] dark:bg-white/[0.04]"
            style={{ left: `${pct}%` }}
          />
        ))}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 left-0 right-0 h-px bg-black/[0.05] dark:bg-white/[0.05]"
        />
      </div>

      {/* ── Gold orb ── */}
      <div
        className="absolute top-[-15%] right-[-5%] w-[55vw] max-w-2xl aspect-square rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 60% 40%, hsl(43 96% 56% / 0.12) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      {/* ── Blue accent orb ── */}
      <div
        className="absolute bottom-0 left-[-5%] w-[35vw] max-w-lg aspect-square rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(217 91% 60% / 0.06) 0%, transparent 65%)',
          filter: 'blur(90px)',
        }}
      />

      {/* ── Diagonal accent line ── */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="100%" x2="100%" y2="0" stroke="hsl(43 96% 56%)" strokeWidth="1" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-14 pt-8">

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — copy */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-6 h-px bg-gold" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">
                Our Story
              </span>
            </motion.div>

            {/* Headline */}
            {[
              { text: 'ABOUT',   outlined: false },
              { text: 'PROVIC',  outlined: false },
              { text: 'TECH.',   outlined: true  },
            ].map(({ text, outlined }, i) => (
              <div key={text} className="overflow-hidden">
                <motion.h1
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    duration: 0.9,
                    delay: 0.4 + i * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`block font-bebas leading-[0.88] tracking-tight
                    text-[16vw] sm:text-[13vw] lg:text-[9vw] xl:text-[8.5vw]
                    ${outlined ? 'text-transparent' : 'text-black dark:text-white'}`}
                  style={outlined ? {
                    WebkitTextStroke: '2px hsl(43 96% 56%)',
                    textShadow: '0 0 70px hsl(43 96% 56% / 0.22)',
                  } : {}}
                >
                  {text}
                </motion.h1>
              </div>
            ))}

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.78 }}
              className="mt-8 text-base sm:text-lg text-black/50 dark:text-white/40
                leading-relaxed max-w-[44ch]"
            >
              We're on a mission to make premium tech accessible to every student,
              developer, and creator in Nigeria — quality gadgets, honest service,
              unbeatable trust.
            </motion.p>

            {/* Stat pills */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.95 }}
              className="mt-8 flex flex-wrap gap-2 sm:gap-3"
            >
              {[
                'Est. 2024',
                'Lagos, Nigeria',
                '50+ Customers',
                '100% Authentic',
              ].map((pill) => (
                <div
                  key={pill}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full
                    border border-black/8 dark:border-white/8
                    bg-black/[0.02] dark:bg-white/[0.03]
                    text-[11px] sm:text-xs text-black/40 dark:text-white/35 tracking-wide
                    hover:border-gold/25 hover:text-black/60 dark:hover:text-white/60
                    transition-all duration-300 cursor-default"
                >
                  <span className="w-1 h-1 rounded-full bg-gold/60 flex-shrink-0" />
                  {pill}
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — logo card */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Card */}
            <div className="relative w-full rounded-2xl overflow-hidden
              border border-black/8 dark:border-white/8
              bg-black/[0.02] dark:bg-white/[0.03]
              p-10 sm:p-14 lg:p-16
              flex items-center justify-center">

              {/* Inner gold glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, hsl(43 96% 56% / 0.07) 0%, transparent 65%)',
                }}
              />

              {/* Corner marks — top-left */}
              <div className="absolute top-4 left-4 flex flex-col gap-1 opacity-30">
                <div className="w-5 h-px bg-gold" />
                <div className="w-px h-5 bg-gold" />
              </div>
              {/* Corner marks — bottom-right */}
              <div className="absolute bottom-4 right-4 flex flex-col items-end gap-1 opacity-30">
                <div className="w-px h-5 bg-gold self-end" />
                <div className="w-5 h-px bg-gold" />
              </div>

              {/* Logo */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <Image
                  src="/provic.png"
                  alt="Provic Technologies"
                  width={1200}
                  height={400}
                  priority
                  className="w-[200px] sm:w-[280px] lg:w-[320px] xl:w-[360px] h-auto object-contain
                    drop-shadow-[0_0_32px_hsl(43_96%_56%_/_0.2)]"
                />
              </motion.div>

              {/* Bottom caption */}
              <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-px bg-gold/35" />
                  <span className="text-[9px] tracking-[0.3em] uppercase text-black/20 dark:text-white/20 font-medium">
                    Provic Technologies
                  </span>
                  <div className="w-4 h-px bg-gold/35" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Editorial index ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 right-5 sm:right-10 lg:right-14
            text-[9px] tracking-[0.3em] uppercase
            text-black/15 dark:text-white/15 font-medium pointer-events-none"
        >
          03 / About
        </motion.div>
      </div>
    </section>
  )
}