'use client'

import { motion } from 'framer-motion'
import { 
  ShoppingBag, 
  Search, 
  MessageCircle, 
  Monitor, 
  GraduationCap,
  Check,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { services } from '@/lib/data'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShoppingBag,
  Search,
  MessageCircle,
  Monitor,
  GraduationCap,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export function ServicesList() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || ShoppingBag
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Content */}
                  <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gold/10 mb-6 group-hover:bg-gold/20 transition-colors">
                      <Icon className="w-7 h-7 text-gold" />
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-gold/10">
                            <Check className="w-3 h-3 text-gold" />
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      href="https://wa.me/2349035986632?text=Hi, I'm interested in your service: "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-gold hover:bg-gold-dark text-navy-dark rounded-xl gap-2 group/btn">
                        Get Started
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                  </div>

                  {/* Visual Card */}
                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="relative p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-muted/50 to-muted border border-border group-hover:border-gold/30 transition-all group-hover:shadow-xl group-hover:shadow-gold/5">
                      {/* Decorative Elements */}
                      <div className="absolute top-4 right-4 w-20 h-20 bg-gold/10 rounded-full blur-2xl" />
                      <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary/10 rounded-full blur-2xl" />
                      
                      {/* Number */}
                      <div className="relative">
                        <span className="text-8xl lg:text-9xl font-bold text-gold/10">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon className="w-16 h-16 lg:w-20 lg:h-20 text-gold/30" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Separator */}
                {index < services.length - 1 && (
                  <div className="mt-16 border-t border-border" />
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
