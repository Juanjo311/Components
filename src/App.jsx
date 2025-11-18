import { useState } from 'react'
import PropTypes from 'prop-types'

export function App({video, titulo="No hay video", fecha = new Date().toLocaleString(), texto, precio}) {
  /*const [count, setCount] = useState(0)*/

  return (
    <>
      <div>
        <iframe src={video}>hola</iframe>
        <h1>{titulo}</h1>
        <p>{fecha}</p>
        <p>{texto}</p>
        <h6>{precio}</h6>
      </div>
    </>
  )
}

App.propTypes = {
  video: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  fecha: PropTypes.string,
  texto: PropTypes.string,
  precio: PropTypes.number
};
