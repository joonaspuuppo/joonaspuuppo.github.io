import { AtpAgent } from '@atproto/api'
import 'dotenv/config'
import { downloadScreenshot } from './downloadScreenshot'
import * as fs from 'fs'

const agent = new AtpAgent({
  service: 'https://bsky.social',
})

const { path, text } = await downloadScreenshot()

const uploadImage = async () => {
  const image = fs.readFileSync(path)
  const { data } = await agent.uploadBlob(image)
  return data
}

const postToBsky = async () => {
  await agent.login({
    identifier: process.env.BLUESKY_USERNAME!,
    password: process.env.BLUESKY_PASSWORD!,
  })

  const imgData = await uploadImage()
  await agent.post({
    text: '',
    embed: {
      $type: 'app.bsky.embed.images',
      images: [
        {
          alt: text, // the alt text
          image: imgData.blob,
          aspectRatio: {
            // a hint to clients
            width: 720,
            height: 540,
          },
        },
      ],
    },
    createdAt: new Date().toISOString(),
  })
  console.log('Just posted!')
}

await postToBsky()
