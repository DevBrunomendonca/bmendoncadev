import { Suspense } from "react"
import CardPost from "./_components/card-post"
import { CardSkeleton } from "../_components/ui/card-skeleton"
import SkeletonCardPosts from "./_components/skeleton-card-post"
import ContenTitleBlog from "./_components/content-title"

const BlogPage = async () => {
  return (
    <section className="mx-auto max-w-6xl space-y-10 px-4 pb-10 pt-32 md:space-y-14 md:pb-16">
      <ContenTitleBlog />
      <Suspense
        fallback={
          <CardSkeleton className="grid w-full grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
            <SkeletonCardPosts />
            <SkeletonCardPosts />
            <SkeletonCardPosts />
          </CardSkeleton>
        }
      >
        <CardPost />
      </Suspense>
    </section>
  )
}

export default BlogPage
