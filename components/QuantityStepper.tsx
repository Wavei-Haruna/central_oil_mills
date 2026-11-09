'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Minus, Plus } from 'lucide-react'
import { spring } from './motion'

type Props = {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
}

export function QuantityStepper({ value, onChange, min = 1, max = 99 }: Props) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-[#15352b]/15 p-1">
      <motion.button
        whileTap={{ scale: 0.88 }}
        transition={spring}
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        aria-label="Decrease quantity"
        className="flex size-8 items-center justify-center rounded-full transition-colors hover:bg-[#f1f7e9] disabled:opacity-35"
      >
        <Minus className="size-3.5" />
      </motion.button>

      <span className="relative flex h-8 w-7 items-center justify-center overflow-hidden text-sm font-bold" aria-live="polite">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={value}
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            {value}
          </motion.span>
        </AnimatePresence>
      </span>

      <motion.button
        whileTap={{ scale: 0.88 }}
        transition={spring}
        onClick={() => onChange(Math.min(max, value + 1))}
        aria-label="Increase quantity"
        className="flex size-8 items-center justify-center rounded-full bg-[#009E4A] text-white transition-colors hover:bg-[#007f3b]"
      >
        <Plus className="size-3.5" />
      </motion.button>
    </div>
  )
}
