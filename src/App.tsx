import { Route, Routes } from 'react-router'
import SpeakLikeCloud from './pages/SpeakLikeCloud'
import { Box } from '@chakra-ui/react'

function App() {
  return (
    <Box w={'100vw'} h={'100vh'}>
      <Routes>
        <Route path="/" element={<p>Hello world!</p>} />
        <Route path="/speaklikecloud" element={<SpeakLikeCloud />} />
      </Routes>
    </Box>
  )
}

export default App
