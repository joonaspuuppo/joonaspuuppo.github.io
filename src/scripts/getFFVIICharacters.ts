import axios from 'axios'
import * as cheerio from 'cheerio'
import fs from 'fs'
import { cleanCharacterName } from '../util/speakLikeCloud'

const url =
  'https://finalfantasy.fandom.com/api.php?action=parse&page=Final_Fantasy_VII_script&prop=text&format=json'

const getCharacters = async () => {
  try {
    const res = await axios.get(url)
    const html = res.data.parse.text['*']
    const $ = cheerio.load(html)
    const names = new Set<string>()
    const regex = /^[^\n:]+:\s.+/

    $('p').each((_, elem) => {
      const text = $(elem).text()
      if (regex.test(text)) {
        const [name] = text.split(':', 2)
        const cleaned = cleanCharacterName(name)
        if (cleaned.split(/\s+/).length <= 3) {
          names.add(cleaned)
        }
      }
    })

    fs.writeFileSync(
      'characters_new.json',
      JSON.stringify([...names].sort(), null, 2),
      'utf8'
    )
    console.log(`Found ${names.size} characters`)
  } catch (error) {
    console.log(error)
  }
}

getCharacters()
