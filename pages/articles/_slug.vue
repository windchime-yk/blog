<template>
  <article class="article">
    <h1 class="article__title">{{ article.title }}</h1>
    <ul class="posttime">
      <li class="posttime__item">
        created: <time class="posttime__date" :datetime="article.created">{{ article.created }}</time>
      </li>
      <li class="posttime__item">
        updated: <time class="posttime__date" :datetime="updated">{{ updated }}</time>
      </li>
    </ul>
    <div class="taglist">
      <span>tags: </span>
      <ul class="tags">
        <li v-for="(item, index) in extractTags" :key="index" class="tags__item">
          <nuxt-link :to="`/tags/${item}`" class="tags__link">{{ item }}</nuxt-link>
        </li>
      </ul>
    </div>

    {{ testValue }}

    <div v-if="datediff > 0">
      <notice type="warn">この記事は{{ datediff }}年前の記事です。情報が古くなっている可能性があります。</notice>
    </div>

    <details v-if="article.toc.length !== 0" class="toc">
      <summary class="toc__title">Index</summary>
      <ul class="toc-list">
        <li v-for="link in article.toc" :key="link.id" :class="['toc-list__item', `toc-list__item--0${link.depth}`]">
          <a :href="`#${link.id}`">{{ link.text }}</a>
        </li>
      </ul>
    </details>
    <nuxt-content :document="article" />
  </article>
</template>

<script lang="ts">
import { computed, defineComponent, ref, useContext, useFetch, useMeta } from '@nuxtjs/composition-api'
import type { Article, GithubDataList } from 'model/article'

export default defineComponent({
  setup() {
    const article = ref<Partial<Article>>({})
    const gitdata = ref<GithubDataList>([])
    const updated = ref<string>('')
    const testValue = ref<string>()

    const { params, $content, $axios, $dayjs } = useContext()
    useFetch(async () => {
      article.value = (await $content(`articles/${params.value.slug}`).fetch()) as Article
      gitdata.value = await $axios.$get(`https://api.github.com/repos/windchime-yk/blog/commits?path=content/articles/${params.value.slug}.md`)
      testValue.value = gitdata.value[0].commit.committer.date
      updated.value = $dayjs(gitdata.value[0].commit.committer.date).format('YYYY/MM/DD HH:mm')
    })

    useMeta(() => ({
      title: `${article.value.title} | <whyk-log />`,
    }))

    const datediff = computed(() => $dayjs().diff($dayjs(updated.value), 'years'))
    const extractTags = computed(() => {
      const tags = article.value.tags ? article.value.tags.split(',') : []
      return tags
    })

    return {
      article,
      updated,
      testValue,
      datediff,
      extractTags,
    }
  },
  head: {},
})
</script>

<style lang="scss">
.nuxt-content h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}
.nuxt-content h3 {
  font-size: 2rem;
  margin-bottom: 20px;
}
.nuxt-content h4 {
  font-size: 1.5rem;
  margin-bottom: 20px;
}
.nuxt-content ul {
  margin-top: 20px;
  margin-bottom: 20px;
}
.nuxt-content p {
  font-size: 1.6rem;
  margin-bottom: 30px;
}
.nuxt-content pre {
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 6px;
}
.nuxt-content code {
  font-family: 'Fira Code', monospace;
  font-size: 1.5rem;
  text-shadow: none;
}

.nuxt-content .token.operator,
.nuxt-content .token.entity,
.nuxt-content .token.url,
.nuxt-content .language-css,
.nuxt-content .style .token.string {
  color: #000;
  background-color: #f5f2f0;
}

.dark-mode {
  .nuxt-content pre {
    background-color: #000;
  }
  .nuxt-content code {
    color: #fff;
  }
  .nuxt-content .token.operator,
  .nuxt-content .token.entity,
  .nuxt-content .token.url,
  .nuxt-content .language-css,
  .nuxt-content .style .token.string {
    color: #fff;
    background-color: #000;
  }
}
</style>

<style lang="scss" scoped>
.article {
  margin-bottom: 100px;
}
.article__title {
  font-size: 3.5rem;
}

.posttime {
  padding-left: 0;
}
.posttime__item {
  display: inline-block;
  list-style: none;
  &:first-child {
    margin-right: 16px;
  }
}
.posttime__date {
  display: inline-block;
  font-size: 1.5rem;
}

.tags {
  padding-left: 0;
  display: inline-block;
  margin-bottom: 30px;
}
.tags__item {
  display: inline;
  list-style: none;
  &::after {
    content: ',';
    margin-right: 8px;
  }
}

.toc {
  margin-bottom: 30px;
}
.toc__title {
  font-size: 1.5rem;
  cursor: pointer;
}
.toc-list__item {
  &--03 {
    margin-left: 1em;
  }
  &--04 {
    margin-left: 2em;
  }
}
</style>
