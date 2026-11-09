'use client'

import { motion } from 'framer-motion'
import { easeOutExpo } from './motion'

export function SectionHeading() {
  return (
    <div className="max-w-2xl">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-sm font-bold text-[#009E4A]"
      >
        The Kakum Fresh shop
      </motion.p>

      <h2 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-[#15352b] sm:text-5xl lg:text-6xl">
        {['Everyday palm,', 'ready to order.'].map((line, i) => (
          <span key={line} className="block overflow-hidden pb-1">
            <motion.span
              className="block"
              initial={{ y: '105%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.1 + i * 0.1 }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.35 }}
        className="mt-5 max-w-xl text-base leading-7 text-[#15352b]/65"
      >
        Pick your product, choose your quantity and check out in minutes. Made for home cooks, food vendors,
        restaurants and shops.
      </motion.p>
    </div>
  )
}
