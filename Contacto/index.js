import React from "react";





function Contacto(props) {
    function borrar() {
        console.log("Le diste click a borrar");
    }
    return(
        <div>
            <p>{props.nombre}</p>
            <p>{props.correo}</p>
            <p>{props.telefono}</p>
            <button onClick={borrar}>Borrar</button>
        </div>
    )
}

export default Contacto;