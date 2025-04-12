import { CharacterName } from '@/types/speakLikeCloud'

const imageCounts = {
  Cloud: 5,
  Tifa: 4,
  Aeris: 5,
  Barret: 3,
  Sephiroth: 3,
}
export const getBackgroundImagePath = (
  characterName: CharacterName
): string => {
  const postfix = getRandomImagePostfix(characterName)
  switch (characterName) {
    case 'Cloud':
      return `/ffvii_bg_cloud${postfix}.jpg`
    case 'Tifa':
      return `/ffvii_bg_tifa${postfix}.jpg`
    case 'Aeris':
      return `/ffvii_bg_aeris${postfix}.jpg`
    case 'Barret':
      return `/ffvii_bg_barret${postfix}.jpg`
    case 'Sephiroth':
      return `/ffvii_bg_sephiroth${postfix}.jpg`
    default:
      return '/ffvii_bg_default.jpg'
  }
}

const getRandomImagePostfix = (characterName: CharacterName): string => {
  const count = imageCounts[characterName]
  const randomIndex = Math.floor(Math.random() * count)
  return randomIndex < 1 ? '' : `_${randomIndex}`
}
