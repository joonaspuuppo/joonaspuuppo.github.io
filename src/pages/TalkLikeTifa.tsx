import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Skeleton,
  Stack,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import { useEffect, useMemo, useRef, useState } from 'react'
import dialogue from '../../output.json'
import { CharacterName, DialogueLine } from '@/types/talkLikeTifa'
import { getBackgroundImagePath, getCharacterVerb } from '@/util/talkLikeTifa'
import { MdUpdate, MdShare } from 'react-icons/md'
import { useSwipeable } from 'react-swipeable'
import InfoDrawer from './components/InfoDrawer'
import { shareImage } from '@/util/shareImage'
/**
 * TODO:
 * - Add ability to return to previous line & image combinations
 *   by clicking a back button or swiping down
 * - Make image extend all the way to the top in mobile view
 *   so that the blurred heading section is a continuation
 *   of the same image
 */

const MAX_WIDTH = '800px'
const lines: DialogueLine[] = dialogue

const TalkLikeTifa = () => {
  const [imageHeight, setImageHeight] = useState<number>(0)
  const [imageLoading, setImageLoading] = useState<boolean>(true)
  const imageRef = useRef<HTMLImageElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const [desktopFontSize, setDesktopFontSize] = useState<number>(64)
  const [mobileNameSize, setMobileNameSize] = useState<number>(90)
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
    if (!titleRef.current) return
    const isMobile = window.innerWidth < 768
    const container = titleRef.current
    const availableW = container.getBoundingClientRect().width
    const testCanvas = document.createElement('canvas')
    const tctx = testCanvas.getContext('2d')!

    if (isMobile) {
      let size = 90
      while (size > 30) {
        tctx.font = `${size}px Reactor, sans-serif`
        if (tctx.measureText(name).width <= availableW - 16) break
        size -= 2
      }
      setMobileNameSize(size)
    } else {
      const verb = getCharacterVerb(name as CharacterName) + ' like'
      const gap = 16
      let size = 64
      while (size > 24) {
        tctx.font = `200 ${size}px sans-serif`
        const verbW = tctx.measureText(verb).width
        tctx.font = `${size * 1.4}px Reactor, sans-serif`
        const nameW = tctx.measureText(name).width
        if (verbW + nameW + gap <= availableW) break
        size -= 2
      }
      setDesktopFontSize(size)
    }
  }, [name])

  const handleShare = () => {
    if (!imageRef.current) return
    shareImage(imageRef.current, dialogueLine)
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
            bgColor={'hsl(240deg 100% 10.51%)'}
            borderRadius={{ md: '10px' }}
          >
            <Stack
              ref={titleRef}
              direction={{ base: 'column', md: 'row' }}
              fontSize={'128px'}
              my={{ base: 0, md: 5 }}
              spaceX={{ base: 0, md: 4 }}
              justifyContent={'center'}
            >
              <Heading
                fontSize={{ base: '32px', md: `${desktopFontSize}px` }}
                fontWeight={'200'}
                lineHeight={1}
                textAlign={'center'}
              >
                {getCharacterVerb(name as CharacterName)} like
              </Heading>
              <Heading
                fontSize={{
                  base: `${mobileNameSize}px`,
                  md: `${Math.round(desktopFontSize * 1.4)}px`,
                }}
                fontFamily={'Reactor'}
                lineHeight={{ base: 1, md: 0.5 }}
                alignSelf={{ base: 'center', md: 'end' }}
                pl={{ base: 2, md: 0 }}
                whiteSpace="nowrap"
              >
                {name}
              </Heading>
            </Stack>
            <Skeleton
              loading={imageLoading}
              position={'relative'}
              h={{ base: 'full', md: 'unset' }}
              maxH={'full'}
              id="skeleton"
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
                    id="textArea"
                    color={'white'}
                  />
                </Center>
              </Flex>
            </Skeleton>
          </VStack>
        </Center>
      </Box>
      <HStack position={'absolute'} top={1} right={1}>
        <IconButton
          variant={'cloud'}
          size={'2xl'}
          onClick={handleShare}
          aria-label="Share"
          title="Share"
          display={{ base: 'none', md: 'flex' }}
        >
          <MdShare />
        </IconButton>
        <IconButton
          variant={'cloud'}
          size={'2xl'}
          onClick={() => setRandomDialogueLine()}
          display={{ base: 'none', md: 'flex' }}
          aria-label="Refresh"
          title="Refresh"
        >
          <MdUpdate />
        </IconButton>
        <InfoDrawer
          onShare={handleShare}
          onRefresh={setRandomDialogueLine}
          onEdit={() => {
            setTimeout(() => document.getElementById('textArea')?.focus(), 100)
          }}
        />
      </HStack>
    </>
  )
}

export default TalkLikeTifa
