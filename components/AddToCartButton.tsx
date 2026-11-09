'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { spring } from './motion'

type Props = {
  onAdd: () => void
}

export function AddToCartButton({ onAdd }: Props) {
  const [added, setAdded] = useState(false)

  useEffect(() => {
    if (!added) return
    const timer = setTimeout(() => setAdded(false), 1800)
    return () => clearTimeout(timer)
  }, [added])

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      transition={spring}
      onClick={() => {
        onAdd()
        setAdded(true)
      }}
      animate={{ backgroundColor: added ? '#15352b' : '#009E4A' }}
      className="mt-5 flex h-12 w-full items-center justify-center overflow-hidden rounded-full text-sm font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#009E4A]"
    >
      <AnimatePresence mode="wait" initial={false}>
        {added ? (
          <motion.span
            key="added"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            <Check className="size-4 text-[#FEB408]" /> Added to cart
          </motion.span>
        ) : (
          <motion.span
            key="idle"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            Add to cart <ArrowRight className="size-4" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
