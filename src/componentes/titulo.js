const Titulo = ({usuario = 'Desconocido', color = 'green'}) => {
    return (<p className="Titulo" style={{color}}>Esta es tu primera app de React {usuario}</p>)}
 
export {Titulo};