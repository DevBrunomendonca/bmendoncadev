import { CardSkeletonRow } from "@/app/_components/ui/card-skeleton"

const SkeletonCardProjects = () => {
  return (
    <div className="mx-auto flex w-full max-w-[413px] flex-col items-center">
      <CardSkeletonRow className="h-[228px] w-[100%]" />
      <div className="flex w-full flex-col items-start gap-2 p-5">
        <CardSkeletonRow className="h-[28px] w-[60%]" />
        <div className="w-full space-y-2">
          <CardSkeletonRow className="h-[40px] w-[100%]" />
          <CardSkeletonRow className="h-[40px] w-[100%]" />
        </div>
      </div>
    </div>
  )
}

export default SkeletonCardProjects
