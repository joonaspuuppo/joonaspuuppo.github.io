export const getPixelCount = (px: string): number => {
  return parseInt(px.substring(0, px.length - 1))
}

export const addPixels = (px: string, plus: number): string => {
  return `${getPixelCount(px) + plus}px`
}
