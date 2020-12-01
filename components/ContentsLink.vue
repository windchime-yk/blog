<template>
  <div>
    {{ contents }}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, useContext } from '@nuxtjs/composition-api'

type Contents = {
  prop: string
  contents: string | null
}
interface Data {
  contents: Contents[]
}

export default defineComponent({
  props: {
    link: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const state = reactive<Data>({
      contents: [],
    })
    onMounted(async () => {
      // ref: https://qiita.com/ksyunnnn/items/bfe2b9c568e97bb6b494
      const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
      const { $axios } = useContext()
      const contents = await $axios.$get(`${CORS_PROXY}${props.link}`)
      const text = contents
      const el = new DOMParser().parseFromString(text, 'text/html')
      const headEls = el.head.children
      Array.from(headEls).map((item) => {
        const prop = item.getAttribute('property') || item.getAttribute('name')
        if (!prop || (!prop.includes('og:') && !prop.includes('twitter:'))) return
        const contents = item.getAttribute('content')
        state.contents.push({
          prop,
          contents,
        })
      })
    })
  },
})
</script>
