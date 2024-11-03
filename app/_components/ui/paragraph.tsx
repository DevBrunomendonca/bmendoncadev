import { cn } from "@/app/_lib/utils"

interface ParagraphProps {
  content: string
  className?: string
  id?: string
}

const Paragraph = ({ id, content, className }: ParagraphProps) => {
  return (
    <p
      id={id}
      className={cn(
        "text-sm font-light text-primary-gray md:text-base",
        className,
      )}
    >
      {content}
    </p>
  )
}

export default Paragraph
