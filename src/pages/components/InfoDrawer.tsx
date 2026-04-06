import {
  Drawer,
  Portal,
  CloseButton,
  IconButton,
  Heading,
  Text,
  Link,
  VStack,
  Box,
  HStack,
} from '@chakra-ui/react'
import { useState, useRef } from 'react'
import { MdInfo, MdUpdate } from 'react-icons/md'
import { FaBluesky, FaInstagram, FaGlobe } from 'react-icons/fa6'

const InfoDrawer = () => {
  const [open, setOpen] = useState<boolean>(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  return (
    <Drawer.Root
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      initialFocusEl={() => closeButtonRef.current}
    >
      <Drawer.Trigger asChild>
        <IconButton variant="cloud" size="2xl">
          <MdInfo />
        </IconButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner p={3}>
          <Drawer.Content
            background={
              'linear-gradient(170deg, hsl(240deg 100% 20%), hsl(240deg 100% 8%))'
            }
            borderColor={'hsl(0deg 0% 73.73%)'}
            borderWidth={'6px'}
            borderStyle={'ridge'}
            borderRadius={'5px'}
            boxShadow={'inset 0 0 3px rgb(0, 0, 0)'}
            textShadow={'1px 1px 2px black'}
          >
            <Drawer.Header>
              <Drawer.Title fontFamily={'Reactor'} fontSize={'4xl'}>
                Talk Like Tifa
              </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <VStack align={'start'} spaceY={3}>
                <Text>
                  Randomly chosen lines of dialogue from Final Fantasy VII
                  (1997) presented as in-game text boxes.
                </Text>
                <Text>
                  <Box as="span" display={{ base: 'none', md: 'inline' }}>
                    Hit{' '}
                    <Box
                      as="span"
                      display="inline-flex"
                      alignItems="center"
                      gap={1}
                    >
                      Refresh <MdUpdate />
                    </Box>
                  </Box>
                  <Box as="span" display={{ base: 'inline', md: 'none' }}>
                    Swipe up
                  </Box>{' '}
                  to get a different dialogue + background combination. Leave
                  the text as it is or edit it to write your own message as a
                  Final Fantasy VII character. Take a screenshot to share your
                  creation!
                </Text>

                <Box>
                  <Heading fontFamily={'Reactor'} fontSize={'2xl'} mb={2}>
                    Speak Like Sephiroth
                  </Heading>
                  <Text>
                    Accompanying Bluesky bot that posts images from this app
                    every six hours.
                  </Text>
                  <Link
                    href="https://bsky.app/profile/speaklikesephiroth.bsky.social"
                    color={'blue.300'}
                    mt={3}
                  >
                    <HStack>
                      <FaBluesky />
                      <span>Speak Like Sephiroth</span>
                    </HStack>
                  </Link>
                </Box>

                <Box>
                  <Heading fontFamily={'Reactor'} fontSize={'2xl'} mb={2}>
                    Sources
                  </Heading>
                  <VStack align={'start'} spaceY={1}>
                    <Text>
                      FFVII screenshots by{' '}
                      <Link
                        href="https://fantasyanime.com/finalfantasy/screen-shots.htm"
                        color={'blue.300'}
                      >
                        FantasyAnime.com
                      </Link>
                    </Text>
                    <Text>
                      FFVII pixel font Reactor7 by{' '}
                      <Link href="https://caveras.net/" color={'blue.300'}>
                        Caveras
                      </Link>
                    </Text>
                    <Text>
                      FFVII script from{' '}
                      <Link
                        href="https://finalfantasy.fandom.com/wiki/Final_Fantasy_VII_script"
                        color={'blue.300'}
                      >
                        Final Fantasy Wiki
                      </Link>
                    </Text>
                  </VStack>
                </Box>

                <Box>
                  <Heading fontFamily={'Reactor'} fontSize={'2xl'} mb={2}>
                    Made by
                  </Heading>
                  <Text mb={4}>Joonas Puuppo</Text>
                  <VStack align={'start'} spaceY={1}>
                    <Link href="https://joonaspuuppo.com/" color={'blue.300'}>
                      <HStack>
                        <FaGlobe />
                        <span>Website</span>
                      </HStack>
                    </Link>
                    <Link
                      href="https://bsky.app/profile/joonaspuuppo.bsky.social"
                      color={'blue.300'}
                    >
                      <HStack>
                        <FaBluesky />
                        <span>Bluesky</span>
                      </HStack>
                    </Link>
                    <Link
                      href="https://www.instagram.com/joonaspuuppo/"
                      color={'blue.300'}
                    >
                      <HStack>
                        <FaInstagram />
                        <span>Instagram</span>
                      </HStack>
                    </Link>
                    {/* <Link href="#" color={'blue.300'}>
                      <HStack>
                        <FaXTwitter />
                        <span>X</span>
                      </HStack>
                    </Link> */}
                  </VStack>
                </Box>
              </VStack>
            </Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <CloseButton
                size="sm"
                ref={closeButtonRef}
                bg={'none'}
                border={'1px solid white'}
              />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}

export default InfoDrawer
