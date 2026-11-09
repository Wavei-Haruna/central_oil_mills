'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { AddToCartButton } from './AddToCartButton'
import { formatGHS } from './data'
import { easeOutExpo } from './motion'
import { ProductDetails } from './ProductDetails'
import { QuantityStepper } from './QuantityStepper'
import type { Product } from './types'

type Props = {
  product: Product
  index: number
  onAdd: (product: Product, quantity: number) => void
}

export function ProductCard({ product, index, onAdd }: Props) {
  const [quantity, setQuantity] = useState(1)

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: easeOutExpo, delay: index * 0.1 }}
      className="group flex flex-col overflow-hidden rounded-[2rem] border border-[#15352b]/10 bg-white shadow-[0_16px_50px_rgba(21,53,43,0.08)] transition-shadow duration-300 hover:shadow-[0_24px_70px_rgba(21,53,43,0.14)]"
    >
      <div className={`relative h-64 overflow-hidden ${product.tone === 'yellow' ? 'bg-[#FEB408]' : 'bg-[#00A651]'}`}>
        <Image
          src={product.image}
          alt={`${product.name}`}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover opacity-80 mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-[#15352b] backdrop-blur">
          {product.tag}
        </span>
        <span className="absolute bottom-5 left-5 rounded-xl bg-[#15352b] px-3 py-2 text-xs font-bold text-white">
          Made in Jukwa
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="max-w-sm text-2xl font-bold leading-tight text-[#15352b]">{product.name}</h3>
        <p className="mt-3 min-h-12 text-sm leading-6 text-[#15352b]/65">{product.short}</p>

        <div className="mt-5 flex items-end justify-between border-t border-[#15352b]/10 pt-5">
          <div>
            <p className="text-xl font-black tabular-nums text-[#15352b]">{formatGHS(product.price * quantity)}</p>
            <p className="mt-1 text-xs text-[#15352b]/50">{product.size} each · demo price</p>
          </div>
          <QuantityStepper value={quantity} onChange={setQuantity} />
        </div>

        <AddToCartButton onAdd={() => onAdd(product, quantity)} />
        <ProductDetails details={product.details} />

        <p className="mt-auto pt-4 text-center text-[11px] text-[#15352b]/45">
          Demo storefront · prices and pack sizes to be confirmed
        </p>
      </div>
    </motion.article>
  )
}
