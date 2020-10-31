<template>
  <article class="article">
    <h1 class="article__title">{{ content.title }}</h1>
    <time class="article__date" :datetime="content.date">{{ content.date }}</time>
    <nuxt-content :document="content" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, params }) {
    const content = await $content(`articles/${params.type}/${params.slug}`).fetch()
    return { content }
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
}
.nuxt-content code {
  font-family: 'Fira Code', monospace;
  font-size: 1.5rem;
}
</style>

<style lang="scss" scoped>
.article__title {
  font-size: 4rem;
}
.article__date {
  display: inline-block;
  font-size: 1.5rem;
  margin-bottom: 30px;
}
</style>
