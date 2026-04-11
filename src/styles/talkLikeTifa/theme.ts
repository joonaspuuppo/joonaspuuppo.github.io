import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'
import { textAreaRecipe } from './recipes/textArea'
import { buttonRecipe } from './recipes/button'

const talkLikeTifaConfig = defineConfig({
  theme: {
    breakpoints: {
      sm: '320px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    recipes: {
      textarea: textAreaRecipe,
      button: buttonRecipe,
    },
    tokens: {
      fonts: {
        heading: { value: `'Lexend Variable', sans-serif` },
        body: { value: `'Lexend Variable', sans-serif` },
      },
    },
  },
})

export default createSystem(defaultConfig, talkLikeTifaConfig)
