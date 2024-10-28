import Image from "next/image"
import { ReactNode } from "react"
import { cn } from "../_lib/utils"

interface IconSocialMediaProps {
  href: string
  srcIcon: string
  altIcon: string
  className?: string
}

interface ListIconSocialMediaProps {
  children: ReactNode
  className: string
}

export const ListIconSocialMedias = ({
  children,
  className,
}: ListIconSocialMediaProps) => {
  return <div className={cn("", className)}>{children}</div>
}
export const IconSocialMedia = ({
  href,
  srcIcon,
  altIcon,
}: IconSocialMediaProps) => {
  return (
    <a target="_blank" href={href} className="h-full">
      <Image
        src={srcIcon}
        alt={altIcon}
        height={0}
        width={0}
        className="h-full w-auto"
      />
    </a>
  )
}
