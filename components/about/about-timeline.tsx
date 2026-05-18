'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Rocket, Users, Award, Globe } from 'lucide-react'
import { useRef } from 'react'

const milestones = [
  {
    year: '2024',
    label: 'The Beginning',
    description: 'Started as a small operation helping fellow students source quality laptops and accessories at fair, honest prices.',
    icon: Rocket,
    status: 'done',
  },
  {
    year: '2025',
    label: 'Growing Community',
    description: 'Reached our first 1,000 customers. Expanded to earbuds, keyboards, and power banks across Lagos and beyond.',
    icon: Users,
    status: 'done',
  },
  {
    year: '2026',
    label: 'Building Trust',
    description: 'Established partnerships with authorized distributors. Launched full-service tech consultation and workspace solutions.',
    icon: Award,
    status: 'upcoming',
  },
  {
    year: '2027',
    label: 'Going Nationwide',
    description: 'Expanded delivery to all 36 states. Surpassed 5,000 happy customers. Launched premium workspace and enterprise solutions.',
    icon: Globe,
    status: 'upcoming',
  },
]

export function AboutTimeline() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const lineHeight = useTransform(scrollYProgress, [0.05, 0.85], ['0%', '100%'])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-black/[0.02] dark:bg-white/[0.02] overflow-hidden"
    >
      {/* Rules */}
      <div className="absolute top-0 left-0 right-0 h-px bg-black/[0.05] dark:bg-white/[0.05]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-black/[0.05] dark:bg-white/[0.05]" />

      {/* Gold orb */}
      <div
        className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[45vw] max-w-xl aspect-square rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(43 96% 56% / 0.06) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">

        {/* ── Section header ── */}
        <div className="mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-6 h-px bg-gold" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">
              Our Journey
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '100%' }}
              whileInView={{ y: '0%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-bebas text-[13vw] sm:text-7xl lg:text-8xl
                leading-[0.88] tracking-tight text-black dark:text-white"
            >
              MILESTONES
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '100%' }}
              whileInView={{ y: '0%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
              className="font-bebas text-[13vw] sm:text-7xl lg:text-8xl
                leading-[0.88] tracking-tight text-transparent"
              style={{ WebkitTextStroke: '2px hsl(43 96% 56%)' }}
            >
              THAT DEFINE US
            </motion.h2>
          </div>
        </div>

        {/* ── Timeline ── */}
        <div className="relative">

          {/* Scroll-driven centre line — desktop */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px
            bg-black/[0.06] dark:bg-white/[0.06] hidden lg:block" />

          {/* Gold fill line driven by scroll */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px
            overflow-hidden hidden lg:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-gold/60 to-gold/20 origin-top"
            />
          </div>

          {/* Mobile line */}
          <div className="absolute left-5 top-0 bottom-0 w-px
            bg-black/[0.06] dark:bg-white/[0.06] lg:hidden" />

          <div className="space-y-0">
            {milestones.map((milestone, i) => {
              const isEven = i % 2 === 0
              const isDone = milestone.status === 'done'
              const Icon = milestone.icon

              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative grid grid-cols-1 lg:grid-cols-2 pb-16 lg:pb-20 last:pb-0"
                >

                  {/* ── Card ── */}
                  <div className={`
                    pl-14 lg:pl-0
                    ${isEven
                      ? 'lg:pr-16 xl:pr-20'
                      : 'lg:col-start-2 lg:pl-16 xl:pl-20'
                    }
                  `}>
                    <div className={`group relative overflow-hidden rounded-2xl
                      border transition-all duration-500 p-6 sm:p-8
                      ${isDone
                        ? 'border-black/8 dark:border-white/8 bg-white dark:bg-[#111] hover:border-gold/30'
                        : 'border-black/5 dark:border-white/5 bg-black/[0.015] dark:bg-white/[0.02] hover:border-gold/20'
                      }
                      hover:shadow-[0_8px_40px_-8px] hover:shadow-black/10 dark:hover:shadow-black/40`}
                    >
                      {/* Hover glow */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100
                          transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at ${isEven ? '80% 20%' : '20% 20%'}, hsl(43 96% 56% / 0.07) 0%, transparent 60%)`,
                        }}
                      />

                      {/* Ghost year behind content */}
                      <span
                        className="absolute bottom-2 right-4 font-bebas text-6xl sm:text-7xl
                          leading-none text-transparent select-none pointer-events-none"
                        style={{ WebkitTextStroke: `1.5px hsl(43 96% 56% / ${isDone ? '0.15' : '0.08'})` }}
                      >
                        {milestone.year}
                      </span>

                      <div className="relative z-10">
                        {/* Icon + year row */}
                        <div className="flex items-center gap-3 mb-5">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0
                            transition-colors duration-300
                            ${isDone
                              ? 'bg-gold/15 group-hover:bg-gold/25'
                              : 'bg-black/5 dark:bg-white/5 group-hover:bg-gold/10'
                            }`}
                          >
                            <Icon className={`w-5 h-5 transition-colors duration-300
                              ${isDone ? 'text-gold' : 'text-black/30 dark:text-white/30 group-hover:text-gold/70'}`}
                            />
                          </div>

                          <div className="flex items-center gap-2">
                            <span className={`font-bebas text-3xl leading-none tracking-tight
                              ${isDone ? 'text-gold' : 'text-black/25 dark:text-white/25'}`}>
                              {milestone.year}
                            </span>
                            {isDone ? (
                              <span className="text-[9px] tracking-[0.2em] uppercase
                                text-gold/70 font-bold px-2 py-0.5 rounded-full
                                border border-gold/25 bg-gold/8">
                                Done
                              </span>
                            ) : (
                              <span className="text-[9px] tracking-[0.2em] uppercase
                                text-black/25 dark:text-white/25 font-medium px-2 py-0.5 rounded-full
                                border border-black/8 dark:border-white/8">
                                Upcoming
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className={`font-bebas text-2xl sm:text-3xl leading-none tracking-tight mb-3
                          ${isDone ? 'text-black dark:text-white' : 'text-black/40 dark:text-white/35'}`}>
                          {milestone.label.toUpperCase()}
                        </h3>

                        {/* Description */}
                        <p className={`text-sm leading-relaxed
                          ${isDone ? 'text-black/50 dark:text-white/40' : 'text-black/30 dark:text-white/25'}`}>
                          {milestone.description}
                        </p>

                        {/* Animated bottom rule */}
                        <div className="mt-5 w-0 group-hover:w-full h-px bg-gold/20
                          transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                      </div>
                    </div>
                  </div>

                  {/* ── Centre node ── */}
                  {/* Desktop */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-7 hidden lg:flex
                    items-center justify-center z-10">
                    <div className={`w-5 h-5 rounded-full border-2 transition-all duration-300
                      ${isDone
                        ? 'bg-gold border-gold shadow-[0_0_16px_2px] shadow-gold/30'
                        : 'bg-white dark:bg-[#080808] border-black/15 dark:border-white/15'
                      }`}
                    />
                  </div>

                  {/* Mobile node */}
                  <div className="absolute left-5 -translate-x-1/2 top-7 flex lg:hidden
                    items-center justify-center z-10">
                    <div className={`w-4 h-4 rounded-full border-2
                      ${isDone
                        ? 'bg-gold border-gold shadow-[0_0_12px_2px] shadow-gold/30'
                        : 'bg-white dark:bg-[#080808] border-black/15 dark:border-white/15'
                      }`}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}