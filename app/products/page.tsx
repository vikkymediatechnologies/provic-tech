import { Suspense } from 'react'
import type { Metadata } from 'next'
import { ProductsContent } from '@/components/products/products-content'
import { ProductsHero } from '@/components/products/products-hero'
import { Skeleton } from '@/components/ui/skeleton'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse our collection of premium tech gadgets including laptops, earbuds, keyboards, smartwatches, power banks, and accessories.',
}

function ProductsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="rounded-2xl border border-border overflow-hidden">
          <Skeleton className="aspect-square" />
          <div className="p-5 space-y-3">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<ProductsSkeleton />}>
            <ProductsContent />
          </Suspense>
        </div>
      </section>
    </>
  )
}
