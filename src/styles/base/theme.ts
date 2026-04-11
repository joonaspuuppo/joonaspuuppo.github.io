import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const baseConfig = defineConfig({
  theme: {
    breakpoints: {
      sm: '320px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    tokens: {
      fonts: {
        heading: { value: `'Source Sans Pro', sans-serif` },
        body: { value: `'Source Sans Pro', sans-serif` },
        mono: { value: `'Inconsolata', monospace` },
      },
    },
  },
})

export default createSystem(defaultConfig, baseConfig)
