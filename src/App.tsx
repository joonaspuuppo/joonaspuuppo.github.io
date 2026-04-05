import { Route, Routes } from 'react-router'
import TalkLikeTifa from './pages/TalkLikeTifa'
import { Box } from '@chakra-ui/react'

function App() {
  return (
    <Box w={'100vw'} h={'100vh'}>
      <Routes>
        <Route path="/" element={<p>Hello world!</p>} />
        <Route path="/talkliketifa" element={<TalkLikeTifa />} />
      </Routes>
    </Box>
  )
}

export default App
