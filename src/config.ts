import { loadConfig, createDefineConfig } from 'c12'

export interface DocsConfig {
  /**
   * The name of the documentation site.
   *
   * @example 'UnJS Docs'
   */
  name?: string
  /**
   * The description of the documentation site.
   *
   * @example 'Default documentation for UnJS package.'
   */
  description?: string
  /**
   * The GitHub repository for the documentation site.
   *
   * @example 'unjs/docs'
   */
  github?: string
  /**
   * Redirects for the documentation site.
   *
   * @example { '/foo': '/bar' }
   */
  redirects?: Record<string, string>
  /**
   * The theme color of the documentation site.
   * It will be used as the `theme-color` meta tag and a full palette of colors will be generated from it.
   *
   * @example '#ECDC5A'
   * @example 'rgb(236, 220, 90)'
   */
  themeColor?: string
}

export const defineDocsConfig = createDefineConfig<DocsConfig>()

export async function loadDocsConfig(dir: string) {
  const { config } = await loadConfig<DocsConfig>({
    name: 'docs',
    cwd: dir,
  })

  return config
}
