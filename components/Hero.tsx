'use client'

import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }
const rise: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}
const lineMask: Variants = {
  hidden: { y: '105%' },
  show: { y: 0, transition: { duration: 0.9, ease } },
}

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[720px] overflow-hidden bg-[#009E4A] pt-40 lg:min-h-[780px] lg:pt-48">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_28%,rgba(254,180,8,0.48),transparent_25%),linear-gradient(120deg,#007f3b_0%,#00a651_55%,#008c43_100%)]" />
      <motion.div
        aria-hidden
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease }}
        className="absolute -bottom-36 -left-20 -z-10 size-[480px] rounded-full border border-white/10 lg:size-[700px]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-20 lg:grid-cols-[0.88fr_1.12fr] lg:px-10">
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-xl text-white">
          <h1 className="font-display max-w-2xl text-5xl font-semibold leading-[1] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            <span className="block overflow-hidden pb-2">
              <motion.span variants={lineMask} className="block">Real palm.</motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span variants={lineMask} className="block text-[#FEB408]">Made in Jukwa.</motion.span>
            </span>
          </h1>

          <motion.p variants={rise} className="mt-7 max-w-md text-lg leading-8 text-white/80">
            Kakum Fresh edible palm oil and palm cream concentrate, produced by Central Oil Mills in Ghana&apos;s Central
            Region. Now available to order online.
          </motion.p>

          <motion.div variants={rise} className="mt-9 flex flex-wrap items-center gap-4">
            <motion.a
              href="#shop"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 rounded-full bg-[#FEB408] px-6 py-4 text-sm font-bold text-[#15352b] shadow-xl"
            >
              Shop Kakum Fresh <ArrowUpRight className="size-4" />
            </motion.a>
            <a href="#bulk" className="group inline-flex items-center gap-3 px-3 py-4 text-sm font-bold text-white">
              Request a bulk quote
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.p variants={rise} className="mt-8 text-xs font-semibold text-white/65">
            Produced by Central Oil Mills Limited · Support channel to be confirmed
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.25 }}
          className="relative mx-auto w-full max-w-2xl lg:translate-x-8"
        >
          <div className="absolute -inset-4 rounded-[3rem] bg-[#FEB408]/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/10 shadow-2xl">
            <Image
              src="/kakum-hero.png"
              alt="Fresh produce and Kakum Fresh palm oil"
              width={800}
              height={700}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.9 }}
            className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-5 py-4 shadow-xl"
          >
            <p className="text-xs font-bold text-[#009E4A]">Our own production</p>
            <p className="mt-1 text-sm font-bold text-[#15352b]">Made by the mill that produces it.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
