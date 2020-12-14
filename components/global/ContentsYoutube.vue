<template>
  <div class="youtube">
    <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${contentId}`" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
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
  height: 0;
  margin-top: 20px;
  padding-bottom: 56.25%;
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
