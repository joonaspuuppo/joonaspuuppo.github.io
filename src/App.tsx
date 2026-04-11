import { Route, Routes } from 'react-router'
import TalkLikeTifa from './pages/TalkLikeTifa'
import Home from './pages/Home'
import { Box } from '@chakra-ui/react'
import '@fontsource-variable/lexend/wght.css'

function App() {
  return (
    <Box w={'100vw'} h={'100vh'}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/talkliketifa" element={<TalkLikeTifa />} />
      </Routes>
    </Box>
  )
}

export default App
