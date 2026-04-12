import { Box, Flex, Heading, Text, Stack, HStack, Link } from '@chakra-ui/react'
import { Link as RouterLink, useLocation, Outlet } from 'react-router'
import usePageMeta from '@/hooks/usePageMeta'
import { useEffect, useRef } from 'react'
import { FaGithub, FaBluesky, FaLinkedin } from 'react-icons/fa6'

const navLinks = [
  { label: '/home', path: '/' },
  { label: '/projects', path: '/projects' },
  { label: '/about', path: '/about' },
]

const Layout = () => {
  usePageMeta({ title: 'Joonas Puuppo' })
  const glowRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const isHome = location.pathname === '/'

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
      currentX += (targetX - currentX) * 0.12
      currentY += (targetY - currentY) * 0.12
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
    <Box
      h={{ base: 'auto', md: '100vh' }}
      bg="hsl(240, 10%, 10%)"
      overflow={{ base: 'auto', md: 'hidden' }}
      position="relative"
    >
      {/* Cursor glow */}
      <Box
        ref={glowRef}
        position="fixed"
        pointerEvents="none"
        transform="translate(-50%, -50%)"
        w="600px"
        h="600px"
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

      <Flex
        position="relative"
        zIndex={1}
        h={{ base: 'auto', md: '100vh' }}
        direction={{ base: 'column', md: 'row' }}
      >
        {/* Home panel */}
        <Flex
          align={{ base: 'flex-start', md: 'center' }}
          justify="center"
          px={12}
          pt={{ base: isHome ? '20vh' : 16, md: 0 }}
          transition="all 0.4s ease"
          w={{ base: 'full', md: isHome ? '100%' : '40%' }}
          minW={{ md: isHome ? 'unset' : '320px' }}
          flexShrink={0}
        >
          <Box>
            <Heading
              fontSize={{ base: '4xl', md: isHome ? '5xl' : '3xl' }}
              fontWeight="900"
              color="whiteAlpha.900"
              mb={3}
              transition="font-size 0.4s ease"
            >
              Joonas Puuppo
            </Heading>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              fontFamily="mono"
              color="whiteAlpha.600"
              mt={4}
              mb={8}
            >
              // Hello world! I'm a software developer and designer based in
              Jyväskylä, Finland.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} gap={6}>
              {navLinks.map((link) => (
                <RouterLink key={link.path} to={link.path}>
                  <Text
                    fontFamily="mono"
                    fontSize={{ base: 'md', md: 'lg' }}
                    color={
                      location.pathname === link.path
                        ? 'white'
                        : 'whiteAlpha.500'
                    }
                    _hover={{ color: 'white' }}
                    transition="color 0.15s"
                  >
                    {link.label}
                  </Text>
                </RouterLink>
              ))}
            </Stack>
            <HStack
              gap={6}
              mt={10}
              color="whiteAlpha.400"
              flexWrap="wrap"
              display={{ base: isHome ? 'flex' : 'none', md: 'flex' }}
            >
              {[
                {
                  href: 'https://github.com/joonaspuuppo',
                  icon: <FaGithub size={16} />,
                  label: 'GitHub',
                },
                {
                  href: 'https://bsky.app/profile/joonaspuuppo.bsky.social',
                  icon: <FaBluesky size={16} />,
                  label: 'Bluesky',
                },
                {
                  href: 'https://linkedin.com/in/joonas-puuppo',
                  icon: <FaLinkedin size={16} />,
                  label: 'LinkedIn',
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
                    <Text fontSize="sm" fontFamily="mono">
                      {label}
                    </Text>
                  </HStack>
                </Link>
              ))}
            </HStack>
          </Box>
        </Flex>

        {/* Sub-page panel */}
        {!isHome && (
          <Box
            flex={1}
            px={12}
            py={{ base: 10, md: 16 }}
            borderColor="whiteAlpha.100"
            color="white"
            overflowY={{ md: 'auto' }}
            h={{ md: '100vh' }}
          >
            <Outlet />
            <HStack
              gap={6}
              color="whiteAlpha.400"
              flexWrap="wrap"
              display={{ base: 'flex', md: 'none' }}
              mt={16}
              mb={8}
              justifyContent="center"
            >
              {[
                {
                  href: 'https://github.com/joonaspuuppo',
                  icon: <FaGithub size={16} />,
                  label: 'GitHub',
                },
                {
                  href: 'https://bsky.app/profile/joonaspuuppo.bsky.social',
                  icon: <FaBluesky size={16} />,
                  label: 'Bluesky',
                },
                {
                  href: 'https://www.linkedin.com/in/joonaspuuppo',
                  icon: <FaLinkedin size={16} />,
                  label: 'LinkedIn',
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
                    <Text fontSize="sm" fontFamily="mono">
                      {label}
                    </Text>
                  </HStack>
                </Link>
              ))}
            </HStack>
          </Box>
        )}
      </Flex>
    </Box>
  )
}

export default Layout
