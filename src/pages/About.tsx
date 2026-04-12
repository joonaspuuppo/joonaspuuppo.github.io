import { Text, Image, VStack, Heading, Link, HStack } from '@chakra-ui/react'
import { FaGlobe } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const About = () => (
  <VStack align="start" gap={3}>
    <Image
      src="/profilepic.jpg"
      alt="Joonas Puuppo"
      boxSize="200px"
      borderRadius="full"
      objectFit="cover"
    />
    <Heading fontFamily={'mono'} size={'3xl'}>
      Hello world!
    </Heading>
    <Text color="whiteAlpha.700" fontSize="md" lineHeight={1.8} maxW="560px">
      I'm Joonas, a software developer and designer based in Jyväskylä, Finland.
      I spend my working hours developing software solutions for energy
      companies and their customers at Akamon Innovations. During the evenings
      and weekends I work on creative coding and graphic design projects, record
      podcasts, play video games and try not to make terrible chess moves.
    </Text>

    <Text color="whiteAlpha.700" fontSize="md" lineHeight={1.8} maxW="560px">
      This website functions as a place to showcase some of my coding-related
      personal projects. Feel free to take a look around!
    </Text>

    <Text color="whiteAlpha.700" fontSize="md" lineHeight={1.8} maxW="560px">
      If you're interested in my graphic design and photography work, check out
      my other portfolio site:
    </Text>
    <Link
      href="https://joonaspuuppo.com/"
      target="_blank"
      rel="noopener noreferrer"
      _hover={{ color: 'white' }}
      transition="color 0.15s"
    >
      <HStack gap={2}>
        <FaGlobe size={16} />
        <Text fontSize="sm" fontFamily="mono">
          joonaspuuppo.com
        </Text>
      </HStack>
    </Link>

    <Text color="whiteAlpha.700" fontSize="md" lineHeight={1.8} maxW="560px">
      Contact me:
    </Text>

    <Link
      href="mailto:joonas.puuppo@gmail.com"
      _hover={{ color: 'white' }}
      transition="color 0.15s"
    >
      <HStack gap={2}>
        <MdEmail size={16} />
        <Text fontSize="sm" fontFamily="mono">
          joonas.puuppo@gmail.com
        </Text>
      </HStack>
    </Link>
  </VStack>
)

export default About
