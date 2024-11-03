import FourthTitle from "@/app/_components/ui/fourth-title"
import Title from "@/app/_components/ui/title"
import AnimateScroll from "@/app/_helpers/animation-scroll"
import useAnimationScroll from "@/app/_hooks/use-animation-scroll"

const ContentTitleContact = () => {
  const { animationsContact } = useAnimationScroll()
  return (
    <AnimateScroll triggerId="page-contact" animations={animationsContact}>
      <div
        id="page-contact"
        className="flex h-full flex-col items-center gap-2 md:gap-3"
      >
        <Title
          id="title-contact"
          className="!text-3xl md:!text-5xl"
          content="Entre em Contato"
        />
        <FourthTitle
          id="subtitle-contact"
          className="!text-center"
          content="Vamos discutir como posso ajudar em seu próximo projeto."
        />
      </div>
    </AnimateScroll>
  )
}

export default ContentTitleContact
