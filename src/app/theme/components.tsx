'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { theme } from './index'

export function ColorModeInit() {
  return <ColorModeScript initialColorMode={theme.config.initialColorMode} />
}

export function ThemeFlashPrevention() {
  return (
    <>
      {/* 
        Theme flash prevention mechanism:
        1. Initially hide all content until the theme is fully loaded and applied
        2. The 'hydrated' class will be added once everything is ready
        3. Using CSS instead of JS prevents hydration mismatches between server and client
      */}
      <style dangerouslySetInnerHTML={{ __html: `
        html {
          visibility: hidden;
          opacity: 0;
        }
        html.hydrated {
          visibility: visible;
          opacity: 1;
        }
      `}} />
      {/* 
        This script ensures content only becomes visible after:
        1. The page is fully loaded (including all theme setup)
        2. The next animation frame (ensuring theme is painted)
        
        Note: dangerouslySetInnerHTML is needed because this is a raw script
        that must execute before React hydration
      */}
      <script dangerouslySetInnerHTML={{ __html: `
        document.documentElement.classList.remove('hydrated');
        window.addEventListener('load', function() {
          requestAnimationFrame(function() {
            document.documentElement.classList.add('hydrated');
          });
        });
      `}} />
    </>
  )
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