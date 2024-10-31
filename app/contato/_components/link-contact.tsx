import Image from "next/image"

interface LinkContactProps {
  classNameImg: string
  href: string
  srcImage: string
  content: string
}

const LinkContact = ({
  classNameImg,
  href,
  srcImage,
  content,
}: LinkContactProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-start gap-2 text-base text-primary-blue"
    >
      <Image
        src={srcImage}
        alt="Icone de Contato"
        sizes="100vh"
        width={0}
        height={0}
        className={`h-5 ${classNameImg}`}
      />
      {content}
    </a>
  )
}

export default LinkContact
