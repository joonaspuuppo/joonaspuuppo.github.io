import { DialogueLine } from '@/types/speakLikeCloud'
import axios from 'axios'
import * as cheerio from 'cheerio'
import fs from 'fs'

const url = 'https://finalfantasy.fandom.com/wiki/Final_Fantasy_VII_script'
const charactersToInclude = ['Cloud', 'Tifa', 'Aeris', 'Barret', 'Sephiroth']

const getDialogue = async () => {
  try {
    const res = await axios.get(url)
    const html = res.data
    const $ = cheerio.load(html)
    const dialogue: DialogueLine[] = []
    const regex = new RegExp(/^\S+:\s{1}.+/)
    $('#mw-content-text > div.mw-content-ltr.mw-parser-output > p').each(
      (i, elem) => {
        console.log(i)
        const text = $(elem).text()
        if (regex.test(text)) {
          const [name, line] = text.split(':', 2)
          if (charactersToInclude.includes(name)) {
            dialogue.push({ name, line: line.trim() })
          }
        }
      }
    )
    const json = JSON.stringify(dialogue)
    fs.writeFileSync('output.json', json, 'utf8')
  } catch (error) {
    console.log(error)
  }
}

getDialogue()
