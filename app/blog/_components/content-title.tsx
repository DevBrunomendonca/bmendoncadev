import FourthTitle from "@/app/_components/ui/fourth-title"
import Title from "@/app/_components/ui/title"
import AnimateScroll from "@/app/_helpers/animation-scroll"
import useAnimationScroll from "@/app/_hooks/use-animation-scroll"

const ContenTitleBlog = () => {
  const { animationsBlog } = useAnimationScroll()
  return (
    <AnimateScroll animations={animationsBlog} triggerId="page-blog">
      <div
        id="page-blog"
        className="flex h-full flex-col items-center gap-2 md:gap-3"
      >
        <Title
          id="title-blog"
          className="!text-3xl md:!text-5xl"
          content="Explorando o Universo Tech"
        />
        <FourthTitle
          id="subtitle-blog"
          className="!text-center"
          content="Inovações, Tendências e Insights do Mundo da Tecnologia"
        />
      </div>
    </AnimateScroll>
  )
}

export default ContenTitleBlog
