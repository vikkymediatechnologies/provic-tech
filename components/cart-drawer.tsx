'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Minus, Plus, ShoppingBag, MessageCircle, Trash2, ArrowUpRight } from 'lucide-react'
import { useCart } from '@/components/cart-context'
import { formatPrice } from '@/lib/data'

export function CartDrawer() {
  const { items, totalCount, totalPrice, isOpen, closeCart, removeItem, updateQty } = useCart()

  const buildWhatsAppMessage = () => {
    const lines = items.map(
      (i) => `• ${i.product.name} x${i.quantity} — ${formatPrice(i.product.price * i.quantity)}`
    )
    const text = [
      'Hi Provic! I would like to order:',
      '',
      ...lines,
      '',
      `Total: ${formatPrice(totalPrice)}`,
    ].join('\n')
    return `https://wa.me/2349035986632?text=${encodeURIComponent(text)}`
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeCart}
            className="fixed inset-0 z-[55] bg-black/40 dark:bg-black/60 backdrop-blur-sm"
          />

          {/* ── Drawer ── */}
          <motion.aside
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 bottom-0 z-[60] w-full max-w-md
              flex flex-col
              bg-white dark:bg-[#080808]
              border-l border-black/8 dark:border-white/8
              shadow-2xl"
          >
            {/* ambient glow */}
            <div
              className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, hsl(43 96% 56% / 0.06) 0%, transparent 70%)',
                filter: 'blur(50px)',
              }}
            />

            {/* ── Header ── */}
            <div className="relative flex items-center justify-between px-6 py-5 border-b border-black/8 dark:border-white/8">
              <div className="flex items-center gap-3">
                <div className="w-4 h-px bg-gold" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">
                  Your Cart
                </span>
                {totalCount > 0 && (
                  <span className="px-2 py-0.5 rounded-lg bg-gold/10 text-gold text-[10px] font-bold">
                    {totalCount} item{totalCount !== 1 ? 's' : ''}
                  </span>
                )}
              </div>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.93 }}
                onClick={closeCart}
                className="w-9 h-9 rounded-xl flex items-center justify-center
                  text-black/40 dark:text-white/40
                  hover:text-black dark:hover:text-white
                  hover:bg-black/5 dark:hover:bg-white/8
                  transition-all duration-200"
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>

            {/* ── Items list ── */}
            <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-3">
              <AnimatePresence initial={false}>
                {items.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center h-full gap-4 text-center py-20"
                  >
                    <div className="w-14 h-14 rounded-xl
                      bg-black/[0.03] dark:bg-white/[0.04]
                      border border-black/8 dark:border-white/8
                      flex items-center justify-center">
                      <ShoppingBag className="w-6 h-6 text-black/25 dark:text-white/25" />
                    </div>
                    <div>
                      <p className="font-bebas text-2xl tracking-tight text-black dark:text-white mb-1">
                        Cart is empty
                      </p>
                      <p className="text-xs text-black/40 dark:text-white/40">
                        Add products to get started
                      </p>
                    </div>
                    <Link href="/products" onClick={closeCart}>
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center gap-2 h-10 px-5 rounded-xl
                          bg-gold text-black text-xs font-bold tracking-wide
                          hover:bg-gold/90 transition-all duration-300 shadow-md shadow-gold/20"
                      >
                        Browse Products
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </motion.button>
                    </Link>
                  </motion.div>
                ) : (
                  items.map((item) => {
                    const firstImage =
                      Array.isArray(item.product.images) && item.product.images.length > 0
                        ? item.product.images[0]
                        : (item.product as any).image ?? '/placeholder.jpg'

                    return (
                      <motion.div
                        key={item.product.id}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20, height: 0, marginBottom: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="flex gap-4 p-4 rounded-2xl
                          bg-black/[0.02] dark:bg-white/[0.03]
                          border border-black/8 dark:border-white/8"
                      >
                        {/* image */}
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0
                          bg-black/[0.03] dark:bg-white/[0.04]">
                          <Image
                            src={firstImage}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>

                        {/* info */}
                        <div className="flex flex-col flex-1 min-w-0 gap-1.5">
                          <p className="text-xs font-bold text-black/75 dark:text-white/75 line-clamp-1">
                            {item.product.name}
                          </p>
                          <p className="font-bebas text-base text-gold leading-none">
                            {formatPrice(item.product.price)}
                          </p>

                          {/* qty controls */}
                          <div className="flex items-center gap-2 mt-1">
                            <button
                              onClick={() => updateQty(item.product.id, item.quantity - 1)}
                              className="w-6 h-6 rounded-lg border border-black/10 dark:border-white/10
                                flex items-center justify-center
                                text-black/50 dark:text-white/50
                                hover:border-gold/40 hover:text-gold
                                transition-all duration-200"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold text-black/70 dark:text-white/70 w-5 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQty(item.product.id, item.quantity + 1)}
                              className="w-6 h-6 rounded-lg border border-black/10 dark:border-white/10
                                flex items-center justify-center
                                text-black/50 dark:text-white/50
                                hover:border-gold/40 hover:text-gold
                                transition-all duration-200"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>

                        {/* subtotal + remove */}
                        <div className="flex flex-col items-end justify-between shrink-0">
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="text-black/20 dark:text-white/20 hover:text-red-500
                              transition-colors duration-200"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                          <p className="text-xs font-bold text-black/60 dark:text-white/60">
                            {formatPrice(item.product.price * item.quantity)}
                          </p>
                        </div>
                      </motion.div>
                    )
                  })
                )}
              </AnimatePresence>
            </div>

            {/* ── Footer ── */}
            {items.length > 0 && (
              <div className="relative border-t border-black/8 dark:border-white/8 px-6 py-5 flex flex-col gap-4">
                {/* total */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-black/40 dark:text-white/40 tracking-wide">Total</span>
                  <span className="font-bebas text-2xl text-gold tracking-wide">
                    {formatPrice(totalPrice)}
                  </span>
                </div>

                {/* WhatsApp order */}
                <Link
                  href={buildWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeCart}
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group w-full flex items-center justify-center gap-2.5
                      h-12 rounded-xl
                      bg-gold text-black text-sm font-bold tracking-wide
                      hover:bg-gold/90 transition-all duration-300
                      shadow-lg shadow-gold/20"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Order via WhatsApp
                  </motion.button>
                </Link>

                <p className="text-center text-[10px] text-black/30 dark:text-white/30">
                  Your order details will be sent directly to our team.
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}