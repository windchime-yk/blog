<template>
  <div>
    <section class="section">
      <h2 class="section__title">Tag: {{ params.slug }}</h2>
      <section v-for="(item, index) in publishDocs" :key="index" class="article">
        <nuxt-link class="article__link" :to="item.path">
          <h3 class="article__title">{{ item.title }}</h3>
          <time class="article__date" :datetime="item.created">{{ item.created }}</time>
          <p class="article__text">{{ item.description }}</p>
        </nuxt-link>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, useContext, useFetch, useMeta } from '@nuxtjs/composition-api'
import { Article } from 'model/article'

export default defineComponent({
  setup() {
    const articles = ref<Article[]>([])
    const { $content, params } = useContext()
    useFetch(async () => {
      articles.value = (await $content('articles')
        .where({ tags: { $contains: params.value.slug } })
        .sortBy('created', 'desc')
        .fetch()) as Article[]
    })
    const publishDocs = computed(() => articles.value.filter((article) => !article.draft))
    useMeta(() => ({
      title: `Tag: ${params.value.slug} | <whyk-log />`,
    }))

    return {
      params,
      articles,
      publishDocs,
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
  margin-top: 5px;
  margin-bottom: 20px;
}
.nuxt-content p {
  font-size: 1.6rem;
  margin-bottom: 20px;
}
.nuxt-content pre {
  padding: 20px;
  margin-bottom: 20px;
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
.section {
  margin-bottom: 30px;
}
.section__title {
  font-size: 3.5rem;
  margin-bottom: 10px;
}
.section__text {
  margin-left: 10px;
  margin-bottom: 20px;
}

.article {
  border: 1px solid #999;
  margin-bottom: 20px;
  border-radius: 6px;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #f5f5f5;
  }
}
.article__link {
  display: block;
  padding: 20px 30px;
  text-decoration: none;
  color: initial;
}
.article__title {
  font-size: 2rem;
  margin-bottom: 5px;
}
.article__date {
  display: block;
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-left: 10px;
}
.article__text {
  margin-left: 10px;
}

.dark-mode {
  .article__link {
    color: #fff;
  }
  .article {
    &:hover {
      background-color: hsl(207, 64%, 20%);
    }
  }
}
</style>
