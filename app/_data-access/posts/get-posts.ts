import { db } from "@/app/_lib/prisma"
import { Prisma } from "@prisma/client"
import { unstable_cache } from "next/cache"

export type PostWithAuthorAndCategory = Prisma.PostGetPayload<{
  include: {
    autor: {
      select: {
        name: true
        id: true
        avatarUrl: true
        description: true
      }
    }
    category: {
      select: {
        name: true
        id: true
      }
    }
  }
}>

export const getPosts = async (): Promise<PostWithAuthorAndCategory[]> => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const posts = await db.post.findMany({
    include: {
      autor: {
        select: {
          name: true,
          id: true,
          avatarUrl: true,
          description: true,
        },
      },
      category: {
        select: {
          name: true,
          id: true,
        },
      },
    },
  })
  return posts
}

export const cacheGetPosts = unstable_cache(getPosts, ["get-posts"], {
  revalidate: 60,
})
