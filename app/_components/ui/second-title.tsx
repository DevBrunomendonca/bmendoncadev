import { cn } from "@/app/_lib/utils"

interface SecondoTitleProps {
  content: string
  className?: string
}

const SecondTitle = ({ content, className }: SecondoTitleProps) => {
  return (
    <h2
      className={cn(
        "text-xl font-medium leading-5 text-primary-white",
        className,
      )}
    >
      {content}
    </h2>
  )
}

export default SecondTitle
