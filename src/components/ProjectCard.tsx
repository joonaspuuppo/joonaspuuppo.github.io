import { Box, Flex, Heading, Text, HStack, Image } from '@chakra-ui/react'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  href?: string
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  href,
}: ProjectCardProps) => {
  const content = (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      gap={5}
      p={5}
      borderRadius="md"
      border="1px solid"
      borderColor="whiteAlpha.100"
      _hover={{ borderColor: 'whiteAlpha.300', bg: 'whiteAlpha.50' }}
      transition="all 0.2s"
      cursor={href ? 'pointer' : 'default'}
    >
      <Image
        src={image}
        alt={title}
        w={{ base: 'full', md: '220px' }}
        h={{ base: '200px', md: '160px' }}
        objectFit="cover"
        borderRadius="sm"
        flexShrink={0}
      />
      <Box>
        <Heading fontSize="lg" fontWeight="600" color="whiteAlpha.900" mb={1}>
          {title}
        </Heading>
        <Text fontSize="md" color="whiteAlpha.600" mb={3}>
          {description}
        </Text>
        <HStack gap={2} flexWrap="wrap">
          {tags.map((tag) => (
            <Text
              key={tag}
              fontSize="sm"
              fontFamily="mono"
              color="whiteAlpha.500"
              px={2}
              py={0.5}
              border="1px solid"
              borderColor="whiteAlpha.200"
              borderRadius="sm"
            >
              {tag}
            </Text>
          ))}
        </HStack>
      </Box>
    </Flex>
  )

  if (href) {
    return (
      <a href={href} style={{ textDecoration: 'none' }}>
        {content}
      </a>
    )
  }

  return content
}

export default ProjectCard
