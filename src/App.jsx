import { useState } from 'react'
import PropTypes from 'prop-types'

import './assets/styles/app.css'

export const Boton = ({numero}) => {
  const [number, setnumber] = useState(numero);
  return(
    <>
      <h1>{number}</h1>
      <button className='Boton_mas' onClick={() => setnumber(number + 1)} >+</button>
      <button className='Boton_menos' onClick={() => setnumber(number -1)} >-</button>
      <button className='Boton_reset' onClick={() => setnumber(numero)} >Reset</button>
    </>
  );
}

export const App = ({imagen, txtimagen, titulo, texto, numero}) => {
  return (
    <>
      <div className='Card'>
        <img className="imagen" src={imagen} alt={txtimagen} />
        <h1>{titulo}</h1>
        <p>{texto}</p>
        <Boton numero={numero} />
      </div>
    </>
  );
}

expo

// Card.propTypes = {
//   video: PropTypes.array.isRequired,
//   titulo: PropTypes.string.isRequired,
//   fecha: PropTypes.string,
//   texto: PropTypes.string,
//   precio: PropTypes.number
// };
