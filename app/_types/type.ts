export interface PostContent {
  introduction: string
  sections: Array<{
    title: string
    paragraphs?: string[]
    subsections?: Array<{
      title: string
      paragraphs?: string[]
      code?: string[]
      explanation?: string
    }>
  }>
}
