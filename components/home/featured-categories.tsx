'use client'

import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { 
  Laptop, Headphones, Keyboard, Battery, Watch, Cable, ArrowUpRight,
} from 'lucide-react'
import { categories } from '@/lib/data'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Laptop, Headphones, Keyboard, Battery, Watch, Cable,
}

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
    <motion.div onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}>
      {children}
    </motion.div>
  )
}

export function FeaturedCategories() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white dark:bg-[#080808]">
      <div className="absolute top-0 left-0 right-0 h-px bg-black/[0.05] dark:bg-white/[0.05]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-black/[0.05] dark:bg-white/[0.05]" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-y-0 left-[50%] w-px bg-black/[0.03] dark:bg-white/[0.03] hidden lg:block" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] aspect-square rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(43 96% 56% / 0.05) 0%, transparent 65%)', filter: 'blur(80px)' }} />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 lg:mb-20">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-gold" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">Browse Categories</span>
            </div>
            <div className="overflow-hidden">
              <motion.h2 initial={{ y: '100%' }} whileInView={{ y: '0%' }} viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-bebas text-[13vw] sm:text-7xl lg:text-8xl leading-[0.88] tracking-tight text-black dark:text-white">
                SHOP BY
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2 initial={{ y: '100%' }} whileInView={{ y: '0%' }} viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="font-bebas text-[13vw] sm:text-7xl lg:text-8xl leading-[0.88] tracking-tight text-transparent"
                style={{ WebkitTextStroke: '2px hsl(43 96% 56%)' }}>
                CATEGORY
              </motion.h2>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="shrink-0">
            <Link href="/products">
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2.5
                  border border-black/15 dark:border-white/15
                  text-black/60 dark:text-white/60
                  hover:border-gold/40 hover:text-black dark:hover:text-white
                  text-sm font-semibold tracking-wide px-6 h-11 rounded-full transition-all duration-300">
                All Products
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {categories.map((category, i) => {
            const Icon = iconMap[category.icon] || Laptop
            return (
              <motion.div key={category.id} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.65, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}>
                <TiltCard>
                  <Link href={`/products?category=${category.id}`}>
                    <div className="group relative flex flex-col items-center p-5 sm:p-6 rounded-2xl h-full
                      bg-black/[0.02] dark:bg-white/[0.03]
                      border border-black/8 dark:border-white/8
                      hover:border-gold/35 hover:bg-gold/[0.03]
                      transition-all duration-300 cursor-pointer overflow-hidden">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                        style={{ background: 'radial-gradient(circle at 50% 30%, hsl(43 96% 56% / 0.08) 0%, transparent 70%)' }} />
                      <div className="relative mb-5">
                        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.25 }}
                          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl
                            bg-black/5 dark:bg-white/8 group-hover:bg-gold/10
                            flex items-center justify-center transition-colors duration-300">
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7
                            text-black/50 dark:text-white/50 group-hover:text-gold transition-colors duration-300" />
                        </motion.div>
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold tracking-wide
                        text-black/70 dark:text-white/70 group-hover:text-black dark:group-hover:text-white
                        text-center transition-colors duration-200 leading-tight">
                        {category.name}
                      </h3>
                      <div className="mt-3 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                        <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}