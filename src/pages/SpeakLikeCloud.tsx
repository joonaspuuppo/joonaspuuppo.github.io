import { Center, Heading, Textarea, VStack } from '@chakra-ui/react'

const SpeakLikeCloud = () => {
  return (
    <Center>
      <VStack spaceY={5}>
        <Heading as={'h1'} fontSize={'28px'}>
          Speak like Cloud
        </Heading>
        <Textarea autoresize variant={'cloud'} w={'600px'} minH={'100px'} />
      </VStack>
    </Center>
  )
}

export default SpeakLikeCloud
