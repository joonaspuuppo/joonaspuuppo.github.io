import puppeteer from 'puppeteer'

const downloadScreenshot = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:5173/#/speaklikecloud', {
    waitUntil: 'networkidle0',
  })
  await page.setViewport({ width: 1080, height: 1080 })
  const skeleton = await page.$('#skeleton')
  const textArea = await page.$('#textArea')
  if (skeleton) {
    await skeleton.screenshot({ path: 'screenshot.jpg' })
  }
  if (textArea) {
    const text = await textArea.evaluate((el) => el.textContent)
    console.log(text)
  }
  await browser.close()
}

await downloadScreenshot()
