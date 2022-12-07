import React from 'react';
import ListaContactos from './ListaContacto';
import Contacto from './Contacto';

import {Busqueda} from './Busqueda';
import {DirectorioContext, DirectorioProvider} from './Contex/DirectorioProvider'
function App(){
  return (
    <DirectorioProvider>
      <DirectorioContext.Consumer>
        {
        ({
          contactosFiltrados,
          borrarContacto,
          contadorContactos,
          modal,
          setModal
        })=>(
          <React.Fragment>
            <h1>DIRECTORIO ({contadorContactos})</h1>
            <Busqueda/>
            <button onClick={()=>{setModal(true)}} className="btn-agregar">Agregar Contacto</button>
            <ListaContactos>
              {
                contactosFiltrados.map((contacto)=>{
                  return(
                    <Contacto
                    nombre={contacto.nombre}
                    correo={contacto.correo}
                    telefono={contacto.telefono}
                    borrarContacto = {()=>{borrarContacto(contacto.nombre)}}
                    />
                  )
                })
              }
            </ListaContactos>
            {modal && <DatosContacto/>}
          </React.Fragment>
        )
        }
      </DirectorioContext.Consumer>
    </DirectorioProvider>
  );
}

export default App;