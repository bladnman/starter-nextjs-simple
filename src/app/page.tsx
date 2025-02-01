'use client'

import { Box, Container, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { GameButton } from './features/GameButton'
import { StyleGuide } from './features/StyleGuide'

export default function Home() {
  return (
    <Container maxW="container.xl" py={10} display="flex" alignItems="center" justifyContent="center" minH="100vh">
      <VStack gap={8} alignItems="center" maxW="4xl" w="full">
        <Box textAlign="center">
          <Heading size="2xl" mb={4} color="brand.text">
            Sample Playground
          </Heading>
          <Text fontSize="xl" color="secondary.text" mb={8}>
            Next.js with Chakra UI
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={6} w="full" justifyItems="center">
          <Link href="/AnimalGame" style={{ textDecoration: 'none' }}>
            <GameButton
              as="div"
              emoji="🦁"
              label="Animal Game"
            />
          </Link>

          <GameButton
            label="Your Toy Here"
            isDashed
          />
        </SimpleGrid>

        <StyleGuide />
      </VStack>
    </Container>
  )
}
