import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import './assets/fonts/public-sans/300.css'
import './assets/fonts/public-sans/400.css'
import './assets/fonts/public-sans/700.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
)
