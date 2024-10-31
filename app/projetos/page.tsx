import { Suspense } from "react"
import FourthTitle from "../_components/ui/fourth-title"
import Title from "../_components/ui/title"
import CardProjects from "./_components/card-projects"
import { CardSkeleton } from "../_components/ui/card-skeleton"
import CardSkeletonProjects from "./_components/card-skeleton"

const ProjectsPage = async () => {
  return (
    <section className="mx-auto max-w-6xl space-y-10 px-4 pb-10 pt-32 md:space-y-14 md:pb-16">
      <div className="flex h-full flex-col items-center gap-2 md:gap-3">
        <Title
          className="!text-3xl md:!text-5xl"
          content="Projetos Desenvolvidos"
        />
        <FourthTitle
          className="!text-center"
          content="Confira alguns projetos que foram desenvolvidos recentemente"
        />
      </div>
      <Suspense
        fallback={
          <CardSkeleton className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
            <CardSkeletonProjects />
            <CardSkeletonProjects />
            <CardSkeletonProjects />
          </CardSkeleton>
        }
      >
        <CardProjects />
      </Suspense>
    </section>
  )
}
export default ProjectsPage
