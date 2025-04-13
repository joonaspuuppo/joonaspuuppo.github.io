import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Skeleton,
  Stack,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import { useEffect, useMemo, useRef, useState } from 'react'
import dialogue from './../../output.json'
import { CharacterName, DialogueLine } from '@/types/speakLikeCloud'
import { getBackgroundImagePath, getCharacterVerb } from '@/util/speakLikeCloud'
import { MdUpdate } from 'react-icons/md'
import { useSwipeable } from 'react-swipeable'

/**
 * TODO:
 * - Add ability to return to previous line & image combinations
 *   by clicking a back button or swiping down
 */

const MAX_WIDTH = '800px'
const lines: DialogueLine[] = dialogue

const SpeakLikeCloud = () => {
  const [imageHeight, setImageHeight] = useState<number>(0)
  const [imageLoading, setImageLoading] = useState<boolean>(true)
  const imageRef = useRef<HTMLImageElement>(null)
  const [name, setName] = useState<string>('')
  const [dialogueLine, setDialogueLine] = useState<string>('')
  const imagePath = useMemo(
    () => getBackgroundImagePath(name as CharacterName),
    [name]
  )
  const handlers = useSwipeable({
    onSwipedUp: () => setRandomDialogueLine(),
    delta: 75,
    swipeDuration: 500,
  })

  const onImageLoad = () => {
    setImageHeight(imageRef.current?.getBoundingClientRect().height ?? 0)
    setImageLoading(false)
  }

  const setRandomDialogueLine = () => {
    const randomIndex = Math.floor(Math.random() * lines.length)
    const randomLine = lines[randomIndex]
    setDialogueLine(`${randomLine.name}\n\u201C${randomLine.line}\u201D`)
    setName(randomLine.name)
  }

  useEffect(() => {
    setRandomDialogueLine()
  }, [])

  return (
    <>
      <Box
        backgroundImage={`url("${imagePath}")`}
        backgroundSize={'cover'}
        h={'full'}
        {...handlers}
      >
        <Center backdropFilter="blur(10px)" h={'full'}>
          <VStack
            spaceY={3}
            w={'full'}
            maxW={MAX_WIDTH}
            p={{ base: 0, md: 10 }}
            pt={5}
            my={5}
            h={{ base: 'full', md: 'unset' }}
            bgColor={{ base: 'transparent', md: 'hsl(240deg 100% 10.51%)' }}
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
                {getCharacterVerb(name as CharacterName)} like
              </Heading>
              <Heading
                fontSize={'90px'}
                fontFamily={'Reactor'}
                //outline={'1px solid red'}
                lineHeight={{ base: 1, md: 0.5 }}
                alignSelf={{ base: 'center', md: 'end' }}
                pl={{ base: 2, md: 0 }}
              >
                {name}
              </Heading>
            </Stack>
            <Skeleton
              loading={imageLoading}
              position={'relative'}
              h={{ base: 'full', md: 'unset' }}
              maxH={'full'}
            >
              <Image
                src={imagePath}
                w={'full'}
                h={{ base: 'full', md: 'unset' }}
                aspectRatio={{ base: undefined, md: 4 / 3 }}
                ref={imageRef}
                onLoad={onImageLoad}
              />
              <Flex
                position={'absolute'}
                top={0}
                left={0}
                w={'full'}
                maxH={imageHeight}
                justify={'center'}
                align={'flex-start'}
              >
                <Center my={'40px'} w={'full'}>
                  <Textarea
                    mx={10}
                    autoresize
                    variant={'cloud'}
                    w={'full'}
                    minH={'100px'}
                    maxH={imageHeight && imageHeight - 80}
                    value={dialogueLine}
                    onChange={(e) => setDialogueLine(e.target.value)}
                    fontSize={{ base: '30px', md: '32px' }}
                  />
                </Center>
              </Flex>
            </Skeleton>
          </VStack>
        </Center>
      </Box>
      <HStack position={'absolute'} top={1} right={1}>
        <Button
          size={'2xl'}
          onClick={() => setRandomDialogueLine()}
          fontSize={'md'}
          color={'white'}
          bg={'transparent'}
          rounded={'full'}
        >
          <MdUpdate />
        </Button>
      </HStack>
    </>
  )
}

export default SpeakLikeCloud
