import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {App} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App video="https://www.youtube.com/embed/24GQcwAZBEI" titulo="Mi titulo" fecha={new Date().toLocaleString()} texto="hola resta se se paso" precio={2345} />
  </StrictMode>,
)
