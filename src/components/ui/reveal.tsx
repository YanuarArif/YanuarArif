import { motion, useReducedMotion } from 'motion/react'
import type * as React from 'react'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  distance?: number
}

/**
 * Small entrance animation used across sections. Motion is skipped entirely
 * when the visitor asks for reduced motion.
 */
export function Reveal({ children, className, delay = 0, distance = 18 }: RevealProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px 0px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
