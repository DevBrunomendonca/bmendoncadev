import { ReactNode } from "react"
import { Skeleton } from "./skeleton"
import { cn } from "@/app/_lib/utils"

export const CardSkeletonRow = ({ className }: { className?: string }) => {
  return <Skeleton className={cn("bg-[#0B1326]", className)} />
}

export const CardSkeleton = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-start justify-center space-y-2 p-6",
        className,
      )}
    >
      {children}
    </div>
  )
}
