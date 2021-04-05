<template>
  <div>
    {{ contents }}
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, useContext } from '@nuxtjs/composition-api'

interface Contents {
  prop: string
  content: string | null
}

export default defineComponent({
  props: {
    link: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const contents = ref<Contents[]>([])

    const { $axios } = useContext()

    onMounted(async () => {
      // ref: https://qiita.com/ksyunnnn/items/bfe2b9c568e97bb6b494
      const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
      const body = await $axios.$get(`${CORS_PROXY}${props.link}`)
      const text = body
      const el = new DOMParser().parseFromString(text, 'text/html')
      const headEls = el.head.children
      Array.from(headEls).map((item) => {
        const prop = item.getAttribute('property') || item.getAttribute('name')
        if (!prop || (!prop.includes('og:') && !prop.includes('twitter:'))) return
        const content = item.getAttribute('content')
        contents.value.push({
          prop,
          content,
        })
      })
    })
  },
})
</script>
