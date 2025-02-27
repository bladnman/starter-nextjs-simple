'use client'

import { Box, Container, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { GameButton } from './features/GameButton'
import { StyleGuide } from './features/StyleGuide'

export default function Home() {
  return (
    <Container maxW="container.xl" py={10} display="flex" justifyContent="center">
      <VStack gap={8} alignItems="center" maxW="4xl" w="full">
        <Box textAlign="center">
          <Heading size="2xl" mb={4}>
            Sample Playground
          </Heading>
          <Text fontSize="xl" mb={8}>
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
            color="text"
          />
        </SimpleGrid>

        {/* STYLE GUIDE */}
        <Box w="full" h="1px" bg="gray.200" my={8} />
        <StyleGuide />
      </VStack>
    </Container>
  )
}
