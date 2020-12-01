<template>
  <article class="article">
    <h1 class="article__title">{{ content.title }}</h1>
    <time class="article__date" :datetime="content.date">{{ content.date }}</time>
    <details class="toc">
      <summary class="toc__title">Index</summary>
      <ul class="toc-list">
        <li v-for="link in content.toc" :key="link.id" :class="['toc-list__item', `toc-list__item--0${link.depth}`]">
          <a :href="`#${link.id}`">{{ link.text }}</a>
        </li>
      </ul>
    </details>
    <nuxt-content :document="content" />
  </article>
</template>

<script lang="ts">
import { defineComponent, useAsync, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $content, params } = useContext()
    const content = useAsync(() => $content(`articles/${params.value.type}/${params.value.slug}`).fetch())

    return {
      content,
    }
  },
})
</script>

<style lang="scss">
.nuxt-content h2 {
  font-size: 3rem;
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
  font-size: 4rem;
}
.article__date {
  display: inline-block;
  font-size: 1.5rem;
  margin-bottom: 30px;
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
