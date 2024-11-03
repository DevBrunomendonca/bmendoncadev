"use client"

import { ReactNode, useLayoutEffect, useRef } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface AnimationProps {
  triggerId: string
  animations: { id: string; from: gsap.TweenVars; to: gsap.TweenVars }[]
  children: ReactNode
}

const AnimateScroll = ({ children, triggerId, animations }: AnimationProps) => {
  const tl = useRef<gsap.core.Timeline | null>(null)
  const el = useRef<HTMLDivElement | null>(null)

  const createAnimation = (
    id: string,
    from: gsap.TweenVars,
    to: gsap.TweenVars,
  ) => {
    return gsap.fromTo(id, from, to)
  }

  useLayoutEffect(() => {
    gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: `#${triggerId}`,
          start: "300px bottom",
        },
      })

      animations.forEach((animation) => {
        tl.current?.add(
          createAnimation(`#${animation.id}`, animation.from, animation.to),
        )
      })
    })

    return () => {
      gsap.killTweensOf(`#${triggerId}`)
    }
  }, [triggerId, animations])

  return (
    <div ref={el} id={triggerId}>
      {children}
    </div>
  )
}

export default AnimateScroll
