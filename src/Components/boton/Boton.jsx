import React from 'react';
import styles from './Boton.module.css';

export default function Boton() {
  
  // La función que se ejecuta al hacer clic está definida DENTRO del componente.
  // Siempre hará lo mismo.
  const handleClick = () => {
    alert('Se presionó el botón fijo.');
  };
  // El texto "Púlsame" también está fijo DENTRO del componente.
  return (
    <button 
      className={styles.botonContainer}
      onClick={handleClick}
    >
      Púlsame
    </button>
  );
}