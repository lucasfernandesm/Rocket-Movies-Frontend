

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { AuthProvider } from './hooks/auth';

import { Routes } from './routes'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

import GlobalStyle from './styles/globalstyles'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
)