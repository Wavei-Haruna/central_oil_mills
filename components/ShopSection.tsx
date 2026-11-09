'use client'

import { useCallback, useMemo, useState } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { BulkBanner } from './BulkBanner'
import { CartBar } from './CartBar'
import { CategoryTabs } from './CategoryTabs'
import { products } from './data'
import { SectionHeading } from './SectionHeading'
import { ProductCard } from './ProductCard'
import type { Category, Product } from './types'

export function ShopSection() {
  const [category, setCategory] = useState<Category>('all')
  const [cart, setCart] = useState<Record<string, number>>({})

  const visible = useMemo(
    () => (category === 'all' ? products : products.filter((p) => p.category === category)),
    [category],
  )

  const addToCart = useCallback((product: Product, quantity: number) => {
    setCart((prev) => ({ ...prev, [product.id]: (prev[product.id] ?? 0) + quantity }))
  }, [])

  const { count, total } = useMemo(() => {
    let count = 0
    let total = 0
    for (const product of products) {
      const qty = cart[product.id] ?? 0
      count += qty
      total += qty * product.price
    }
    return { count, total }
  }, [cart])

  return (
    // Respects the visitor's "reduce motion" setting automatically
    <MotionConfig reducedMotion="user">
      <section id="shop" className="bg-[#f1f7e9] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading />
            <div className="flex flex-col gap-3 lg:items-end">
              <CategoryTabs active={category} onChange={setCategory} />
              <p className="text-xs text-[#15352b]/50">Demo catalogue · {visible.length} of {products.length} products</p>
            </div>
          </div>

          <motion.div layout className="mt-12 grid gap-6 lg:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {visible.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} onAdd={addToCart} />
              ))}
            </AnimatePresence>
          </motion.div>

          <BulkBanner />

          <p className="mt-8 text-center text-sm text-[#15352b]/55">
            Ordering for a business?{' '}
            <a href="#bulk" className="font-bold text-[#009E4A] underline underline-offset-4">
              Get bulk pricing for restaurants, caterers, retailers and processors.
            </a>
          </p>
        </div>
      </section>

      <CartBar count={count} total={total} />
    </MotionConfig>
  )
}
