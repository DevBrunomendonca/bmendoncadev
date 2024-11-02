import Logo from "./logo"
import { IconSocialMedia, ListIcons } from "./list-icons"
import SheetButton from "./sheet-button"
import ListNavigation from "./list-navigation"

const Header = () => {
  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 border-third-blue"
      style={{
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        background: "rgba(8, 15, 32, 0.55)",
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl justify-between p-4">
        <Logo />
        <div className="hidden items-center gap-4 md:flex">
          <ListNavigation />
          <div className="h-full w-[1px] bg-gray-50 opacity-15"></div>
          <ListIcons className="flex h-4 items-center gap-3">
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
        <SheetButton />
      </div>
    </header>
  )
}

export default Header
