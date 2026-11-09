'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Factory,
  Globe2,
  Menu,
  MapPin,
  MessageCircle,
  ShieldCheck,
  ShoppingBag,
  X,
} from 'lucide-react'

const products = [
  {
    eyebrow: 'Everyday essential',
    name: 'Bottled Edible Palm Oil',
    description: 'Rich, versatile palm oil for stews, soups, frying and more.',
    accent: 'bg-[#FEB408]',
    note: 'Kakum Fresh kitchen staple',
  },
  {
    eyebrow: 'Taste of home',
    name: 'Palm Cream Concentrate',
    description: 'Abenkwan made simpler. Deep palm flavour, ready for your pot.',
    accent: 'bg-[#00A651]',
    note: 'Kakum Abenkwan',
  },
  {
    eyebrow: 'For trade partners',
    name: 'Crude Palm Oil',
    description: 'Producer-direct supply for restaurants, retailers and industry.',
    accent: 'bg-[#ED1C24]',
    note: 'Bulk enquiry route',
  },
]

export function KakumHome() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen overflow-hidden bg-[#fffdf6] text-[#123321]">
      <div className="bg-[#123321] px-6 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-white sm:text-xs">
        Akwaaba to Kakum Fresh · Made by Central Oil Mills in Jukwa
      </div>

      <header className="relative z-20 border-b border-[#d9e4d4] bg-[#fffdf6]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="Kakum Fresh home">
            <span className="grid size-11 place-items-center rounded-full bg-[#009E4A] text-xl font-black text-white shadow-[4px_4px_0_#FEB408]">K</span>
            <span className="leading-none">
              <strong className="block text-lg font-black tracking-[-0.04em] text-[#009E4A]">Kakum</strong>
              <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-[#123321]">Fresh</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-bold lg:flex" aria-label="Main navigation">
            <a href="#products" className="transition-colors hover:text-[#009E4A]">Shop</a>
            <a href="#story" className="transition-colors hover:text-[#009E4A]">Our story</a>
            <a href="#trade" className="transition-colors hover:text-[#009E4A]">Bulk & export</a>
            <a href="#contact" className="transition-colors hover:text-[#009E4A]">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#products" className="hidden rounded-full bg-[#009E4A] px-5 py-3 text-sm font-bold text-white shadow-[3px_3px_0_#FEB408] transition-transform hover:-translate-y-0.5 sm:inline-flex">
              Shop Kakum Fresh <ShoppingBag className="ml-2 size-4" />
            </a>
            <button className="grid size-11 place-items-center rounded-full border border-[#cbdac7] lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {menuOpen && <nav className="flex flex-col gap-5 border-t border-[#d9e4d4] px-6 py-6 text-sm font-bold lg:hidden" aria-label="Mobile navigation">
          <a href="#products" onClick={() => setMenuOpen(false)}>Shop</a><a href="#story" onClick={() => setMenuOpen(false)}>Our story</a><a href="#trade" onClick={() => setMenuOpen(false)}>Bulk & export</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>}
      </header>

      <main id="top">
        <section className="relative isolate min-h-[650px] overflow-hidden bg-[#123321]">
          <img src="/kakum-hero.png" alt="Palm oil bottle and fresh palm fruit in warm sunlight" className="absolute inset-0 -z-10 size-full object-cover opacity-80" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#123321] via-[#123321e8] to-[#12332135]" />
          <div className="mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-24 lg:px-10">
            <div className="max-w-2xl text-white">
              <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#FEB408]"><span className="h-px w-10 bg-[#FEB408]" /> Real palm. Made in Jukwa.</p>
              <h1 className="max-w-xl text-6xl font-black leading-[0.94] tracking-[-0.07em] sm:text-8xl">From our mill to your pot.</h1>
              <p className="mt-8 max-w-lg text-lg leading-8 text-white/80">Kakum Fresh edible palm oil and palm cream concentrate, produced by Central Oil Mills in Jukwa, Central Region. Now available to order online.</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#products" className="inline-flex items-center rounded-full bg-[#FEB408] px-6 py-4 font-black text-[#123321] transition-transform hover:-translate-y-1">Shop Kakum Fresh <ArrowRight className="ml-3 size-5" /></a>
                <a href="#trade" className="inline-flex items-center rounded-full border border-white/40 px-6 py-4 font-bold text-white hover:bg-white/10">Request a bulk quote</a>
              </div>
              <p className="mt-8 text-xs font-semibold text-white/60">Produced by Central Oil Mills Limited · Secure checkout · Real support on WhatsApp</p>
            </div>
          </div>
        </section>

        <section className="border-b border-[#d9e4d4] bg-white">
          <div className="mx-auto grid max-w-7xl divide-y divide-[#d9e4d4] px-6 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 lg:px-10">
            {[
              [MapPin, 'Made in Jukwa', "Produced by Central Oil Mills in Ghana's Central Region."],
              [Factory, 'Our own production', 'We mill it ourselves. No middlemen between the mill and you.'],
              [ShieldCheck, 'Clear & honest', 'Clear sizes, clear prices, plain-language labels.'],
              [MessageCircle, 'Real support', 'Talk to a real person about your order.'],
            ].map(([Icon, title, copy]) => <div key={title as string} className="flex gap-4 px-0 py-7 sm:px-6 lg:px-7"><Icon className="mt-1 size-5 shrink-0 text-[#009E4A]" /><div><h2 className="font-black">{title as string}</h2><p className="mt-1 text-sm leading-6 text-[#52705d]">{copy as string}</p></div></div>)}
          </div>
        </section>

        <section id="products" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ED1C24]">The Kakum Fresh range</p><h2 className="mt-3 text-5xl font-black tracking-[-0.06em] sm:text-6xl">Everyday palm,<br /><span className="text-[#009E4A]">ready to order.</span></h2></div><a href="#products" className="font-bold text-[#009E4A]">View all products <ArrowRight className="ml-2 inline size-4" /></a></div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">{products.map((product) => <article key={product.name} className="group overflow-hidden rounded-[2rem] border border-[#d9e4d4] bg-white transition-transform hover:-translate-y-2"><div className={`relative flex h-56 items-end overflow-hidden ${product.accent} p-6`}><div className="absolute -right-8 -top-12 size-56 rounded-full bg-white/25" /><div className="absolute right-10 top-10 size-28 rounded-full border-[18px] border-white/25" /><span className="relative rounded-full bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#123321]">{product.note}</span></div><div className="p-7"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6c8a72]">{product.eyebrow}</p><h3 className="mt-3 text-2xl font-black tracking-[-0.04em]">{product.name}</h3><p className="mt-3 leading-7 text-[#52705d]">{product.description}</p><button className="mt-7 inline-flex items-center font-black text-[#009E4A]">Explore product <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" /></button></div></article>)}
        </section>

        <section id="story" className="bg-[#f0f6e9] px-6 py-24 lg:px-10"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div className="relative min-h-[440px] overflow-hidden rounded-[2rem] bg-[#009E4A] p-8"><div className="absolute -right-20 -top-20 size-80 rounded-full bg-[#00A651]" /><div className="absolute bottom-10 right-10 size-40 rounded-full border-[30px] border-[#FEB408]" /><div className="relative flex h-full flex-col justify-end text-white"><Globe2 className="size-12 text-[#FEB408]" /><p className="mt-8 max-w-xs text-4xl font-black leading-none tracking-[-0.05em]">Made in Ghana. Made to travel.</p><p className="mt-4 max-w-sm text-white/75">From Jukwa, Central Region, to kitchens across the country and trade partners around the world.</p></div></div><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ED1C24]">Know your producer</p><h2 className="mt-4 text-5xl font-black leading-none tracking-[-0.06em] sm:text-6xl">The people who mill it are the people who sell it.</h2><p className="mt-7 max-w-xl text-lg leading-8 text-[#52705d]">Central Oil Mills mills, bottles and stands behind Kakum Fresh. That means a clearer origin, a closer relationship with the product and a brand built for the real kitchens it serves.</p><a href="#trade" className="mt-8 inline-flex items-center rounded-full bg-[#123321] px-6 py-4 font-bold text-white">Our producer story <ArrowRight className="ml-3 size-5" /></a></div></div></section>

        <section id="trade" className="bg-[#123321] px-6 py-24 text-white lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:items-end"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#FEB408]">For restaurants, retailers & trade</p><h2 className="mt-4 text-5xl font-black leading-none tracking-[-0.06em] sm:text-6xl">Need dependable palm supply?</h2><p className="mt-6 text-lg leading-8 text-white/70">Tell us what you need — volumes, specs, delivery terms and documents. We'll route your enquiry to the right team.</p></div><a href="mailto:trade@centraloilmills.com" className="inline-flex shrink-0 items-center rounded-full bg-[#ED1C24] px-7 py-4 font-black text-white hover:bg-[#f3333a]">Request a bulk quote <ArrowRight className="ml-3 size-5" /></a></div></section>
      </main>

      <footer id="contact" className="bg-[#fffdf6] px-6 py-12 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 border-b border-[#d9e4d4] pb-10 sm:flex-row"><div><p className="text-2xl font-black text-[#009E4A]">Kakum Fresh</p><p className="mt-2 text-sm text-[#52705d]">From our mill to your pot.</p></div><div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-bold"><a href="#products">Shop</a><a href="#story">Our story</a><a href="#trade">Bulk & export</a><a href="mailto:hello@kakumfresh.com">Contact</a></div></div><div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 pt-6 text-xs text-[#6c8a72] sm:flex-row"><p>© 2026 Central Oil Mills Limited. Kakum Fresh is a proposed storefront brand.</p><p>Real palm. Made in Jukwa.</p></div></footer>
    </div>
  )
}

function ProductCheck() {
  return <Check className="size-4" />
}

export { ProductCheck }

const unused = ChevronDown
void unused
