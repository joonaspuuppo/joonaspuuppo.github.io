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
  Tabs,
  Button,
} from '@chakra-ui/react'
import { useState, useRef } from 'react'
import { MdInfo, MdShare, MdUpdate, MdMenu, MdEdit } from 'react-icons/md'
import { FaBluesky, FaInstagram, FaGlobe } from 'react-icons/fa6'

interface InfoDrawerProps {
  onShare: () => void
  onRefresh: () => void
  onEdit: () => void
}

const InfoDrawer = ({ onShare, onRefresh, onEdit }: InfoDrawerProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const drawerContentStyle = {
    background:
      'linear-gradient(170deg, hsl(240deg 100% 20%), hsl(240deg 100% 8%))',
    borderColor: 'hsl(0deg 0% 73.73%)',
    borderWidth: '6px',
    borderStyle: 'ridge',
    borderRadius: '5px',
    boxShadow: 'inset 0 0 3px rgb(0, 0, 0)',
    textShadow: '1px 1px 2px black',
  }

  return (
    <Drawer.Root
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      initialFocusEl={() => closeButtonRef.current}
    >
      <Drawer.Trigger asChild>
        <IconButton
          variant="cloud"
          size="2xl"
          aria-label="Open menu"
          title="Open menu"
          boxSize={{ base: '14', md: '10' }}
          fontSize={{ base: '28px', md: 'inherit' }}
          borderWidth={'1px'}
          borderColor={'whiteAlpha.500'}
          borderStyle={'solid'}
        >
          <Box display={{ base: 'none', md: 'block' }}>
            <MdInfo />
          </Box>
          <Box display={{ base: 'block', md: 'none' }}>
            <MdMenu style={{ width: '28px', height: '28px' }} />
          </Box>
        </IconButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner p={3}>
          <Drawer.Content {...drawerContentStyle}>
            <Drawer.Header>
              <Drawer.Title fontFamily={'Reactor'} fontSize={'4xl'}>
                Talk Like Tifa
              </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body p={0}>
              <Tabs.Root defaultValue="info" variant="line" colorPalette="blue">
                <Tabs.List
                  borderBottomColor={'whiteAlpha.300'}
                  px={4}
                  bg="transparent"
                >
                  <Tabs.Trigger
                    value="info"
                    bg="transparent"
                    focusRing={'none'}
                  >
                    Info
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="actions"
                    bg="transparent"
                    focusRing={'none'}
                  >
                    Actions
                  </Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content value="actions" px={4} pt={4}>
                  <VStack align={'stretch'} spaceY={3}>
                    <Text>
                      <Box as="span" display={{ base: 'none', md: 'inline' }}>
                        Click{' '}
                        <Box
                          as="span"
                          display="inline-flex"
                          alignItems="center"
                          fontWeight={'bold'}
                          gap={1}
                        >
                          <MdUpdate /> Refresh
                        </Box>
                      </Box>
                      <Box as="span" display={{ base: 'inline', md: 'none' }}>
                        Swipe up or press{' '}
                        <Box
                          as="span"
                          display="inline-flex"
                          alignItems="center"
                          fontWeight={'bold'}
                          gap={1}
                        >
                          <MdUpdate /> Refresh
                        </Box>
                      </Box>{' '}
                      to get a different dialogue + background combination.
                      Leave the text as it is or{' '}
                      <Box
                        as="span"
                        display="inline-flex"
                        alignItems="center"
                        fontWeight="bold"
                        gap={1}
                      >
                        <MdEdit />
                        <span>Edit</span>
                      </Box>{' '}
                      it to write your own message as a Final Fantasy VII
                      character. You can share your creation by{' '}
                      <Box as="span" display={{ base: 'none', md: 'inline' }}>
                        clicking
                      </Box>
                      <Box as="span" display={{ base: 'inline', md: 'none' }}>
                        pressing
                      </Box>{' '}
                      <Box
                        as="span"
                        display="inline-flex"
                        alignItems="center"
                        fontWeight={'bold'}
                        gap={1}
                      >
                        <MdShare />
                        Share.
                      </Box>
                    </Text>
                    <Button
                      onClick={() => {
                        onRefresh()
                        setOpen(false)
                      }}
                    >
                      <HStack justify="center">
                        <MdUpdate />
                        <span>Refresh</span>
                      </HStack>
                    </Button>
                    <Button
                      onClick={() => {
                        onEdit()
                        setOpen(false)
                      }}
                      variant="solid"
                    >
                      <HStack justify="center">
                        <MdEdit />
                        <span>Edit text</span>
                      </HStack>
                    </Button>
                    <Button
                      onClick={() => {
                        onShare()
                        setOpen(false)
                      }}
                      variant="solid"
                    >
                      <HStack justify="center">
                        <MdShare />
                        <span>Share</span>
                      </HStack>
                    </Button>
                  </VStack>
                </Tabs.Content>

                <Tabs.Content value="info" px={4} pt={4}>
                  <VStack align={'start'} spaceY={3}>
                    <Text>
                      Randomly chosen lines of dialogue from Final Fantasy VII
                      (1997) presented as in-game text boxes.
                    </Text>
                    <Box>
                      <Heading fontFamily={'Reactor'} fontSize={'2xl'} mb={2}>
                        Speak Like Sephiroth
                      </Heading>
                      <Text>
                        Accompanying Bluesky bot that posts an image from this
                        app every six hours.
                      </Text>
                      <Link
                        href="https://bsky.app/profile/speaklikesephiroth.bsky.social"
                        target="_blank" rel="noopener noreferrer" color={'blue.300'}
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
                            target="_blank" rel="noopener noreferrer" color={'blue.300'}
                          >
                            FantasyAnime.com
                          </Link>
                        </Text>
                        <Text>
                          FFVII pixel font Reactor7 by{' '}
                          <Link href="https://caveras.net/" target="_blank" rel="noopener noreferrer" color={'blue.300'}>
                            Caveras
                          </Link>
                        </Text>
                        <Text>
                          FFVII script from{' '}
                          <Link
                            href="https://finalfantasy.fandom.com/wiki/Final_Fantasy_VII_script"
                            target="_blank" rel="noopener noreferrer" color={'blue.300'}
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
                        <Link
                          href="https://joonaspuuppo.com/"
                          target="_blank" rel="noopener noreferrer" color={'blue.300'}
                        >
                          <HStack>
                            <FaGlobe />
                            <span>Website</span>
                          </HStack>
                        </Link>
                        <Link
                          href="https://bsky.app/profile/joonaspuuppo.bsky.social"
                          target="_blank" rel="noopener noreferrer" color={'blue.300'}
                        >
                          <HStack>
                            <FaBluesky />
                            <span>Bluesky</span>
                          </HStack>
                        </Link>
                        <Link
                          href="https://www.instagram.com/joonaspuuppo/"
                          target="_blank" rel="noopener noreferrer" color={'blue.300'}
                        >
                          <HStack>
                            <FaInstagram />
                            <span>Instagram</span>
                          </HStack>
                        </Link>
                      </VStack>
                    </Box>
                  </VStack>
                </Tabs.Content>
              </Tabs.Root>
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
