<template>
  <div class="container">
    <section class="category">
      <h2 class="category__title">Tech</h2>
      <p class="category__text">ちょっと技術的なことを書くところ</p>

      <section v-for="(item, index) in tech" :key="index" class="article">
        <nuxt-link class="article__link" :to="item.path">
          <h3 class="article__title">{{ item.title }}</h3>
          <time class="article__date" :datetime="item.date">{{ item.date }}</time>
          <p class="article__text">{{ item.description }}</p>
        </nuxt-link>
      </section>
    </section>

    <section class="category">
      <h2 class="category__title">Diary</h2>
      <p class="category__text">技術とあんまり関係ないことを書くところ</p>

      <section v-for="(item, index) in diary" :key="index" class="article">
        <nuxt-link class="article__link" :to="item.path">
          <h3 class="article__title">{{ item.title }}</h3>
          <time class="article__date" :datetime="item.date">{{ item.date }}</time>
          <p class="article__text">{{ item.description }}</p>
        </nuxt-link>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ $content }) {
    const tech = await $content('articles/tech').sortBy('date', 'desc').fetch()
    const diary = await $content('articles/diary').sortBy('date', 'desc').fetch()
    return {
      tech,
      diary,
    }
  },
})
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
}

.category {
  margin-bottom: 30px;
}
.category__title {
  font-size: 5rem;
  margin-bottom: 10px;
}
.category__text {
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
</style>
