import {
  Box,
  Center,
  Heading,
  HStack,
  Image,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import dialogue from './../../output.json'
import { DialogueLine } from '@/types/speakLikeCloud'

const MAX_WIDTH = '800px'
const lines: DialogueLine[] = dialogue

const getRandomLine = (): DialogueLine => {
  const randomIndex = Math.floor(Math.random() * lines.length)
  return lines[randomIndex]
}

const SpeakLikeCloud = () => {
  const bgImageRef = useRef<HTMLImageElement>(null)
  const [bgImageHeight, setBgImageHeight] = useState<number | undefined>(0)
  const [name, setName] = useState<string>('')
  const [cloudText, setCloudText] = useState<string>('')

  useEffect(() => {
    setBgImageHeight(bgImageRef.current?.clientHeight)
  }, [setBgImageHeight])

  useEffect(() => {
    const dialogueLine = getRandomLine()
    setCloudText(`${dialogueLine.name}\n\u201C${dialogueLine.line}\u201D`)
    setName(dialogueLine.name)
  }, [])

  return (
    <Center>
      <VStack spaceY={5} w={'full'} maxW={MAX_WIDTH}>
        <HStack fontSize={'128px'} my={10} spaceX={4}>
          <Heading
            fontSize={'64px'}
            fontWeight={'200'}
            //outline={'1px solid green'}
            lineHeight={1}
          >
            Speak like
          </Heading>
          <Heading
            fontSize={'90px'}
            fontFamily={'Reactor'}
            //outline={'1px solid red'}
            lineHeight={0.5}
            alignSelf={'end'}
          >
            {name}
          </Heading>
        </HStack>
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
