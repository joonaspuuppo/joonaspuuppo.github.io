import {
  Box,
  Heading,
  Text,
  VStack,
  Link,
  HStack,
  Flex,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router'
import usePageMeta from '@/hooks/usePageMeta'
import { FaBluesky, FaInstagram, FaGithub, FaGlobe } from 'react-icons/fa6'

const projects = [
  {
    name: 'Talk Like Tifa',
    description: 'Random Final Fantasy VII dialogue lines as shareable images.',
    path: '/talkliketifa',
  },
]

const Home = () => {
  usePageMeta({ title: 'Joonas Puuppo' })

  return (
    <Box
      minH="100vh"
      bg="hsl(240, 15%, 10%)"
      color="white"
      px={{ base: 6, md: 16 }}
      py={16}
    >
      <Flex direction="column" maxW="720px" mx="auto" gap={20}>
        {/* Header */}
        <VStack align="start" gap={2}>
          <Heading fontSize={{ base: '3xl', md: '5xl' }} fontWeight="300">
            Joonas Puuppo
          </Heading>
          <Text color="whiteAlpha.600" fontSize="lg">
            Software developer. Creative coder.
          </Text>
        </VStack>

        {/* Projects */}
        <VStack align="start" gap={6}>
          <Text
            fontSize="xs"
            letterSpacing="widest"
            textTransform="uppercase"
            color="whiteAlpha.500"
          >
            Projects
          </Text>
          {projects.map((p) => (
            <RouterLink
              key={p.path}
              to={p.path}
              style={{ width: '100%', textDecoration: 'none' }}
            >
              <Box
                borderBottom="1px solid"
                borderColor="whiteAlpha.100"
                pb={4}
                _hover={{ borderColor: 'whiteAlpha.400' }}
                transition="border-color 0.2s"
              >
                <Text fontSize="xl" fontWeight="300">
                  {p.name}
                </Text>
                <Text fontSize="sm" color="whiteAlpha.500" mt={1}>
                  {p.description}
                </Text>
              </Box>
            </RouterLink>
          ))}
        </VStack>

        {/* Footer links */}
        <HStack gap={5} color="whiteAlpha.500">
          <Link
            href="https://joonaspuuppo.com"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ color: 'white' }}
          >
            <FaGlobe />
          </Link>
          <Link
            href="https://github.com/joonaspuuppo"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ color: 'white' }}
          >
            <FaGithub />
          </Link>
          <Link
            href="https://bsky.app/profile/joonaspuuppo.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ color: 'white' }}
          >
            <FaBluesky />
          </Link>
          <Link
            href="https://www.instagram.com/joonaspuuppo/"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ color: 'white' }}
          >
            <FaInstagram />
          </Link>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Home
