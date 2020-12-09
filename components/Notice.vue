<template>
  <div :class="['notice', `notice--${type}`]">
    <p class="notice__title">{{ type }}</p>
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    type: {
      type: String,
      default: 'info',
      validator(value) {
        return ['info', 'warn', 'error'].includes(value)
      },
    },
  },
})
</script>

<style lang="scss" scoped>
.notice {
  padding: 20px 30px;
  border-radius: 6px;
  &--info {
    background-color: #91bdff;
  }
  &--warn {
    background-color: #ffe58e;
  }
  &--error {
    background-color: #ff6565;
  }
}
.notice__title {
  text-transform: uppercase;
}
</style>
