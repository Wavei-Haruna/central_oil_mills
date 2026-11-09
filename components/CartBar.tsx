'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'
import { formatGHS } from './data'
import { spring } from './motion'

type Props = {
  count: number
  total: number
}

export function CartBar({ count, total }: Props) {
  return (
    <AnimatePresence>
      {count > 0 && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={spring}
          className="fixed inset-x-4 bottom-5 z-40 mx-auto flex max-w-md items-center justify-between gap-4 rounded-full bg-[#15352b] py-2.5 pl-6 pr-2.5 text-white shadow-[0_20px_60px_rgba(21,53,43,0.4)]"
          role="status"
        >
          <div className="flex items-center gap-3">
            <span className="relative">
              <ShoppingBag className="size-5" />
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={count}
                  initial={{ scale: 0.4 }}
                  animate={{ scale: 1 }}
                  transition={spring}
                  className="absolute -right-2.5 -top-2.5 flex size-4 items-center justify-center rounded-full bg-[#ED1C24] text-[10px] font-black"
                >
                  {count}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="text-sm font-bold tabular-nums">{formatGHS(total)}</span>
          </div>
          <button className="rounded-full bg-[#FEB408] px-5 py-2.5 text-sm font-bold text-[#15352b] transition-colors hover:bg-[#ffc43d]">
            View cart
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
