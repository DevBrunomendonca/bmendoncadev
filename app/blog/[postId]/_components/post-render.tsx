import FourthTitle from "@/app/_components/ui/fourth-title"
import Paragraph from "@/app/_components/ui/paragraph"
import SecondTitle from "@/app/_components/ui/second-title"
import { cn } from "@/app/_lib/utils"
import { PostContent } from "@/app/_types/type"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism"

interface PostContentRendererProps {
  content: PostContent
}
{
  /* TODO: Refactor component */
}
const PostContentRenderer = ({ content }: PostContentRendererProps) => {
  return (
    <div className="mx-auto max-w-3xl">
      <Paragraph
        className="my-4 border-l-4 border-third-blue pl-4 text-start"
        content={content.introduction}
      />
      {content.sections.map(({ title, paragraphs, subsections }, index) => (
        <section className="[&:not(:last-child)]:pt-8" key={index}>
          <div>
            <SecondTitle className="pt-4" content={title} />
            {paragraphs?.map((paragraph, i) => (
              <Paragraph className="pt-4" key={i} content={paragraph} />
            ))}
          </div>
          {renderSectionContent(subsections ?? [])}
        </section>
      ))}
    </div>
  )
}
const formatWithCode = (text: string) => {
  const parts = text.split(/(`[^`]+`)/g)
  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={index}
          className="rounded bg-primary-black px-2 py-1 text-[#ff79c6]"
        >
          {part.slice(1, -1)}
        </code>
      )
    }
    return part
  })
}
const ExplanationRenderer = ({
  text,
  className,
}: {
  text: string
  className?: string
}) => {
  return (
    <p
      className={cn(
        "text-start text-sm font-light !leading-7 text-primary-gray md:text-base",
        className,
      )}
    >
      {formatWithCode(text)}
    </p>
  )
}

const renderSectionContent = (
  subsections: Array<{
    title: string
    paragraphs?: string[]
    code?: string[]
    explanation?: string
  }>,
) => {
  return (
    <>
      {subsections.map((item, i) => (
        <div className="pt-4" key={i}>
          <FourthTitle className="font-medium" content={item.title} />
          {item.paragraphs?.map((paragraph, j) => (
            <Paragraph key={j} className="text-start" content={paragraph} />
          ))}
          {item.code && (
            <SyntaxHighlighter
              language="javascript"
              style={materialDark}
              customStyle={{
                borderRadius: "0.5rem",
                padding: "1rem",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              {item.code.join("\n")}
            </SyntaxHighlighter>
          )}
          {item.explanation && (
            <ExplanationRenderer
              className="mb-8 border-l-4 border-third-blue pl-4"
              text={item.explanation}
            />
          )}
        </div>
      ))}
    </>
  )
}

export default PostContentRenderer
