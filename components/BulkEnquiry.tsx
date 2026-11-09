'use client'

import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Reveal } from './Reveal'

const fields = [
  { name: 'product', label: 'Product', placeholder: 'Kakum Fresh or crude palm oil' },
  { name: 'volume', label: 'Volume', placeholder: 'e.g. 20 cases' },
  { name: 'location', label: 'Location', placeholder: 'Delivery location' },
  { name: 'phone', label: 'Phone', placeholder: 'Your phone number', type: 'tel' },
]

export function BulkEnquiry() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Demo only: connect to your API / email service when the support channel is confirmed.
    setSent(true)
  }

  return (
    <section id="bulk" className="bg-[#15352b] px-6 py-24 text-white lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <p className="text-sm font-bold text-[#FEB408]">Bulk and wholesale</p>
          <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">Buying for a business?</h2>
          <p className="mt-5 max-w-xl leading-8 text-white/65">
            Restaurants, caterers, retailers and processors can request larger volumes directly from the mill. Share the basics
            and we will prepare a quote.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-[2rem] bg-white/10 p-6 sm:p-8">
            <AnimatePresence mode="wait" initial={false}>
              {sent ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex min-h-[280px] flex-col items-center justify-center text-center"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.1 }}
                    className="flex size-14 items-center justify-center rounded-full bg-[#FEB408] text-[#15352b]"
                  >
                    <Check className="size-7" />
                  </motion.span>
                  <h3 className="mt-5 text-2xl font-bold">Enquiry received</h3>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-white/65">
                    This is a demo until the official support channel is confirmed.
                  </p>
                  <button onClick={() => setSent(false)} className="mt-6 text-sm font-bold text-[#FEB408] underline underline-offset-4">
                    Send another enquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid gap-4 sm:grid-cols-2"
                >
                  {fields.map((field) => (
                    <label key={field.name} className="text-sm font-bold">
                      {field.label}
                      <input
                        required
                        name={field.name}
                        type={field.type ?? 'text'}
                        placeholder={field.placeholder}
                        className="mt-2 w-full rounded-xl border-0 bg-white px-4 py-3 font-normal text-[#15352b] outline-none ring-2 ring-transparent transition-shadow focus:ring-[#FEB408]"
                      />
                    </label>
                  ))}
                  <motion.button
                    type="submit"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-full bg-[#FEB408] px-6 py-3.5 text-sm font-bold text-[#15352b] sm:col-span-2"
                  >
                    Submit enquiry
                  </motion.button>
                  <p className="text-xs leading-5 text-white/50 sm:col-span-2">
                    This enquiry form is a demo until the official support channel is confirmed.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
