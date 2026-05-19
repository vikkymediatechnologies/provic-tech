'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { type Product } from '@/lib/data'

export interface CartItem {
  product: Product
  quantity: number
}

interface CartContextValue {
  items:       CartItem[]
  totalCount:  number
  totalPrice:  number
  addItem:     (product: Product) => void
  removeItem:  (productId: string) => void
  updateQty:   (productId: string, qty: number) => void
  clearCart:   () => void
  isOpen:      boolean
  openCart:    () => void
  closeCart:   () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items,   setItems  ] = useState<CartItem[]>([])
  const [isOpen,  setIsOpen ] = useState(false)

  const totalCount = items.reduce((s, i) => s + i.quantity, 0)
  const totalPrice = items.reduce((s, i) => s + i.product.price * i.quantity, 0)

  const addItem = useCallback((product: Product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id)
      if (existing) return prev.map((i) => i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i)
      return [...prev, { product, quantity: 1 }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId))
  }, [])

  const updateQty = useCallback((productId: string, qty: number) => {
    if (qty < 1) return
    setItems((prev) => prev.map((i) => i.product.id === productId ? { ...i, quantity: qty } : i))
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  return (
    <CartContext.Provider value={{
      items, totalCount, totalPrice,
      addItem, removeItem, updateQty, clearCart,
      isOpen, openCart: () => setIsOpen(true), closeCart: () => setIsOpen(false),
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>')
  return ctx
}