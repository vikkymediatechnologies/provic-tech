'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from 'framer-motion'
import { ArrowUpRight, MessageCircle, Shield, Truck, Star } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'

/* ─────────────────────────────────────────
   Magnetic button
───────────────────────────────────────── */
function MagneticBtn({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 22 })
  const sy = useSpring(y, { stiffness: 220, damping: 22 })

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * 0.3)
    y.set((e.clientY - r.top - r.height / 2) * 0.3)
  }
  const onLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.div ref={ref} style={{ x: sx, y: sy }}
      onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </motion.div>
  )
}

/* ─────────────────────────────────────────
   Animated counter
───────────────────────────────────────── */
function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    let v = 0
    const step = Math.ceil(to / 45)
    const t = setInterval(() => {
      v += step
      if (v >= to) { setN(to); clearInterval(t) }
      else setN(v)
    }, 28)
    return () => clearInterval(t)
  }, [to])
  return <>{n}{suffix}</>
}

/* ─────────────────────────────────────────
   Floating product cards (right panel)
   ↓ Replace src paths with YOUR real images
───────────────────────────────────────── */
const PRODUCTS = [
  {
    src: '/products/laptop.jpg',       // ← your laptop image
    label: 'Laptops',
    sub: 'Pro-grade performance',
    accent: 'from-blue-500/20 to-transparent',
    rotate: '-rotate-3',
    delay: 0.9,
    pos: 'top-[4%] left-[2%] w-[62%]',
  },
  {
    src: '/products/keyboard.jpg',     // ← your gaming keyboard image
    label: 'Keyboards',
    sub: 'Tactile precision',
    accent: 'from-gold/20 to-transparent',
    rotate: 'rotate-2',
    delay: 1.05,
    pos: 'top-[38%] right-[0%] w-[52%]',
  },
  {
    src: '/products/earbuds.jpg',      // ← your earbuds image
    label: 'Earbuds',
    sub: 'Studio-quality sound',
    accent: 'from-purple-500/20 to-transparent',
    rotate: '-rotate-1',
    delay: 1.2,
    pos: 'bottom-[4%] left-[6%] w-[48%]',
  },
]

/* ─────────────────────────────────────────
   Hero
───────────────────────────────────────── */
export function HeroSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const yText  = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const yPanel = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])
  const fade   = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  return (
    <section
      ref={containerRef}
      className="
        relative overflow-hidden min-h-[100svh] flex flex-col
        bg-white dark:bg-[#080808]
        transition-colors duration-500
      "
    >

      {/* ── Architectural grid lines ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[20, 40, 60, 80].map((pct, i) => (
          <motion.div
            key={pct}
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.8, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 bottom-0 w-px bg-black/[0.04] dark:bg-white/[0.04]"
            style={{ left: `${pct}%` }}
          />
        ))}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[55%] lg:top-[50%] left-0 right-0 h-px
            bg-black/[0.05] dark:bg-white/[0.05]"
        />
      </div>

      {/* ── Ambient orbs (theme-aware) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gold orb */}
        <div
          className="absolute -top-[20%] right-[-5%] w-[55vw] max-w-2xl aspect-square rounded-full"
          style={{
            background: 'radial-gradient(circle at 55% 45%, hsl(43 96% 56% / 0.15) 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Blue orb */}
        <div
          className="absolute top-[40%] -left-[8%] w-[40vw] max-w-xl aspect-square rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(217 91% 60% / 0.08) 0%, transparent 65%)',
            filter: 'blur(90px)',
          }}
        />
      </div>

      {/* ── Top bar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="relative z-10 flex items-center justify-between
          px-5 sm:px-10 lg:px-14 pt-7 sm:pt-9"
      >
        <span className="text-[10px] sm:text-xs tracking-[0.28em] uppercase
          text-black/30 dark:text-white/30 font-semibold">
          Provic Technologies
        </span>
        <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase
          text-black/20 dark:text-white/20">
          Ibadan, NG · Est. 2026
        </span>
      </motion.div>

      {/* ── Two-column layout ── */}
      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-2
        px-5 sm:px-10 lg:px-14 pt-8 pb-14 sm:pt-10 sm:pb-16 lg:pt-0 gap-10 lg:gap-0">

        {/* ════ LEFT — copy ════ */}
        <motion.div
          style={{ y: yText, opacity: fade }}
          className="flex flex-col justify-center lg:pr-10 xl:pr-16"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-7 sm:mb-9"
          >
            <div className="w-7 h-px bg-gold" />
            <span className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase
              text-gold font-bold">
              Premium Tech · 100% Authentic
            </span>
          </motion.div>

          {/* Headline — clip-reveal per word */}
          {['TRUSTED', 'TECH', 'GADGETS'].map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{
                  duration: 0.9,
                  delay: 0.52 + i * 0.11,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`
                  block font-bebas uppercase leading-[0.87] tracking-[-0.01em]
                  text-[22vw] sm:text-[18vw] lg:text-[9.5vw] xl:text-[9vw]
                  ${i === 2
                    ? 'text-transparent'
                    : 'text-black dark:text-white'
                  }
                `}
                style={i === 2 ? {
                  WebkitTextStroke: '2px hsl(43 96% 56%)',
                  textShadow: '0 0 60px hsl(43 96% 56% / 0.25)',
                } : {}}
              >
                {word}
              </motion.h1>
            </div>
          ))}

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.92 }}
            className="mt-6 sm:mt-7 text-sm sm:text-base text-black/50 dark:text-white/40
              leading-relaxed max-w-[32ch]"
          >
            Reliable gadgets for students, developers & creators —
            delivered with speed and trust.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 sm:mt-10 flex flex-col xs:flex-row gap-3"
          >
            <MagneticBtn>
              <Link href="/products">
                <button className="
                  group flex items-center gap-2.5
                  bg-gold hover:bg-yellow-400
                  text-[#080808] font-bold text-sm sm:text-base
                  px-7 h-12 sm:h-13 rounded-full tracking-wide
                  transition-all duration-300
                  hover:scale-[1.04] active:scale-[0.97]
                  shadow-[0_0_40px_-6px] shadow-gold/50
                  hover:shadow-[0_0_60px_-4px] hover:shadow-gold/70
                  w-full xs:w-auto justify-center
                ">
                  Shop Now
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300
                    group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </Link>
            </MagneticBtn>

            <MagneticBtn>
              <Link href="https://wa.me/2349035986632" target="_blank" rel="noopener noreferrer">
                <button className="
                  group flex items-center gap-2.5
                  border border-black/15 dark:border-white/15
                  text-black/70 dark:text-white/70
                  hover:border-green-400/50 hover:text-black dark:hover:text-white
                  hover:bg-green-400/5
                  text-sm sm:text-base font-semibold
                  px-7 h-12 sm:h-13 rounded-full tracking-wide
                  transition-all duration-300
                  hover:scale-[1.04] active:scale-[0.97]
                  w-full xs:w-auto justify-center
                ">
                  <MessageCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  WhatsApp
                </button>
              </Link>
            </MagneticBtn>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.25, duration: 0.7 }}
            className="mt-10 sm:mt-12 flex items-center gap-8 sm:gap-10"
          >
            {[
              { to: 50,  suffix: '+',  label: 'Customers' },
              { to: 100, suffix: '%',  label: 'Authentic' },
              { to: 7,   suffix: '/7', label: 'Support'   },
            ].map(({ to, suffix, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + i * 0.08 }}
                className="flex flex-col gap-0.5"
              >
                <span className="font-bebas text-2xl sm:text-3xl leading-none tracking-tight
                  text-black dark:text-white tabular-nums">
                  <Counter to={to} suffix={suffix} />
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.22em] uppercase
                  text-black/35 dark:text-white/30 font-medium">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.7 }}
            className="mt-6 sm:mt-8 flex flex-wrap gap-2"
          >
            {[
              { icon: Shield, text: '100% Authentic' },
              { icon: Truck,  text: 'Fast Delivery'  },
              { icon: Star,   text: '5-Star Rated'   },
            ].map(({ icon: Icon, text }) => (
              <div key={text}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
                  border border-black/8 dark:border-white/8
                  bg-black/[0.02] dark:bg-white/[0.03]
                  text-[10px] sm:text-xs text-black/40 dark:text-white/35
                  hover:border-gold/30 hover:text-black/60 dark:hover:text-white/60
                  transition-all duration-300 cursor-default tracking-wide"
              >
                <Icon className="w-3 h-3 text-gold/80 flex-shrink-0" />
                {text}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ════ RIGHT — product image collage ════ */}
        <motion.div
          style={{ y: yPanel }}
          className="relative hidden lg:flex items-center justify-center"
        >
          {/* Backdrop glow behind cards */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[70%] aspect-square rounded-full"
              style={{
                background: 'radial-gradient(circle, hsl(43 96% 56% / 0.08) 0%, transparent 65%)',
                filter: 'blur(50px)',
              }}
            />
          </div>

          {/* Product cards */}
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 30, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: p.delay,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ scale: 1.04, zIndex: 20, transition: { duration: 0.25 } }}
              className={`
                absolute ${p.pos} ${p.rotate}
                rounded-2xl overflow-hidden
                border border-black/8 dark:border-white/10
                shadow-2xl shadow-black/20 dark:shadow-black/50
                bg-white dark:bg-[#111]
                cursor-pointer
              `}
            >
              {/* Product image */}
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={p.src}
                  alt={p.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 30vw, 25vw"
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${p.accent}`} />
              </div>

              {/* Label chip */}
              <div className="px-3.5 py-2.5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-black dark:text-white tracking-wide">
                    {p.label}
                  </p>
                  <p className="text-[10px] text-black/40 dark:text-white/35 mt-0.5">
                    {p.sub}
                  </p>
                </div>
                <div className="w-6 h-6 rounded-full bg-gold/15 flex items-center justify-center">
                  <ArrowUpRight className="w-3 h-3 text-gold" />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Floating badge — "New Arrivals" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: -6 }}
            transition={{ delay: 1.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[28%] right-[2%] z-20
              bg-gold text-[#080808] font-black text-[10px] tracking-[0.2em] uppercase
              px-3 py-1.5 rounded-full shadow-lg shadow-gold/30"
          >
            New Arrivals ✦
          </motion.div>
        </motion.div>

        {/* Mobile: single product image strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="flex lg:hidden gap-3 overflow-x-auto pb-1 -mx-5 px-5 snap-x snap-mandatory scrollbar-none"
        >
          {PRODUCTS.map((p) => (
            <div key={p.label}
              className="flex-shrink-0 w-44 snap-start rounded-2xl overflow-hidden
                border border-black/8 dark:border-white/10
                bg-white dark:bg-[#111] shadow-lg"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image src={p.src} alt={p.label} fill className="object-cover"
                  sizes="176px" />
                <div className={`absolute inset-0 bg-gradient-to-t ${p.accent}`} />
              </div>
              <div className="px-3 py-2">
                <p className="text-xs font-bold text-black dark:text-white">{p.label}</p>
                <p className="text-[10px] text-black/40 dark:text-white/35">{p.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Editorial index */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-5 right-5 sm:bottom-7 sm:right-10 lg:right-14
          text-[9px] tracking-[0.3em] uppercase
          text-black/15 dark:text-white/15 pointer-events-none font-medium"
      >
        01 / Hero
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20
        bg-gradient-to-t from-white dark:from-[#080808] to-transparent pointer-events-none" />
    </section>
  )
}