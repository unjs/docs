import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import type { NuxtConfig } from 'nuxt/schema'
import { getColors } from 'theme-colors'
import { loadDocsConfig } from './config'

const appDir = fileURLToPath(new URL('../app', import.meta.url))

export async function setupDocs(dir: string) {
  dir = resolve(dir)

  // Try to load docs config
  const config = (await loadDocsConfig(dir)) || {}

  // Prepare loadNuxt overrides
  const overrides = <NuxtConfig>{
    rootDir: dir,
    extends: [appDir],
    modulesDir: [resolve(appDir, '../node_modules'), resolve(dir, 'node_modules')],
    build: {
      transpile: [appDir],
    },
    docs: {
      dir,
    },
    appConfig: {
      docs: {
        name: config.name || '',
        description: config.description || '',
        github: config.github || '',
      },
    },
    nitro: {
      static: true,
      publicAssets: [{ baseURL: '/', dir: resolve(dir, 'public'), maxAge: 0 }],
    },
    routeRules: {
      ...Object.fromEntries(Object.entries(config.redirects || {}).map(([from, to]) => [from, { redirect: to }])),
    },
    tailwindcss: {
      config: {
        theme: {
          extend: {
            colors: {
              theme: getColors(config.themeColor || '#ECDC5A'),
            },
          },
        },
      },
    },
  }

  return {
    dir,
    overrides,
  }
}
