'use client'

import { motion } from 'framer-motion'
import { type Product } from '@/lib/data'
import { ProductCard } from './product-card'

interface RelatedProductsProps {
  products: Product[]
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (!products.length) return null

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white dark:bg-[#080808]">

      {/* ── Hairlines ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-black/[0.05] dark:bg-white/[0.05]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-black/[0.05] dark:bg-white/[0.05]" />

      {/* ── Center spine ── */}
      <div className="absolute inset-y-0 left-[50%] w-px bg-black/[0.03] dark:bg-white/[0.03] hidden lg:block pointer-events-none" />

      {/* ── Ambient gold glow ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] aspect-square rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(43 96% 56% / 0.05) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-gold" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">
                You May Also Like
              </span>
            </div>

            {/* headline — solid */}
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-bebas text-[11vw] sm:text-6xl lg:text-7xl leading-[0.88] tracking-tight text-black dark:text-white"
              >
                RELATED
              </motion.h2>
            </div>

            {/* headline — outlined gold */}
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                className="font-bebas text-[11vw] sm:text-6xl lg:text-7xl leading-[0.88] tracking-tight text-transparent"
                style={{ WebkitTextStroke: '2px hsl(43 96% 56%)' }}
              >
                PRODUCTS
              </motion.h2>
            </div>
          </motion.div>

          {/* sub-copy */}
          <motion.p
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="shrink-0 max-w-xs text-sm text-black/50 dark:text-white/50 leading-relaxed sm:text-right"
          >
            More picks from the same category
            <br />
            you might love.
          </motion.p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}