'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, ArrowRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { getFeaturedProducts, formatPrice } from '@/lib/data'

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

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts()

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
              Featured
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Popular Products
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Discover our most loved gadgets chosen by thousands of satisfied customers
            </p>
          </div>
          <Link href="/products">
            <Button variant="outline" className="rounded-xl gap-2 group">
              View All Products
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featuredProducts.map((product) => {
            // Safe fallback: supports both old `image` string and new `images` array
            const firstImage =
              Array.isArray(product.images) && product.images.length > 0
                ? product.images[0]
                : (product as any).image || null

            // Skip rendering the card if there's no valid image
            if (!firstImage) return null

            return (
              <motion.div key={product.id} variants={itemVariants}>
                <div className="group relative bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gold/5 hover:border-gold/30">
                  {/* Image Container */}
                  <div className="relative aspect-square bg-muted overflow-hidden">
                    <Image
                      src={firstImage}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    
                    {/* Discount Badge */}
                    {product.originalPrice && (
                      <Badge className="absolute top-3 left-3 bg-gold text-navy-dark font-semibold">
                        Save {Math.round((1 - product.price / product.originalPrice) * 100)}%
                      </Badge>
                    )}
                    
                    {/* Quick Action */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 left-4 right-4">
                        <Link
                          href={`https://wa.me/2349035986632?text=Hi, I'm interested in ${encodeURIComponent(product.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl gap-2">
                            <MessageCircle className="w-4 h-4" />
                            Order on WhatsApp
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < Math.floor(product.rating)
                              ? 'text-gold fill-gold'
                              : 'text-border'
                          }`}
                        />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">
                        ({product.reviews})
                      </span>
                    </div>
                    
                    {/* Title */}
                    <Link href={`/products/${product.id}`}>
                      <h3 className="font-semibold text-foreground line-clamp-1 hover:text-gold transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    
                    {/* Description */}
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {product.description}
                    </p>
                    
                    {/* Price */}
                    <div className="mt-4 flex items-center gap-2">
                      <span className="text-lg font-bold text-gold">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                    
                    {/* View Details Button */}
                    <Link href={`/products/${product.id}`} className="block mt-4">
                      <Button variant="outline" className="w-full rounded-xl">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}