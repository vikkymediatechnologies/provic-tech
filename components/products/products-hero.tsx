'use client'

import { motion } from 'framer-motion'

export function ProductsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background py-16 lg:py-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Our Collection
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            Premium Tech Products
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover our curated collection of authentic gadgets from trusted global brands. 
            Quality guaranteed, fast delivery nationwide.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
