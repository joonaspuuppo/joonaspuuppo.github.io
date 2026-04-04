import { imageCounts, verbs } from '../constants/speakLikeCloud'
import { CharacterName } from '../types/speakLikeCloud'

export const getBackgroundImagePath = (
  characterName: CharacterName
): string => {
  const suffix = getRandomImageSuffix(characterName)
  switch (characterName) {
    case 'Cloud':
    case 'Tifa':
    case 'Aeris':
    case 'Barret':
    case 'Sephiroth':
    case 'Cait Sith':
    case 'Yuffie':
    case 'Vincent':
    case 'Red XIII':
    case 'Bugenhagen':
      return `/ffvii_bg_${getCharacterInFileName(characterName)}${suffix}.jpg`
    default:
      return `/ffvii_bg_default${suffix}.jpg`
  }
}

const getCharacterInFileName = (characterName: CharacterName): string => {
  return characterName.toLowerCase().replace(' ', '')
}

const getRandomImageSuffix = (characterName: CharacterName): string => {
  const count =
    imageCounts[characterName as keyof typeof imageCounts] ||
    imageCounts['default']
  if (!count) return ''
  const randomIndex = Math.floor(Math.random() * count)
  return randomIndex < 1 ? '' : `_${randomIndex}`
}

export const getCharacterVerb = (characterName: CharacterName): string => {
  return verbs[characterName as keyof typeof verbs] ?? 'Speak'
}

/**
 * Cleans a raw character name extracted from the FF7 script.
 *
 * Handles the following cases:
 * - Parenthesized annotations, including multiple occurrences
 *   e.g. "(Upon talking...)Cloud (child)" → "Cloud"
 * - Trailing numbers used to distinguish duplicate speakers
 *   e.g. "Kid 1" → "Kid"
 * - Trailing apostrophes introduced by script formatting
 *   e.g. "Cloud'" → "Cloud"
 */
export const cleanCharacterName = (name: string): string =>
  name
    .replace(/\s*[\u0028\uFF08][^\u0029\uFF09]*[\u0029\uFF09]/g, '')
    .replace(/\s+\d+$/, '')
    .replace(/'+$/, '')
    .trim()
