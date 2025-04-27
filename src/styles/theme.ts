import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'
import { textAreaRecipe } from './recipes/textArea'
import { buttonRecipe } from './recipes/button'

const config = defineConfig({
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
  },
})

export default createSystem(defaultConfig, config)
