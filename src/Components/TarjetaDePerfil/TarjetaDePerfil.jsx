import React from 'react'

export default function TarjetaDePerfil({usuario}) {
  return (
    <div>
      <h2>{usuario.nombre}</h2>
      <p><b>Profesión:</b> {usuario.profesion}</p>
      <p><b>Carrera:</b> {usuario.carrera}</p>
      <p><b>Edad:</b> {usuario.edad} años</p>
    </div>
  )
}
