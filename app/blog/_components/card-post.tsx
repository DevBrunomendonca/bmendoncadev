import { Button } from "@/app/_components/ui/button"
import Paragraph from "@/app/_components/ui/paragraph"
import ThhirdTitle from "@/app/_components/ui/third-title"
import { cacheGetPosts } from "@/app/_data-access/posts/get-posts"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const CardPost = async () => {
  const posts = await cacheGetPosts()
  return (
    <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post.id}`}
          className="group/edit rounded-md bg-primary-blue shadow-shadowOne transition duration-500 ease-in-out md:hover:scale-105"
        >
          <Image
            src={post.coverUrl}
            alt={`Capa do post ${post.title}`}
            width={0}
            height={0}
            className="w-full rounded-t-md object-cover"
            quality={100}
            sizes="100vw"
            priority
          />
          <div className="p-4">
            <ThhirdTitle content={post.title} />
            <div className="flex items-center justify-between pt-6">
              <div className="flex items-center gap-1">
                <Image
                  src={post.autor.avatarUrl}
                  alt={`Icone de perfil ${post.autor.name}`}
                  width={36}
                  height={36}
                  className="rounded-full"
                />
                <Paragraph
                  className="text-sm font-medium"
                  content={post.autor.name}
                />
              </div>
              <Button
                aria-label="Ver post"
                variant="link"
                className="gap-1 text-primary-gray hover:text-primary-white"
              >
                Ver post
                <ArrowUpRight className="transition-all duration-300 group-hover/edit:-translate-y-1 group-hover/edit:translate-x-1" />
              </Button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CardPost
