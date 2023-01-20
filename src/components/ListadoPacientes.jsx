//rfce
import { useEffect } from "react" 
import Paciente from "./Paciente" //esto es el codigo del archivo paciente se importa aqui para que el codigo de paciente se muestre en listadopaciente

//rafce


const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => { //leo el props agregados en app

  useEffect(()=>{
   /*  console.log('nuevo paciente') */
  },[pacientes])



  return (

   <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? ( //comprobar si el arreglo paciente tiene algo con .length
        <>
          <h2 className="font-black text-3xl text-center">ListadoPacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {'' /*esto es un espacio */}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
        </>
      ) : /* //en caso de que no hay pacientes se retorna lo de abajo */ (

          <> 
          
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
           Comienza agregando pacientes {'' /*esto es un espacio */}
            <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
          </p>
          
          
          </>



      )}




      {pacientes.map((paciente) => { //.map sirve para iterar arreglos y se muestren en pantalla e imprime los elementos que tenga el arreglo

        return (//el <paciente mostrara los pacientes ingresados en una tabla que creamos en el componenete paciente
          <Paciente
            key={paciente.id} //function id del formulario
            paciente={paciente}//
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}

          />
        )
      })}





    </div>

  )
}

export default ListadoPacientes