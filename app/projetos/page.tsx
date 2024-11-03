import { Suspense } from "react"
import CardProjects from "./_components/card-projects"
import { CardSkeleton } from "../_components/ui/card-skeleton"
import SkeletonCardProjects from "./_components/skeleton-card-projects"
import { cacheGetProjects } from "../_data-access/projects/get-projects"
import ContentTitleProjecs from "./_components/content-title"

const ProjectsPage = async () => {
  const projects = await cacheGetProjects()
  return (
    <section className="mx-auto max-w-6xl space-y-10 px-4 pb-10 pt-32 md:space-y-14 md:pb-16">
      <ContentTitleProjecs />
      <Suspense
        fallback={
          <CardSkeleton className="grid w-full grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
            <SkeletonCardProjects />
            <SkeletonCardProjects />
            <SkeletonCardProjects />
          </CardSkeleton>
        }
      >
        <CardProjects projects={projects} />
      </Suspense>
    </section>
  )
}
export default ProjectsPage
