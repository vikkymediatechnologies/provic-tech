'use client'

import Link from 'next/link'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { MessageCircle, Phone, ArrowUpRight } from 'lucide-react'

function MagneticBtn({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 20 })
  const sy = useSpring(y, { stiffness: 200, damping: 20 })
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * 0.3)
    y.set((e.clientY - r.top - r.height / 2) * 0.3)
  }
  const onLeave = () => { x.set(0); y.set(0) }
  return (
    <motion.div style={{ x: sx, y: sy }} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </motion.div>
  )
}

export function ServicesCTA() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-36 bg-white dark:bg-[#080808]">

      {/* ── Grid lines ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-black/[0.05] dark:bg-white/[0.05]" />
        {[25, 50, 75].map((pct) => (
          <div key={pct}
            className="absolute top-0 bottom-0 w-px bg-black/[0.03] dark:bg-white/[0.03]"
            style={{ left: `${pct}%` }} />
        ))}
      </div>

      {/* ── Gold orb ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[70vw] max-w-3xl aspect-square rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(43 96% 56% / 0.07) 0%, transparent 65%)',
            filter: 'blur(90px)',
          }} />
      </div>

      {/* ── Diagonal accent line ── */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.035] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="100%" x2="100%" y2="0" stroke="hsl(43 96% 56%)" strokeWidth="1" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">

        {/* ── Split layout: left text · right contact ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT — headline */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-6 h-px bg-gold" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">
                Let's Talk
              </span>
            </motion.div>

            {/* Giant headline */}
            {['HAVE A', 'CUSTOM', 'REQUEST?'].map((word, i) => (
              <div key={word} className="overflow-hidden">
                <motion.h2
                  initial={{ y: '110%' }}
                  whileInView={{ y: '0%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, delay: 0.08 + i * 0.11, ease: [0.16, 1, 0.3, 1] }}
                  className={`block font-bebas leading-[0.88] tracking-tight
                    text-[16vw] sm:text-[12vw] lg:text-[8vw] xl:text-[7.5vw]
                    ${i === 2
                      ? 'text-transparent'
                      : 'text-black dark:text-white'
                    }`}
                  style={i === 2 ? {
                    WebkitTextStroke: '2px hsl(43 96% 56%)',
                    textShadow: '0 0 60px hsl(43 96% 56% / 0.25)',
                  } : {}}
                >
                  {word}
                </motion.h2>
              </div>
            ))}

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 text-sm sm:text-base text-black/50 dark:text-white/40
                leading-relaxed max-w-[36ch]"
            >
              Can't find what you're looking for? We'll build a tailored solution
              for your specific tech needs — just reach out.
            </motion.p>
          </div>

          {/* RIGHT — contact cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >

            {/* WhatsApp card */}
            <MagneticBtn>
              <Link
                href="https://wa.me/2349035986632"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="group relative overflow-hidden rounded-2xl
                  border border-black/8 dark:border-white/8
                  bg-white dark:bg-[#111]
                  hover:border-green-400/40
                  p-6 sm:p-8 cursor-pointer
                  transition-all duration-400
                  hover:shadow-[0_8px_48px_-8px] hover:shadow-green-500/20">

                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{ background: 'radial-gradient(circle at 80% 20%, hsl(142 76% 56% / 0.06) 0%, transparent 65%)' }} />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl
                        bg-green-500/10 group-hover:bg-green-500/20
                        flex items-center justify-center
                        transition-colors duration-300 flex-shrink-0">
                        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-green-500" />
                      </div>
                      <div>
                        <p className="text-xs tracking-[0.2em] uppercase text-black/30 dark:text-white/30 font-medium mb-0.5">
                          WhatsApp
                        </p>
                        <p className="text-base sm:text-lg font-bold text-black dark:text-white">
                          +234 903 598 6632
                        </p>
                        <p className="text-xs text-black/40 dark:text-white/35 mt-0.5">
                          Typically replies in minutes
                        </p>
                      </div>
                    </div>
                    <div className="w-9 h-9 rounded-full
                      border border-black/8 dark:border-white/10
                      group-hover:border-green-400/40 group-hover:bg-green-400/5
                      flex items-center justify-center
                      transition-all duration-300 flex-shrink-0">
                      <ArrowUpRight className="w-4 h-4 text-black/30 dark:text-white/30
                        group-hover:text-green-500 transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </MagneticBtn>

            {/* Phone card */}
            <MagneticBtn>
              <Link href="tel:09035986632">
                <div className="group relative overflow-hidden rounded-2xl
                  border border-black/8 dark:border-white/8
                  bg-white dark:bg-[#111]
                  hover:border-gold/30
                  p-6 sm:p-8 cursor-pointer
                  transition-all duration-400
                  hover:shadow-[0_8px_48px_-8px] hover:shadow-gold/15">

                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{ background: 'radial-gradient(circle at 80% 20%, hsl(43 96% 56% / 0.06) 0%, transparent 65%)' }} />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl
                        bg-gold/10 group-hover:bg-gold/20
                        flex items-center justify-center
                        transition-colors duration-300 flex-shrink-0">
                        <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-gold" />
                      </div>
                      <div>
                        <p className="text-xs tracking-[0.2em] uppercase text-black/30 dark:text-white/30 font-medium mb-0.5">
                          Phone Call
                        </p>
                        <p className="text-base sm:text-lg font-bold text-black dark:text-white">
                          090 3598 6632
                        </p>
                        <p className="text-xs text-black/40 dark:text-white/35 mt-0.5">
                          Mon – Sat · 8am – 8pm WAT
                        </p>
                      </div>
                    </div>
                    <div className="w-9 h-9 rounded-full
                      border border-black/8 dark:border-white/10
                      group-hover:border-gold/30 group-hover:bg-gold/5
                      flex items-center justify-center
                      transition-all duration-300 flex-shrink-0">
                      <ArrowUpRight className="w-4 h-4 text-black/30 dark:text-white/30
                        group-hover:text-gold transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </MagneticBtn>

            {/* Bottom trust note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55 }}
              className="flex items-center gap-3 px-2 pt-2"
            >
              <div className="w-4 h-px bg-gold/40" />
              <p className="text-[10px] tracking-[0.22em] uppercase text-black/25 dark:text-white/25 font-medium">
                Free consultation · No obligation
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Bottom editorial bar ── */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0, originX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 lg:mt-28 pt-6 border-t border-black/[0.06] dark:border-white/[0.06]
            flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <p className="text-[10px] tracking-[0.28em] uppercase text-black/20 dark:text-white/20 font-medium">
            Provic Technologies · Lagos, Nigeria
          </p>
          <p className="text-[10px] tracking-[0.28em] uppercase text-black/20 dark:text-white/20 font-medium">
            Est. 2024 · Trusted Tech Partner
          </p>
        </motion.div>
      </div>
    </section>
  )
}