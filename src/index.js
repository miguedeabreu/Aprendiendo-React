import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Usuario from './componentes/usuario';
import FormularioIniciarSesion from './componentes/formularioIniciarSesion';
import ContadorFuncional from './componentes/contador';
import './index.css';
import Boton from './elementos/boton';
import EjemploUseReducer from './componentes/ejemploUseReducer';
import Blog from './componentes/blog';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {

  const [sesion, cambiarEstadoSesion] = useState(false)

  return (
    <div className='contenedor'>
      {
      sesion === true ?
      <div>
        <Usuario />
        <Blog></Blog>
        <EjemploUseReducer></EjemploUseReducer>
        {/* <ContadorFuncional cantidadIncrementa={10} cantidadDisminuye={5} /> */}
        <Boton largo onClick={ () => cambiarEstadoSesion(false)}>Cerrar Sesión</Boton>
      </div>
      : 
      <div>
        <FormularioIniciarSesion cambiarEstadoSesion={cambiarEstadoSesion} />
      </div>
      }
    </div>
  );
};

root.render(<App />);