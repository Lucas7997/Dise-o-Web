import React from 'react'
import styles from './TarjetaDePerfil.module.css'

export default function TarjetaDePerfil({usuario}) {
  return (
    <div className={styles.contenedor}>
      <h2 className={styles.nombre}>{usuario.nombre}</h2>
      <p className={styles.info}><b className={styles.etiqueta}>Profesión:</b> {usuario.profesion}</p>
      <p className={styles.info}><b className={styles.etiqueta}>Carrera:</b> {usuario.carrera}</p>
      <p className={styles.info}><b className={styles.etiqueta}>Edad:</b> {usuario.edad} años</p>
    </div>
  )
}
