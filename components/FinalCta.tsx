import { ArrowUpRight } from 'lucide-react'

export function FinalCta() {
  return (
    <section className="bg-[#f1f7e9] px-6 py-20 text-center lg:px-10">
      <p className="text-sm font-bold text-[#ED1C24]">Your next pot starts here</p>
      <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">
        Ready to cook with Kakum Fresh?
      </h2>
      <a
        href="#shop"
        className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#009E4A] px-6 py-4 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#007f3b]"
      >
        Shop now <ArrowUpRight className="size-4" />
      </a>
    </section>
  )
}
