'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  React.useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 120,
          damping: 18,
        }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-md'
            : 'bg-transparent'
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-24 lg:h-32 items-center justify-between">
            {/* LOGO */}
            <Link
              href="/"
              className="flex items-center shrink-0"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <Image
                  src="/provic.png"
                  alt="Provic Technologies"
                  width={1200}
                  height={400}
                  priority
                  className="
                    h-24
                    lg:h-32
                    w-auto
                    object-contain
                    drop-shadow-sm
                  "
                />
              </motion.div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200',
                      isActive
                        ? 'text-gold'
                        : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                    )}
                  >
                    {link.label}

                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 30,
                        }}
                        className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-6 rounded-full bg-gold"
                      />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-2">
              {/* THEME TOGGLE */}
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Toggle theme"
                  className="rounded-xl"
                  onClick={() =>
                    setTheme(theme === 'dark' ? 'light' : 'dark')
                  }
                >
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
              )}

              {/* DESKTOP CTA */}
              <Link
                href="https://wa.me/2349035986632"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block"
              >
                <Button className="bg-gold hover:bg-gold-dark text-navy-dark font-semibold rounded-xl gap-2 px-5 h-11">
                  <MessageCircle className="w-4 h-4" />
                  Chat With Us
                </Button>
              </Link>

              {/* MOBILE MENU BUTTON */}
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle menu"
                className="lg:hidden rounded-xl"
                onClick={() =>
                  setIsMobileMenuOpen(!isMobileMenuOpen)
                }
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* BACKDROP */}
            <motion.div
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* SIDEBAR */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
              }}
              className="
                absolute
                right-0
                top-0
                bottom-0
                w-full
                max-w-sm
                bg-background
                border-l
                border-border
                shadow-2xl
              "
            >
              <div className="flex flex-col h-full px-6 pt-28 pb-8">
                {/* MOBILE LINKS */}
                <div className="flex flex-col gap-3">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href

                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.08,
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={() =>
                            setIsMobileMenuOpen(false)
                          }
                          className={cn(
                            'flex items-center rounded-2xl px-5 py-4 text-lg font-semibold transition-all duration-200',
                            isActive
                              ? 'bg-gold/10 text-gold'
                              : 'hover:bg-muted text-foreground'
                          )}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>

                {/* MOBILE CTA */}
                <div className="mt-auto border-t border-border pt-6">
                  <Link
                    href="https://wa.me/2349035986632"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      setIsMobileMenuOpen(false)
                    }
                  >
                    <Button className="w-full h-12 rounded-2xl bg-gold hover:bg-gold-dark text-navy-dark font-semibold gap-2">
                      <MessageCircle className="h-5 w-5" />
                      Chat With Us
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SPACER */}
      <div className="h-24 lg:h-32" />
    </>
  )
}