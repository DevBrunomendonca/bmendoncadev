"use client"

import FourthTitle from "@/app/_components/ui/fourth-title"
import Title from "@/app/_components/ui/title"
import AnimateScroll from "@/app/_helpers/animation-scroll"
import useAnimationScroll from "@/app/_hooks/use-animation-scroll"

const ContentTitleProjecs = () => {
  const { animationsProjects } = useAnimationScroll()
  return (
    <AnimateScroll triggerId="page-projects" animations={animationsProjects}>
      <div
        id="page-projects"
        className="flex h-full flex-col items-center gap-2 md:gap-3"
      >
        <Title
          id="title-projects"
          className="!text-3xl md:!text-5xl"
          content="Projetos Desenvolvidos"
        />
        <FourthTitle
          id="subtitle-projects"
          className="!text-center"
          content="Confira alguns projetos que foram desenvolvidos recentemente"
        />
      </div>
    </AnimateScroll>
  )
}

export default ContentTitleProjecs
