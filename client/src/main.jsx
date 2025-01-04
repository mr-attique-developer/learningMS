import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from './components/ui/toaster'
import AuthContextProvider from './context/auth'
import { ThemeProvider } from './components/theme-provider'
import InstructorProvider from "./context/Instructor"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <ThemeProvider>
       
          <InstructorProvider>




<App/>
          </InstructorProvider>
     
      </ThemeProvider>
    <Toaster />
    </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
