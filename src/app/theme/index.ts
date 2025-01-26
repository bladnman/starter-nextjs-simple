import { extendTheme } from '@chakra-ui/react'
import { config } from './config'

export const theme = extendTheme({ config })

// For TypeScript support
export type Theme = typeof theme 