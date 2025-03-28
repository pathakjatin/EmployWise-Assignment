import { createRoot } from 'react-dom/client'
import { ThemeProviderWrapper } from './ThemeContext'
import App from './App.jsx'
import { UsersProvider } from './context/UsersContext.jsx'

createRoot(document.getElementById('root')).render(
  <UsersProvider>
    <ThemeProviderWrapper defaultMode="system">
      <App/>
    </ThemeProviderWrapper>
  </UsersProvider>
)
