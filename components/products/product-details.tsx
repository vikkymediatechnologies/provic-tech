// 'use client'

// import { useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { motion } from 'framer-motion'
// import { 
//   Star, MessageCircle, Truck, Shield, RotateCcw,
//   ChevronLeft, Award, Package, Gift,
// } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import { Badge } from '@/components/ui/badge'
// import { Separator } from '@/components/ui/separator'
// import { type Product, formatPrice } from '@/lib/data'

// interface ProductDetailsProps {
//   product: Product
// }

// export function ProductDetails({ product }: ProductDetailsProps) {
//   const [selectedImage, setSelectedImage] = useState(0)

//   const productImages: string[] =
//     Array.isArray(product.images) && product.images.length > 0
//       ? product.images
//       : (product as any).image
//       ? [(product as any).image]
//       : ['/placeholder.jpg']

//   return (
//     <section className="py-8 lg:py-12">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//         {/* Breadcrumb */}
//         <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
//           <Link href="/products"
//             className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
//             <ChevronLeft className="w-4 h-4" />
//             Back to Products
//           </Link>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

//           {/* ── Image Gallery ── */}
//           <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
//             <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted mb-4">
//               <Image src={productImages[selectedImage]} alt={product.name} fill
//                 className="object-cover transition-all duration-300"
//                 sizes="(max-width: 1024px) 100vw, 50vw" priority />
//               {product.originalPrice && (
//                 <Badge className="absolute top-4 left-4 bg-gold text-navy-dark font-semibold">
//                   Save {Math.round((1 - product.price / product.originalPrice) * 100)}%
//                 </Badge>
//               )}
//             </div>
//             {productImages.length > 1 && (
//               <div className="flex gap-3">
//                 {productImages.map((image, index) => (
//                   <button key={index} onClick={() => setSelectedImage(index)}
//                     className={`relative w-20 h-20 rounded-xl overflow-hidden bg-muted border-2 transition-all ${
//                       selectedImage === index ? 'border-gold ring-2 ring-gold/20' : 'border-transparent hover:border-border'
//                     }`}>
//                     <Image src={image} alt={`${product.name} view ${index + 1}`} fill
//                       className="object-cover" sizes="80px" />
//                   </button>
//                 ))}
//               </div>
//             )}
//           </motion.div>

//           {/* ── Product Info ── */}
//           <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}>

//             <Badge variant="secondary" className="mb-4 capitalize">
//               {product.category.replace('-', ' ')}
//             </Badge>

//             <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{product.name}</h1>

//             {/* Rating */}
//             <div className="flex items-center gap-3 mb-6">
//               <div className="flex items-center gap-1">
//                 {Array.from({ length: 5 }).map((_, i) => (
//                   <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-border'}`} />
//                 ))}
//               </div>
//               <span className="text-sm text-muted-foreground">{product.rating} ({product.reviews} reviews)</span>
//             </div>

//             {/* Price */}
//             <div className="flex items-baseline gap-3 mb-6">
//               <span className="text-4xl font-bold text-gold">{formatPrice(product.price)}</span>
//               {product.originalPrice && (
//                 <span className="text-xl text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
//               )}
//             </div>

//             <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

//             {/* Free Gift */}
//             {product.freeGift && (
//               <div className="flex items-center gap-2 mb-6 p-3 rounded-xl bg-gold/8 border border-gold/20">
//                 <Gift className="w-4 h-4 text-gold flex-shrink-0" />
//                 <span className="text-sm font-semibold text-gold">
//                   Free Gift: {product.freeGift} 🎁
//                 </span>
//               </div>
//             )}

//             {/* Stock */}
//             <div className="flex items-center gap-2 mb-6">
//               {product.inStock ? (
//                 <><div className="w-3 h-3 rounded-full bg-green-500" />
//                   <span className="text-sm font-medium text-green-600">In Stock</span></>
//               ) : (
//                 <><div className="w-3 h-3 rounded-full bg-red-500" />
//                   <span className="text-sm font-medium text-red-600">Out of Stock</span></>
//               )}
//             </div>

//             {/* CTAs */}
//             <div className="flex flex-col sm:flex-row gap-4 mb-8">
//               <Link
//                 href={`https://wa.me/2349035986632?text=Hi, I want to order: ${encodeURIComponent(product.name)} - ${formatPrice(product.price)}`}
//                 target="_blank" rel="noopener noreferrer" className="flex-1">
//                 <Button size="lg"
//                   className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl h-14 text-base gap-2"
//                   disabled={!product.inStock}>
//                   <MessageCircle className="w-5 h-5" />
//                   Order on WhatsApp
//                 </Button>
//               </Link>
//               <Link href="tel:09035986632" className="flex-1">
//                 <Button size="lg" variant="outline" className="w-full rounded-xl h-14 text-base">
//                   Call to Order
//                 </Button>
//               </Link>
//             </div>

//             <Separator className="my-8" />

//             {/* Features grid */}
//             <div className="grid grid-cols-2 gap-4 mb-8">
//               <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
//                 <Truck className="w-5 h-5 text-gold" />
//                 <div>
//                   <p className="text-sm font-medium text-foreground">Delivery</p>
//                   <p className="text-xs text-muted-foreground">{product.deliveryTime || '1-5 business days'}</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
//                 <Shield className="w-5 h-5 text-gold" />
//                 <div>
//                   <p className="text-sm font-medium text-foreground">Warranty</p>
//                   <p className="text-xs text-muted-foreground">{product.warranty || 'Included'}</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
//                 <Award className="w-5 h-5 text-gold" />
//                 <div>
//                   <p className="text-sm font-medium text-foreground">Authentic</p>
//                   <p className="text-xs text-muted-foreground">100% Original</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
//                 <RotateCcw className="w-5 h-5 text-gold" />
//                 <div>
//                   <p className="text-sm font-medium text-foreground">Returns</p>
//                   <p className="text-xs text-muted-foreground">7-day return policy</p>
//                 </div>
//               </div>
//             </div>

//             {/* Specifications */}
//             {product.specifications && (
//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold text-foreground mb-4">Specifications</h3>
//                 <div className="rounded-xl border border-border overflow-hidden">
//                   {Object.entries(product.specifications).map(([key, value], i) => (
//                     <div key={key} className={`flex text-sm ${i % 2 === 0 ? 'bg-muted/30' : ''}`}>
//                       <span className="w-40 shrink-0 px-4 py-2.5 font-medium text-muted-foreground border-r border-border">{key}</span>
//                       <span className="px-4 py-2.5 text-foreground">{value}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* What's in the box */}
//             {product.whatsInTheBox && product.whatsInTheBox.length > 0 && (
//               <div>
//                 <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
//                   <Package className="w-5 h-5 text-gold" />
//                   What's in the Box
//                 </h3>
//                 <ul className="space-y-2">
//                   {product.whatsInTheBox.map((item, i) => (
//                     <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
//                       <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" />
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </motion.div>
//         </div>

//         {/* ── Reviews ── */}
//         {product.reviewList && product.reviewList.length > 0 && (
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }} className="mt-16">
//             <h2 className="text-2xl font-bold text-foreground mb-8">Customer Reviews ({product.reviews})</h2>

//             <div className="flex items-center gap-6 p-6 rounded-2xl bg-muted/50 mb-8">
//               <div className="text-center shrink-0">
//                 <p className="text-5xl font-bold text-gold">{product.rating}</p>
//                 <div className="flex items-center gap-0.5 justify-center mt-2">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-border'}`} />
//                   ))}
//                 </div>
//                 <p className="text-sm text-muted-foreground mt-1">{product.reviews} reviews</p>
//               </div>
//               <Separator orientation="vertical" className="h-20" />
//               <p className="text-sm text-muted-foreground leading-relaxed">
//                 Verified buyers consistently rate this product highly for quality, performance, and fast delivery from Provic Technologies.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {product.reviewList.map((review, index) => (
//                 <motion.div key={review.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3 + index * 0.1 }}
//                   className="p-5 rounded-2xl border border-border bg-card flex flex-col gap-3">
//                   <div className="flex items-center gap-3">
//                     <div className="w-10 h-10 rounded-full bg-gold/20 text-gold font-bold flex items-center justify-center text-sm shrink-0">
//                       {review.avatar}
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <p className="font-semibold text-foreground text-sm truncate">{review.author}</p>
//                       <p className="text-xs text-muted-foreground">{review.date}</p>
//                     </div>
//                     <Badge variant="secondary" className="text-xs shrink-0">Verified</Badge>
//                   </div>
//                   <div className="flex gap-0.5">
//                     {Array.from({ length: 5 }).map((_, i) => (
//                       <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? 'text-gold fill-gold' : 'text-border'}`} />
//                     ))}
//                   </div>
//                   <p className="text-sm text-muted-foreground leading-relaxed">{review.comment}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   )
// }



'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Star, MessageCircle, Truck, Shield, RotateCcw,
  ChevronLeft, Award, Package, Gift, ShoppingBag, Check, Quote,
} from 'lucide-react'
import { type Product, formatPrice } from '@/lib/data'
import { useCart } from '@/components/cart-context'

interface ProductDetailsProps {
  product: Product
}

const guarantees = [
  { icon: Truck,     title: 'Delivery',   key: 'deliveryTime', fallback: '1–5 business days' },
  { icon: Shield,    title: 'Warranty',   key: 'warranty',     fallback: 'Included'          },
  { icon: Award,     title: 'Authentic',  key: null,           fallback: '100% Original'     },
  { icon: RotateCcw, title: 'Returns',    key: null,           fallback: '7-day return policy'},
]

export function ProductDetails({ product }: ProductDetailsProps) {
  const { addItem } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [added, setAdded] = useState(false)

  const productImages: string[] =
    Array.isArray(product.images) && product.images.length > 0
      ? product.images
      : (product as any).image
      ? [(product as any).image]
      : ['/placeholder.jpg']

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null

  const handleAddToCart = () => {
    if (!product.inStock || added) return
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2500)
  }

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden bg-white dark:bg-[#080808]">

      {/* ── Ambient glow ── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[50vw] h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, hsl(43 96% 56% / 0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">

        {/* ── Breadcrumb ── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase
              text-black/40 dark:text-white/40 hover:text-gold transition-colors duration-200"
          >
            <ChevronLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
            Back to Products
          </Link>
        </motion.div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* LEFT — Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-3"
          >
            {/* main image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden
              bg-black/[0.03] dark:bg-white/[0.04]
              border border-black/8 dark:border-white/8">
              <Image
                src={productImages[selectedImage]}
                alt={product.name}
                fill
                className="object-cover transition-all duration-300"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {discount && (
                <span className="absolute top-4 left-4 px-2.5 py-1 rounded-xl
                  bg-gold text-black text-xs font-bold tracking-wide">
                  -{discount}%
                </span>
              )}
            </div>

            {/* thumbnails */}
            {productImages.length > 1 && (
              <div className="flex gap-2.5">
                {productImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden
                      border-2 transition-all duration-200
                      ${selectedImage === i
                        ? 'border-gold ring-2 ring-gold/20'
                        : 'border-black/8 dark:border-white/8 hover:border-gold/40'
                      }`}
                  >
                    <Image src={img} alt={`${product.name} view ${i + 1}`} fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* RIGHT — Info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            {/* eyebrow — category */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-gold" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">
                {product.category.replace('-', ' ')}
              </span>
            </div>

            {/* title */}
            <h1 className="font-bebas text-4xl sm:text-5xl lg:text-6xl leading-[0.9] tracking-tight text-black dark:text-white">
              {product.name}
            </h1>

            {/* stars */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${
                    i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-black/15 dark:text-white/15'
                  }`} />
                ))}
              </div>
              <span className="text-xs text-black/40 dark:text-white/40">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>

            {/* price */}
            <div className="flex items-baseline gap-3">
              <span className="font-bebas text-5xl tracking-wide text-gold">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-black/30 dark:text-white/30 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* description */}
            <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed">
              {product.description}
            </p>

            {/* free gift */}
            {(product as any).freeGift && (
              <div className="flex items-center gap-3 p-4 rounded-xl
                bg-gold/[0.06] border border-gold/20">
                <Gift className="w-4 h-4 text-gold shrink-0" />
                <span className="text-sm font-bold text-gold">
                  Free Gift: {(product as any).freeGift} 🎁
                </span>
              </div>
            )}

            {/* stock */}
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-emerald-500' : 'bg-red-500'}`} />
              <span className={`text-xs font-semibold tracking-wide ${
                product.inStock ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500'
              }`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {/* hairline */}
            <div className="h-px w-full bg-black/8 dark:bg-white/8" />

            {/* ── CTAs ── */}
            <div className="flex flex-col gap-3">
              {/* Row 1: WhatsApp + Call */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={`https://wa.me/2349035986632?text=Hi, I want to order: ${encodeURIComponent(product.name)} - ${formatPrice(product.price)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <motion.button
                    whileHover={{ scale: product.inStock ? 1.02 : 1 }}
                    whileTap={{ scale: product.inStock ? 0.98 : 1 }}
                    disabled={!product.inStock}
                    className="group w-full flex items-center justify-center gap-2.5 h-12 rounded-xl
                      bg-gold text-black text-sm font-bold tracking-wide
                      hover:bg-gold/90 disabled:opacity-50 disabled:cursor-not-allowed
                      transition-all duration-300 shadow-lg shadow-gold/20"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Order on WhatsApp
                  </motion.button>
                </Link>

                <Link href="tel:09035986632" className="flex-1">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2.5 h-12 rounded-xl
                      border border-black/15 dark:border-white/15
                      text-black/60 dark:text-white/60
                      hover:border-gold/40 hover:text-black dark:hover:text-white
                      text-sm font-semibold tracking-wide
                      transition-all duration-300"
                  >
                    Call to Order
                  </motion.button>
                </Link>
              </div>

              {/* Row 2: Add to cart — full width */}
              <motion.button
                whileHover={{ scale: product.inStock ? 1.02 : 1 }}
                whileTap={{ scale: product.inStock ? 0.98 : 1 }}
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`w-full flex items-center justify-center gap-2.5 h-12 rounded-xl
                  text-sm font-bold tracking-wide
                  disabled:opacity-40 disabled:cursor-not-allowed
                  transition-all duration-300
                  ${added
                    ? 'bg-emerald-500 text-white'
                    : 'border border-black/15 dark:border-white/15 text-black/60 dark:text-white/60 hover:border-gold/40 hover:text-black dark:hover:text-white'
                  }`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {added ? (
                    <motion.span key="added"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{   opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-2"
                    >
                      <Check className="w-4 h-4" />
                      Added to Cart
                    </motion.span>
                  ) : (
                    <motion.span key="add"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{   opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-2"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Add to Cart
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            {/* guarantee tiles */}
            <div className="grid grid-cols-2 gap-2.5">
              {guarantees.map(({ icon: Icon, title, key, fallback }) => (
                <div key={title}
                  className="flex items-center gap-3 p-4 rounded-xl
                    bg-black/[0.02] dark:bg-white/[0.03]
                    border border-black/8 dark:border-white/8">
                  <Icon className="w-4 h-4 text-gold shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-black/70 dark:text-white/70">{title}</p>
                    <p className="text-[10px] text-black/35 dark:text-white/35">
                      {key ? (product as any)[key] ?? fallback : fallback}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* specs */}
            {product.specifications && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-px bg-gold" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">
                    Specifications
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden border border-black/8 dark:border-white/8">
                  {Object.entries(product.specifications).map(([key, value], i, arr) => (
                    <div
                      key={key}
                      className={`flex text-sm
                        ${i < arr.length - 1 ? 'border-b border-black/6 dark:border-white/6' : ''}
                        ${i % 2 === 0 ? 'bg-black/[0.01] dark:bg-white/[0.01]' : ''}`}
                    >
                      <span className="w-36 shrink-0 px-4 py-2.5 text-xs font-semibold
                        text-black/40 dark:text-white/40 border-r border-black/6 dark:border-white/6">
                        {key}
                      </span>
                      <span className="px-4 py-2.5 text-xs text-black/70 dark:text-white/70">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* what's in the box */}
            {(product as any).whatsInTheBox && (product as any).whatsInTheBox.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-px bg-gold" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold flex items-center gap-2">
                    <Package className="w-3.5 h-3.5" />
                    What&apos;s in the Box
                  </span>
                </div>
                <ul className="flex flex-col gap-2">
                  {(product as any).whatsInTheBox.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-black/50 dark:text-white/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>

        {/* ══ REVIEWS ══ */}
        {product.reviewList && product.reviewList.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 pt-16 border-t border-black/8 dark:border-white/8"
          >
            {/* section header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-px bg-gold" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">
                    Customer Reviews
                  </span>
                </div>
                <div className="overflow-hidden">
                  <motion.h2
                    initial={{ y: '100%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="font-bebas text-5xl sm:text-6xl leading-[0.9] tracking-tight text-black dark:text-white"
                  >
                    WHAT BUYERS SAY
                  </motion.h2>
                </div>
              </div>

              {/* rating summary */}
              <div className="flex items-center gap-4 p-5 rounded-2xl
                bg-black/[0.02] dark:bg-white/[0.03]
                border border-black/8 dark:border-white/8 shrink-0">
                <div className="text-center">
                  <p className="font-bebas text-5xl leading-none text-gold">{product.rating}</p>
                  <div className="flex items-center gap-0.5 justify-center mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${
                        i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-black/15 dark:text-white/15'
                      }`} />
                    ))}
                  </div>
                  <p className="text-[10px] text-black/35 dark:text-white/35 mt-1">
                    {product.reviews} reviews
                  </p>
                </div>
              </div>
            </div>

            {/* review cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {product.reviewList.map((review, i) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative flex flex-col gap-4 p-6 rounded-2xl overflow-hidden
                    bg-black/[0.02] dark:bg-white/[0.03]
                    border border-black/8 dark:border-white/8
                    hover:border-gold/30 transition-all duration-300"
                >
                  {/* quote watermark */}
                  <Quote className="absolute bottom-4 right-4 w-12 h-12
                    text-black/[0.04] dark:text-white/[0.04]
                    group-hover:text-gold/[0.07] transition-colors duration-300 pointer-events-none" />

                  {/* stars */}
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className={`w-3.5 h-3.5 ${
                        s < review.rating ? 'text-gold fill-gold' : 'text-black/15 dark:text-white/15'
                      }`} />
                    ))}
                  </div>

                  {/* comment */}
                  <p className="relative text-sm text-black/55 dark:text-white/55 leading-relaxed">
                    &ldquo;{review.comment}&rdquo;
                  </p>

                  {/* divider */}
                  <div className="h-px w-full bg-black/8 dark:bg-white/8 group-hover:bg-gold/20 transition-colors duration-300" />

                  {/* author */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gold/10 text-gold font-bold
                        flex items-center justify-center text-sm shrink-0
                        ring-2 ring-gold/20">
                        {review.avatar}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-black/70 dark:text-white/70">{review.author}</p>
                        <p className="text-[10px] text-black/35 dark:text-white/35">{review.date}</p>
                      </div>
                    </div>
                    <span className="text-[10px] tracking-[0.15em] uppercase text-gold font-bold
                      px-2 py-0.5 rounded-lg bg-gold/10">
                      Verified
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}