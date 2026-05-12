'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Sparkles, Shield, Truck, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const floatingItems = [
  { icon: '💻', delay: 0,   x: '4%',  y: '18%', size: 'text-4xl xl:text-5xl' },
  { icon: '🎧', delay: 0.2, x: '88%', y: '10%', size: 'text-3xl xl:text-4xl' },
  { icon: '⌨️', delay: 0.4, x: '2%',  y: '62%', size: 'text-3xl xl:text-4xl' },
  { icon: '⌚', delay: 0.6, x: '91%', y: '58%', size: 'text-4xl xl:text-5xl' },
  { icon: '🔋', delay: 0.8, x: '80%', y: '80%', size: 'text-2xl xl:text-3xl' },
  { icon: '🖱️', delay: 1.0, x: '16%', y: '82%', size: 'text-2xl xl:text-3xl' },
]

const stats = [
  { value: '50+', label: 'Happy Customers' },
  { value: '100%',  label: 'Authentic Products' },
  { value: '24/7',  label: 'Support Available' },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background min-h-[90vh] flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-72 h-72 lg:w-96 lg:h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 lg:w-[28rem] lg:h-[28rem] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-56 h-56 lg:w-72 lg:h-72 bg-gold/5 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating Icons — desktop only */}
      {floatingItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 0.7, 0.5],
            y: [0, -18, 0],
            scale: 1,
          }}
          transition={{
            opacity: { delay: item.delay + 0.3, duration: 0.6 },
            scale:   { delay: item.delay + 0.3, duration: 0.5 },
            y: {
              delay: item.delay + 0.6,
              duration: 3.5 + index * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
          className={`absolute hidden lg:flex items-center justify-center
            pointer-events-none select-none
            w-14 h-14 xl:w-16 xl:h-16 rounded-2xl
            bg-background/60 backdrop-blur-sm
            border border-gold/20 shadow-lg shadow-gold/5
            ${item.size}`}
          style={{ left: item.x, top: item.y }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 sm:mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">Trusted by 50+ customers</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground max-w-xs sm:max-w-2xl lg:max-w-5xl text-balance leading-tight"
          >
            Trusted Tech Gadgets for{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                Students
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-1 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0 rounded-full"
              />
            </span>
            ,{' '}
            <span className="bg-gradient-to-r from-primary via-primary to-navy-light bg-clip-text text-transparent">
              Developers
            </span>{' '}
            &{' '}
            <span className="bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">
              Creators
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xs sm:max-w-xl lg:max-w-2xl leading-relaxed text-pretty"
          >
            Provic Technologies delivers reliable gadgets, accessories, and modern tech
            essentials with professionalism, trust, and speed.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <Link href="/products" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gold hover:bg-gold-dark text-navy-dark font-semibold rounded-xl h-12 sm:h-14 px-7 sm:px-8 text-sm sm:text-base gap-2 group gold-glow-sm"
              >
                Shop Now
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link
              href="https://wa.me/2349035986632"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto rounded-xl h-12 sm:h-14 px-7 sm:px-8 text-sm sm:text-base gap-2 border-2"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                Chat on WhatsApp
              </Button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold flex-shrink-0" />
              <span>100% Authentic</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Truck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold flex-shrink-0" />
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold flex-shrink-0" />
              <span>5-Star Rated</span>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 sm:mt-16 w-full max-w-xs sm:max-w-lg lg:max-w-3xl"
          >
            <div className="glass-card rounded-2xl p-5 sm:p-6 lg:p-8">
              <div className="grid grid-cols-3 gap-2 sm:gap-6 lg:gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-xl sm:text-3xl lg:text-4xl font-bold text-gold leading-none">
                      {stat.value}
                    </div>
                    <div className="mt-1 sm:mt-1.5 text-[10px] sm:text-xs lg:text-sm text-muted-foreground leading-tight">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}