import type { IContentDocument } from '@nuxt/content/types/content'

export interface CustomContentDocument extends IContentDocument {
  title: string
  description: string
  date: string
  draft: boolean
}
