'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Heart, Lightbulb, Users, Award } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Trust',
    description: 'Honesty and transparency in every interaction',
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'Only authentic, premium products',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Your satisfaction drives our decisions',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Always improving our service and offerings',
  },
]

export function AboutMission() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 lg:p-10 rounded-3xl bg-card border border-border"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gold/10 mb-6">
              <Target className="w-7 h-7 text-gold" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To democratize access to premium technology by providing authentic, 
              high-quality gadgets at competitive prices, backed by exceptional 
              customer service that builds lasting trust with every interaction.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 lg:p-10 rounded-3xl bg-card border border-border"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gold/10 mb-6">
              <Eye className="w-7 h-7 text-gold" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become Nigeria&apos;s most trusted technology partner, known for 
              empowering students, developers, and creators with the tools they need 
              to build, create, and innovate without compromise.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Core Values
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            What We Stand For
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group text-center p-6 rounded-2xl bg-card border border-border hover:border-gold/30 transition-all hover:shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-muted group-hover:bg-gold/10 transition-colors mb-4">
                <value.icon className="w-6 h-6 text-muted-foreground group-hover:text-gold transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
