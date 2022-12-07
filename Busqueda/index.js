import React from "react";
import './Busqueda.css';
import {DirectorioContext} from "../Context/DirectorioProvider";

function Busqueda(props) {

    const {textoBusqueda, setTextoBusqueda} = React.useContext(DirectorioContext);

    function onBusquedaChange(event){
        props.setTextoBusqueda(event.target.value);

    }

    return(
        <React.Fragment>
            <input onChange={onBusquedaChange} value={textoBusqueda}></input>
            </React.Fragment> 
        );
}

export {Busqueda};