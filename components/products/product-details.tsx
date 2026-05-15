'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Star, 
  MessageCircle, 
  Truck, 
  Shield, 
  RotateCcw, 
  ChevronLeft,
  Award
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { type Product, formatPrice } from '@/lib/data'

interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  // Safe fallback: supports both old `image` string and new `images` array
  const productImages: string[] =
    Array.isArray(product.images) && product.images.length > 0
      ? product.images
      : (product as any).image
      ? [(product as any).image]
      : ['/placeholder.jpg']

  return (
    <section className="py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Main Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted mb-4">
              <Image
                src={productImages[selectedImage]}
                alt={product.name}
                fill
                className="object-cover transition-all duration-300"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {product.originalPrice && (
                <Badge className="absolute top-4 left-4 bg-gold text-navy-dark font-semibold">
                  Save {Math.round((1 - product.price / product.originalPrice) * 100)}%
                </Badge>
              )}
            </div>
            
            {/* Thumbnails — only show if more than 1 image */}
            {productImages.length > 1 && (
              <div className="flex gap-3">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden bg-muted border-2 transition-all ${
                      selectedImage === index
                        ? 'border-gold ring-2 ring-gold/20'
                        : 'border-transparent hover:border-border'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Category Badge */}
            <Badge variant="secondary" className="mb-4 capitalize">
              {product.category.replace('-', ' ')}
            </Badge>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-gold fill-gold'
                        : 'text-border'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-bold text-gold">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Stock Status */}
            <div className="flex items-center gap-2 mb-6">
              {product.inStock ? (
                <>
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-sm font-medium text-green-600">In Stock</span>
                </>
              ) : (
                <>
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="text-sm font-medium text-red-600">Out of Stock</span>
                </>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href={`https://wa.me/2349035986632?text=Hi, I want to order: ${encodeURIComponent(product.name)} - ${formatPrice(product.price)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button 
                  size="lg" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl h-14 text-base gap-2"
                  disabled={!product.inStock}
                >
                  <MessageCircle className="w-5 h-5" />
                  Order on WhatsApp
                </Button>
              </Link>
              <Link href="tel:09035986632" className="flex-1">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full rounded-xl h-14 text-base gap-2"
                >
                  Call to Order
                </Button>
              </Link>
            </div>

            <Separator className="my-8" />

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
                <Truck className="w-5 h-5 text-gold" />
                <div>
                  <p className="text-sm font-medium text-foreground">Fast Delivery</p>
                  <p className="text-xs text-muted-foreground">{product.deliveryTime || '2-5 days'}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
                <Shield className="w-5 h-5 text-gold" />
                <div>
                  <p className="text-sm font-medium text-foreground">Warranty</p>
                  <p className="text-xs text-muted-foreground">{product.warranty || 'Included'}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
                <Award className="w-5 h-5 text-gold" />
                <div>
                  <p className="text-sm font-medium text-foreground">Authentic</p>
                  <p className="text-xs text-muted-foreground">100% Original</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
                <RotateCcw className="w-5 h-5 text-gold" />
                <div>
                  <p className="text-sm font-medium text-foreground">Returns</p>
                  <p className="text-xs text-muted-foreground">7-day policy</p>
                </div>
              </div>
            </div>

            {/* Specifications */}
            {product.specifications && (
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Specifications
                </h3>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div 
                      key={key} 
                      className="flex items-center justify-between py-2 border-b border-border last:border-0"
                    >
                      <span className="text-sm text-muted-foreground">{key}</span>
                      <span className="text-sm font-medium text-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* ── REVIEWS SECTION ── */}
        {product.reviewList && product.reviewList.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Customer Reviews ({product.reviews})
            </h2>

            {/* Average Rating Summary */}
            <div className="flex items-center gap-6 p-6 rounded-2xl bg-muted/50 mb-8">
              <div className="text-center shrink-0">
                <p className="text-5xl font-bold text-gold">{product.rating}</p>
                <div className="flex items-center gap-0.5 justify-center mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-border'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-1">{product.reviews} reviews</p>
              </div>
              <Separator orientation="vertical" className="h-20" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Customers love this product for its quality, performance, and fast delivery. 
                Verified buyers rate it highly for value and reliability.
              </p>
            </div>

            {/* Review Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.reviewList.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="p-5 rounded-2xl border border-border bg-card flex flex-col gap-3"
                >
                  {/* Reviewer Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/20 text-gold font-bold flex items-center justify-center text-sm shrink-0">
                      {review.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground text-sm truncate">{review.author}</p>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs shrink-0">Verified</Badge>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < review.rating ? 'text-gold fill-gold' : 'text-border'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-sm text-muted-foreground leading-relaxed">{review.comment}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}