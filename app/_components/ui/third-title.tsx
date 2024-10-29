import { cn } from "@/app/_lib/utils"

interface ThirdTitleProps {
  content: string
  className?: string
}

const ThirdTitle = ({ content, className }: ThirdTitleProps) => {
  return (
    <h3 className={cn("text-base text-secondary-blue", className)}>
      {content}
    </h3>
  )
}

export default ThirdTitle
