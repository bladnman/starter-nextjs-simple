'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { theme } from './index'

export function ColorModeInit() {
  return <ColorModeScript initialColorMode={theme.config.initialColorMode} />
}

export function ChakraProviderWithColorMode({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
} 