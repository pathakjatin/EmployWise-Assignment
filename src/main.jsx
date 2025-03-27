import { createRoot } from 'react-dom/client'
import { ThemeProviderWrapper } from './ThemeContext'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProviderWrapper defaultMode="system">
    <App/>
  </ThemeProviderWrapper>
)
