'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeProvider, type ColorModeProviderProps } from './color-mode'
import baseSystem from '@/styles/base/theme'

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={baseSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
