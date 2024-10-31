"use client"

import { ChevronDown } from "lucide-react"

const ButtonGoToDown = () => {
  const goToDown = () => {
    window.scrollTo({ top: 600, behavior: "smooth" })
  }

  return (
    <button
      onClick={goToDown}
      className="mx-auto flex max-w-8 animate-[animationArrow_2s_ease-in-out_infinite] cursor-pointer flex-col items-center -space-y-5"
    >
      <ChevronDown
        size={32}
        color="#4B639E"
        className="animate-pulse opacity-20"
      />
      <ChevronDown
        size={32}
        color="#4B639E"
        className="animate-pulse opacity-60"
      />
      <ChevronDown
        size={32}
        color="#4B639E"
        className="animate-pulse opacity-95"
      />
    </button>
  )
}

export default ButtonGoToDown
