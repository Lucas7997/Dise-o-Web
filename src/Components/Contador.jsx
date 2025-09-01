import React, { useState } from "react";
function Contador() {
  const [contador, setContador] = useState(0);
  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };
  
  const resetear = () => {
    setContador(0);
  };

  return (
    <div>
        <h2>Contador Interactivo: {contador}</h2>
        <div>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
        <button onClick={resetear}>Resetear </button>
        </div>        
    </div>
        );
    };
export default Contador;