'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Menu, X, MessageCircle, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/',         label: 'Home'     },
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/about',    label: 'About'    },
  { href: '/faq',      label: 'FAQ'      },
  { href: '/contact',  label: 'Contact'  },
]

export function Navbar() {
  const pathname          = usePathname()
  const { theme, setTheme } = useTheme()

  const [mounted,        setMounted]        = React.useState(false)
  const [isScrolled,     setIsScrolled]     = React.useState(false)
  const [mobileOpen,     setMobileOpen]     = React.useState(false)
  const [hoveredLink,    setHoveredLink]    = React.useState<string | null>(null)

  /* scroll progress for the top rule line */
  const { scrollYProgress } = useScroll()
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  React.useEffect(() => { setMounted(true) }, [])

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* ── Scroll progress rule ── */}
      <motion.div
        className="fixed top-0 left-0 z-[60] h-[2px] bg-gold origin-left"
        style={{ width: lineWidth }}
      />

      {/* ── Header ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-white/85 dark:bg-[#080808]/85 backdrop-blur-2xl border-b border-black/8 dark:border-white/8 shadow-[0_1px_40px_-10px] shadow-black/10 dark:shadow-black/40'
            : 'bg-transparent'
        )}
      >
        <nav className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
          <div className="flex h-20 lg:h-24 items-center justify-between gap-6">

            {/* ── Logo ── */}
            <Link href="/" className="shrink-0">
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Image
                  src="/provic.png"
                  alt="Provic Technologies"
                  width={1200}
                  height={400}
                  priority
                  className="h-16 lg:h-20 w-auto object-contain"
                />
              </motion.div>
            </Link>

            {/* ── Desktop links ── */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive  = pathname === link.href
                const isHovered = hoveredLink === link.href

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={cn(
                      'relative px-4 py-2 text-[13px] font-semibold tracking-wide transition-colors duration-200 rounded-lg',
                      isActive
                        ? 'text-gold'
                        : 'text-black/55 dark:text-white/55 hover:text-black dark:hover:text-white'
                    )}
                  >
                    {/* Hover background pill */}
                    <AnimatePresence>
                      {isHovered && !isActive && (
                        <motion.span
                          layoutId="nav-hover-bg"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.18 }}
                          className="absolute inset-0 rounded-lg bg-black/[0.04] dark:bg-white/[0.05]"
                        />
                      )}
                    </AnimatePresence>

                    <span className="relative z-10">{link.label}</span>

                    {/* Active underline dot */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-dot"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 w-1 h-1 rounded-full bg-gold"
                      />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* ── Right controls ── */}
            <div className="flex items-center gap-2">

              {/* Theme toggle */}
              {mounted && (
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.93 }}
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  aria-label="Toggle theme"
                  className="relative w-9 h-9 rounded-xl flex items-center justify-center
                    text-black/50 dark:text-white/50
                    hover:text-black dark:hover:text-white
                    hover:bg-black/5 dark:hover:bg-white/8
                    transition-colors duration-200"
                >
                  <Sun className="h-4 w-4 absolute transition-all duration-300
                    rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
                  <Moon className="h-4 w-4 absolute transition-all duration-300
                    rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
                </motion.button>
              )}

              {/* Desktop CTA */}
              <Link
                href="https://wa.me/2349035986632"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block"
              >
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 bg-gold hover:bg-yellow-400
                    text-[#080808] font-bold text-[13px] tracking-wide
                    px-5 h-10 rounded-full transition-all duration-300
                    shadow-[0_0_28px_-6px] shadow-gold/50
                    hover:shadow-[0_0_40px_-4px] hover:shadow-gold/70"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Chat With Us
                </motion.button>
              </Link>

              {/* Mobile hamburger */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.93 }}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center
                  text-black/60 dark:text-white/60
                  hover:bg-black/5 dark:hover:bg-white/8
                  transition-colors duration-200"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.span
                      key="x"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0,   opacity: 1 }}
                      exit={{   rotate:  90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate:  90, opacity: 0 }}
                      animate={{ rotate: 0,   opacity: 1 }}
                      exit={{   rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* ── Full-screen mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden flex flex-col
              bg-white dark:bg-[#080808]"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)'   }}
            exit={{   clipPath: 'inset(0 0 100% 0)'   }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Architectural lines inside mobile menu */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[25, 50, 75].map((pct) => (
                <div
                  key={pct}
                  className="absolute top-0 bottom-0 w-px bg-black/[0.04] dark:bg-white/[0.04]"
                  style={{ left: `${pct}%` }}
                />
              ))}
            </div>

            {/* Gold orb */}
            <div className="absolute top-[-10%] right-[-10%] w-[60vw] aspect-square rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, hsl(43 96% 56% / 0.1) 0%, transparent 65%)',
                filter: 'blur(60px)',
              }}
            />

            {/* Top bar — logo + close */}
            <div className="relative z-10 flex items-center justify-between px-5 sm:px-8 pt-5">
              <Link href="/" onClick={() => setMobileOpen(false)}>
                <Image
                  src="/provic.png"
                  alt="Provic Technologies"
                  width={800} height={267} priority
                  className="h-14 w-auto object-contain"
                />
              </Link>
              <motion.button
                whileTap={{ scale: 0.93 }}
                onClick={() => setMobileOpen(false)}
                className="w-9 h-9 rounded-xl flex items-center justify-center
                  text-black/50 dark:text-white/50
                  hover:bg-black/5 dark:hover:bg-white/8
                  transition-colors"
              >
                <X className="h-5 w-5" />
              </motion.button>
            </div>

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
              className="relative z-10 flex items-center gap-3 px-5 sm:px-8 mt-10"
            >
              <div className="w-6 h-px bg-gold" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">
                Navigation
              </span>
            </motion.div>

            {/* Giant nav links */}
            <div className="relative z-10 flex flex-col px-5 sm:px-8 mt-6 flex-1">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href
                return (
                  <div key={link.href} className="overflow-hidden border-b border-black/6 dark:border-white/6">
                    <motion.div
                      initial={{ y: '100%' }}
                      animate={{ y: '0%' }}
                      transition={{
                        duration: 0.55,
                        delay: 0.18 + i * 0.07,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          'flex items-center justify-between py-4 group',
                          isActive
                            ? 'text-gold'
                            : 'text-black/75 dark:text-white/75 hover:text-black dark:hover:text-white'
                        )}
                      >
                        <span className="font-bebas text-[11vw] sm:text-7xl leading-none tracking-tight
                          transition-colors duration-200">
                          {link.label}
                        </span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                        )}
                      </Link>
                    </motion.div>
                  </div>
                )
              })}
            </div>

            {/* Bottom CTA + index */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="relative z-10 px-5 sm:px-8 pb-8 pt-6 flex items-center justify-between"
            >
              <Link
                href="https://wa.me/2349035986632"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
              >
                <button className="flex items-center gap-2.5
                  bg-gold hover:bg-yellow-400
                  text-[#080808] font-bold text-sm tracking-wide
                  px-6 h-12 rounded-full transition-all duration-300
                  shadow-[0_0_32px_-6px] shadow-gold/50"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat With Us
                </button>
              </Link>

              <span className="text-[9px] tracking-[0.3em] uppercase
                text-black/20 dark:text-white/20 font-medium">
                Lagos, NG
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-20 lg:h-24" />
    </>
  )
}