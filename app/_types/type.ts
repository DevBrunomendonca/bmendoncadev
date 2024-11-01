export interface PostContent {
  introduction: string
  sections: Array<{
    heading: string
    content: string | Array<string | { subheading: string; code: string }>
  }>
}
