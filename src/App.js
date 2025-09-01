import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Navbar from './Components/navBar/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Boton from './Components/boton/Boton';
import Titulo from './Components/Titulo/Titulo';
import TarjetaDePerfil from './Components/TarjetaDePerfil/TarjetaDePerfil';

function App() {

  const usuario = {
    nombre: "Lucas",
    profesion: "Desarrollador Web",
    carrera: "Tecnico en Analisis de Sistemas",
    edad: 27
  };  
  
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Titulo />
        <TarjetaDePerfil usuario={usuario} />
    </div>
  );
}

export default App;