<template>
  <div class="container">
    <section class="section">
      <h2 class="section__title">About</h2>
      <p>型安全と玄米茶が好きなWhyKのブログです。フロントエンド周りについて書いたりします。</p>
    </section>
    <section class="section">
      <h2 class="section__title">Articles</h2>
      <section v-for="(item, index) in publishDocs(articles)" :key="index" class="article">
        <nuxt-link class="article__link" :to="item.path">
          <h3 class="article__title">{{ item.title }}</h3>
          <time class="article__date" :datetime="formatDate(item.createdAt)">{{ formatDate(item.createdAt) }}</time>
          <p class="article__text">{{ item.description }}</p>
        </nuxt-link>
      </section>
    </section>
    <section class="section">
      <h2 class="section__title">Tags</h2>
      <ul class="tags">
        <li v-for="(item, index) in extractTags(articles)" :key="index" class="tags__item">
          <nuxt-link :to="`tags/${item}`">{{ item }}</nuxt-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Article } from 'model/article'

export default Vue.extend({
  async asyncData({ $content }) {
    const articles = await $content('articles').sortBy('createdAt', 'desc').fetch()
    return {
      articles,
    }
  },
  head() {
    return {
      title: '<whyk-log />',
    }
  },
  methods: {
    publishDocs(articles: Article[]): Article[] {
      return articles.filter((article: Article) => !article.draft)
    },
    formatDate(date: Article['createdAt'] | Article['updatedAt']): string {
      return this.$dayjs(date).format('YYYY/MM/DD')
    },
    extractTags(articles: Article[]): string[] {
      const tags = articles.flatMap((article) => article.tags.split(','))
      return [...new Set(tags)]
    },
  },
})
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
}

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
  padding: 20px 30px;
  border-radius: 6px;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #f5f5f5;
  }
}
.article__link {
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
