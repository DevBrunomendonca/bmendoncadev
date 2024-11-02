"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "../_lib/utils"

interface ListNavigationProps {
  className?: string
}

const ListNavigation = ({ className }: ListNavigationProps) => {
  const pathName = usePathname()
  return (
    <nav className={cn("flex items-start gap-4 md:items-center", className)}>
      <ul className="contents">
        <Link
          className={`${pathName === "/" ? "hover:none font-medium text-primary-white" : "font-normal text-gray-400 hover:text-gray-200"} w-full cursor-pointer text-sm transition-all`}
          href="/"
        >
          <li>Home</li>
        </Link>
        <Link
          className={`${pathName === "/projetos" ? "hover:none font-medium text-primary-white" : "font-normal text-gray-400 hover:text-gray-200"} w-full cursor-pointer text-sm transition-all`}
          href="/projetos"
        >
          <li>Projetos</li>
        </Link>
        <Link
          className={`${pathName === "/contato" ? "hover:none font-medium text-primary-white" : "font-normal text-gray-400 hover:text-gray-200"} w-full cursor-pointer text-sm transition-all`}
          href="/contato"
        >
          <li>Contato</li>
        </Link>
        <Link
          className={`${pathName.startsWith("/blog") ? "hover:none font-medium text-primary-white" : "font-normal text-gray-400 hover:text-gray-200"} w-full cursor-pointer text-sm transition-all`}
          href="/blog"
        >
          <li>Blog</li>
        </Link>
      </ul>
    </nav>
  )
}

export default ListNavigation
