import { defineLazyEventHandler, setHeader, getQuery } from 'h3'
export default defineLazyEventHandler(async () => {
  const { Resvg } = await import('@resvg/resvg-js')

  // Read server assets
  const nunito = await useStorage().getItemRaw('assets:og-image:nunito.ttf')
  const svgTemplate = (await useStorage().getItem('assets:og-image:template.svg')) as string

  return defineEventHandler((event) => {
    // Use this for HMR
    // const svgTemplate = (await useStorage().getItem('assets:og-image:template.svg')) as string

    const { name = '', title = '', description = '' } = getQuery(event) as Record<string, string>

    const descriptionLines = _wrapLine(decodeURIComponent(description), 60)
    const svg = svgTemplate
      .replace('!name', decodeURIComponent(name))
      .replace('!title', decodeURIComponent(title))
      .replace('!description1', descriptionLines[0] || '')
      .replace('!description2', descriptionLines[1] || '')
      .replace('!description3', descriptionLines[2] || '')

    // https://github.com/yisibl/resvg-js
    const resvg = new Resvg(svg, {
      background: '',
      dpi: 600,
      fitTo: {
        mode: 'width',
        value: 1200,
      },
      font: {
        // @ts-expect-error missing types
        fontBuffers: [nunito],
      },
    })
    const pngData = resvg.render()
    const pngBuffer = pngData.asPng()

    setHeader(event, 'Content-Type', 'image/png')
    return pngBuffer
  })
})

function _wrapLine(input: string, width: number) {
  const lines: string[] = []
  let line: string = ''
  for (const word of input.split(' ')) {
    if (line.length + word.length >= width) {
      lines.push(line)
      line = ''
    }
    line += word + ' '
  }
  lines.push(line)
  return lines
}
