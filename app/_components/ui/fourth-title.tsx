import { cn } from "@/app/_lib/utils"

interface FourthTitleProps {
  content: string
  className?: string
}

const FourthTitle = ({ content, className }: FourthTitleProps) => {
  return (
    <h4 className={cn("text-base leading-5 text-secondary-blue", className)}>
      {content}
    </h4>
  )
}

export default FourthTitle
