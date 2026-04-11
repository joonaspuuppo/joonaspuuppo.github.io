'use client'

import { ChakraProvider } from '@chakra-ui/react'
import talkLikeTifaSystem from '@/styles/talkLikeTifa/theme'

export function TalkLikeTifaProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <ChakraProvider value={talkLikeTifaSystem}>{children}</ChakraProvider>
}
