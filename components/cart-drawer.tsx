'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingBag, Plus, Minus, Trash2, MessageCircle, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { useCart } from '@/components/cart-context'
import { formatPrice } from '@/lib/data'

export function CartDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
    isCartOpen,
    closeCart,
  } = useCart()

  // Build WhatsApp message from cart
  const buildWhatsAppMessage = () => {
    const lines = items.map(
      (i) => `• ${i.product.name} × ${i.quantity} — ${formatPrice(i.product.price * i.quantity)}`
    )
    const message = [
      'Hi Provic Technologies! I want to order the following:',
      '',
      ...lines,
      '',
      `Total: ${formatPrice(totalPrice)}`,
      '',
      'Please confirm availability and delivery details. Thank you!',
    ].join('\n')
    return `https://wa.me/2349035986632?text=${encodeURIComponent(message)}`
  }

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md
              bg-white dark:bg-[#0d0d0d]
              border-l border-black/8 dark:border-white/8
              shadow-2xl shadow-black/20
              flex flex-col"
          >
            {/* ── Header ── */}
            <div className="flex items-center justify-between px-6 py-5
              border-b border-black/8 dark:border-white/8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-px bg-gold" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">
                  Your Cart
                </span>
                <AnimatePresence>
                  {totalItems > 0 && (
                    <motion.span
                      key="count"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{   scale: 0, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
                      className="w-5 h-5 rounded-full bg-gold text-black
                        text-[10px] font-black flex items-center justify-center"
                    >
                      {totalItems}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.93 }}
                onClick={closeCart}
                className="w-8 h-8 rounded-xl flex items-center justify-center
                  text-black/40 dark:text-white/40
                  hover:text-black dark:hover:text-white
                  hover:bg-black/5 dark:hover:bg-white/8
                  transition-all duration-200"
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>

            {/* ── Items ── */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
              <AnimatePresence initial={false}>
                {items.length === 0 ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center h-64 text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl
                      bg-black/[0.03] dark:bg-white/[0.04]
                      border border-black/8 dark:border-white/8
                      flex items-center justify-center mb-4">
                      <ShoppingBag className="w-6 h-6 text-black/25 dark:text-white/25" />
                    </div>
                    <p className="font-bebas text-2xl text-black dark:text-white tracking-tight mb-1">
                      Cart is Empty
                    </p>
                    <p className="text-xs text-black/40 dark:text-white/40">
                      Add products to get started
                    </p>
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
                        exit={{ opacity: 0, x: 20, height: 0, marginBottom: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="flex gap-4 p-4 rounded-2xl
                          bg-black/[0.02] dark:bg-white/[0.03]
                          border border-black/8 dark:border-white/8"
                      >
                        {/* Image */}
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden
                          bg-black/[0.04] dark:bg-white/[0.04] flex-shrink-0">
                          <Image
                            src={firstImage}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>

                        {/* Info */}
                        <div className="flex flex-col flex-1 min-w-0 gap-1">
                          <p className="text-xs font-bold text-black/80 dark:text-white/80
                            line-clamp-1 leading-snug">
                            {item.product.name}
                          </p>
                          <p className="font-bebas text-base leading-none text-gold">
                            {formatPrice(item.product.price)}
                          </p>

                          {/* Quantity stepper */}
                          <div className="flex items-center gap-2 mt-1">
                            <motion.button
                              whileTap={{ scale: 0.85 }}
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className={`w-6 h-6 rounded-lg flex items-center justify-center
                                border transition-all duration-200
                                ${item.quantity === 1
                                  ? 'border-red-500/30 text-red-500 hover:bg-red-500/10'
                                  : 'border-black/10 dark:border-white/10 text-black/50 dark:text-white/50 hover:border-gold/40 hover:text-gold'
                                }`}
                            >
                              {item.quantity === 1
                                ? <Trash2 className="w-3 h-3" />
                                : <Minus  className="w-3 h-3" />
                              }
                            </motion.button>

                            <AnimatePresence mode="wait">
                              <motion.span
                                key={item.quantity}
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1,   opacity: 1 }}
                                exit={{   scale: 0.5, opacity: 0 }}
                                transition={{ duration: 0.12 }}
                                className="text-xs font-black text-black/70 dark:text-white/70 w-4 text-center"
                              >
                                {item.quantity}
                              </motion.span>
                            </AnimatePresence>

                            <motion.button
                              whileTap={{ scale: 0.85 }}
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="w-6 h-6 rounded-lg flex items-center justify-center
                                border border-black/10 dark:border-white/10
                                text-black/50 dark:text-white/50
                                hover:border-gold/40 hover:text-gold
                                transition-all duration-200"
                            >
                              <Plus className="w-3 h-3" />
                            </motion.button>
                          </div>
                        </div>

                        {/* Line total + remove */}
                        <div className="flex flex-col items-end justify-between flex-shrink-0">
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => removeItem(item.product.id)}
                            className="w-7 h-7 rounded-lg flex items-center justify-center
                              text-black/20 dark:text-white/20
                              hover:text-red-500 hover:bg-red-500/8
                              transition-all duration-200"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </motion.button>

                          <AnimatePresence mode="wait">
                            <motion.span
                              key={item.quantity}
                              initial={{ opacity: 0, y: 4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{   opacity: 0, y: -4 }}
                              transition={{ duration: 0.15 }}
                              className="font-bebas text-sm text-black/50 dark:text-white/40 tracking-wide"
                            >
                              {formatPrice(item.product.price * item.quantity)}
                            </motion.span>
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    )
                  })
                )}
              </AnimatePresence>
            </div>

            {/* ── Footer ── */}
            <AnimatePresence>
              {items.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{   opacity: 0, y: 12 }}
                  transition={{ duration: 0.25 }}
                  className="px-6 py-5 border-t border-black/8 dark:border-white/8 space-y-4"
                >
                  {/* Subtotal row */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-black/40 dark:text-white/40 tracking-wide uppercase">
                      Subtotal ({totalItems} item{totalItems !== 1 ? 's' : ''})
                    </span>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={totalPrice}
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0  }}
                        exit={{   opacity: 0, y:  6  }}
                        transition={{ duration: 0.2 }}
                        className="font-bebas text-2xl text-gold tracking-tight"
                      >
                        {formatPrice(totalPrice)}
                      </motion.span>
                    </AnimatePresence>
                  </div>

                  {/* Note */}
                  <p className="text-[10px] text-black/30 dark:text-white/30 leading-relaxed">
                    Delivery fee calculated on WhatsApp based on your location.
                  </p>

                  {/* WhatsApp checkout */}
                  <a
                    href={buildWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeCart}
                    className="group flex items-center justify-center gap-2.5 w-full h-12
                      bg-gold hover:bg-yellow-400 text-black font-bold text-sm tracking-wide
                      rounded-xl transition-all duration-300
                      shadow-[0_0_32px_-6px] shadow-gold/50
                      hover:shadow-[0_0_48px_-4px] hover:shadow-gold/70
                      hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Order via WhatsApp
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300
                      group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  {/* Clear cart */}
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={clearCart}
                    className="w-full text-[10px] tracking-[0.2em] uppercase
                      text-black/25 dark:text-white/25
                      hover:text-red-500 transition-colors duration-200"
                  >
                    Clear Cart
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}