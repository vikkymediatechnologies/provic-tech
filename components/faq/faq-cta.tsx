'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MessageCircle, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function FAQCTA() {
  return (
    <section className="py-16 lg:py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-balance">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground mb-8 text-pretty">
            Our support team is always ready to help. Reach out via WhatsApp for 
            instant responses or visit our contact page for more options.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://wa.me/2348068786708"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white rounded-xl h-12 px-6 gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat Support
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-xl h-12 px-6 gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Page
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
