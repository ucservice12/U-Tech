import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "@/components/theme-provider"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="default" storageKey="u-tech-theme">
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>


)
