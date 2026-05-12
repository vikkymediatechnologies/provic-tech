'use client'

import { motion } from 'framer-motion'
import { Rocket, Users, Award, Globe } from 'lucide-react'

const milestones = [
  {
    year: '2024',
    title: 'The Beginning',
    description: 'Started as a small operation helping fellow students source quality laptops and accessories.',
    icon: Rocket,
  },
  {
    year: '2025',
    title: 'Growing Community',
    description: 'Reached our first 1,000 customers. Expanded to earbuds, keyboards, and power banks.',
    icon: Users,
  },
  {
    year: '2026',
    title: 'Building Trust',
    description: 'Established partnerships with authorized distributors. Launched tech consultation services.',
    icon: Award,
  },
  {
    year: '2027',
    title: 'Going Nationwide',
    description: 'Expanded delivery to all 36 states. Surpassed 5,000 happy customers. Launched premium workspace solutions.',
    icon: Globe,
  },
]

export function AboutTimeline() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Our Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Milestones That Define Us
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-px" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 pl-12 lg:pl-0 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                  <div className={`inline-block p-6 rounded-2xl bg-card border border-border hover:border-gold/30 transition-all hover:shadow-lg ${
                    index % 2 === 0 ? 'lg:ml-auto' : ''
                  }`}>
                    <span className="text-3xl font-bold text-gold">{milestone.year}</span>
                    <h3 className="text-xl font-semibold text-foreground mt-2 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-gold text-navy-dark z-10">
                  <milestone.icon className="w-4 h-4" />
                </div>

                {/* Empty space for alignment */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
