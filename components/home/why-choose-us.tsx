'use client'

import { motion } from 'framer-motion'
import { 
  ShieldCheck, 
  Truck, 
  Lock, 
  BadgeDollarSign, 
  GraduationCap, 
  HeadphonesIcon 
} from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Trusted Vendors',
    description: 'We source only from verified and authorized distributors worldwide.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Swift nationwide delivery with real-time tracking and updates.',
  },
  {
    icon: Lock,
    title: 'Secure Transactions',
    description: 'Your payments are protected with industry-standard security.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Affordable Pricing',
    description: 'Competitive prices and flexible payment options for everyone.',
  },
  {
    icon: GraduationCap,
    title: 'Student-Friendly',
    description: 'Special discounts and installment plans for students.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Tech Expert Support',
    description: 'Get personalized advice from our tech-savvy support team.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            The Provic Advantage
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            We go beyond just selling gadgets. Experience premium service that makes tech shopping a joy.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group"
            >
              <div className="relative h-full p-6 lg:p-8 rounded-2xl bg-card border border-border transition-all duration-300 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/5">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold/10 group-hover:bg-gold/20 transition-colors mb-5">
                    <feature.icon className="w-6 h-6 text-gold" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Number Badge */}
                <div className="absolute top-6 right-6 text-6xl font-bold text-muted/30 select-none">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
