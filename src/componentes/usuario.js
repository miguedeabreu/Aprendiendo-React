import React from 'react';
import {Titulo} from "./titulo";
import styled from 'styled-components';

const Usuario = () => {
    const color   = 'green';
    const pais    = 'España';
    const amigos  = ['Paula', 'Juan', 'Ale', 'Leonel'];

    return (
      <div>
        <h1 className='Titulo' style={{color: color}}>Hola!! Bienvenido!!</h1>
        <Titulo usuario="Miguel" />
        {pais && <p style={{color: color}}>En este momento te encuentras en {pais}</p>}
        <Parrafo>Tus amigos son:</Parrafo>
        <ul>
          {amigos.map( (amigo,index) => <li key={index}>{amigo}</li> )}
        </ul>
      </div>
    );
  };

  const Parrafo = styled.p`
    margin-top: 20px;
    margin-bottom: 5px;
  `;

  export default Usuario;