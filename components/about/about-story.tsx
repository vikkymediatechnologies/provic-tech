'use client'

import { motion } from 'framer-motion'

export function AboutStory() {
  return (
    <section className="relative py-24 lg:py-32 bg-black/[0.02] dark:bg-white/[0.02]">

      {/* Rules */}
      <div className="absolute top-0 left-0 right-0 h-px bg-black/[0.05] dark:bg-white/[0.05]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-black/[0.05] dark:bg-white/[0.05]" />

      {/* Gold orb — bottom right */}
      <div className="absolute bottom-0 right-0 w-[40vw] max-w-lg aspect-square pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 80% 80%, hsl(43 96% 56% / 0.07) 0%, transparent 60%)',
          filter: 'blur(70px)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ══ LEFT — story copy ══ */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-px bg-gold" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">
                Our Story
              </span>
            </div>

            {/* Section headline */}
            <div className="overflow-hidden mb-2">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-bebas text-[11vw] sm:text-6xl lg:text-7xl
                  leading-[0.88] tracking-tight text-black dark:text-white"
              >
                FROM AN
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
                className="font-bebas text-[11vw] sm:text-6xl lg:text-7xl
                  leading-[0.88] tracking-tight text-transparent"
                style={{ WebkitTextStroke: '2px hsl(43 96% 56%)' }}
              >
                IDEA TO TRUST
              </motion.h2>
            </div>

            {/* Story paragraphs */}
            <div className="space-y-5">
              {[
                'Provic Technologies was born out of a frustration many Nigerians share: the difficulty of finding authentic, quality tech products at fair prices. Too often, buyers face counterfeit products, unreliable vendors, and poor after-sales support.',
                'We set out to change that. Starting as a small operation serving fellow students and developers, we quickly built a reputation for honesty, quality, and exceptional service. Word spread, and what began as a side project became a mission.',
              ].map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="text-sm sm:text-base text-black/50 dark:text-white/40 leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}

              {/* Highlighted closing line */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-sm sm:text-base leading-relaxed
                  text-black/50 dark:text-white/40"
              >
                Today, Provic Technologies serves customers across Nigeria — from
                first-year students buying their first laptop to creators upgrading
                their entire workspace. Our commitment:{' '}
                <span className="font-semibold text-black dark:text-white">
                  every product authentic, every transaction secure, every customer valued.
                </span>
              </motion.p>
            </div>

            {/* Milestone pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 grid grid-cols-3 gap-4"
            >
              {[
                { value: '2024', label: 'Founded'    },
                { value: '50+',  label: 'Customers'  },
                { value: '24+',  label: 'Products'   },
              ].map(({ value, label }) => (
                <div key={label}
                  className="flex flex-col items-start gap-1 p-4 rounded-xl
                    border border-black/6 dark:border-white/6
                    bg-white dark:bg-[#111]">
                  <span className="font-bebas text-2xl sm:text-3xl leading-none
                    text-black dark:text-white tracking-tight">
                    {value}
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase
                    text-black/30 dark:text-white/30 font-medium">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ══ RIGHT — quote card ══ */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-28"
          >
            <div className="relative overflow-hidden rounded-2xl
              bg-[#0a0a0a] dark:bg-[#0d0d0d]
              border border-white/[0.06]
              p-8 sm:p-10 lg:p-12">

              {/* Inner gold glow */}
              <div className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 80% 20%, hsl(43 96% 56% / 0.1) 0%, transparent 55%)',
                }} />

              {/* Corner bracket — top left */}
              <div className="absolute top-5 left-5 opacity-40">
                <div className="w-5 h-px bg-gold mb-1" />
                <div className="w-px h-5 bg-gold" />
              </div>
              {/* Corner bracket — bottom right */}
              <div className="absolute bottom-5 right-5 flex flex-col items-end opacity-40">
                <div className="w-px h-5 bg-gold mb-1 self-end" />
                <div className="w-5 h-px bg-gold" />
              </div>

              {/* Giant quote mark */}
              <div className="font-bebas text-[120px] leading-none text-gold/10
                select-none pointer-events-none -mt-4 -mb-8">
                "
              </div>

              {/* Quote text */}
              <blockquote className="relative z-10 text-lg sm:text-xl lg:text-2xl
                text-white font-medium leading-relaxed mb-10">
                We don't just sell gadgets. We build trust, one customer at a time.
                Every product we deliver carries our reputation, and we take that seriously.
              </blockquote>

              {/* Author row */}
              <div className="relative z-10 flex items-center gap-4">
                {/* Avatar */}
                <div className="w-11 h-11 rounded-full
                  bg-gold/15 border border-gold/25
                  flex items-center justify-center flex-shrink-0">
                  <span className="font-bebas text-xl text-gold leading-none">P</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-white tracking-wide">Founder</p>
                  <p className="text-xs text-white/40 tracking-wide mt-0.5">Provic Technologies · Lagos</p>
                </div>

                {/* Inline gold rule */}
                <div className="ml-auto flex items-center gap-2">
                  <div className="w-8 h-px bg-gold/30" />
                  <span className="text-[9px] tracking-[0.25em] uppercase text-white/20 font-medium">
                    Est. 2024
                  </span>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="relative z-10 mt-8 pt-6 border-t border-white/[0.06]">
                <div className="flex flex-wrap gap-2">
                  {['Authentic', 'Trusted', 'Lagos-based'].map((tag) => (
                    <span key={tag}
                      className="text-[10px] tracking-[0.2em] uppercase
                        text-white/25 px-3 py-1 rounded-full
                        border border-white/[0.07]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}