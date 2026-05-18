'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Heart, Lightbulb, Users, Award } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Trust',
    description: 'Honesty and transparency in every interaction, no exceptions.',
    index: '01',
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'Only authentic, premium products — nothing less.',
    index: '02',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Your satisfaction drives every decision we make.',
    index: '03',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Always improving our service, selection, and experience.',
    index: '04',
  },
]

export function AboutMission() {
  return (
    <section className="relative py-24 lg:py-32 bg-white dark:bg-[#080808]">

      {/* Rules */}
      <div className="absolute top-0 left-0 right-0 h-px bg-black/[0.05] dark:bg-white/[0.05]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-black/[0.05] dark:bg-white/[0.05]" />

      {/* Gold orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-2xl aspect-square rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(43 96% 56% / 0.05) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">

        {/* ── Section header ── */}
        <div className="mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-6 h-px bg-gold" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">
              Mission & Values
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '100%' }}
              whileInView={{ y: '0%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-bebas text-[13vw] sm:text-7xl lg:text-8xl
                leading-[0.88] tracking-tight text-black dark:text-white"
            >
              WHAT WE
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '100%' }}
              whileInView={{ y: '0%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
              className="font-bebas text-[13vw] sm:text-7xl lg:text-8xl
                leading-[0.88] tracking-tight text-transparent"
              style={{ WebkitTextStroke: '2px hsl(43 96% 56%)' }}
            >
              STAND FOR
            </motion.h2>
          </div>
        </div>

        {/* ── Mission & Vision cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 mb-16 lg:mb-20">

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-2xl
              border border-black/8 dark:border-white/8
              bg-black/[0.02] dark:bg-white/[0.03]
              hover:border-gold/25 transition-all duration-500
              p-8 sm:p-10"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: 'radial-gradient(circle at 20% 20%, hsl(43 96% 56% / 0.07) 0%, transparent 60%)' }} />

            {/* Outlined index */}
            <span className="font-bebas text-7xl sm:text-8xl leading-none
              text-transparent select-none absolute top-4 right-6 opacity-60"
              style={{ WebkitTextStroke: '1px hsl(43 96% 56% / 0.2)' }}>
              01
            </span>

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gold/10 group-hover:bg-gold/20
                flex items-center justify-center mb-6 transition-colors duration-300">
                <Target className="w-6 h-6 text-gold" />
              </div>

              {/* Label */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-px bg-gold/50" />
                <span className="text-[10px] tracking-[0.25em] uppercase text-gold font-bold">
                  Mission
                </span>
              </div>

              <h3 className="font-bebas text-3xl sm:text-4xl leading-none tracking-tight
                text-black dark:text-white mb-4">
                OUR MISSION
              </h3>

              <p className="text-sm sm:text-base text-black/50 dark:text-white/40 leading-relaxed">
                To democratize access to premium technology by providing authentic,
                high-quality gadgets at competitive prices, backed by exceptional
                customer service that builds lasting trust with every interaction.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-2xl
              border border-black/8 dark:border-white/8
              bg-black/[0.02] dark:bg-white/[0.03]
              hover:border-gold/25 transition-all duration-500
              p-8 sm:p-10"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: 'radial-gradient(circle at 80% 20%, hsl(43 96% 56% / 0.07) 0%, transparent 60%)' }} />

            {/* Outlined index */}
            <span className="font-bebas text-7xl sm:text-8xl leading-none
              text-transparent select-none absolute top-4 right-6 opacity-60"
              style={{ WebkitTextStroke: '1px hsl(43 96% 56% / 0.2)' }}>
              02
            </span>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-gold/10 group-hover:bg-gold/20
                flex items-center justify-center mb-6 transition-colors duration-300">
                <Eye className="w-6 h-6 text-gold" />
              </div>

              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-px bg-gold/50" />
                <span className="text-[10px] tracking-[0.25em] uppercase text-gold font-bold">
                  Vision
                </span>
              </div>

              <h3 className="font-bebas text-3xl sm:text-4xl leading-none tracking-tight
                text-black dark:text-white mb-4">
                OUR VISION
              </h3>

              <p className="text-sm sm:text-base text-black/50 dark:text-white/40 leading-relaxed">
                To become Nigeria's most trusted technology partner, known for
                empowering students, developers, and creators with the tools they
                need to build, create, and innovate without compromise.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Values divider ── */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 lg:mb-16 h-px bg-black/[0.06] dark:bg-white/[0.06]"
        />

        {/* ── Values sub-header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-10 lg:mb-12"
        >
          <div className="flex items-center gap-3">
            <div className="w-6 h-px bg-gold" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">
              Core Values
            </span>
          </div>
          <span className="text-[10px] tracking-[0.2em] uppercase text-black/20 dark:text-white/20 font-medium">
            {values.length} pillars
          </span>
        </motion.div>

        {/* ── Values grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl
                border border-black/8 dark:border-white/8
                bg-black/[0.015] dark:bg-white/[0.02]
                hover:border-gold/30 hover:bg-gold/[0.02]
                transition-all duration-400 p-6"
            >
              {/* Inner hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: 'radial-gradient(circle at 50% 0%, hsl(43 96% 56% / 0.08) 0%, transparent 65%)' }} />

              {/* Outlined index — decorative */}
              <span className="absolute top-3 right-4 font-bebas text-4xl leading-none
                text-transparent select-none"
                style={{ WebkitTextStroke: '1px hsl(43 96% 56% / 0.15)' }}>
                {value.index}
              </span>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-gold/8 group-hover:bg-gold/18
                  flex items-center justify-center mb-5 transition-colors duration-300">
                  <value.icon className="w-5 h-5 text-gold/70 group-hover:text-gold
                    transition-colors duration-300" />
                </div>

                <h3 className="font-bebas text-2xl sm:text-3xl leading-none tracking-tight
                  text-black dark:text-white mb-3">
                  {value.title.toUpperCase()}
                </h3>

                <p className="text-xs sm:text-sm text-black/45 dark:text-white/35 leading-relaxed">
                  {value.description}
                </p>

                {/* Bottom rule — slides in on hover */}
                <div className="mt-5 w-0 group-hover:w-full h-px bg-gold/25
                  transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}