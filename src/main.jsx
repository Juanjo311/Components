import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import {App} from './App.jsx'
import {Header, Body} from './Tareas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

      {/* <App imagen="https://upload.wikimedia.org/wikipedia/commons/3/3f/Two_debit_cards_overlapping_%282025-08-25%29.jpg" txtimagen="imagen nula" titulo="Targeta Prueba" texto="esto es un targeta con estilo" numero={100} /> */}

      <Header />
      <Body />

  </StrictMode>
)
