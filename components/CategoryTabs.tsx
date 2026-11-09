'use client'

import { motion } from 'framer-motion'
import { categories } from './data'
import { spring } from './motion'
import type { Category } from './types'

type Props = {
  active: Category
  onChange: (category: Category) => void
}

export function CategoryTabs({ active, onChange }: Props) {
  return (
    <div
      role="tablist"
      aria-label="Filter products"
      className="inline-flex rounded-full border border-[#15352b]/10 bg-white p-1.5 shadow-sm"
    >
      {categories.map((category) => {
        const selected = active === category.id
        return (
          <button
            key={category.id}
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(category.id)}
            className={`relative rounded-full px-4 py-2 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#009E4A] ${
              selected ? 'text-white' : 'text-[#15352b]/65 hover:text-[#15352b]'
            }`}
          >
            {selected && (
              <motion.span
                layoutId="shop-tab-pill"
                transition={spring}
                className="absolute inset-0 rounded-full bg-[#009E4A]"
              />
            )}
            <span className="relative">{category.label}</span>
          </button>
        )
      })}
    </div>
  )
}
