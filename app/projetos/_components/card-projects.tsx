import { Button } from "@/app/_components/ui/button"
import ThhirdTitle from "@/app/_components/ui/third-title"
import { Projects } from "@prisma/client"

import { Github, Globe } from "lucide-react"
import Image from "next/image"

interface CardProjectsProps {
  projects: Projects[]
}

const CardProjects = ({ projects }: CardProjectsProps) => {
  return (
    <div className="gird-cols-1 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <div
          key={project.id}
          className="mx-auto max-w-[413px] rounded-lg bg-primary-blue shadow-shadowOne duration-300 md:hover:scale-105"
        >
          <Image
            src={project.coverUrl}
            alt={`Banner ${project.title}`}
            width={0}
            height={0}
            className="w-full rounded-t-md"
            sizes="100vw"
            priority
          />
          <div className="flex w-full flex-col items-start gap-2 p-5">
            <ThhirdTitle content={project.title} />
            <div className="w-full">
              <a target="_blank" href={project.projectUrl} className="w-full">
                <Button
                  aria-label="Acessar Projeto"
                  className="mb-1 w-full bg-secondary-blue hover:bg-third-blue md:mb-2"
                >
                  Acessar projeto
                  <Globe color="#f1f1f1" />
                </Button>
              </a>
              <a
                target="_blank"
                href={project.repositoryUrl}
                className="w-full"
              >
                <Button
                  aria-label="Acessar repositório"
                  className="mt-1 w-full bg-secondary-blue hover:bg-third-blue md:mt-2"
                >
                  Acessar repositório
                  <Github color="#f1f1f1" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardProjects
