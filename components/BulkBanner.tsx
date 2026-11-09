'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { easeOutExpo } from './motion'

export function BulkBanner() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: easeOutExpo }}
      className="relative mt-6 overflow-hidden rounded-[2rem] bg-[#15352b] p-7 text-white sm:p-10"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-[#FEB408]/15 blur-3xl" />

      <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-sm font-bold text-[#FEB408]">Bulk available</p>
          <h3 className="mt-3 max-w-xl text-3xl font-bold leading-tight sm:text-4xl">
            Crude palm oil for businesses and processors.
          </h3>
          <p className="mt-4 max-w-lg leading-7 text-white/65">
            Need volume? Tell us what you need and we will respond with a professional, spec-led quote.
          </p>
          <motion.a
            href="#bulk"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#FEB408] px-6 py-3.5 text-sm font-bold text-[#15352b]"
          >
            Request a quote <ArrowUpRight className="size-4" />
          </motion.a>
        </div>

        <div className="hidden justify-self-end lg:block">
          <div className="rounded-3xl bg-white p-6 shadow-2xl">
            <Image src="/logo.png" alt="Kakum Fresh by Central Oil Mills" width={200} height={60} className="h-14 w-auto object-contain" />
          </div>
        </div>
      </div>
    </motion.aside>
  )
}
