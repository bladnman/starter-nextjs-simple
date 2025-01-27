import { Inter } from 'next/font/google'
import { Providers } from './providers.client'
import { ColorModeInit, ThemeFlashPrevention } from './theme/components'

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
    <html lang="en" data-theme="dark" style={{ colorScheme: 'dark' }}>
      <head>
        <ThemeFlashPrevention />
      </head>
      <body className={inter.className}>
        <ColorModeInit />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
