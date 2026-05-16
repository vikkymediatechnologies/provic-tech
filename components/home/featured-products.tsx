'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, ArrowUpRight, MessageCircle } from 'lucide-react'
import { getFeaturedProducts, formatPrice } from '@/lib/data'

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts()

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-black/[0.02] dark:bg-white/[0.02]">
      <div className="absolute top-0 left-0 right-0 h-px bg-black/[0.05] dark:bg-white/[0.05]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-black/[0.05] dark:bg-white/[0.05]" />
      <div className="absolute bottom-0 right-0 w-[50vw] aspect-square pointer-events-none"
        style={{ background: 'radial-gradient(circle at 80% 80%, hsl(43 96% 56% / 0.06) 0%, transparent 60%)', filter: 'blur(60px)' }} />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 lg:mb-20">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-gold" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">Featured Selection</span>
            </div>
            <div className="overflow-hidden">
              <motion.h2 initial={{ y: '100%' }} whileInView={{ y: '0%' }} viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-bebas text-[13vw] sm:text-7xl lg:text-8xl leading-[0.88] tracking-tight text-black dark:text-white">
                POPULAR
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2 initial={{ y: '100%' }} whileInView={{ y: '0%' }} viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.17, ease: [0.16, 1, 0.3, 1] }}
                className="font-bebas text-[13vw] sm:text-7xl lg:text-8xl leading-[0.88] tracking-tight text-transparent"
                style={{ WebkitTextStroke: '2px hsl(43 96% 56%)' }}>
                PRODUCTS
              </motion.h2>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="shrink-0">
            <Link href="/products">
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2.5
                  border border-black/15 dark:border-white/15
                  text-black/60 dark:text-white/60
                  hover:border-gold/40 hover:text-black dark:hover:text-white
                  text-sm font-semibold tracking-wide px-6 h-11 rounded-full transition-all duration-300">
                View All
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {featuredProducts.map((product, i) => {
            const firstImage =
              Array.isArray(product.images) && product.images.length > 0
                ? product.images[0]
                : (product as any).image || null
            if (!firstImage) return null

            return (
              <motion.div key={product.id} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}>
                <div className="group relative flex flex-col h-full
                  bg-white dark:bg-[#111]
                  border border-black/8 dark:border-white/8
                  hover:border-gold/30 rounded-2xl overflow-hidden
                  transition-all duration-500
                  hover:shadow-[0_8px_40px_-8px] hover:shadow-black/15 dark:hover:shadow-black/50">

                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-black/[0.03] dark:bg-white/[0.03]">
                    <Image src={firstImage} alt={product.name} fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />

                    {/* Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                    {/* Discount badge */}
                    {product.originalPrice && (
                      <div className="absolute top-3 left-3 z-10
                        bg-gold text-[#080808] text-[10px] font-black tracking-wide uppercase
                        px-2.5 py-1 rounded-full">
                        −{Math.round((1 - product.price / product.originalPrice) * 100)}%
                      </div>
                    )}

                    {/* WhatsApp CTA slides up */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10
                      translate-y-full group-hover:translate-y-0
                      transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      <Link href={`https://wa.me/2349035986632?text=Hi, I'm interested in ${encodeURIComponent(product.name)}`}
                        target="_blank" rel="noopener noreferrer">
                        <button className="w-full flex items-center justify-center gap-2
                          bg-green-500 hover:bg-green-400 text-white font-semibold text-sm
                          h-10 rounded-xl transition-colors duration-200">
                          <MessageCircle className="w-4 h-4" />
                          Order on WhatsApp
                        </button>
                      </Link>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-4 sm:p-5">
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-2.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className={`w-3 h-3 ${
                          j < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-black/15 dark:text-white/15'
                        }`} />
                      ))}
                      <span className="text-[10px] text-black/35 dark:text-white/35 ml-1 font-medium">
                        ({product.reviews})
                      </span>
                    </div>

                    {/* Name */}
                    <Link href={`/products/${product.id}`}>
                      <h3 className="text-sm font-bold text-black/85 dark:text-white/85
                        hover:text-gold transition-colors duration-200 line-clamp-1 leading-snug mb-1.5">
                        {product.name}
                      </h3>
                    </Link>

                    {/* Description */}
                    <p className="text-xs text-black/40 dark:text-white/35 line-clamp-2 leading-relaxed flex-1">
                      {product.description}
                    </p>

                    {/* Price row */}
                    <div className="mt-4 pt-4 border-t border-black/6 dark:border-white/6
                      flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-base font-black text-gold tracking-tight">
                          {formatPrice(product.price)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-black/30 dark:text-white/25 line-through">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                      </div>
                      <Link href={`/products/${product.id}`}>
                        <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.93 }}
                          className="w-8 h-8 rounded-full
                            border border-black/10 dark:border-white/10
                            hover:border-gold/40 hover:bg-gold/5
                            flex items-center justify-center transition-all duration-200">
                          <ArrowUpRight className="w-3.5 h-3.5 text-black/40 dark:text-white/40" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}