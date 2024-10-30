"use client"

import React, { useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import ContentCarouselProjects from "./content-carousel-projects"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface EmblaCarouselProps {
  slides: string[]
  interval?: number
}

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ interval = 3000 }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])
  useEffect(() => {
    if (!emblaApi) return

    const autoScroll = setInterval(() => {
      scrollNext()
    }, interval)
    emblaApi.on("pointerDown", () => clearInterval(autoScroll))
    emblaApi.on("init", () => clearInterval(autoScroll))

    return () => clearInterval(autoScroll)
  }, [emblaApi, scrollNext, interval])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        {/* TODO: Adiciona carrosseis */}
        <div className="embla__container">
          <ContentCarouselProjects
            name="Casa&Terra"
            hrefProject="#"
            hrefGithub="#"
            srcImgMobile="/banners/banner-mobi-casa-e-terra.webp"
            srcImgLeptop="/banners/banner-leptop-casa-e-terra.webp"
          />
          <ContentCarouselProjects
            name="Casa&Terra"
            hrefProject="#"
            hrefGithub="#"
            srcImgMobile="/banners/banner-mobi-casa-e-terra.webp"
            srcImgLeptop="/banners/banner-leptop-casa-e-terra.webp"
          />
          <ContentCarouselProjects
            name="Casa&Terra"
            hrefProject="#"
            hrefGithub="#"
            srcImgMobile="/banners/banner-mobi-casa-e-terra.webp"
            srcImgLeptop="/banners/banner-leptop-casa-e-terra.webp"
          />
        </div>
      </div>
      <div className="flex items-start justify-center">
        <button
          className={`embla__button embla__button__prev`}
          onClick={() => emblaApi?.scrollPrev()}
        >
          <ArrowLeft size={28} color="#3E5692" />
        </button>
        <button
          className={`embla__button embla__button__next`}
          onClick={scrollNext}
        >
          <ArrowRight size={28} color="#3E5692" />
        </button>
      </div>
    </div>
  )
}

export default EmblaCarousel
