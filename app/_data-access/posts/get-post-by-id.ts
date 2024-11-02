import { db } from "@/app/_lib/prisma"
import { unstable_cache } from "next/cache"
import { PostWithAuthorAndCategory } from "./get-posts"

export const getPostById = async ({
  postId,
}: {
  postId: string
}): Promise<PostWithAuthorAndCategory | null> => {
  return await db.post.findUnique({
    where: {
      id: postId,
    },
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
}

export const cacheGetPostById = unstable_cache(getPostById, ["get-post-id"], {
  revalidate: 60,
})
