import Image from "next/image"
import { ReactNode } from "react"
import { cn } from "../_lib/utils"

interface ListIconSocialMediaProps {
  children: ReactNode
  className: string
  id?: string
}

interface IconSocialMediaProps {
  href: string
  srcIcon: string
  altIcon: string
  className?: string
}

interface IconProps {
  srcIcon: string
  altIcon: string
  className?: string
}

export const ListIcons = ({
  children,
  className,
  id,
}: ListIconSocialMediaProps) => {
  return (
    <div id={id} className={cn("", className)}>
      {children}
    </div>
  )
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
export const Icon = ({ srcIcon, altIcon, className }: IconProps) => {
  return (
    <Image
      src={srcIcon}
      alt={altIcon}
      height={0}
      width={0}
      sizes="100vh"
      className={className}
    />
  )
}
