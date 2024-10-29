interface ThirdTitleProps {
  content: string
}

const ThhirdTitle = ({ content }: ThirdTitleProps) => {
  return (
    <h3 className="text-lg font-medium text-primary-white md:text-xl">
      {content}
    </h3>
  )
}

export default ThhirdTitle
