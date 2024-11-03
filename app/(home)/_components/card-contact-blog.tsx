import FourthTitle from "@/app/_components/ui/fourth-title"
import ThhirdTitle from "@/app/_components/ui/third-title"
import { ReactNode } from "react"

interface CardContactBlogProps {
  children: ReactNode
  title: string
  subtitle: string
  id?: string
}

const CardContactBlog = ({
  title,
  subtitle,
  children,
  id,
}: CardContactBlogProps) => {
  return (
    <div
      id={id}
      className="flex w-full flex-col items-start gap-6 rounded-md bg-primary-blue p-5 shadow-shadowOne"
    >
      <div className="space-y-1">
        <FourthTitle content={title} />
        <ThhirdTitle content={subtitle} />
      </div>
      {children}
    </div>
  )
}

export default CardContactBlog
