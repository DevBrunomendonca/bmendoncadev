import { CardSkeletonRow } from "@/app/_components/ui/card-skeleton"

const CardSkeletonProjects = () => {
  return (
    <div className="mx-auto flex w-full max-w-[413px] flex-col items-center gap-2 p-5">
      <CardSkeletonRow className="h-[228px] w-[100%]" />
      <CardSkeletonRow className="h-[28px] w-[100%]" />
      <div className="w-full space-y-2">
        <CardSkeletonRow className="h-[40px] w-[100%]" />
        <CardSkeletonRow className="h-[40px] w-[100%]" />
      </div>
    </div>
  )
}

export default CardSkeletonProjects
