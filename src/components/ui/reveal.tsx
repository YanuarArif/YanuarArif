import { motion, useAnimationControls, useReducedMotion } from 'motion/react'
import { useEffect, useRef, type ElementType } from 'react'

interface RevealProps {
  children: React.ReactNode
  className?: string
  /**
   * Element the reveal renders as. Defaults to a `div`; use `li` inside a list
   * so the item stays a real list item for assistive technology.
   */
  as?: 'div' | 'li' | 'article'
  delay?: number
  distance?: number
}

/**
 * If the viewport observer has not fired within this window, the element is
 * revealed anyway. Hidden content is worse than a missed animation: a visitor
 * can land mid-page, restore a scroll position, or jump in large steps that an
 * IntersectionObserver callback never sees.
 */
const REVEAL_FAILSAFE_MS = 4000

const transition = { duration: 0.55, ease: [0.22, 1, 0.36, 1] } as const

/**
 * Small entrance animation used across sections. Motion is skipped entirely
 * when the visitor asks for reduced motion.
 */
export function Reveal({
  children,
  className,
  as = 'div',
  delay = 0,
  distance = 18,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion()
  const controls = useAnimationControls()
  const revealed = useRef(false)
  const Element = motion[as] as ElementType

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (revealed.current) {
        return
      }

      revealed.current = true
      void controls.start({ opacity: 1, y: 0, transition: { ...transition, delay: 0 } })
    }, REVEAL_FAILSAFE_MS)

    return () => window.clearTimeout(timer)
  }, [controls])

  if (prefersReducedMotion) {
    return <Element className={className}>{children}</Element>
  }

  return (
    <Element
      className={className}
      initial={{ opacity: 0, y: distance }}
      animate={controls}
      onViewportEnter={() => {
        revealed.current = true
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0, margin: '0px 0px -40px 0px' }}
      transition={{ ...transition, delay }}
    >
      {children}
    </Element>
  )
}