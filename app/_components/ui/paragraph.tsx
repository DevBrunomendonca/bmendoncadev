import { cn } from "@/app/_lib/utils"

interface ParagraphProps {
  content: string
  className?: string
}

const Paragraph = ({ content, className }: ParagraphProps) => {
  return (
    <p className={cn("text-sm font-light md:text-base", className)}>
      {content}
    </p>
  )
}

export default Paragraph
