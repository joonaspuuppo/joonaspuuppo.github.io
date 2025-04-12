import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter } from 'react-router'
import { Provider } from '@/components/ui/provider'
import App from './App.tsx'
import './assets/fonts/Reactor7.woff'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Provider>
        <App />
      </Provider>
    </HashRouter>
  </StrictMode>
)
