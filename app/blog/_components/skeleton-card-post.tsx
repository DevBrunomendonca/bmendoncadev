import { CardSkeletonRow } from "@/app/_components/ui/card-skeleton"

const SkeletonCardPosts = () => {
  return (
    <div className="mx-auto flex w-full max-w-[413px] flex-col items-center">
      <CardSkeletonRow className="h-[228px] w-[100%]" />
      <div className="w-full p-4">
        <CardSkeletonRow className="h-[56px] w-[100%]" />
        <div className="flex items-center justify-between pt-6">
          <div className="flex items-center gap-2">
            <CardSkeletonRow className="h-[36px] w-[36px] rounded-full" />
            <CardSkeletonRow className="h-[24px] w-[138px]" />
          </div>
          <CardSkeletonRow className="h-[24px] w-[80px]" />
        </div>
      </div>
    </div>
  )
}

export default SkeletonCardPosts
