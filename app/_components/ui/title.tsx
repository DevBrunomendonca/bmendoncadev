import { cn } from "@/app/_lib/utils"

interface TitleProps {
  content: string
  className?: string
}

const Title = ({ content, className }: TitleProps) => {
  return (
    <h1
      className={cn(
        "text-center text-4xl font-bold text-primary-white md:text-6xl",
        className,
      )}
    >
      {content}
    </h1>
  )
}

export default Title
