import { cn } from "@/app/_lib/utils"

interface ThirdTitleProps {
  content: string
  className?: string
}

const ThhirdTitle = ({ content, className }: ThirdTitleProps) => {
  return (
    <h3
      className={cn(
        "text-lg font-medium text-primary-white md:text-xl",
        className,
      )}
    >
      {content}
    </h3>
  )
}

export default ThhirdTitle
