'use client'

import Link from 'next/link'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import {
  ShoppingBag, Search, MessageCircle, Monitor, GraduationCap,
  Check, ArrowUpRight,
} from 'lucide-react'
import { services } from '@/lib/data'

// ─────────────────────────────────────────
// Icon map
// ─────────────────────────────────────────
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShoppingBag, Search, MessageCircle, Monitor, GraduationCap,
}

// ─────────────────────────────────────────
// Magnetic button
// ─────────────────────────────────────────
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

// ══════════════════════════════════════════
// SERVICES LIST
// ══════════════════════════════════════════
export function ServicesList() {
  return (
    <section className="relative py-20 lg:py-28 bg-black/[0.02] dark:bg-white/[0.02]">
      {/* Top / bottom rules */}
      <div className="absolute top-0 left-0 right-0 h-px bg-black/[0.05] dark:bg-white/[0.05]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-black/[0.05] dark:bg-white/[0.05]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
        {/* Each service separated by a hairline */}
        <div className="divide-y divide-black/[0.06] dark:divide-white/[0.06]">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || ShoppingBag
            const isEven = index % 2 === 0
            const num = String(index + 1).padStart(2, '0')

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-16 lg:py-20"
              >

                {/* ══ CONTENT SIDE ══ */}
                <div className={isEven ? '' : 'lg:order-2'}>

                  {/* Outlined number + divider + icon */}
                  <div className="flex items-center gap-4 mb-8">
                    <span
                      className="font-bebas text-5xl sm:text-6xl leading-none text-transparent select-none"
                      style={{ WebkitTextStroke: '1.5px hsl(43 96% 56% / 0.4)' }}
                    >
                      {num}
                    </span>
                    <div className="w-px h-10 bg-black/10 dark:bg-white/10" />
                    <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center
                      group-hover:bg-gold/20 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bebas text-4xl sm:text-5xl leading-none tracking-tight mb-5
                    text-black dark:text-white">
                    {service.title.toUpperCase()}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-black/50 dark:text-white/45
                    leading-relaxed mb-7 max-w-[44ch]">
                    {service.description}
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, fi) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + fi * 0.07 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-gold" />
                        </div>
                        <span className="text-sm text-black/70 dark:text-white/65">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <MagneticBtn>
                    <Link
                      href={`https://wa.me/2349035986632?text=Hi, I'm interested in your service: ${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="group/btn flex items-center gap-2.5
                        bg-gold hover:bg-yellow-400 text-[#080808] font-bold text-sm tracking-wide
                        px-6 h-11 rounded-full transition-all duration-300
                        shadow-[0_0_28px_-6px] shadow-gold/40
                        hover:shadow-[0_0_44px_-4px] hover:shadow-gold/60
                        hover:scale-[1.04] active:scale-[0.97]">
                        Get Started
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300
                          group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </button>
                    </Link>
                  </MagneticBtn>
                </div>

                {/* ══ VISUAL CARD ══ */}
                <div className={isEven ? '' : 'lg:order-1'}>
                  <div className="relative overflow-hidden rounded-2xl
                    border border-black/8 dark:border-white/8
                    group-hover:border-gold/25 transition-all duration-500
                    bg-white dark:bg-[#111] p-8 lg:p-12
                    group-hover:shadow-[0_12px_60px_-12px]
                    group-hover:shadow-black/15 dark:group-hover:shadow-black/50">

                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100
                        transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at 70% 30%, hsl(43 96% 56% / 0.07) 0%, transparent 60%)',
                      }}
                    />

                    {/* Giant outlined number — decorative */}
                    <div className="relative select-none">
                      <span
                        className="font-bebas leading-none tracking-tight pointer-events-none
                          text-[28vw] sm:text-[18vw] lg:text-[12vw] xl:text-[10vw]
                          text-transparent block"
                        style={{ WebkitTextStroke: '2px hsl(43 96% 56% / 0.1)' }}
                      >
                        {num}
                      </span>

                      {/* Icon centred over number */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.2 + index * 0.08,
                            duration: 0.6,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl
                            bg-gold/8 group-hover:bg-gold/15 transition-colors duration-500
                            flex items-center justify-center"
                        >
                          <Icon className="w-10 h-10 sm:w-12 sm:h-12
                            text-gold/60 group-hover:text-gold transition-colors duration-300" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Caption */}
                    <div className="mt-4 flex items-center gap-2">
                      <div className="w-4 h-px bg-gold/40" />
                      <span className="text-[10px] tracking-[0.25em] uppercase
                        text-black/25 dark:text-white/25 font-medium">
                        {service.title}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}