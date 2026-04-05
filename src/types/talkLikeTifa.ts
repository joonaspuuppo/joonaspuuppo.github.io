import characters from '../../characters.json'

export type DialogueLine = {
  name: string
  line: string
}

export type CharacterName = (typeof characters)[number]
