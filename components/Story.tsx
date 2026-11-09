'use client'

import { Check } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from './Reveal'

export function Story() {
  return (
    <section id="story" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-32">
      <Reveal>
        <p className="text-sm font-bold text-[#ED1C24]">The producer story</p>
        <h2 className="mt-5 max-w-md text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">Rooted in Central Region.</h2>
      </Reveal>

      <div className="max-w-2xl">
        <Reveal delay={0.1}>
          <p className="text-xl leading-9 text-[#15352b]/75">
            Central Oil Mills Limited is a Ghanaian palm processor based in Jukwa. We mill palm oil and palm-based foods, and
            we are growing so more of Ghana&apos;s palm is made at home. Kakum Fresh is how we bring it straight to your door.
          </p>
        </Reveal>

        <Stagger className="mt-9 grid gap-5 border-t border-[#15352b]/15 pt-8 sm:grid-cols-2">
          <StaggerItem>
            <Check className="size-5 text-[#009E4A]" />
            <h3 className="mt-4 font-bold">Proudly Ghanaian</h3>
            <p className="mt-2 text-sm leading-6 text-[#15352b]/60">From Jukwa, Central Region, to kitchens in Ghana.</p>
          </StaggerItem>
          <StaggerItem>
            <Check className="size-5 text-[#009E4A]" />
            <h3 className="mt-4 font-bold">Built for real kitchens</h3>
            <p className="mt-2 text-sm leading-6 text-[#15352b]/60">Easy ordering for homes, vendors, restaurants and retailers.</p>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  )
}
