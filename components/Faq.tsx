'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Reveal } from './Reveal'
import { faqs } from './faqs'


export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-24 lg:py-32">
      <Reveal className="text-center">
        <p className="text-sm font-bold text-[#009E4A]">Good to know</p>
        <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Questions, answered.</h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-12 divide-y divide-[#15352b]/15 border-y border-[#15352b]/15">
        {faqs.map((faq, index) => {
          const isOpen = open === index
          return (
            <div key={faq.question}>
              <button
                onClick={() => setOpen(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-5 py-6 text-left font-bold transition-colors hover:text-[#009E4A]"
              >
                <span>{faq.question}</span>
                <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                  <ChevronDown className="size-5 shrink-0 text-[#009E4A]" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-2xl pb-6 pr-8 text-sm leading-7 text-[#15352b]/65">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </Reveal>
    </section>
  )
}
