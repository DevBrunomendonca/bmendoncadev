"use client"

import { ChevronDown } from "lucide-react"

const ButtonGoToDown = () => {
  const goToDown = () => {
    window.scrollTo({ top: 600, behavior: "smooth" })
  }

  return (
    <button
      onClick={goToDown}
      className="mx-auto max-w-8 cursor-pointer -space-y-5"
    >
      <div className="flex animate-[animationArrowOne_2s_ease-in-out_infinite] justify-center opacity-30">
        <ChevronDown size={32} color="#4B639E" />
      </div>
      <div className="flex animate-[animationArrowTwo_2s_ease-in-out_infinite] justify-center opacity-60">
        <ChevronDown size={32} color="#4B639E" />
      </div>
      <div className="flex animate-[animationArrowThree_2s_ease-in-out_infinite] justify-center">
        <ChevronDown size={32} color="#4B639E" />
      </div>
    </button>
  )
}

export default ButtonGoToDown
