

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => { //pasar el prop cliente para poder utilizarlos aqui
 
  const {nombre, propietario, email, fecha, sintomas, id} = paciente //destructuring
  const handleEliminar =() =>{ 
   const respuesta = confirm('Deseas eliminar este paciente?')
   if(respuesta){
    eliminarPaciente(id)
   }
  }
  
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
    <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
      <span className="font-normal normal-case">{nombre}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
      <span className="font-normal normal-case">{propietario}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
      <span className="font-normal normal-case">{email}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
      <span className="font-normal normal-case">{fecha}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
      <span className="font-normal normal-case">{sintomas}</span>
    </p>

    <div className="flex justify-between">
      <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
      onClick={()=> setPaciente(paciente)} //pasamos el objeto paciente para que llenemos el state de app cuando se de click en boton editar
      >
        Editar
      </button>

      <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold 
      uppercase rounded-xl ml-2 " onClick={handleEliminar}>
        Eliminar
      </button>
    </div>
  </div>
  )
}

export default Paciente
