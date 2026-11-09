import type { Transition } from 'framer-motion'

export const easeOutExpo = [0.22, 1, 0.36, 1] as const

export const spring: Transition = { type: 'spring', stiffness: 380, damping: 30 }
export const softSpring: Transition = { type: 'spring', stiffness: 220, damping: 26 }
