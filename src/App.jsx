//un elemento que tiene apertura y cierre debe tener las dos etiquetas
//si solo tiene apertura tienes que colocar un diagonal antes de cerrarlo />
//cada compotente tiene que tener un return y solo puedes retornar maximo un elemento en el nivel mas alto
import { useState, useEffect } from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

//este es el componente principal

function App() {

  //1)crear los hooks
  //2)pasarlos a los componente mediante props
  //3) rescatarlo en el componente respectivo
const [pacientes , setPacientes] = useState([]); //de pacientes salen los datos para los demas componenetes es la que contiene la informacion
const [paciente, setPaciente] = useState({}) // para llenar el state al momento de dar click en el boton editar
useEffect(()=>{ //se pueden usar multiples useEffect. los effect se ejevutan en el orden que los pones arriba hacia abajo
//obtiene lo que haya en localstorage
const obtenerLS=()=>{
  const pacientesLS = JSON.parse(localStorage.getItem('pacientes ')) ?? []; //si no hay nada en local storage entonces agregale un arreglo vacio
  setPacientes(pacientesLS)
}
obtenerLS()
},[])

useEffect(()=>{
localStorage.setItem('paciente', JSON.stringify(pacientes));

},[pacientes])

const eliminarPaciente = (id) =>{
 const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
 setPacientes(pacientesActualizados)
}

  return ( //todo lo que esta dentro del return es lo que se ve en pantalla dentro del return se escribe el codigo html y si quieres escribir codigo js tiene que ser en {}
    <>
      <div className="container mx-auto mt-20 ">
        <Header 
        
        //props se pasan del padre al hijo
        //nombreProps={variables, datos, funciones}
       
       />
       
        <div className="mt-12 md:flex">
          <Formulario 
          
          setPacientes = { setPacientes } //props
          pacientes = {pacientes}
          paciente ={paciente}
          />
          

          <ListadoPacientes
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
        </div>

      </div>
    </>
  )
}

export default App
