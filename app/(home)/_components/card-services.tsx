import Paragraph from "@/app/_components/ui/paragraph"
import ThhirdTitle from "@/app/_components/ui/third-title"
import { cn } from "@/app/_lib/utils"
import { ReactNode } from "react"

interface CardServiceProps {
  children: ReactNode
  title: string
  description: string
  className?: string
}

const CardService = ({
  children,
  title,
  description,
  className,
}: CardServiceProps) => {
  return (
    <div
      className={cn(
        "w-full space-y-6 rounded-md bg-primary-blue p-5 shadow-shadowOne",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <div className="rounded-sm bg-secondary-blue p-1.5">{children}</div>

        <ThhirdTitle content={title} />
      </div>
      <Paragraph content={description} />
    </div>
  )
}

export default CardService