import type { IContentDocument } from '@nuxt/content/types/content'

export interface Article extends IContentDocument {
  title: string
  description: string
  tags: string
  draft: boolean
}
