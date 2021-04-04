import type { IContentDocument } from '@nuxt/content/types/content'

export interface Article extends IContentDocument {
  /** ドキュメントのタイトル */
  title: string
  /** ドキュメントの説明 */
  description: string
  /** ドキュメントの作成日時 */
  created: string
  /** ドキュメントの更新日時 */
  updated: string
  /** ドキュメントのタグ */
  tags: string
  /** 下書きかどうか */
  draft: boolean
}
