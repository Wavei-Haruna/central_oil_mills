import { CreditCard, LifeBuoy, Truck } from 'lucide-react'

const steps = [
  { icon: Truck, title: 'Delivery', text: 'Choose your delivery location and see the applicable fee before confirming.' },
  { icon: CreditCard, title: 'Payment', text: 'Mobile Money and card payment options are shown at checkout.' },
  { icon: LifeBuoy, title: 'Support', text: 'Support contact details will be added once confirmed.' },
]

export function Delivery() {
  return (
    <section id="delivery" className="border-y border-[#15352b]/10 bg-white px-6 py-20 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-sm font-bold text-[#ED1C24]">Delivery and checkout</p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em]">Simple, clear, and secure.</h2>
          <p className="mt-4 max-w-md leading-7 text-[#15352b]/65">
            Delivery areas and fees are confirmed at checkout. Pay securely with Mobile Money or card, where available.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl bg-[#f1f7e9] p-5">
              <Icon className="size-5 text-[#009E4A]" />
              <p className="mt-4 font-bold">{title}</p>
              <p className="mt-2 text-sm leading-6 text-[#15352b]/60">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
