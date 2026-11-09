'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Logo } from './Logo'

const links = [
  { href: '#shop', label: 'Shop' },
  { href: '#story', label: 'Our story' },
  { href: '#why', label: 'Why Kakum' },
  { href: '#delivery', label: 'Delivery' },
  { href: '#bulk', label: 'Bulk' },
  { href: '#faq', label: 'FAQs' },
  { href: '#contact', label: 'Contact' },
]

const ANNOUNCEMENT_HEIGHT = 38

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  // Header sits under the announcement bar, then glides up to the top as you scroll.
  const top = useTransform(scrollY, [0, ANNOUNCEMENT_HEIGHT], [ANNOUNCEMENT_HEIGHT, 0])
  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 60))

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const solid = scrolled || open

  return (
    <motion.header style={{ top }} className="fixed inset-x-0 z-50">
      <motion.div
        animate={{ backgroundColor: solid ? 'rgba(21,53,43,0.92)' : 'rgba(21,53,43,0)' }}
        transition={{ duration: 0.3 }}
        className={solid ? 'backdrop-blur-xl' : ''}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#top" aria-label="Kakum Fresh home">
            <Logo onDark />
          </a>

          <nav className="hidden items-center gap-7 text-sm font-bold text-white/90 md:flex" aria-label="Main navigation">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-[#FEB408]">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <motion.a
              href="#shop"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="hidden items-center gap-2 rounded-full bg-[#FEB408] px-5 py-3 text-sm font-bold text-[#15352b] md:flex"
            >
              Shop now <ArrowUpRight className="size-4" />
            </motion.a>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="flex size-11 items-center justify-center rounded-full border border-white/30 text-white md:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? 'x' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {open ? <X /> : <Menu />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden md:hidden"
              aria-label="Mobile navigation"
            >
              <ul className="mx-auto grid max-w-7xl gap-1 px-6 pb-6 pt-2">
                {links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-3 py-3 text-lg font-bold text-white transition-colors hover:bg-white/10"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  )
}
