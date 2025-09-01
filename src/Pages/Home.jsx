import React from "react";
import Boton from "../Components/boton/Boton";
import { BotonDinamico } from "../Components/BotonCSSInLine/BotonDinamico";
import { Alert } from "../Components/Alert/Alert";
import ListaUsuarios from "../Components/ListaUsuarios/ListaUsuarios";

function Home() {
  return (
    <div>
      <nav/>
      <h1>Bienvenido a la Página de Inicio</h1>
      <p>Esta es la página principal de nuestra aplicación.</p>
      <ListaUsuarios />
      <Boton />
      <BotonDinamico />
      <Alert type="success" message="¡Operación completada con éxito!" />
      <Alert type="error" message="Ha ocurrido un error." />
      <Alert type="info" message="Información importante." />
    </div>
  );
}
export default Home;