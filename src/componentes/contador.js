import React, {useState, useEffect} from "react";
import Boton from "../elementos/boton";
import Titulo from "./../elementos/titulo"

const ContadorFuncional = (props) => {
    const [cuenta, cambiarCuenta] = useState(0);

    // componentDidMount y componentDidUpdate
    // Este hook se ejecuta en cada ciclo de renderizado.
    useEffect(() => {
        console.log('El componente se renderizo');
    });

    // componentDidMount
    // Este hook se ejecututa solo con el primere renderizado.
    useEffect(() => {
        console.log('El componente cargo por primera vez');
    }, []);

    // Se ejecuta cuando cambia el estado de la dependencia
    // que le pasemos.
    useEffect(() => {
        console.log('El estado del contador cambio');
    }, [cuenta]);

    useEffect(() => {
        // Codigo del efecto.

        return (() => {
            console.log('Adios componente');
            // Cerramos conexion a la Api.
        })
    }, []);

    const incrementar = (cantidad) => {
        cambiarCuenta(cuenta + cantidad);
    }

    const disminuir = (cantidad) => {
        cambiarCuenta(cuenta - cantidad);
    }
    
    return ( 
        <div>
            <Titulo>Contador: {cuenta}</Titulo>
            <Boton negro mR mB onClick={() => incrementar(props.cantidadIncrementa)}>Incrementar</Boton>
            <Boton negro onClick={() => disminuir(props.cantidadDisminuye)}>Disminuir</Boton>
        </div>
     );
}
 
export default ContadorFuncional;