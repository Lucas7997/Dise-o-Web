
import React, { useState } from 'react';
export function BotonDinamico() {
    const [isDisabled, setIsDisabled] = useState(false);
    const buttonStyle = {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        // Estilos condicionales
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        backgroundColor: isDisabled ? '#ccc' : '#007bff',
        opacity: isDisabled ? 0.6 : 1,
    };
    return (
        <div>
            <button
                style={buttonStyle}
                onClick={() => alert('Botón clickeado!')}
                disabled={isDisabled}
            >
                {isDisabled ? 'Deshabilitado' : 'Habilitado'}
            </button>
            <br />
            <button onClick={() => setIsDisabled(!isDisabled)} style={{ marginTop: '10px' }}>
                Toggle Habilitar/Deshabilitar
            </button>
        </div>
    );
}