'use client'

import { motion } from 'framer-motion'
import { trustedBrands } from '@/lib/data'

export function TrustedBrands() {
  return (
    <section className="py-12 border-y border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mb-8"
        >
          Trusted brands we work with
        </motion.p>
        
        <div className="relative overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/80 to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Container */}
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 20,
                ease: 'linear',
              },
            }}
            className="flex items-center gap-12 w-fit"
          >
            {/* Duplicate brands for seamless loop */}
            {[...trustedBrands, ...trustedBrands, ...trustedBrands].map((brand, index) => (
              <div
                key={`${brand}-${index}`}
                className="flex items-center justify-center px-4"
              >
                <span className="text-xl sm:text-2xl font-bold text-foreground/40 hover:text-foreground/70 transition-colors whitespace-nowrap">
                  {brand}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
