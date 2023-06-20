import {useState} from 'react';


function BasicComponent(props){

    const [clicks, cambiarValor]=useState(0);

    const nuevoValor= ()=>{
        cambiarValor(clicks+1)
    }

    let id= props.inputID;

    let mensaje="Hola mundo";

    return(
        <div>
            <h1>Mi componente {props.texto}</h1>
            <p>{mensaje}</p>
            <input
                type="text"
                id={id}
            />
            <button onClick={nuevoValor}>Soy un botón - Clicks: {clicks}</button>
        </div>
    )
}

export default BasicComponent;