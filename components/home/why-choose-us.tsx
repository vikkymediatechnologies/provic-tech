'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
  ShieldCheck,
  Truck,
  Lock,
  BadgeDollarSign,
  GraduationCap,
  HeadphonesIcon,
  ArrowUpRight,
} from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Trusted Vendors',
    description: 'We source only from verified and authorized distributors worldwide.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Swift nationwide delivery with real-time tracking and updates.',
  },
  {
    icon: Lock,
    title: 'Secure Transactions',
    description: 'Your payments are protected with industry-standard security.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Affordable Pricing',
    description: 'Competitive prices and flexible payment options for everyone.',
  },
  {
    icon: GraduationCap,
    title: 'Student-Friendly',
    description: 'Special discounts and installment plans for students.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Tech Expert Support',
    description: 'Get personalized advice from our tech-savvy support team.',
  },
]

// ─── Tilt Card (identical logic to FeaturedCategories) ────────────────────────
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
  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
    >
      {children}
    </motion.div>
  )
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white dark:bg-[#080808]">

      {/* ── Hairline borders (top / bottom) ── */}
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
                The Provic Advantage
              </span>
            </div>

            {/* display headline — solid */}
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-bebas text-[13vw] sm:text-7xl lg:text-8xl leading-[0.88] tracking-tight text-black dark:text-white"
              >
                WHY
              </motion.h2>
            </div>

            {/* display headline — outlined gold */}
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="font-bebas text-[13vw] sm:text-7xl lg:text-8xl leading-[0.88] tracking-tight text-transparent"
                style={{ WebkitTextStroke: '2px hsl(43 96% 56%)' }}
              >
                CHOOSE US
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
            We go beyond just selling gadgets.
            <br />
            Experience premium service that makes tech shopping a joy.
          </motion.p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                <TiltCard>
                  <div
                    className="group relative flex flex-col p-6 sm:p-8 rounded-2xl h-full overflow-hidden
                      bg-black/[0.02] dark:bg-white/[0.03]
                      border border-black/8 dark:border-white/8
                      hover:border-gold/35 hover:bg-gold/[0.03]
                      transition-all duration-300 cursor-default"
                  >
                    {/* radial hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                      style={{
                        background:
                          'radial-gradient(circle at 30% 30%, hsl(43 96% 56% / 0.08) 0%, transparent 70%)',
                      }}
                    />

                    {/* large number watermark */}
                    <span className="absolute bottom-4 right-5 font-bebas text-[5rem] leading-none text-black/[0.04] dark:text-white/[0.04] select-none pointer-events-none transition-all duration-300 group-hover:text-gold/[0.07]">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <div className="relative flex flex-col gap-4 flex-1">
                      {/* icon tile */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.25 }}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl
                          bg-black/5 dark:bg-white/8 group-hover:bg-gold/10
                          flex items-center justify-center transition-colors duration-300 shrink-0"
                      >
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-black/50 dark:text-white/50 group-hover:text-gold transition-colors duration-300" />
                      </motion.div>

                      {/* text */}
                      <div>
                        <h3 className="text-sm sm:text-base font-bold tracking-wide
                          text-black/70 dark:text-white/70 group-hover:text-black dark:group-hover:text-white
                          transition-colors duration-200 leading-tight mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-black/45 dark:text-white/45 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* arrow — appears on hover */}
                    <div className="relative mt-5 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}