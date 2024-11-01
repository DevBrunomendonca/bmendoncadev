import { Suspense } from "react"
import FourthTitle from "../_components/ui/fourth-title"
import Title from "../_components/ui/title"
import CardPost from "./_components/card-post"
import { CardSkeleton } from "../_components/ui/card-skeleton"
import SkeletonCardPosts from "./_components/skeleton-card-post"

const BlogPage = async () => {
  return (
    <section className="mx-auto max-w-6xl space-y-10 px-4 pb-10 pt-32 md:space-y-14 md:pb-16">
      <div className="flex h-full flex-col items-center gap-2 md:gap-3">
        <Title
          className="!text-3xl md:!text-5xl"
          content="Explorando o Universo Tech"
        />
        <FourthTitle
          className="!text-center"
          content="Inovações, Tendências e Insights do Mundo da Tecnologia"
        />
      </div>
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
