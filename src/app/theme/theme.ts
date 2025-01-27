import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

export const theme = extendTheme(
  {
    config: {
      cssVarPrefix: 'starter-nextjs-simple',
      initialColorMode: 'dark',
      useSystemColorMode: false
    },
    colors: {
      gray: {
        50: '#F7FAFC',
        100: '#EDF2F7',
        200: '#E2E8F0',
        300: '#CBD5E0',
        400: '#A0AEC0',
        500: '#718096',
        600: '#4A5568',
        700: '#2D3748',
        800: '#1A202C',
        900: '#171923',
      },
      brand: {
        50: '#fde3e8',
        100: '#fbbbc7',
        200: '#f990a8',
        300: '#f66486',
        400: '#f54257',
        500: '#f3214b',
        600: '#e51e42',
        700: '#d21935',
        800: '#c0152c',
        900: '#9a0720'
      }
    },
    semanticTokens: {
      colors: {
        'chakra-body-bg': { _light: 'gray.50', _dark: 'gray.900' },
        'chakra-border-color': { _light: 'gray.200', _dark: 'gray.700' },
        'brand.selected': { _light: 'brand.100', _dark: 'brand.900' },
        'brand.selected-border': { _light: 'brand.300', _dark: 'brand.700' },
        'brand.hover': { _light: 'brand.50', _dark: 'brand.800' },
        'brand.link': { _light: 'brand.600', _dark: 'brand.400' }
      }
    },
    components: {
      Input: {
        defaultProps: {
          focusBorderColor: 'brand.500'
        },
        variants: {
          outline: {
            field: {
              _focus: {
                borderColor: 'brand.500',
                boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)'
              }
            }
          }
        }
      }
    },
    styles: {
      global: {
        'html, body': {
          bg: 'gray.900',
          color: 'white'
        }
      }
    }
  },
  withDefaultColorScheme({ colorScheme: 'brand' })
) 