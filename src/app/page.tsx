'use client'

import { Box, Button, Container, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'

export default function Home() {
  return (
    <Container maxW="container.xl" py={10} display="flex" alignItems="center" justifyContent="center" minH="100vh">
      <VStack gap={8} alignItems="center" maxW="4xl" w="full">
        <Box textAlign="center">
          <Heading size="2xl" mb={4}>
            Sample Playground
          </Heading>
          <Text fontSize="xl" color="gray.600" mb={8}>
            Next.js with Chakra UI
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={6} w="full" justifyItems="center">
          <Link href="/AnimalGame" style={{ textDecoration: 'none' }}>
            <Button
              as="div"
              height="150px"
              width="150px"
              display="flex"
              flexDirection="column"
              gap={3}
              border="1px"
              borderColor="brand.300"
              rounded="lg"
              _hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
              transition="all 0.2s"
            >
              <Text fontSize="3xl">🦁</Text>
              <Text>Animal Game</Text>
            </Button>
          </Link>

          <Button
            height="150px"
            width="150px"
            display="flex"
            flexDirection="column"
            gap={3}
            bg="transparent"
            border="2px"
            borderStyle="dashed"
            borderColor="brand.300"
            rounded="lg"
            _hover={{ borderColor: 'brand.400' }}
            transition="all 0.2s"
          >
            <Text fontSize="2xl">✨</Text>
            <Text>Your Toy Here</Text>
          </Button>
        </SimpleGrid>
      </VStack>
    </Container>
  )
}
