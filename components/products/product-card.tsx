'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, MessageCircle, ArrowUpRight } from 'lucide-react'
import { type Product, formatPrice } from '@/lib/data'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const firstImage =
    Array.isArray(product.images) && product.images.length > 0
      ? product.images[0]
      : (product as any).image ?? '/placeholder.jpg'

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null

  return (
    <div className="group relative flex flex-col h-full rounded-2xl overflow-hidden
      bg-black/[0.02] dark:bg-white/[0.03]
      border border-black/8 dark:border-white/8
      hover:border-gold/35 hover:bg-gold/[0.02]
      transition-all duration-300">

      {/* ── Image ── */}
      <div className="relative aspect-square overflow-hidden bg-black/[0.03] dark:bg-white/[0.04]">
        <Image
          src={firstImage}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* radial glow overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 50%, hsl(43 96% 56% / 0.08) 0%, transparent 70%)' }}
        />

        {/* badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {discount && (
            <span className="px-2 py-0.5 rounded-lg bg-gold text-black text-[10px] font-bold tracking-wide">
              -{discount}%
            </span>
          )}
          {!product.inStock && (
            <span className="px-2 py-0.5 rounded-lg bg-black/60 text-white text-[10px] font-bold tracking-wide">
              Out of Stock
            </span>
          )}
        </div>

        {/* WhatsApp order overlay */}
        <div className="absolute inset-0 flex items-end p-4
          opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0
          transition-all duration-300">
          <Link
            href={`https://wa.me/2349035986632?text=Hi, I'm interested in ${encodeURIComponent(product.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              whileTap={{ scale: 0.97 }}
              className="w-full flex items-center justify-center gap-2 h-10 rounded-xl
                bg-gold text-black text-xs font-bold tracking-wide
                hover:bg-gold/90 transition-colors duration-200
                shadow-lg shadow-gold/30"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Order on WhatsApp
            </motion.button>
          </Link>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col flex-1 p-5 gap-3">

        {/* stars */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-3 h-3 ${
                i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-black/15 dark:text-white/15'
              }`} />
            ))}
          </div>
          <span className="text-[10px] text-black/35 dark:text-white/35">
            ({product.reviews})
          </span>
        </div>

        {/* name */}
        <Link href={`/products/${product.id}`}>
          <h3 className="text-sm font-bold tracking-wide leading-snug
            text-black/75 dark:text-white/75
            group-hover:text-black dark:group-hover:text-white
            line-clamp-1 transition-colors duration-200">
            {product.name}
          </h3>
        </Link>

        {/* description */}
        <p className="text-xs text-black/40 dark:text-white/40 leading-relaxed line-clamp-2 flex-1">
          {product.description}
        </p>

        {/* price row */}
        <div className="flex items-center gap-2 mt-1">
          <span className="font-bebas text-xl tracking-wide text-gold">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-black/30 dark:text-white/30 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* divider */}
        <div className="h-px w-full bg-black/8 dark:bg-white/8 group-hover:bg-gold/20 transition-colors duration-300" />

        {/* view details */}
        <Link href={`/products/${product.id}`}>
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-black/40 dark:text-white/40
              group-hover:text-black dark:group-hover:text-white transition-colors duration-200">
              View Details
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-black/20 dark:text-white/20
              group-hover:text-gold -translate-x-1 group-hover:translate-x-0
              opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </div>
        </Link>
      </div>
    </div>
  )
}