// 'use client'

// import { useState, useMemo } from 'react'
// import { useSearchParams } from 'next/navigation'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Search, X, ChevronDown, SlidersHorizontal } from 'lucide-react'
// import { products, categories } from '@/lib/data'
// import { ProductCard } from './product-card'

// const sortOptions = [
//   { value: 'featured',   label: 'Featured'            },
//   { value: 'price-low',  label: 'Price: Low → High'   },
//   { value: 'price-high', label: 'Price: High → Low'   },
//   { value: 'rating',     label: 'Highest Rated'        },
//   { value: 'newest',     label: 'Newest'               },
// ]

// const PRODUCTS_PER_PAGE = 12

// // ─── Minimal native select ────────────────────────────────────────────────────
// function PremiumSelect({
//   value,
//   onChange,
//   options,
//   placeholder,
// }: {
//   value: string
//   onChange: (v: string) => void
//   options: { value: string; label: string }[]
//   placeholder?: string
// }) {
//   return (
//     <div className="relative">
//       <select
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         className="appearance-none h-10 pl-4 pr-9 rounded-xl text-sm
//           bg-black/[0.02] dark:bg-white/[0.03]
//           border border-black/10 dark:border-white/10
//           text-black/70 dark:text-white/70
//           focus:outline-none focus:border-gold/50
//           transition-all duration-200 cursor-pointer"
//       >
//         {placeholder && (
//           <option value="" disabled>{placeholder}</option>
//         )}
//         {options.map((o) => (
//           <option key={o.value} value={o.value}>{o.label}</option>
//         ))}
//       </select>
//       <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-black/30 dark:text-white/30 pointer-events-none" />
//     </div>
//   )
// }

// // ─── Main ─────────────────────────────────────────────────────────────────────
// export function ProductsContent() {
//   const searchParams = useSearchParams()
//   const initialCategory = searchParams.get('category') || 'all'

//   const [searchQuery,      setSearchQuery     ] = useState('')
//   const [selectedCategory, setSelectedCategory] = useState(initialCategory)
//   const [sortBy,           setSortBy          ] = useState('featured')
//   const [currentPage,      setCurrentPage     ] = useState(1)

//   const allCategoryOptions = [
//     { value: 'all', label: 'All Categories' },
//     ...categories.map((c) => ({ value: c.id, label: c.name })),
//   ]

//   const filteredProducts = useMemo(() => {
//     let result = [...products]
//     if (selectedCategory !== 'all') result = result.filter((p) => p.category === selectedCategory)
//     if (searchQuery) {
//       const q = searchQuery.toLowerCase()
//       result = result.filter((p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q))
//     }
//     switch (sortBy) {
//       case 'price-low':  result.sort((a, b) => a.price - b.price); break
//       case 'price-high': result.sort((a, b) => b.price - a.price); break
//       case 'rating':     result.sort((a, b) => b.rating - a.rating); break
//       case 'newest':     result.reverse(); break
//       default:           result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
//     }
//     return result
//   }, [selectedCategory, searchQuery, sortBy])

//   const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)
//   const paginatedProducts = filteredProducts.slice(
//     (currentPage - 1) * PRODUCTS_PER_PAGE,
//     currentPage * PRODUCTS_PER_PAGE,
//   )

//   const handleCategoryChange = (cat: string) => { setSelectedCategory(cat); setCurrentPage(1) }
//   const clearFilters = () => { setSearchQuery(''); setSelectedCategory('all'); setSortBy('featured'); setCurrentPage(1) }
//   const hasActiveFilters = searchQuery || selectedCategory !== 'all' || sortBy !== 'featured'

//   return (
//     <div className="relative py-12 overflow-hidden bg-white dark:bg-[#080808]">

//       {/* ambient glow */}
//       <div
//         className="absolute top-0 left-1/2 -translate-x-1/2 w-[50vw] h-80 pointer-events-none"
//         style={{
//           background: 'radial-gradient(ellipse, hsl(43 96% 56% / 0.04) 0%, transparent 70%)',
//           filter: 'blur(60px)',
//         }}
//       />

//       <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">

//         {/* ── Filter bar ── */}
//         <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8">

//           {/* search */}
//           <div className="relative flex-1 max-w-sm">
//             <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30 dark:text-white/30" />
//             <input
//               type="search"
//               placeholder="Search products…"
//               value={searchQuery}
//               onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1) }}
//               className="w-full h-10 pl-10 pr-4 rounded-xl text-sm
//                 bg-black/[0.02] dark:bg-white/[0.03]
//                 border border-black/10 dark:border-white/10
//                 text-black dark:text-white placeholder:text-black/25 dark:placeholder:text-white/25
//                 focus:outline-none focus:border-gold/50
//                 transition-all duration-200"
//             />
//           </div>

//           <div className="flex items-center gap-2.5 flex-wrap">
//             <PremiumSelect
//               value={selectedCategory}
//               onChange={handleCategoryChange}
//               options={allCategoryOptions}
//             />
//             <PremiumSelect
//               value={sortBy}
//               onChange={setSortBy}
//               options={sortOptions}
//             />

//             {hasActiveFilters && (
//               <motion.button
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 onClick={clearFilters}
//                 className="flex items-center gap-1.5 h-10 px-4 rounded-xl text-xs font-semibold
//                   border border-black/10 dark:border-white/10
//                   text-black/50 dark:text-white/50
//                   hover:border-gold/40 hover:text-gold
//                   transition-all duration-200"
//               >
//                 <X className="w-3.5 h-3.5" />
//                 Clear
//               </motion.button>
//             )}
//           </div>
//         </div>

//         {/* ── Results meta row ── */}
//         <div className="flex items-center justify-between mb-8">
//           <div className="flex items-center gap-3">
//             <div className="w-4 h-px bg-gold" />
//             <span className="text-[10px] tracking-[0.2em] uppercase text-black/40 dark:text-white/40">
//               {filteredProducts.length} Product{filteredProducts.length !== 1 ? 's' : ''}
//             </span>
//           </div>
//           {selectedCategory !== 'all' && (
//             <motion.button
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               onClick={() => handleCategoryChange('all')}
//               className="flex items-center gap-1.5 px-3 py-1 rounded-lg
//                 bg-gold/10 border border-gold/20 text-gold
//                 text-[10px] font-bold tracking-[0.15em] uppercase
//                 hover:bg-gold/20 transition-all duration-200"
//             >
//               {categories.find((c) => c.id === selectedCategory)?.name}
//               <X className="w-3 h-3" />
//             </motion.button>
//           )}
//         </div>

//         {/* ── Grid ── */}
//         <AnimatePresence mode="wait">
//           {paginatedProducts.length > 0 ? (
//             <motion.div
//               key={`${selectedCategory}-${sortBy}-${currentPage}`}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4"
//             >
//               {paginatedProducts.map((product, i) => (
//                 <motion.div
//                   key={product.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
//                 >
//                   <ProductCard product={product} />
//                 </motion.div>
//               ))}
//             </motion.div>
//           ) : (
//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="flex flex-col items-center justify-center py-24 text-center"
//             >
//               <div className="w-14 h-14 rounded-xl bg-black/[0.03] dark:bg-white/[0.04]
//                 border border-black/8 dark:border-white/8
//                 flex items-center justify-center mb-5">
//                 <Search className="w-6 h-6 text-black/25 dark:text-white/25" />
//               </div>
//               <h3 className="font-bebas text-3xl tracking-tight text-black dark:text-white mb-2">
//                 No Products Found
//               </h3>
//               <p className="text-sm text-black/40 dark:text-white/40 mb-6 max-w-xs">
//                 Try adjusting your search or filter criteria.
//               </p>
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 onClick={clearFilters}
//                 className="flex items-center gap-2 h-10 px-6 rounded-xl
//                   border border-black/15 dark:border-white/15
//                   text-sm font-semibold text-black/60 dark:text-white/60
//                   hover:border-gold/40 hover:text-gold
//                   transition-all duration-300"
//               >
//                 <SlidersHorizontal className="w-3.5 h-3.5" />
//                 Clear Filters
//               </motion.button>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* ── Pagination ── */}
//         {totalPages > 1 && (
//           <div className="flex items-center justify-center gap-2 mt-14">

//             {/* prev */}
//             <motion.button
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//               onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
//               disabled={currentPage === 1}
//               className="h-9 px-4 rounded-xl text-xs font-semibold
//                 border border-black/10 dark:border-white/10
//                 text-black/50 dark:text-white/50
//                 hover:border-gold/40 hover:text-gold
//                 disabled:opacity-30 disabled:cursor-not-allowed
//                 transition-all duration-200"
//             >
//               Prev
//             </motion.button>

//             {/* page numbers */}
//             <div className="flex items-center gap-1.5">
//               {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                 <motion.button
//                   key={page}
//                   whileHover={{ scale: 1.08 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setCurrentPage(page)}
//                   className={`w-9 h-9 rounded-xl text-xs font-bold transition-all duration-200 ${
//                     currentPage === page
//                       ? 'bg-gold text-black shadow-md shadow-gold/20'
//                       : 'border border-black/10 dark:border-white/10 text-black/50 dark:text-white/50 hover:border-gold/40 hover:text-gold'
//                   }`}
//                 >
//                   {page}
//                 </motion.button>
//               ))}
//             </div>

//             {/* next */}
//             <motion.button
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//               onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
//               disabled={currentPage === totalPages}
//               className="h-9 px-4 rounded-xl text-xs font-semibold
//                 border border-black/10 dark:border-white/10
//                 text-black/50 dark:text-white/50
//                 hover:border-gold/40 hover:text-gold
//                 disabled:opacity-30 disabled:cursor-not-allowed
//                 transition-all duration-200"
//             >
//               Next
//             </motion.button>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }







'use client'

import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, ChevronDown, SlidersHorizontal } from 'lucide-react'
import { products, categories } from '@/lib/data'
import { ProductCard } from './product-card'

const sortOptions = [
  { value: 'featured',   label: 'Featured'          },
  { value: 'price-low',  label: 'Price: Low → High' },
  { value: 'price-high', label: 'Price: High → Low' },
  { value: 'rating',     label: 'Highest Rated'     },
  { value: 'newest',     label: 'Newest'            },
]

const PRODUCTS_PER_PAGE = 12

// ─── Native premium select ────────────────────────────────────────────────────
function PremiumSelect({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string
  onChange: (v: string) => void
  options: { value: string; label: string }[]
  placeholder?: string
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none h-10 pl-4 pr-9 rounded-xl text-sm
          bg-black/[0.02] dark:bg-white/[0.03]
          border border-black/10 dark:border-white/10
          text-black/70 dark:text-white/70
          focus:outline-none focus:border-gold/50
          transition-all duration-200 cursor-pointer"
      >
        {placeholder && (
          <option value="" disabled>{placeholder}</option>
        )}
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5
        text-black/30 dark:text-white/30 pointer-events-none" />
    </div>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export function ProductsContent() {
  const searchParams   = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'

  const [searchQuery,      setSearchQuery     ] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [sortBy,           setSortBy          ] = useState('featured')
  const [currentPage,      setCurrentPage     ] = useState(1)

  const allCategoryOptions = [
    { value: 'all', label: 'All Categories' },
    ...categories.map((c) => ({ value: c.id, label: c.name })),
  ]

  const filteredProducts = useMemo(() => {
    let result = [...products]
    if (selectedCategory !== 'all') result = result.filter((p) => p.category === selectedCategory)
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      )
    }
    switch (sortBy) {
      case 'price-low':  result.sort((a, b) => a.price - b.price); break
      case 'price-high': result.sort((a, b) => b.price - a.price); break
      case 'rating':     result.sort((a, b) => b.rating - a.rating); break
      case 'newest':     result.reverse(); break
      default:           result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }
    return result
  }, [selectedCategory, searchQuery, sortBy])

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE,
  )

  const handleCategoryChange = (cat: string) => { setSelectedCategory(cat); setCurrentPage(1) }
  const clearFilters = () => {
    setSearchQuery('')
    setSelectedCategory('all')
    setSortBy('featured')
    setCurrentPage(1)
  }
  const hasActiveFilters = searchQuery || selectedCategory !== 'all' || sortBy !== 'featured'

  return (
    <div className="relative py-12 overflow-hidden bg-white dark:bg-[#080808]">

      {/* ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[50vw] h-80 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, hsl(43 96% 56% / 0.04) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">

        {/* ── Filter bar ── */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8">

          {/* search */}
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4
              text-black/30 dark:text-white/30" />
            <input
              type="search"
              placeholder="Search products…"
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1) }}
              className="w-full h-10 pl-10 pr-4 rounded-xl text-sm
                bg-black/[0.02] dark:bg-white/[0.03]
                border border-black/10 dark:border-white/10
                text-black dark:text-white
                placeholder:text-black/25 dark:placeholder:text-white/25
                focus:outline-none focus:border-gold/50
                transition-all duration-200"
            />
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            <PremiumSelect
              value={selectedCategory}
              onChange={handleCategoryChange}
              options={allCategoryOptions}
            />
            <PremiumSelect
              value={sortBy}
              onChange={setSortBy}
              options={sortOptions}
            />

            {hasActiveFilters && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={clearFilters}
                className="flex items-center gap-1.5 h-10 px-4 rounded-xl text-xs font-semibold
                  border border-black/10 dark:border-white/10
                  text-black/50 dark:text-white/50
                  hover:border-gold/40 hover:text-gold
                  transition-all duration-200"
              >
                <X className="w-3.5 h-3.5" />
                Clear
              </motion.button>
            )}
          </div>
        </div>

        {/* ── Results meta row ── */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-4 h-px bg-gold" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-black/40 dark:text-white/40">
              {filteredProducts.length} Product{filteredProducts.length !== 1 ? 's' : ''}
            </span>
          </div>
          {selectedCategory !== 'all' && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => handleCategoryChange('all')}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg
                bg-gold/10 border border-gold/20 text-gold
                text-[10px] font-bold tracking-[0.15em] uppercase
                hover:bg-gold/20 transition-all duration-200"
            >
              {categories.find((c) => c.id === selectedCategory)?.name}
              <X className="w-3 h-3" />
            </motion.button>
          )}
        </div>

        {/* ── Grid ── */}
        <AnimatePresence mode="wait">
          {paginatedProducts.length > 0 ? (
            <motion.div
              key={`${selectedCategory}-${sortBy}-${currentPage}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4"
            >
              {paginatedProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <div className="w-14 h-14 rounded-xl
                bg-black/[0.03] dark:bg-white/[0.04]
                border border-black/8 dark:border-white/8
                flex items-center justify-center mb-5">
                <Search className="w-6 h-6 text-black/25 dark:text-white/25" />
              </div>
              <h3 className="font-bebas text-3xl tracking-tight text-black dark:text-white mb-2">
                No Products Found
              </h3>
              <p className="text-sm text-black/40 dark:text-white/40 mb-6 max-w-xs">
                Try adjusting your search or filter criteria.
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={clearFilters}
                className="flex items-center gap-2 h-10 px-6 rounded-xl
                  border border-black/15 dark:border-white/15
                  text-sm font-semibold text-black/60 dark:text-white/60
                  hover:border-gold/40 hover:text-gold
                  transition-all duration-300"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Clear Filters
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-14">

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="h-9 px-4 rounded-xl text-xs font-semibold
                border border-black/10 dark:border-white/10
                text-black/50 dark:text-white/50
                hover:border-gold/40 hover:text-gold
                disabled:opacity-30 disabled:cursor-not-allowed
                transition-all duration-200"
            >
              Prev
            </motion.button>

            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <motion.button
                  key={page}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentPage(page)}
                  className={`w-9 h-9 rounded-xl text-xs font-bold transition-all duration-200 ${
                    currentPage === page
                      ? 'bg-gold text-black shadow-md shadow-gold/20'
                      : 'border border-black/10 dark:border-white/10 text-black/50 dark:text-white/50 hover:border-gold/40 hover:text-gold'
                  }`}
                >
                  {page}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="h-9 px-4 rounded-xl text-xs font-semibold
                border border-black/10 dark:border-white/10
                text-black/50 dark:text-white/50
                hover:border-gold/40 hover:text-gold
                disabled:opacity-30 disabled:cursor-not-allowed
                transition-all duration-200"
            >
              Next
            </motion.button>
          </div>
        )}
      </div>
    </div>
  )
}