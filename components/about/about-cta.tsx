'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AboutCTA() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Ready to Experience the Provic Difference?
          </h2>
          <p className="text-muted-foreground mb-8 text-pretty">
            Join thousands of satisfied customers who trust us for their tech needs. 
            Browse our products or chat with our team today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/products">
              <Button 
                size="lg" 
                className="bg-gold hover:bg-gold-dark text-navy-dark font-semibold rounded-xl h-14 px-8 text-base gap-2 group"
              >
                Browse Products
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link
              href="https://wa.me/2349035986632"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-xl h-14 px-8 text-base gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat With Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
