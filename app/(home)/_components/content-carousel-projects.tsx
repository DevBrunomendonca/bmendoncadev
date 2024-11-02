import { Button } from "@/app/_components/ui/button"
import ThhirdTitle from "@/app/_components/ui/third-title"
import { Github, Globe } from "lucide-react"
import Image from "next/image"

interface ContentCarouselProjectsProps {
  name: string
  hrefProject: string
  hrefGithub: string
  srcImgMobile: string
  srcImgLeptop: string
}

const ContentCarouselProjects = ({
  name,
  hrefProject,
  hrefGithub,
  srcImgMobile,
  srcImgLeptop,
}: ContentCarouselProjectsProps) => {
  return (
    <div className="embla__slide">
      <div className="flex w-full flex-col items-center justify-center gap-8 px-6 pb-12 md:px-16 lg:flex-row">
        <div className="flex w-full flex-col items-start gap-2 sm:max-w-[310px] md:items-start lg:w-2/5">
          <ThhirdTitle content={name} />
          <div>
            <a target="_blank" href={hrefProject} className="w-full">
              <Button
                aria-label="Acessar projeto"
                className="mb-1 w-full bg-secondary-blue hover:bg-third-blue md:mb-2"
              >
                Acessar projeto
                <Globe color="#f1f1f1" />
              </Button>
            </a>
            <a target="_blank" href={hrefGithub} className="w-full">
              <Button
                aria-label="Acessar repositório"
                className="mt-1 w-full bg-secondary-blue hover:bg-third-blue md:mt-2"
              >
                Acessar Repositório
                <Github color="#f1f1f1" />
              </Button>
            </a>
          </div>
        </div>
        <div className="relative left-0 flex w-full items-end justify-center sm:left-6 md:left-6 md:justify-end lg:w-3/5">
          <div className="absolute bottom-0 left-6 w-[20%] md:left-16">
            <Image
              src={srcImgMobile}
              alt={`Banner mobile ${name}`}
              width={0}
              height={0}
              sizes="100vh"
              className="min-h-[117px] w-full min-w-[60px]"
            />
          </div>
          <div className="w-[80%]">
            <Image
              src={srcImgLeptop}
              alt={`Banner leptop ${name}`}
              width={0}
              height={0}
              sizes="100vh"
              className="min-h-[161px] w-full min-w-[290px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentCarouselProjects
