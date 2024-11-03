import { cn } from "@/app/_lib/utils"

interface TitleProps {
  content: string
  className?: string
  id?: string
}

const Title = ({ id, content, className }: TitleProps) => {
  return (
    <h1
      id={id}
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
