'use client'

import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/lib/data'

// ─── Tilt Card ────────────────────────────────────────────────────────────────
function TiltCard({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 180, damping: 18 })
  const sy = useSpring(y, { stiffness: 180, damping: 18 })
  const rotateX = useTransform(sy, [-0.5, 0.5], ['6deg', '-6deg'])
  const rotateY = useTransform(sx, [-0.5, 0.5], ['-6deg', '6deg'])

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="h-full"
    >
      {children}
    </motion.div>
  )
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export function Testimonials() {
  // Only use the first 3 testimonials
  const three = testimonials.slice(0, 3)

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white dark:bg-[#080808]">

      {/* ── Hairline borders ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-black/[0.05] dark:bg-white/[0.05]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-black/[0.05] dark:bg-white/[0.05]" />

      {/* ── Center spine ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-y-0 left-[50%] w-px bg-black/[0.03] dark:bg-white/[0.03] hidden lg:block" />
      </div>

      {/* ── Ambient gold glow ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] aspect-square rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(43 96% 56% / 0.05) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-gold" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">
                Testimonials
              </span>
            </div>

            {/* headline — solid */}
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-bebas text-[13vw] sm:text-7xl lg:text-8xl leading-[0.88] tracking-tight text-black dark:text-white"
              >
                WHAT THEY
              </motion.h2>
            </div>

            {/* headline — outlined gold */}
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="font-bebas text-[13vw] sm:text-7xl lg:text-8xl leading-[0.88] tracking-tight text-transparent"
                style={{ WebkitTextStroke: '2px hsl(43 96% 56%)' }}
              >
                SAY
              </motion.h2>
            </div>
          </motion.div>

          {/* sub-copy */}
          <motion.p
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="shrink-0 max-w-xs text-sm text-black/50 dark:text-white/50 leading-relaxed sm:text-right"
          >
            Don&apos;t just take our word for it.
            <br />
            Hear from satisfied customers across Nigeria.
          </motion.p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          {three.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <TiltCard>
                <div
                  className="group relative flex flex-col p-6 sm:p-8 rounded-2xl h-full overflow-hidden
                    bg-black/[0.02] dark:bg-white/[0.03]
                    border border-black/8 dark:border-white/8
                    hover:border-gold/35 hover:bg-gold/[0.03]
                    transition-all duration-300"
                >
                  {/* radial hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{
                      background:
                        'radial-gradient(circle at 30% 20%, hsl(43 96% 56% / 0.08) 0%, transparent 70%)',
                    }}
                  />

                  {/* large quote watermark */}
                  <Quote
                    className="absolute bottom-5 right-5 w-16 h-16 text-black/[0.04] dark:text-white/[0.04]
                      group-hover:text-gold/[0.08] transition-colors duration-300 pointer-events-none select-none"
                  />

                  <div className="relative flex flex-col gap-5 flex-1">

                    {/* Stars */}
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star
                          key={s}
                          className={`w-3.5 h-3.5 transition-colors duration-300 ${
                            s < testimonial.rating
                              ? 'text-gold fill-gold'
                              : 'text-black/15 dark:text-white/15'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Quote text */}
                    <p className="text-sm sm:text-base text-black/60 dark:text-white/60 leading-relaxed flex-1
                      group-hover:text-black/75 dark:group-hover:text-white/75 transition-colors duration-300">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>

                    {/* Divider */}
                    <div className="w-full h-px bg-black/8 dark:bg-white/8 group-hover:bg-gold/20 transition-colors duration-300" />

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-black/8 dark:ring-white/8 group-hover:ring-gold/30 transition-all duration-300 shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="40px"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-bold tracking-wide text-black/80 dark:text-white/80
                          group-hover:text-black dark:group-hover:text-white transition-colors duration-200">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-black/40 dark:text-white/40 mt-0.5">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}