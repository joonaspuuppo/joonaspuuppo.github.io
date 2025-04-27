import { defineRecipe } from '@chakra-ui/react'

export const buttonRecipe = defineRecipe({
  variants: {
    size: {
      '2xl': {
        minW: '10px',
      },
    },
    variant: {
      cloud: {
        color: 'white',
        bg: 'hsl(240deg 100% 10.51%) !important',
        border: 'none !important',
        boxSize: '10',
        opacity: '75%',
        _focus: {
          outline: 'none !important',
        },
      },
    },
  },
})
