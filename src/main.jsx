import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { MantineProvider } from '@mantine/core';
import './index.css'
import { CharacterAnimationsProvider } from './contexts/CharacterAnimations.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <MantineProvider 
      withGlobalStyles 
      withNormalizeCSS 
      theme={{
      globalStyles: (_theme) =>({
        body:{
          width: "100vw",
          height: "100vh",
        },
        "#root": {
          width: "100%",
          height: "100%",
        },
      })
    }}> */}
    <CharacterAnimationsProvider>
    <App />
    </CharacterAnimationsProvider>
    {/* </MantineProvider> */}
  </StrictMode>,
)
