import React from 'react';
import './App.css';
import {Busqueda} from './Busqueda';
import ListaContactos from './ListaContacto';

import AgregarContacto from './AgregarContacto';
import Contacto from './Contacto';
import {DirectorioContext, DirectorioProvider} from './Context/DirectorioProvider';

function App() {

  // let Contactos = [
  //   {
  //     nombre:"Marcelo",
  //     telefono:"311234345",
  //     correo:"Mreclino@gmail.com"
  //   },
  //   {
  //     nombre:"Regisuwu",
  //     telefono:"311232545",
  //     correo:"Regis@gmail.com"
  //   },
  //   {
  //     nombre:"Paps",
  //     telefono:"311234390",
  //     correo:"Papass@gmail.com"
  //   }
  // ]

  let Contacto;
  if(!localStorage.contacto)
  {
    localStorage.setItem("Contactos",JSON.stringify([]));
    Contacto=[];
  }
  else
  {
    Contacto=JSON.parse(localStorage.Contacto);
  }

  let[textoBusqueda,setTextoBusqueda]=React.useState('');
  let[contactosState,setContactosState]=React.useState(Contacto);
  let contactosFiltrados=[];

  if(textoBusqueda.length>0){
    let textoBusquedaLowerCase=textoBusqueda.toLowerCase();
    contactosFiltrados=Contacto.filter((Contacto)=>{
      return Contacto.nombre.toLowerCase().includes(textoBusquedaLowerCase);
    })
  }
  else{
  contactosFiltrados=setContactosState;
  }

  function borrarContacto(name)
  {
    let indice = contactosState.findIex ((contacto) => {
      return contacto.nombre == name;
    });
    let contactosTemporal=[...contactosState];
    contactosTemporal.splice(indice,1);
    localStorage.setItem("Contactos",JSON.stringify(contactosTemporal));
    setContactosState(contactosTemporal);
    console.log(indice);
  }
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
      <h1>DIRECTORIO[{contadorContactos}]</h1>
      <Busqueda/>
      <button onClick={()=>{setModal(true)}}>Agregar Contacto</button>
      <ListaContactos>
        {
          Contacto.map((Contacto)=>{
            return(
              <Contacto
              nombre={Contacto.nombre}
              telefono={Contacto.telefono}
              correo={Contacto.correo}
              borrarContacto={()=>{borrarContacto(Contacto.nombre)}}
              />
            )
          })
        }
        </ListaContactos>
      
        </React.Fragment>
          )
      }
        </DirectorioContext.Consumer>
    </DirectorioProvider>
  );
      }

export default App; 