import Vue from 'vue'
import type { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

/**
 * Vueのインスタンスの型定義。
 * D: data, M: methods, C: computed, P: props
 */
export type VueInstance<D, M, C, P> = ThisTypedComponentOptionsWithRecordProps<
  Vue,
  D,
  M,
  C,
  P
>
