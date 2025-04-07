import { addPixels } from '@/util/common'
import { Box, Center, Heading, Image, Textarea, VStack } from '@chakra-ui/react'

const BACKGROUND_WIDTH = '800px'
const BACKGROUND_HEIGHT = '600px'

const SpeakLikeCloud = () => {
  return (
    <Center>
      <VStack spaceY={5}>
        <Heading as={'h1'} fontSize={'28px'}>
          Speak like Cloud
        </Heading>
        <Box position={'relative'}>
          <Image
            src="/ffvii_background.jpg"
            w={BACKGROUND_WIDTH}
            h={BACKGROUND_HEIGHT}
          />
          <Box
            position={'absolute'}
            top={0}
            left={0}
            w={BACKGROUND_WIDTH}
            h={BACKGROUND_HEIGHT}
          >
            <Center mt={'20px'}>
              <Textarea
                autoresize
                variant={'cloud'}
                w={'600px'}
                minH={'100px'}
                maxH={addPixels(BACKGROUND_HEIGHT, -40)}
              />
            </Center>
          </Box>
        </Box>
      </VStack>
    </Center>
  )
}

export default SpeakLikeCloud
