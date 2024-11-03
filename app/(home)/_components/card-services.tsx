import Paragraph from "@/app/_components/ui/paragraph"
import ThhirdTitle from "@/app/_components/ui/third-title"
import { cn } from "@/app/_lib/utils"
import { ReactNode } from "react"

interface CardServiceProps {
  children: ReactNode
  title: string
  description: string
  className?: string
  id?: string
}

const CardService = ({
  children,
  title,
  description,
  className,
  id,
}: CardServiceProps) => {
  return (
    <div id={id} className="min-h-full">
      <div
        className={cn(
          "h-full w-full space-y-6 rounded-md bg-primary-blue p-5 shadow-shadowOne transition duration-300 ease-in-out md:hover:scale-105",
          className,
        )}
      >
        <div className="flex items-center gap-3">
          <div className="rounded-sm bg-secondary-blue p-1.5">{children}</div>

          <ThhirdTitle content={title} />
        </div>
        <Paragraph content={description} />
      </div>
    </div>
  )
}

export default CardService
