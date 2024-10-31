import { unstable_cache } from "next/cache"
import { db } from "../_lib/prisma"
import { Projects } from "@prisma/client"

export const getProjects = async (): Promise<Projects[]> => {
  return await db.projects.findMany({})
}

export const cacheGetProjects = unstable_cache(getProjects, ["get-projects"], {
  revalidate: 60,
})
