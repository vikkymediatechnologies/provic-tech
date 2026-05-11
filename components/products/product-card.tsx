'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Star, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { type Product, formatPrice } from '@/lib/data'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gold/5 hover:border-gold/30 h-full flex flex-col">
      {/* Image Container */}
      <div className="relative aspect-square bg-muted overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.originalPrice && (
            <Badge className="bg-gold text-navy-dark font-semibold">
              Save {Math.round((1 - product.price / product.originalPrice) * 100)}%
            </Badge>
          )}
          {!product.inStock && (
            <Badge variant="destructive">Out of Stock</Badge>
          )}
        </div>
        
        {/* Quick Action Overlay */}
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
      <div className="p-5 flex flex-col flex-1">
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
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2 flex-1">
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
  )
}
