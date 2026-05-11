'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Laptop, 
  Headphones, 
  Keyboard, 
  Battery, 
  Watch, 
  Cable,
  ArrowRight
} from 'lucide-react'
import { categories } from '@/lib/data'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Laptop,
  Headphones,
  Keyboard,
  Battery,
  Watch,
  Cable,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function FeaturedCategories() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Categories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Shop by Category
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our curated collection of premium tech gadgets across all categories
          </p>
        </motion.div>

        {/* Category Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6"
        >
          {categories.map((category) => {
            const Icon = iconMap[category.icon] || Laptop
            return (
              <motion.div key={category.id} variants={itemVariants}>
                <Link href={`/products?category=${category.id}`}>
                  <div className="group relative h-full">
                    {/* Card */}
                    <div className="relative flex flex-col items-center p-6 rounded-2xl bg-card border border-border transition-all duration-300 group-hover:border-gold/50 group-hover:shadow-lg group-hover:shadow-gold/5 group-hover:-translate-y-1 h-full">
                      {/* Icon Container */}
                      <div className="relative mb-4">
                        <div className="absolute inset-0 bg-gold/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-muted group-hover:bg-gold/10 transition-colors">
                          <Icon className="w-7 h-7 text-foreground/70 group-hover:text-gold transition-colors" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-sm font-semibold text-foreground text-center mb-1">
                        {category.name}
                      </h3>
                      <p className="text-xs text-muted-foreground text-center">
                        {category.productCount} items
                      </p>
                      
                      {/* Hover Arrow */}
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-4 h-4 text-gold" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
