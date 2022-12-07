import React from "react";


const DirectorioContext=React.createContext();
function DirectorioProvider(props){
    let Contacto, contadorContactos;
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
  contactosFiltrados=contactosState;
  }

  contadorContactos=contactosFiltrados.length;



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

  function guardaContacto(contacto){
    let contactosTemporal = [...contactosState];
    contactosTemporal.push(contacto);
    localStorage.setItem("contactos",JSON.stringify(contactosTemporal));
    setContactosState(contactosTemporal);
}

    
    return (
        
        <DirectorioContext.Provider>
            value={{
                textoBusqueda,
                setTextoBusqueda,
                contactosFiltrados,
                contactosState,
                setContactosState,
                borrarContacto,
                contadorContactos,
                modal,
                setModal,
                guardaContacto

            }}
            
            {props.children}
        </DirectorioContext.Provider>
    );
};
export { DirectorioContext, DirectorioProvider };