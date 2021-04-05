<template>
  <div class="youtube">
    <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${contentId}`" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ContentsYoutube',
  props: {
    contentId: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.youtube {
  position: relative;
  width: 80%;
  margin-right: 10%;
  margin-left: 10%;
  height: 0;
  margin-top: 20px;
  padding-bottom: 45%;
  overflow: hidden;
}
iframe {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
