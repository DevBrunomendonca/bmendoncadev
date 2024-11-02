"use client"

import React, { useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import ContentCarouselProjects from "./content-carousel-projects"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface EmblaCarouselProps {
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
        <div className="embla__container">
          <ContentCarouselProjects
            name="Casa&Terra"
            hrefProject="https://casa-terra-fww6.vercel.app"
            hrefGithub="https://github.com/DevBrunomendonca/casa-terra"
            srcImgMobile="/banners/banner-mobi-casa-e-terra.webp"
            srcImgLeptop="/banners/banner-leptop-casa-e-terra.webp"
          />
          <ContentCarouselProjects
            name="Aurum Capital"
            hrefProject="https://www.aurumcapital.trade"
            hrefGithub="https://github.com/DevBrunomendonca/aurum"
            srcImgMobile="/banners/banner-mobile-aurum.webp"
            srcImgLeptop="/banners/banner-leptop-aurum.webp"
          />
          <ContentCarouselProjects
            name="DJB Flooring"
            hrefProject="https://www.djbfloors.net"
            hrefGithub="https://github.com/DevBrunomendonca/djb-flooring"
            srcImgMobile="/banners/banner-mobile-djb.webp"
            srcImgLeptop="/banners/banner-leptop-djb.webp"
          />
        </div>
      </div>
      <div className="flex items-start justify-center">
        <button
          className={`embla__button embla__button__prev`}
          onClick={() => emblaApi?.scrollPrev()}
          aria-label="Voltar slide"
        >
          <ArrowLeft size={28} color="#3E5692" />
        </button>
        <button
          className={`embla__button embla__button__next`}
          onClick={scrollNext}
          aria-label="Proximo slide"
        >
          <ArrowRight size={28} color="#3E5692" />
        </button>
      </div>
    </div>
  )
}

export default EmblaCarousel
