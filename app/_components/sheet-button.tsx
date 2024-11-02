"use client"

import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { useCallback, useEffect, useState } from "react"
import { AlignRight } from "lucide-react"
import { IconSocialMedia, ListIcons } from "./list-icons"

const SheetButton = () => {
  const [sheetIsOpen, setSheetIsOpen] = useState<boolean>(false)

  const handleResize = useCallback(() => {
    window.innerWidth > 768 && setSheetIsOpen(false)
  }, [])

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.addEventListener("resize", handleResize)
    }
  }, [handleResize])

  const handleCloseSheet = () => {
    setSheetIsOpen(false)
  }
  return (
    <Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
      <SheetTrigger aria-label="abrir menu" className="block md:hidden">
        <AlignRight color="#f1f1f1" size={24} />
      </SheetTrigger>
      <SheetContent className="w-[310px] bg-primary-blue px-4 sm:w-[540px]">
        <nav className="flex flex-col items-end gap-4 pt-20">
          <ul className="contents">
            <Link
              onClick={handleCloseSheet}
              className="w-full cursor-pointer border-b-[1px] border-neutral-300 border-opacity-10 py-1 text-end text-base text-primary-white"
              href="/"
            >
              <li>Home</li>
            </Link>
            <Link
              onClick={handleCloseSheet}
              className="w-full cursor-pointer border-b-[1px] border-neutral-300 border-opacity-10 py-1 text-end text-base text-primary-white"
              href="/projetos"
            >
              <li>Projetos</li>
            </Link>
            <Link
              onClick={handleCloseSheet}
              className="w-full cursor-pointer border-b-[1px] border-neutral-300 border-opacity-10 py-1 text-end text-base text-primary-white"
              href="/contato"
            >
              <li>Contato</li>
            </Link>
            <Link
              onClick={handleCloseSheet}
              className="w-full cursor-pointer border-b-[1px] border-neutral-300 border-opacity-10 py-1 text-end text-base text-primary-white"
              href="/blog"
            >
              <li>Blog</li>
            </Link>
          </ul>
        </nav>
        <ListIcons className="mt-10 flex h-6 items-center justify-end gap-4">
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
      </SheetContent>
    </Sheet>
  )
}

export default SheetButton
