import { Box, Center, Heading, Image, Textarea, VStack } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'

const MAX_WIDTH = '1000px'

const cloudTexts = [
  "Barret\n\u201CThis mission was a success. But don't get lazy now. The hard part's still to come! Don't y'all be scared of that explosion! Cause the next one's gonna be bigger than that! Meet back at the hideout!! Move out!\u201D",
]

const SpeakLikeCloud = () => {
  const bgImageRef = useRef<HTMLImageElement>(null)
  const [bgImageHeight, setBgImageHeight] = useState<number | undefined>(0)
  const [cloudText, setCloudText] = useState<string>(cloudTexts[0])

  useEffect(() => {
    setBgImageHeight(bgImageRef.current?.clientHeight)
  }, [setBgImageHeight])

  return (
    <Center>
      <VStack spaceY={5} w={'full'} maxW={MAX_WIDTH}>
        <Heading as={'h1'} fontSize={'28px'}>
          Speak like Cloud
        </Heading>
        <Box position={'relative'}>
          <Image
            src="/ffvii_background.jpg"
            w={'full'}
            aspectRatio={{ base: 3 / 4, md: 4 / 3 }}
            ref={bgImageRef}
          />
          <Box position={'absolute'} top={0} left={0} w={'full'} h={'full'}>
            <Center mt={'40px'}>
              <Textarea
                mx={10}
                autoresize
                variant={'cloud'}
                w={'full'}
                minH={'100px'}
                maxH={bgImageHeight && bgImageHeight - 80}
                value={cloudText}
                onChange={(e) => setCloudText(e.target.value)}
              />
            </Center>
          </Box>
        </Box>
      </VStack>
    </Center>
  )
}

export default SpeakLikeCloud
