import {
  Box,
  Center,
  Heading,
  Image,
  Stack,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import { useEffect, useMemo, useRef, useState } from 'react'
import dialogue from './../../output.json'
import { CharacterName, DialogueLine } from '@/types/speakLikeCloud'
import { getBackgroundImagePath } from '@/util/speakLikeCloud'

const MAX_WIDTH = '800px'
const lines: DialogueLine[] = dialogue

const getRandomLine = (): DialogueLine => {
  const randomIndex = Math.floor(Math.random() * lines.length)
  return lines[randomIndex]
}

const SpeakLikeCloud = () => {
  const bgImageRef = useRef<HTMLImageElement>(null)
  const bgImageHeight = bgImageRef.current?.clientHeight ?? 0
  const [name, setName] = useState<string>('')
  const [cloudText, setCloudText] = useState<string>('')
  const imagePath = useMemo(
    () => getBackgroundImagePath(name as CharacterName),
    [name]
  )

  useEffect(() => {
    const dialogueLine = getRandomLine()
    setCloudText(`${dialogueLine.name}\n\u201C${dialogueLine.line}\u201D`)
    setName(dialogueLine.name)
  }, [])

  return (
    <Box
      backgroundImage={`url("${imagePath}")`}
      backgroundSize={'cover'}
      h={'full'}
    >
      <Center backdropFilter="blur(10px)" h={'full'}>
        <VStack
          spaceY={3}
          w={'full'}
          maxW={MAX_WIDTH}
          p={10}
          pt={5}
          my={5}
          h={{ base: 'full', md: 'unset' }}
          bgColor={'hsl(240deg 100% 10.51%)'}
          borderRadius={{ md: '10px' }}
        >
          <Stack
            direction={{ base: 'column', md: 'row' }}
            fontSize={'128px'}
            my={{ base: 0, md: 5 }}
            spaceX={{ base: 0, md: 4 }}
            justifyContent={'center'}
            //outline={'1px solid red'}
          >
            <Heading
              fontSize={{ base: '32px', md: '64px' }}
              fontWeight={'200'}
              //outline={'1px solid green'}
              lineHeight={1}
              textAlign={'center'}
            >
              Speak like
            </Heading>
            <Heading
              fontSize={'90px'}
              fontFamily={'Reactor'}
              //outline={'1px solid red'}
              lineHeight={{ base: 1, md: 0.5 }}
              alignSelf={{ base: 'center', md: 'end' }}
            >
              {name}
            </Heading>
          </Stack>
          <Box position={'relative'}>
            <Image
              src={imagePath}
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
    </Box>
  )
}

export default SpeakLikeCloud
