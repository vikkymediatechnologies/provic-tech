'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-muted/30 to-background py-20 lg:py-28">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="flex justify-center mb-8"
          >
            <Image
              src="/provic.png"
              alt="Provic Technologies"
              width={1200}
              height={400}
              className="w-[260px] sm:w-[380px] md:w-[460px] lg:w-[540px] h-auto object-contain"
              priority
            />
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            About{' '}
            <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
              Provic Technologies
            </span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            We&apos;re on a mission to make premium tech accessible to every student,
            developer, and creator in Nigeria. Quality gadgets, honest service, unbeatable trust.
          </p>
        </motion.div>
      </div>
    </section>
  )
}