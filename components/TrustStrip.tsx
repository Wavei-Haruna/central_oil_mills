import { BadgeCheck, Factory, Headset, MapPin } from 'lucide-react'

const items = [
  { icon: MapPin, title: 'Made in Jukwa', text: "Produced in Ghana's Central Region." },
  { icon: Factory, title: 'Our own production', text: 'Made by the mill that produces it.' },
  { icon: BadgeCheck, title: 'Clear and honest', text: 'Clear sizes, prices and labels.' },
  { icon: Headset, title: 'Real support', text: 'Support details will be published once confirmed.' },
]

export function TrustStrip() {
  return (
    <section className="border-b border-[#15352b]/10 bg-white px-6 py-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#f1f7e9] text-[#009E4A]">
              <Icon className="size-5" />
            </span>
            <div>
              <p className="font-bold">{title}</p>
              <p className="mt-1 text-xs leading-5 text-[#15352b]/55">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
