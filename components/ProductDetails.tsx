'use client'

import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { easeOutExpo } from './motion'
import type { Product } from './types'

export function ProductDetails({ details }: { details: Product['details'] }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <div className="mt-4 rounded-2xl bg-[#f1f7e9]">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center justify-between px-4 py-3 text-xs font-bold text-[#15352b]"
      >
        Product details
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown className="size-4 text-[#009E4A]" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: easeOutExpo }}
            className="overflow-hidden"
          >
            <dl className="grid gap-2 px-4 pb-4 text-xs leading-5 text-[#15352b]/65">
              {details.map((item) => (
                <div key={item.label}>
                  <dt className="inline font-bold text-[#15352b]">{item.label}: </dt>
                  <dd className="inline">{item.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
