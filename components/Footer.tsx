const footerLinks = [
  { href: '#shop', label: 'Shop' },
  { href: '#story', label: 'About' },
  { href: '#delivery', label: 'Delivery & Returns' },
  { href: '#contact', label: 'Contact' },
  { href: '#top', label: 'Back to top' },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-[#009E4A] px-6 py-14 text-white lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-bold text-[#FEB408]">Kakum Fresh</p>
          <h2 className="mt-4 max-w-lg text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Real palm. Made in Jukwa.</h2>
          <p className="mt-5 max-w-md text-sm leading-6 text-white/65">
            Kakum Fresh is a product of Central Oil Mills Limited, Jukwa, Central Region, Ghana.
          </p>
        </div>
        <div className="md:text-right">
          <p className="text-lg font-bold">Support contact to be confirmed</p>
          <p className="mt-2 text-sm text-white/65">Jukwa, Central Region, Ghana · Central Oil Mills Ltd.</p>
          <p className="mt-2 text-xs text-white/50">Phone, WhatsApp and social links will be added when confirmed.</p>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col justify-between gap-5 border-t border-white/20 pt-6 text-xs text-white/55 sm:flex-row">
        <p>© 2026 Central Oil Mills Limited. All rights reserved.</p>
        <div className="flex flex-wrap gap-5">
          {footerLinks.map((link) => (
            <a key={link.href + link.label} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
