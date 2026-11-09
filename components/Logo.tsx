import Image from 'next/image'

type LogoProps = {
  /** Adds a white plate so a colour logo stays legible on the green hero. */
  onDark?: boolean
  className?: string
}

export function Logo({ onDark = false, className = '' }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center ${onDark ? 'rounded-2xl bg-white px-3 py-2 shadow-lg' : ''} ${className}`}
    >
      <Image
        src="/logo.png"
        alt="Kakum Fresh by Central Oil Mills"
        width={160}
        height={48}
        priority
        className="h-10 w-auto object-contain"
      />
    </span>
  )
}
