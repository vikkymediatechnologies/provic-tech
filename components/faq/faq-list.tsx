'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Truck, CreditCard, Shield, RotateCcw, BadgeCheck, MapPin } from 'lucide-react'
import { faqs } from '@/lib/data'
import { cn } from '@/lib/utils'

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  delivery: Truck,
  payment: CreditCard,
  warranty: Shield,
  refunds: RotateCcw,
  authenticity: BadgeCheck,
  tracking: MapPin,
}

const categoryLabels: Record<string, string> = {
  delivery: 'Delivery',
  payment: 'Payment',
  warranty: 'Warranty',
  refunds: 'Returns & Refunds',
  authenticity: 'Authenticity',
  tracking: 'Tracking',
}

export function FAQList() {
  const [openId, setOpenId] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = ['all', ...new Set(faqs.map((faq) => faq.category))]
  
  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter((faq) => faq.category === selectedCategory)

  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => {
            const Icon = categoryIcons[category]
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all',
                  selectedCategory === category
                    ? 'bg-gold text-navy-dark'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                )}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {category === 'all' ? 'All Questions' : categoryLabels[category]}
              </button>
            )
          })}
        </div>

        {/* FAQ Accordion */}
        <motion.div layout className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id
              const Icon = categoryIcons[faq.category] || Shield

              return (
                <motion.div
                  key={faq.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="rounded-2xl border border-border bg-card overflow-hidden">
                    <button
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                      className="flex items-center justify-between w-full p-6 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-muted">
                          <Icon className="w-5 h-5 text-gold" />
                        </div>
                        <span className="font-semibold text-foreground pr-4">
                          {faq.question}
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="shrink-0"
                      >
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-6 pb-6 pt-0 pl-20">
                            <p className="text-muted-foreground leading-relaxed">
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
