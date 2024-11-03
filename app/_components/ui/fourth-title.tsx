import { cn } from "@/app/_lib/utils"

interface FourthTitleProps {
  content: string
  className?: string
  id?: string
}

const FourthTitle = ({ id, content, className }: FourthTitleProps) => {
  return (
    <h4 id={id} className={cn("text-base text-secondary-blue", className)}>
      {content}
    </h4>
  )
}

export default FourthTitle
