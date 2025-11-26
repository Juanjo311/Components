import { useState } from "react";

import './assets/styles/Task.css'
import {listaTareas, agregarTarea, eliminarTarea} from './funciones.js'

export const Header= () => {
  return(
    <div className="header">
      <h1 className="titulo">Tasks</h1>
      <i className="fa-solid fa-list-check iconotask"></i>
    </div>
  )
}

export const Body = () => {
const[lista, listaEdit] = useState(listaTareas)
  return (
    <>
      <AgregarTask arra={lista} modificador={listaEdit} />
      <ListTask arra={lista} />
    </>
  )
}

export const AgregarTask = ({arra, modificador}) => {
  return(
    <>
      <i className="fa-solid fa-pen icono"></i>
      <input type="text" className="agregartask" maxLength={100}/>
      <Boton text="Agregar" onClick={() => { modificador([...arra, { titulo: "Hola este es uno nuevo" }]) }}/>
      <Boton text="Eliminar" onClick={() => {}}/>
    </>
  )
}

export const ListTask = ({arra}) => {
  return(
    <div>
      {arra.map(item => <Task key={item.titulo} text={item.titulo}/>)}
    </div>
  )
}

export const Task = ({text}) => {
  const [titulo] = useState(text)
  return(
    <div className="cuadro">
      <i className="fa-solid fa-arrow-right flecha"></i>
      <h2 className="titulotask">{titulo}</h2>
      <button className="iconoAcep"><i className="fa-solid fa-check iconoAceptar"></i></button>
      <button className="iconoElimi"><i className="fa-solid fa-xmark iconoEliminar"></i></button>
    </div>
  )
}

export const Boton = ({text, onClick}) => {
  const [texto1] = useState(text)
  return(
    <button className="boton" onClick={onClick}>{texto1}</button>
  )
}