import { Route, Routes } from 'react-router'
import TalkLikeTifa from './pages/TalkLikeTifa'
import Layout from './pages/Layout'
import Projects from './pages/Projects'
import About from './pages/About'
import { Box } from '@chakra-ui/react'
import { TalkLikeTifaProvider } from './components/ui/TalkLikeTifaProvider'
import '@fontsource-variable/lexend/wght.css'
import '@fontsource/source-sans-pro/400.css'
import '@fontsource/source-sans-pro/600.css'
import '@fontsource/source-sans-pro/700.css'
import '@fontsource/inconsolata/400.css'

function App() {
  return (
    <Box w={'100vw'} h={'100vh'}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={null} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route
          path="/talkliketifa"
          element={
            <TalkLikeTifaProvider>
              <TalkLikeTifa />
            </TalkLikeTifaProvider>
          }
        />
      </Routes>
    </Box>
  )
}

export default App
