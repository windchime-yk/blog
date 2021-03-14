<template>
  <article class="article">
    <h1 class="article__title">{{ article.title }}</h1>
    <ul class="posttime">
      <li class="posttime__item">
        created: <time class="posttime__date" :datetime="formatDate(article.createdAt)">{{ formatDate(article.createdAt) }}</time>
      </li>
      <li class="posttime__item">
        updated: <time class="posttime__date" :datetime="formatDate(article.updatedAt)">{{ formatDate(article.updatedAt) }}</time>
      </li>
    </ul>
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
import Vue from 'vue'
import { Article } from 'model/article'

export default Vue.extend({
  async asyncData({ $content, params }) {
    const article = await $content(`articles/${params.slug}`).fetch()
    return { article }
  },
  head() {
    return {
      // @ts-ignore
      title: `${this.article.title} | <whyk-log />`,
    }
  },
  methods: {
    formatDate(date: Article['createdAt'] | Article['updatedAt']): string {
      return this.$dayjs(date).format('YYYY/MM/DD')
    },
  },
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
  margin-bottom: 30px;
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
