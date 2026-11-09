'use client'

import { motion } from 'framer-motion'
import { BadgeCheck, ChefHat, Factory, MapPin } from 'lucide-react'
import { Stagger, StaggerItem } from  './Reveal'

const reasons = [
  { icon: Factory, title: 'Made by the producer', text: 'Central Oil Mills mills it, bottles it and stands behind it.' },
  { icon: MapPin, title: 'Made in Ghana', text: 'Good food starts close to home, and grows from there.' },
  { icon: BadgeCheck, title: 'Clear and honest', text: 'Clear sizes. Clear prices. Clear labels.' },
  { icon: ChefHat, title: 'For every kitchen', text: 'Home cooks, vendors, restaurants and shops.' },
]

export function WhyKakum() {
  return (
    <section id="why" className="bg-[#FEB408] px-6 py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold text-[#15352b]/65">Why people choose Kakum Fresh</p>
        <Stagger className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, text }) => (
            <StaggerItem key={title}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="h-full rounded-3xl bg-white/35 p-6 backdrop-blur-sm"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-[#15352b] text-[#FEB408]">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-6 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#15352b]/75">{text}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
