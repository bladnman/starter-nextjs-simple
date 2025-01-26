import { Inter } from 'next/font/google'
import { ChakraProviderWithColorMode, ColorModeInit } from './theme/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js with Chakra UI',
  description: 'A modern Next.js app with Chakra UI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ColorModeInit />
      </head>
      <body className={inter.className}>
        <ChakraProviderWithColorMode>
          {children}
        </ChakraProviderWithColorMode>
      </body>
    </html>
  )
}
