'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ServicesCTA() {
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
            Need a Custom Service?
          </h2>
          <p className="text-muted-foreground mb-8 text-pretty">
            Can&apos;t find what you&apos;re looking for? Contact us and we&apos;ll create 
            a tailored solution for your specific tech needs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://wa.me/2349035986632"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white rounded-xl h-14 px-8 text-base gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </Link>
            <Link href="tel:09035986632">
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-xl h-14 px-8 text-base gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

