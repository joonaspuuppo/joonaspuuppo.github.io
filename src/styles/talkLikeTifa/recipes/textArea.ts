import { defineRecipe } from '@chakra-ui/react'

export const textAreaRecipe = defineRecipe({
  variants: {
    variant: {
      cloud: {
        background:
          'linear-gradient(170deg, hsl(240deg 100% 34.71%), hsl(240deg 100% 14.51%))',
        borderColor: 'hsl(0deg 0% 73.73%)',
        borderWidth: '6px',
        borderStyle: 'ridge',
        borderRadius: '5px',
        boxShadow: 'inset 0 0 3px rgb(0, 0, 0)',
        fontFamily: 'Reactor, sans-serif',
        fontSize: '32px',
        textShadow: '1px 1px 2px black',
        lineHeight: '1',
      },
    },
  },
})
