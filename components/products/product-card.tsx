'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ArrowUpRight, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react'
import { type Product, formatPrice } from '@/lib/data'
import { useCart } from '@/components/cart-context'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, removeItem, updateQuantity, items } = useCart()

  // Derive quantity directly from cart state — always in sync
  const cartItem = items.find((i) => i.product.id === product.id)
  const quantity  = cartItem?.quantity ?? 0
  const inCart    = quantity > 0

  const firstImage =
    Array.isArray(product.images) && product.images.length > 0
      ? product.images[0]
      : (product as any).image ?? '/placeholder.jpg'

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!product.inStock) return
    addItem(product)
  }

  const handleIncrease = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
  }

  const handleDecrease = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    updateQuantity(product.id, quantity - 1) // removes when hits 0
  }

  const handleRemove = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    removeItem(product.id)
  }

  return (
    <div className="group relative flex flex-col h-full rounded-2xl overflow-hidden
      bg-white dark:bg-[#111]
      border border-black/8 dark:border-white/8
      hover:border-gold/30
      transition-all duration-500
      hover:shadow-[0_8px_40px_-8px] hover:shadow-black/15 dark:hover:shadow-black/50">

      {/* ── Image ── */}
      <div className="relative aspect-[4/3] overflow-hidden bg-black/[0.03] dark:bg-white/[0.03]">
        <Image
          src={firstImage}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Scrim on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent
          opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {discount && (
            <span className="px-2 py-0.5 rounded-lg bg-gold text-black
              text-[10px] font-black tracking-wide">
              -{discount}%
            </span>
          )}
          {!product.inStock && (
            <span className="px-2 py-0.5 rounded-lg bg-black/70 text-white
              text-[10px] font-bold tracking-wide">
              Out of Stock
            </span>
          )}
        </div>

        {/* Cart quantity badge on image — visible when in cart */}
        <AnimatePresence>
          {inCart && (
            <motion.div
              key="cart-badge"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{   scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 28 }}
              className="absolute top-3 right-3 z-20 min-w-[26px] h-[26px] px-1.5
                rounded-full bg-gold text-black
                text-[11px] font-black
                flex items-center justify-center
                shadow-[0_2px_12px_-2px] shadow-gold/60"
            >
              {quantity}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Add to cart / quantity control — slides up on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-3 z-10
          translate-y-full group-hover:translate-y-0
          transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <AnimatePresence mode="wait" initial={false}>
            {inCart ? (
              /* ── Quantity stepper (full width) ── */
              <motion.div
                key="stepper"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{   opacity: 0, y: 8 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2"
              >
                {/* Decrease / Remove */}
                <motion.button
                  whileTap={{ scale: 0.88 }}
                  onClick={quantity === 1 ? handleRemove : handleDecrease}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center
                    font-bold transition-all duration-200
                    ${quantity === 1
                      ? 'bg-red-500/90 hover:bg-red-500 text-white'
                      : 'bg-black/50 hover:bg-black/70 text-white'
                    }`}
                >
                  {quantity === 1
                    ? <Trash2 className="w-3.5 h-3.5" />
                    : <Minus  className="w-3.5 h-3.5" />
                  }
                </motion.button>

                {/* Count */}
                <div className="flex-1 h-10 rounded-xl bg-gold flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={quantity}
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1,   opacity: 1 }}
                      exit={{   scale: 0.6, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="text-black font-black text-sm"
                    >
                      {quantity} in cart
                    </motion.span>
                  </AnimatePresence>
                </div>

                {/* Increase */}
                <motion.button
                  whileTap={{ scale: 0.88 }}
                  onClick={handleIncrease}
                  className="w-10 h-10 rounded-xl flex items-center justify-center
                    bg-black/50 hover:bg-black/70 text-white
                    font-bold transition-all duration-200"
                >
                  <Plus className="w-3.5 h-3.5" />
                </motion.button>
              </motion.div>
            ) : (
              /* ── Initial Add to Cart ── */
              <motion.button
                key="add"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{   opacity: 0, y: 8 }}
                transition={{ duration: 0.2 }}
                whileTap={{ scale: product.inStock ? 0.97 : 1 }}
                onClick={handleAdd}
                disabled={!product.inStock}
                className="w-full flex items-center justify-center gap-2 h-10 rounded-xl
                  bg-gold hover:bg-yellow-400 text-black
                  text-xs font-bold tracking-wide
                  transition-all duration-300
                  disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                Add to Cart
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col flex-1 p-4 sm:p-5 gap-3">

        {/* Stars */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-3 h-3 ${
                i < Math.floor(product.rating)
                  ? 'text-gold fill-gold'
                  : 'text-black/15 dark:text-white/15'
              }`} />
            ))}
          </div>
          <span className="text-[10px] text-black/35 dark:text-white/35">
            ({product.reviews})
          </span>
        </div>

        {/* Name */}
        <Link href={`/products/${product.id}`}>
          <h3 className="text-sm font-bold tracking-wide leading-snug
            text-black/75 dark:text-white/75
            group-hover:text-black dark:group-hover:text-white
            line-clamp-1 transition-colors duration-200">
            {product.name}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-xs text-black/40 dark:text-white/40
          leading-relaxed line-clamp-2 flex-1">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="font-bebas text-xl tracking-wide text-gold">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-black/25 dark:text-white/25 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-black/6 dark:bg-white/6
          group-hover:bg-gold/20 transition-colors duration-300" />

        {/* Bottom row */}
        <div className="flex items-center justify-between">
          <Link href={`/products/${product.id}`}>
            <div className="flex items-center gap-1 group/link">
              <span className="text-xs font-semibold
                text-black/35 dark:text-white/35
                group-hover/link:text-gold
                transition-colors duration-200">
                View Details
              </span>
              <ArrowUpRight className="w-3 h-3
                text-black/20 dark:text-white/20
                group-hover/link:text-gold
                transition-colors duration-200" />
            </div>
          </Link>

          {/* ── Bottom-right cart control ── */}
          <AnimatePresence mode="wait" initial={false}>
            {inCart ? (
              /* Mini stepper — always visible once in cart */
              <motion.div
                key="mini-stepper"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1,   opacity: 1 }}
                exit={{   scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="flex items-center gap-1"
              >
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  onClick={quantity === 1 ? handleRemove : handleDecrease}
                  className={`w-6 h-6 rounded-lg flex items-center justify-center
                    transition-all duration-200 text-white
                    ${quantity === 1
                      ? 'bg-red-500 hover:bg-red-600'
                      : 'bg-black/15 dark:bg-white/15 hover:bg-black/25 dark:hover:bg-white/25'
                    }`}
                >
                  {quantity === 1
                    ? <Trash2 className="w-2.5 h-2.5" />
                    : <Minus  className="w-2.5 h-2.5 text-black dark:text-white" />
                  }
                </motion.button>

                <AnimatePresence mode="wait">
                  <motion.span
                    key={quantity}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1,   opacity: 1 }}
                    exit={{   scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.12 }}
                    className="w-5 text-center text-xs font-black text-gold"
                  >
                    {quantity}
                  </motion.span>
                </AnimatePresence>

                <motion.button
                  whileTap={{ scale: 0.85 }}
                  onClick={handleIncrease}
                  className="w-6 h-6 rounded-lg flex items-center justify-center
                    bg-gold hover:bg-yellow-400 text-black
                    transition-all duration-200"
                >
                  <Plus className="w-2.5 h-2.5" />
                </motion.button>
              </motion.div>
            ) : (
              /* Plain add button */
              <motion.button
                key="plain-add"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1,   opacity: 1 }}
                exit={{   scale: 0.8, opacity: 0 }}
                whileHover={{ scale: product.inStock ? 1.1 : 1 }}
                whileTap={{  scale: product.inStock ? 0.9 : 1 }}
                onClick={handleAdd}
                disabled={!product.inStock}
                aria-label="Add to cart"
                className="w-8 h-8 rounded-xl flex items-center justify-center
                  bg-gold/10 text-gold hover:bg-gold hover:text-black
                  transition-all duration-300
                  disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}