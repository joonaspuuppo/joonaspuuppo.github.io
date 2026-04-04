import { DialogueLine } from '../types/speakLikeCloud'
import axios from 'axios'
import * as cheerio from 'cheerio'
import fs from 'fs'
import { cleanCharacterName } from '../util/speakLikeCloud'
import characters from '../../characters.json'

const url =
  'https://finalfantasy.fandom.com/api.php?action=parse&page=Final_Fantasy_VII_script&prop=text&format=json'

const getDialogue = async () => {
  try {
    const res = await axios.get(url)
    const html = res.data.parse.text['*']
    const $ = cheerio.load(html)
    const dialogue: DialogueLine[] = []
    const regex = new RegExp(/^[^\n:]+:\s.+/)

    $('p').each((i, elem) => {
      console.log(i)
      const text = $(elem).text()
      if (regex.test(text)) {
        const [name, line] = text.split(':', 2)
        const cleanName = cleanCharacterName(name)
        if ((characters as string[]).includes(cleanName)) {
          dialogue.push({ name: cleanName, line: line.trim() })
        }
      }
    })

    const json = JSON.stringify(dialogue)
    fs.writeFileSync('output.json', json, 'utf8')
  } catch (error) {
    console.log(error)
  }
}

getDialogue()
