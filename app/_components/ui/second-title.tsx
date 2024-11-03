import { cn } from "@/app/_lib/utils"

interface SecondoTitleProps {
  content: string
  className?: string
  id?: string
}

const SecondTitle = ({ id, content, className }: SecondoTitleProps) => {
  return (
    <h2
      id={id}
      className={cn("text-xl font-medium text-primary-white", className)}
    >
      {content}
    </h2>
  )
}

export default SecondTitle
