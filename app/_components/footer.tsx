"use client"

import Link from "next/link"
import { IconSocialMedia, ListIcons } from "./list-icons"
import ThhirdTitle from "./ui/third-title"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { Separator } from "./ui/separator"
import ListNavigation from "./list-navigation"
import Paragraph from "./ui/paragraph"
import Logo from "./logo"

const Footer = () => {
  return (
    <footer className="mx-auto max-w-6xl space-y-8 px-4 pb-8 pt-10 md:pt-16">
      <div className="px-8 md:px-16">
        <Separator className="bg-[#8C8A8A] opacity-5" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-10 md:flex-row md:gap-6">
        <div className="max-w-[420px] space-y-4">
          <ThhirdTitle
            className="!text-base"
            content="Me acompanhe nas redes sociais ou entre em contato"
          />
          <ListIcons className="flex h-6 items-center gap-3">
            <IconSocialMedia
              href="https://www.instagram.com/brunmendonca_/"
              srcIcon="/icons/icone-insta.svg"
              altIcon="Icone Instagra"
            />
            <IconSocialMedia
              href="https://www.linkedin.com/in/devbrunomendonca/"
              srcIcon="/icons/icone-linkdin.svg"
              altIcon="Icone LinkdIn"
            />
            <IconSocialMedia
              href="https://github.com/DevBrunomendonca"
              srcIcon="/icons/icone-github.svg"
              altIcon="Icone Github"
            />
            <IconSocialMedia
              href="https://wa.link/n2kytx"
              srcIcon="/icons/icone-wtpp.svg"
              altIcon="Icone WhatsApp"
            />
            <IconSocialMedia
              href="mailto:devbrunomendonca@gmail.com"
              srcIcon="/icons/icone-email.svg"
              altIcon="Icone Email"
            />
          </ListIcons>
        </div>
        <div className="max-w-[420px]">
          <ThhirdTitle
            className="!text-base"
            content="Acompanhe dicas e novidades sobre desenvolvimento e tecnologia."
          />
          <Link className="group/edit w-full" href="/blog">
            <Button
              aria-label="Acessar blog"
              className="mt-4 w-full max-w-[266px] bg-secondary-blue text-primary-white hover:bg-third-blue"
            >
              Acessar blog
              <ArrowRight className="transition-all duration-300 group-hover/edit:translate-x-1" />
            </Button>
          </Link>
        </div>
        <ListNavigation className="flex-col !gap-2" />
      </div>
      <div className="px-8 md:px-16">
        <Separator className="bg-[#8C8A8A] opacity-5" />
      </div>
      <div className="flex flex-col items-center justify-between gap-2 md:flex-row md:items-start">
        <Paragraph
          className="text-center"
          content="© Copyright 2024 Bruno Mendonça - Todos os direitos reservados."
        />
        <div className="flex items-center gap-2">
          <Paragraph className="!text-center" content="Developed by" />
          <Logo />
        </div>
      </div>
    </footer>
  )
}

export default Footer
