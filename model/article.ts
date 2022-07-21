/* eslint-disable camelcase */
import type { IContentDocumentBase } from '@nuxt/content/types/content'

export interface Article extends IContentDocumentBase {
  /** ドキュメントのタイトル */
  title: string
  /** ドキュメントの説明 */
  description: string
  /** ドキュメントの作成日時 */
  created: string
  /** ドキュメントのタグ */
  tags: string
  /** 下書きかどうか */
  draft: boolean
}

export interface GithubData {
  sha: string
  node_id: string
  commit: {
    author: {
      name: string
      email: string
      date: string
    }
    committer: {
      name: string
      email: string
      date: string
    }
    message: string
    tree: {
      sha: string
      url: string
    }
    url: string
    comment_count: number
    verification: {
      verified: boolean
      reason: string
      signature: null
      payload: null
    }
  }
  url: string
  html_url: string
  comments_url: string
  author: {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
  }
  committer: {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
  }
  parents: [
    {
      sha: string
      url: string
      html_url: string
    }
  ]
}

export type GithubDataList = GithubData[]
