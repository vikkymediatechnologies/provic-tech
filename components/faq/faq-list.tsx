'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronDown, Truck, CreditCard, Shield,
  RotateCcw, BadgeCheck, MapPin,
} from 'lucide-react'
import { faqs } from '@/lib/data'

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  delivery:     Truck,
  payment:      CreditCard,
  warranty:     Shield,
  refunds:      RotateCcw,
  authenticity: BadgeCheck,
  tracking:     MapPin,
}

const categoryLabels: Record<string, string> = {
  all:          'All Questions',
  delivery:     'Delivery',
  payment:      'Payment',
  warranty:     'Warranty',
  refunds:      'Returns & Refunds',
  authenticity: 'Authenticity',
  tracking:     'Tracking',
}

export function FAQList() {
  const [openId,           setOpenId          ] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = ['all', ...Array.from(new Set(faqs.map((f) => f.category)))]

  const filteredFaqs = selectedCategory === 'all'
    ? faqs
    : faqs.filter((f) => f.category === selectedCategory)

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white dark:bg-[#080808]">

      {/* ── Hairlines ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-black/[0.05] dark:bg-white/[0.05]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-black/[0.05] dark:bg-white/[0.05]" />

      {/* ── Ambient glow ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] aspect-square rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(43 96% 56% / 0.05) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative mx-auto max-w-3xl px-5 sm:px-8 lg:px-0">

        {/* ── Category filter pills ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-2 mb-12"
        >
          {categories.map((cat, i) => {
            const Icon = categoryIcons[cat]
            const isActive = selectedCategory === cat
            return (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelectedCategory(cat)}
                className={`inline-flex items-center gap-2 px-4 h-9 rounded-xl text-xs font-bold tracking-wide
                  transition-all duration-300
                  ${isActive
                    ? 'bg-gold text-black shadow-md shadow-gold/20'
                    : 'bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-black/50 dark:text-white/50 hover:border-gold/40 hover:text-gold'
                  }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                {categoryLabels[cat] ?? cat}
              </motion.button>
            )
          })}
        </motion.div>

        {/* ── Accordion ── */}
        <motion.div layout className="flex flex-col gap-3">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq, i) => {
              const isOpen = openId === faq.id
              const Icon = categoryIcons[faq.category] ?? Shield

              return (
                <motion.div
                  key={faq.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div
                    className={`group rounded-2xl overflow-hidden
                      border transition-all duration-300
                      ${isOpen
                        ? 'border-gold/35 bg-gold/[0.02] dark:bg-gold/[0.03]'
                        : 'border-black/8 dark:border-white/8 bg-black/[0.02] dark:bg-white/[0.03] hover:border-gold/25'
                      }`}
                  >
                    {/* ── Question row ── */}
                    <button
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                      className="flex items-center justify-between w-full p-5 sm:p-6 text-left gap-4"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        {/* icon tile */}
                        <div className={`w-10 h-10 rounded-xl shrink-0 flex items-center justify-center
                          transition-colors duration-300
                          ${isOpen
                            ? 'bg-gold/15'
                            : 'bg-black/[0.04] dark:bg-white/[0.06] group-hover:bg-gold/10'
                          }`}
                        >
                          <Icon className={`w-4 h-4 transition-colors duration-300 ${
                            isOpen ? 'text-gold' : 'text-black/40 dark:text-white/40 group-hover:text-gold'
                          }`} />
                        </div>

                        {/* question text */}
                        <span className={`text-sm sm:text-base font-bold tracking-wide leading-snug
                          transition-colors duration-200
                          ${isOpen
                            ? 'text-black dark:text-white'
                            : 'text-black/70 dark:text-white/70 group-hover:text-black dark:group-hover:text-white'
                          }`}
                        >
                          {faq.question}
                        </span>
                      </div>

                      {/* chevron */}
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="shrink-0"
                      >
                        <ChevronDown className={`w-4 h-4 transition-colors duration-300 ${
                          isOpen ? 'text-gold' : 'text-black/25 dark:text-white/25 group-hover:text-gold'
                        }`} />
                      </motion.div>
                    </button>

                    {/* ── Answer panel ── */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          {/* hairline divider */}
                          <div className="mx-5 sm:mx-6 h-px bg-gold/20" />

                          <div className="px-5 sm:px-6 pt-4 pb-6 pl-[4.5rem]">
                            <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}