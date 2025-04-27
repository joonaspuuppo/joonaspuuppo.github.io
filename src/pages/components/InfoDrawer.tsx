import { Drawer, Button, Portal, CloseButton } from '@chakra-ui/react'
import { useState } from 'react'
import { MdInfo } from 'react-icons/md'

const InfoDrawer = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Drawer.Trigger asChild>
        <Button variant="cloud" size="2xl">
          <MdInfo />
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content bg={'hsl(240deg 100% 10.51%)'}>
            <Drawer.Header>
              <Drawer.Title>Speak Like Sephiroth</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}

export default InfoDrawer
