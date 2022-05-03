import React, {useState} from "react";
import styles from './formularioIniciarSesion.module.css'
import Boton from "../elementos/boton";

const FormularioIniciarSesion = (props) => {
    const [usuario, cambiarUsuario] = useState('');
    const [password, cambiarPassword] = useState('');

    const onChange = (evento) => {
        if (evento.target.name === 'usuario') {
            cambiarUsuario(evento.target.value);
        }
        else if (evento.target.name === 'password') {
            cambiarPassword(evento.target.value);
        }
    }

    const onSubmit = (evento) => {
        evento.preventDefault();

        if (usuario === 'miguel' && password === '123') {
            props.cambiarEstadoSesion(true);
        }
        else {
            alert('Datos incorrectos');
            cambiarUsuario('');
            cambiarPassword('');
        }
    }

    return (  
        <form action="" onSubmit={onSubmit} className={styles.formulario} >
            <h1>No has iniciado sesión</h1>
            <div>
                <label htmlFor="usuario" className={styles.label} >Usuario</label>
                <input 
                    type="text" 
                    name="usuario" 
                    id="usuario"
                    value={usuario}
                    onChange={onChange}
                    className={styles.input}
                />
            </div>
            <div>
                <label htmlFor="password" className={styles.label} >Contraseña</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    value={password}
                    onChange={onChange}
                    className={styles.input}
                />
            </div>
            <div>
                <Boton largo type="submit">Iniciar Sesión</Boton>
            </div>
        </form>
    );
}
 
export default FormularioIniciarSesion;