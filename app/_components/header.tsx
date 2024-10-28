import Logo from "./logo"
import {
  IconSocialMedia,
  ListIconSocialMedias,
} from "./list-icon-social-medias"
import SheetButton from "./sheet-button"
import ListNavHeader from "./list-nav-header"

const Header = () => {
  return (
    <header
      className="fixed left-0 right-0 top-0"
      style={{
        backdropFilter: "blur(7px)",
        WebkitBackdropFilter: "blur(7px)",
        background: "rgba(8, 15, 32, 0.01)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.17)",
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl justify-between p-4">
        <Logo />
        <div className="hidden items-center gap-4 md:flex">
          <ListNavHeader />
          <div className="h-full w-[1px] bg-gray-50 opacity-15"></div>
          <ListIconSocialMedias className="flex h-4 items-center gap-3">
            <IconSocialMedia
              href="https://www.instagram.com/brunmendonca_/"
              srcIcon="icone-insta.svg"
              altIcon="Icone Instagra"
            />
            <IconSocialMedia
              href="https://www.linkedin.com/in/devbrunomendonca/"
              srcIcon="icone-linkdin.svg"
              altIcon="Icone LinkdIn"
            />
            <IconSocialMedia
              href="https://github.com/DevBrunomendonca"
              srcIcon="icone-github.svg"
              altIcon="Icone Github"
            />
            <IconSocialMedia
              href="https://wa.link/n2kytx"
              srcIcon="icone-wtpp.svg"
              altIcon="Icone WhatsApp"
            />
            <IconSocialMedia
              href="mailto:devbrunomendonca@gmail.com"
              srcIcon="icone-email.svg"
              altIcon="Icone Email"
            />
          </ListIconSocialMedias>
          <div className="flex h-4 items-center gap-3"></div>
        </div>
        <SheetButton />
      </div>
    </header>
  )
}

export default Header
