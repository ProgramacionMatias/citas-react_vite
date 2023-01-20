//rfce
//rafce
import { useState, useEffect } from 'react'; //para poder ocupar los state se necesita importar esto, en el maqueteado no es necesario
import Error from './Error';


const Formulario = ({ pacientes, setPacientes, paciente }) => { //lo que esta en parentesis son los props definidos en app.jsx en formulario
  //1) declara el useState en la parte superior 
  //2) agregar onChange en cada casilla que requieras ejemplo en casilla nombre, email, propietario
  //   [nombre variable, funcion que modifica la variable]= useState(valor inicial)

  const [nombre, setNombre] = useState('');//los hooks se deben colocar de los primeros en la parte superior
  const [propietario, setPropietario] = useState('');//los hooks se deben colocar de los primeros en la parte superior
  const [email, setEmail] = useState('');//los hooks se deben colocar de los primeros en la parte superior
  const [fecha, setFecha] = useState('');//los hooks se deben colocar de los primeros en la parte superior
  const [sintomas, setSintomas] = useState('');//los hooks se deben colocar de los primeros en la parte superior
  const [error, setError] = useState(false)

  //useEffect escucha por los cambios que sucedan este se ejecuta cada vez que paciente cambie
  useEffect(() => {
    //forma de comprobar si el objeto tiene algo
    // esta ejecutando este codigo, detecta el objeto vacio 
    if (Object.keys(paciente).length > 0) {
      //este codigo hace que cuando des click en editar te muestre los valores en la pantalla
      setNombre(paciente.nombre) //paciente.nombre es el que esta en memoria
      setPropietario(paciente.propietario) //paciente.nombre es el que esta en memoria
      setEmail(paciente.email) //paciente.nombre es el que esta en memoria
      setFecha(paciente.fecha) //paciente.nombre es el que esta en memoria
      setSintomas(paciente.sintomas) //paciente.nombre es el que esta en memoria


    }

  }, [paciente])

  //cuando no hay dependecias quiere decir que se ejecutara una vez
  /* useEffect(()=>{
    console.log('el componente esta listo')
  })
 */
  //generando id al cliente
  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha

  }

  const handleSubmit = (e) => { //este evento reacciona al onSubmit
    e.preventDefault();

    //validacion de un formulario
    if ([nombre, propietario, email, fecha, sintomas].includes('')) { //metodo include verificva si almenos uno de ellos tenga un string vacio
      console.log('hay almenos un campo vacio')
      setError(true) // se complementa con el ternario del form
      return;
    }
    setError(false) //el mensaje se deja de mostrar

    //objeto de paciente para poder llenar el arreglo que esta en app const [pacientes , setPacientes] = useState([]);

    const objetoPaciente = { //como el nombre va ser igual tanto izquierdo como derecho se puede poner una sola variable
      nombre,
      propietario,
      email,
      fecha,
      sintomas,


    }

    if (paciente.id) {
      //editando el registro
      objetoPaciente.id = paciente.id


      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState) //paciente state app
      setPacientes(pacientesActualizados)
      
    } else {
      //nuevo registro
      objetoPaciente.id = generarId()   //function id 
      setPacientes([...pacientes, objetoPaciente])//tomamos una copia de lo que hay en paciente y gracias al spread operation no va a mutar ese arreglo original y le pasamos objetoPaciente que nos devuelve un arreglo nuevo que se asigna in mediatamente a set paciente
    }

    //reiniciar formulario
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }
  //setNombre('Hook') //modifica el valor inciial, si quieres cambiar el nombre utiliza la funcion modificadora y no hacerla por asignacion



  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Paciente y {''}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit} //nos permite ejecutar acciones cuando el usuario haga click en el boton submit. en esta linea de codigo llamamos al arrow
        className="bg-white shadow-xl rounded-lg py-10 px-5 mb-10 mx-5"
      >

        {error && <Error><p>Todos los campos son obligatorios</p></Error>}



        <div className="mb-5">

          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre mascota
          </label>
          <input id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 
             rounded-md"


            value={nombre}//muestra el valor inicial
            onChange={(e) => setNombre(e.target.value)} //es igual a un addEventListener registra un evento //la funcion modificadora(setNombre) se utiliza para ver lo que se esta escribiendo en los componentes react de la pagina web



          />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre Propietario
          </label>
          <input id="propietario"
            type="text"
            placeholder="Nombre Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 
          rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}//es igual a un addEventListener registra un evento //la funcion modificadora(setPropietario) se utiliza para ver lo que se esta escribiendo

          />
        </div>



        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 
          rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}//es igual a un addEventListener registra un evento //la funcion modificadora(setEmail) se utiliza para ver lo que se esta escribiendo

          />
        </div>

        <div className="mb-5">
          <label htmlFor="Alta" className="block text-gray-700 uppercase font-bold">
            Alta
          </label>
          <input id="Alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 
          rounded-md"

            value={fecha}
            onChange={(e) => setFecha(e.target.value)} //es igual a un addEventListener registra un evento //la funcion modificadora(setFecha) se utiliza para ver lo que se esta escribiendo

          />


        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 
          rounded-md"
            placeholder="describe"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)} //es igual a un addEventListener registra un evento //la funcion modificadora(setNombre) se utiliza para ver lo que se esta escribiendo
          >


          </textarea>
        </div>

        <input type="submit" className="bg-indigo-600 w-full p-3 text-yellow-400 uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} //para que el boton de agregar paciente cambie dependiendo de que se quiera hacer


        />
      </form>
    </div>
  )
}

export default Formulario
