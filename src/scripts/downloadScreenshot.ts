import puppeteer from 'puppeteer'

export const downloadScreenshot = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://joonaspuuppo.github.io/#/speaklikecloud', {
    waitUntil: 'networkidle0',
  })
  await page.setViewport({ width: 1080, height: 1080 })
  const skeleton = await page.$('#skeleton')
  const textArea = await page.$('#textArea')
  await skeleton?.screenshot({ path: 'screenshot.jpg' })
  const text = (await textArea?.evaluate((el) => el.textContent)) ?? ''
  console.log(text)
  await browser.close()

  return { path: 'screenshot.jpg', text }
}
