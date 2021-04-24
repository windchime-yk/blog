<template>
  <div :class="['notice', `notice--${type}`]">
    <p class="notice__title">{{ type }}</p>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'info',
      validator(value: string) {
        return ['info', 'warn', 'error'].includes(value)
      },
    },
  },
})
</script>

<style lang="scss" scoped>
.notice {
  font-size: 1.3rem;
  margin-bottom: 20px;
  padding: 20px 30px;
  border-width: 2px;
  border-radius: 6px;
  &--info {
    color: #493d17;
    background-color: #91bdff;
  }
  &--warn {
    color: #493d17;
    background-color: #e4bf48;
  }
  &--error {
    background-color: #ff6565;
  }
}
.notice__title {
  font-size: 1.8rem;
  font-weight: bold;
  text-transform: uppercase;
}
</style>
