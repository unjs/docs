import { defineNuxtConfig } from 'nuxt/config'

// Flag enabled when developing docs theme
const dev = !!process.env.NUXT_DOCS_DEV

// SSR enabled only for production build to save life (at least until our stack will be little bit lighter)
const isProd = process.env.NODE_ENV === 'production'
const ssr = Boolean(isProd || process.env.NUXT_DOCS_SSR)

export default defineNuxtConfig({
  ssr,
  modules: ['@nuxt/fonts', '@nuxt/content', '@nuxtjs/seo', isProd && '@nuxtjs/plausible', '@nuxt/ui'],
  ui: {
    icons: [],
  },
  fonts: {
    families: [{ name: 'Nunito', provider: 'bunny' }],
    defaults: {
      weights: [400, 500, 600, 700],
    },
  },
  app: {
    head: {
      htmlAttrs: {
        dir: 'ltr',
        class: 'scroll-smooth',
      },
      templateParams: {
        separator: '·',
      },
    },
  },
  content: {
    // .* and -* are ignored by default
    ignores: [
      'package.json',
      'dist',
      'package-lock.json',
      'yarn.lock',
      'bun.lockb',
      'node_modules',
      'pnpm-lock.yaml',
      'pnpm-workspace.yaml',
      'docs.config.json',
      '\\.(js|mjs|ts)$',
    ],
    highlight: {
      langs: ['json5', 'jsonc', 'toml', 'yaml', 'html', 'sh', 'shell', 'bash', 'mdc', 'markdown', 'md'],
    },
  },
  routeRules: {
    '/api/search.json': { prerender: true },
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
      failOnError: false,
    },
  },
  devtools: {
    enabled: dev,
  },
  uiPro: {
    license: process.env.NUXT_UI_PRO_LICENSE || 'oss',
  },
  ogImage: {
    enabled: ssr,
    debug: false,
    fonts: ['Nunito:400', 'Nunito:700'],
  },
  seo: {
    splash: false,
  },
  schemaOrg: {
    enabled: ssr,
  },
  sitemap: {
    strictNuxtContentPaths: true,
  },
  linkChecker: {
    strictNuxtContentPaths: true,
    skipInspections: ['link-text'],
  },
  tailwindcss: {
    viewer: dev,
    quiet: !dev,
  },
  typescript: {
    strict: false,
    includeWorkspace: true,
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },
})
