/**
 * Renders the current dialogue line over the character image onto a canvas
 * and shares it via the Web Share API, falling back to a download.
 */
export const shareImage = async (
  img: HTMLImageElement,
  dialogueLine: string
): Promise<void> => {
  const isMobile = window.innerWidth < 768
  const rect = img.getBoundingClientRect()
  const W = isMobile ? Math.round(rect.width) : img.naturalWidth
  const H = isMobile ? Math.round(rect.height) : img.naturalHeight
  const scale = 2

  const canvas = document.createElement('canvas')
  canvas.width = W * scale
  canvas.height = H * scale
  const ctx = canvas.getContext('2d')!
  ctx.scale(scale, scale)

  // Draw background image with cover fit
  const imgAspect = img.naturalWidth / img.naturalHeight
  const canvasAspect = W / H
  let sx = 0,
    sy = 0,
    sw = img.naturalWidth,
    sh = img.naturalHeight
  if (imgAspect > canvasAspect) {
    sw = img.naturalHeight * canvasAspect
    sx = (img.naturalWidth - sw) / 2
  } else {
    sh = img.naturalWidth / canvasAspect
    sy = (img.naturalHeight - sh) / 2
  }
  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, W, H)

  // Text box layout
  const margin = isMobile ? 40 : 50
  const boxX = margin
  const boxY = 40
  const boxW = W - margin * 2
  const fontSize = isMobile ? 33 : 48
  const lineH = fontSize
  const padding = 20
  const paddingY = 10

  // Measure and wrap lines
  ctx.font = `${fontSize}px Reactor, sans-serif`
  const rawLines = dialogueLine.trim().split('\n')
  const wrappedLines: string[] = []
  for (const raw of rawLines) {
    const words = raw.split(' ')
    let current = ''
    for (const word of words) {
      const test = current ? `${current} ${word}` : word
      if (ctx.measureText(test).width > boxW - padding * 2) {
        if (current) wrappedLines.push(current)
        current = word
      } else {
        current = test
      }
    }
    if (current) wrappedLines.push(current)
  }

  const boxH = wrappedLines.length * lineH + padding * 2

  // Text box background gradient
  const grad = ctx.createLinearGradient(boxX, boxY, boxX, boxY + boxH)
  grad.addColorStop(0, 'hsl(240, 100%, 35%)')
  grad.addColorStop(1, 'hsl(240, 100%, 15%)')
  ctx.fillStyle = grad
  // Border radii: [top-left, top-right, bottom-right, bottom-left]
  const bw = 4
  const radii: [number, number, number, number] = [5, 5, 5, 5]
  const shadowRadii: [number, number, number, number] = [
    1,
    5 + bw,
    5 + bw,
    5 + bw,
  ]

  ctx.beginPath()
  ctx.roundRect(boxX, boxY, boxW, boxH, radii)
  ctx.fill()

  // Border: dark shadow offset + light stroke on top
  ctx.beginPath()
  ctx.roundRect(boxX + bw, boxY + bw, boxW, boxH, shadowRadii)
  ctx.strokeStyle = 'hsla(0, 0%, 46%, 1.00)'
  ctx.lineWidth = bw
  ctx.stroke()

  ctx.beginPath()
  ctx.roundRect(boxX, boxY, boxW, boxH, radii)
  ctx.strokeStyle = 'hsl(0, 0%, 85%)'
  ctx.lineWidth = bw
  ctx.stroke()

  // Text
  ctx.fillStyle = 'white'
  ctx.shadowColor = 'black'
  ctx.shadowBlur = 2
  ctx.shadowOffsetX = 1
  ctx.shadowOffsetY = 1
  wrappedLines.forEach((line, i) => {
    ctx.fillText(line, boxX + padding, boxY + paddingY + fontSize + i * lineH)
  })

  canvas.toBlob(async (blob) => {
    if (!blob) return
    const file = new File([blob], 'talkliketifa.png', { type: 'image/png' })
    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({ files: [file], text: dialogueLine.trim() })
    } else {
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'talkliketifa.png'
      a.click()
      URL.revokeObjectURL(url)
    }
  }, 'image/png')
}
