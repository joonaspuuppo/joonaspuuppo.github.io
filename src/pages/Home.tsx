import { Box, Flex, Heading, Text, Stack, HStack, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router'
import usePageMeta from '@/hooks/usePageMeta'
import { useEffect, useRef } from 'react'
import { FaGithub, FaBluesky, FaInstagram } from 'react-icons/fa6'

const navLinks = [
  { label: '/projects', path: '/projects' },
  { label: '/about', path: '/about' },
]

const Home = () => {
  usePageMeta({ title: 'Joonas Puuppo' })
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let currentX = targetX
    let currentY = targetY
    let rafId: number

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    const animate = () => {
      currentX += (targetX - currentX) * 0.2
      currentY += (targetY - currentY) * 0.2
      if (glowRef.current) {
        glowRef.current.style.left = `${currentX}px`
        glowRef.current.style.top = `${currentY}px`
      }
      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <Flex
      minH="100vh"
      align={{ base: 'flex-start', md: 'center' }}
      justify="center"
      bg="hsl(240, 10%, 10%)"
      px={8}
      pt={{ base: 40, md: 0 }}
      overflow="hidden"
    >
      <Box
        ref={glowRef}
        position="fixed"
        pointerEvents="none"
        transform="translate(-50%, -50%)"
        w="1500px"
        h="1500px"
        borderRadius="full"
        background="radial-gradient(circle, hsla(220, 100%, 60%, 0.12) 0%, transparent 70%)"
        zIndex={0}
      />
      {/* Blur layer */}
      <Box
        position="fixed"
        inset={0}
        backdropFilter="blur(80px)"
        zIndex={0}
        pointerEvents="none"
      />
      <Box zIndex={1}>
        <Heading
          fontSize={{ base: '4xl', md: '5xl' }}
          fontWeight="900"
          color="whiteAlpha.900"
          mb={3}
        >
          Joonas Puuppo
        </Heading>

        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          fontFamily={'mono'}
          color="whiteAlpha.600"
          mt={4}
          mb={8}
        >
          // Software developer. Creative coder.
        </Text>

        <Stack direction={{ base: 'column', md: 'row' }} gap={6}>
          {navLinks.map((link) => (
            <RouterLink key={link.path} to={link.path}>
              <Text
                fontFamily="mono"
                fontSize={{ base: 'md', md: 'lg' }}
                color="white"
                _hover={{ color: 'whiteAlpha.800' }}
                transition="color 0.15s"
              >
                {link.label}
              </Text>
            </RouterLink>
          ))}
        </Stack>

        <HStack gap={6} mt={10} color="whiteAlpha.400" flexWrap="wrap">
          {[
            {
              href: 'https://github.com/joonaspuuppo',
              icon: <FaGithub size={20} />,
              label: 'GitHub',
            },
            {
              href: 'https://bsky.app/profile/joonaspuuppo.bsky.social',
              icon: <FaBluesky size={20} />,
              label: 'Bluesky',
            },
            {
              href: 'https://www.instagram.com/joonaspuuppo/',
              icon: <FaInstagram size={20} />,
              label: 'Instagram',
            },
          ].map(({ href, icon, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              _hover={{ color: 'white' }}
              transition="color 0.15s"
            >
              <HStack gap={2}>
                {icon}
                <Text fontSize="md">{label}</Text>
              </HStack>
            </Link>
          ))}
        </HStack>
      </Box>
    </Flex>
  )
}

export default Home
