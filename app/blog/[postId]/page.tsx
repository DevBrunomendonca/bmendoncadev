import PostContentRenderer from "./_components/post-render"
import type { PostContent } from "@/app/_types/type"
import Image from "next/image"
import Title from "@/app/_components/ui/title"
import ThhirdTitle from "@/app/_components/ui/third-title"
import Paragraph from "@/app/_components/ui/paragraph"
import { cacheGetPostById } from "@/app/_data-access/posts/get-post-by-id"

interface PostContentProps {
  params: {
    postId: string
  }
}

const PostContentPage = async ({ params: { postId } }: PostContentProps) => {
  const isPostContent = (content: any): content is PostContent => {
    return (
      typeof content === "object" &&
      content !== null &&
      typeof content.introduction === "string" &&
      Array.isArray(content.sections) &&
      content.sections.every(
        (section: {
          title: any
          paragraphs: undefined
          subsections: undefined
        }) =>
          typeof section.title === "string" &&
          (Array.isArray(section.paragraphs) ||
            section.paragraphs === undefined) &&
          (Array.isArray(section.subsections) ||
            section.subsections === undefined),
      )
    )
  }
  const post = await cacheGetPostById({ postId })
  if (!post) {
    return (
      <Title
        className="mx-auto max-w-3xl px-4 pt-32 !text-3xl md:!text-5xl"
        content="Post não encontrado"
      />
    )
  }
  return (
    <section key={post.id} className="px-4 pt-32">
      <div className="space-y-4">
        <Title
          className="mx-auto max-w-3xl !text-3xl md:!text-5xl"
          content={post.title}
        />

        {post.coverUrl && (
          <Image
            src={post.coverUrl}
            alt={post.title}
            width={0}
            height={0}
            sizes="100vh"
            quality={100}
            className="mx-auto w-full max-w-4xl rounded-lg"
          />
        )}
      </div>

      {post.content && isPostContent(post.content) ? (
        <PostContentRenderer content={post.content} />
      ) : (
        <p>Conteúdo indisponível ou inválido</p>
      )}
      <div className="mx-auto max-w-3xl pt-8">
        <div>
          <Paragraph
            content={`Categoria: ${post.category.name} - Publicado em ${new Date(post.createdAt).toLocaleDateString("pt-BR")}`}
          />
        </div>
        <div className="mt-8 border-l-4 border-third-blue pl-4">
          <ThhirdTitle content="Autor desse Artigo" />
          <div className="flex items-center gap-2 pt-4">
            <Image
              src={post.autor.avatarUrl}
              alt={`Icone de perfil ${post.autor.name}`}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <Paragraph
                className="font-medium text-primary-white"
                content={post.autor.name}
              />
              <Paragraph content={post.autor.description} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PostContentPage
