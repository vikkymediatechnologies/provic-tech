'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export function AboutStory() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
              Our Story
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              From a Simple Idea to a Trusted Brand
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Provic Technologies was born out of a frustration many Nigerians share: 
                the difficulty of finding authentic, quality tech products at fair prices. 
                Too often, buyers face counterfeit products, unreliable vendors, and poor 
                after-sales support.
              </p>
              <p>
                We set out to change that. Starting as a small operation serving fellow 
                students and developers, we quickly built a reputation for honesty, quality, 
                and exceptional service. Word spread, and what began as a side project 
                became a mission.
              </p>
              <p>
                Today, Provic Technologies serves thousands of customers across Nigeria, 
                from first-year students buying their first laptop to established creators 
                upgrading their entire workspace. Our commitment remains the same: 
                <span className="text-foreground font-medium"> every product authentic, 
                every transaction secure, every customer valued.</span>
              </p>
            </div>
          </motion.div>

          {/* Quote Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-primary to-navy-dark">
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-gold/30 mb-6" />
              
              <blockquote className="text-xl lg:text-2xl text-white font-medium leading-relaxed mb-8">
                &quot;We don&apos;t just sell gadgets. We build trust, one customer at a time. 
                Every product we deliver carries our reputation, and we take that seriously.&quot;
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-gold">P</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Founder</p>
                  <p className="text-white/60 text-sm">Provic Technologies</p>
                </div>
              </div>
              
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
