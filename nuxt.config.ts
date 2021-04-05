import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.jpg' }],
  },
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxtjs/composition-api',
  ],
  modules: ['@nuxt/content', '@nuxtjs/axios'],
  googleFonts: {
    families: {
      'Fira+Code': true,
      'Noto+Sans+JP': {
        wght: [400, 700],
      },
    },
    display: 'block',
    download: true,
    inject: true,
  },
}

export default config
