import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Navbar from './Components/navBar/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Boton from './Components/boton/Boton';
import Titulo from './Components/Titulo/Titulo';
import TarjetaDePerfil from './Components/TarjetaDePerfil/TarjetaDePerfil';

function App() {

   const [mostrarLista, setMostrarLista] = useState(true);

  const usuario = {
    nombre: "Lucas",
    profesion: "Desarrollador Web",
    carrera: "Tecnico en Analisis de Sistemas",
    edad: 27
  };  

  const toggleLista = () => {
    setMostrarLista(!mostrarLista);
  };
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <button onClick={toggleLista}>
                {mostrarLista ? "Ocultar Tarjeta" : "Mostrar Tarjeta"}
              </button>
              {mostrarLista && <TarjetaDePerfil usuario={usuario} />} 
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route
          path='/'
          element={
            <div>
              <Titulo />
              <h1>Mi aplicación con React</h1>
              <button onClick={toggleLista}>
                {mostrarLista ? "Ocultar Tarjeta" : "Mostrar Tarjeta"}
              </button>
              {mostrarLista && <TarjetaDePerfil usuario={usuario} />}
            </div>
          }
          />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;