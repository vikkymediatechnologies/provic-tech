'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Sparkles, Shield, Truck, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const floatingItems = [
  { icon: '💻', delay: 0, x: '10%', y: '20%' },
  { icon: '🎧', delay: 0.2, x: '85%', y: '15%' },
  { icon: '⌨️', delay: 0.4, x: '5%', y: '70%' },
  { icon: '⌚', delay: 0.6, x: '90%', y: '65%' },
  { icon: '🔋', delay: 0.8, x: '75%', y: '80%' },
]

const stats = [
  { value: '5000+', label: 'Happy Customers' },
  { value: '100%', label: 'Authentic Products' },
  { value: '24/7', label: 'Support Available' },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating Icons */}
      {floatingItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 0.6, 
            y: [0, -15, 0],
          }}
          transition={{
            opacity: { delay: item.delay, duration: 0.5 },
            y: { delay: item.delay, duration: 3, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="absolute text-3xl md:text-4xl hidden md:block pointer-events-none select-none"
          style={{ left: item.x, top: item.y }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Trusted by 5000+ customers</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground max-w-5xl text-balance"
          >
            Trusted Tech Gadgets for{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                Students
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0 rounded-full"
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
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed text-pretty"
          >
            Provic Technologies delivers reliable gadgets, accessories, and modern tech 
            essentials with professionalism, trust, and speed.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <Link href="/products">
              <Button 
                size="lg" 
                className="bg-gold hover:bg-gold-dark text-navy-dark font-semibold rounded-xl h-14 px-8 text-base gap-2 group gold-glow-sm"
              >
                Shop Now
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link
              href="https://wa.me/2349035986632"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-xl h-14 px-8 text-base gap-2 border-2"
              >
                <MessageCircle className="w-5 h-5 text-green-600" />
                Chat on WhatsApp
              </Button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-gold" />
              <span>100% Authentic</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-gold" />
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-gold" />
              <span>5-Star Rated</span>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 w-full max-w-3xl"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <div className="grid grid-cols-3 gap-4 sm:gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gold">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs sm:text-sm text-muted-foreground">
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
