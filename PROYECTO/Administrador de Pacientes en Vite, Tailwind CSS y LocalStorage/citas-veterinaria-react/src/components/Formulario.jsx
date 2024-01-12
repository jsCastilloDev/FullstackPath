import React, { useState } from 'react';
import Error from './Error';
const Formulario = ({Pacientes,setPacientes}) => {
  const [Nombre, setNombre] = useState('');
  const [Propietario, setPropietario] = useState('');
  const [Email, setEmail] = useState('');
  const [Alta, setAlta] = useState('');
  const [Sintomas, setSintomas] = useState('');

  const [error,SetError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([Nombre,Propietario,Email,Alta,Sintomas].includes('')) {
      console.log("Hay al menos un estado vacio")

      SetError(true)
      return;
    }
    console.log('Enviando contenido');
    SetError(false);

    // Create a new patient object
    const objPaciente = {
      nombre: Nombre,
      propietario: Propietario,
      email: Email,
      alta: Alta,
      sintomas: Sintomas,
    };

    setPacientes([...Pacientes, objPaciente]);

    setNombre('');
    setPropietario('');
    setEmail('');
    setAlta('');
    setSintomas('');
    
    
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center font-bold">
        Añade Pacientes y{' '}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form onSubmit={handleSubmit}>
        <div className="bg-white shadow-md rounded-lg py-10 px-5 " >

          {error && (<Error mensaje="Todos los campos son obligatorios"/>)}

          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 font-bold">
              Nombre Mascota
            </label>
            <input
              id="mascota"
              type="text"
              placeholder="Nombre de la mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-600"
              value={Nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 font-bold">
              Nombre Propietario
            </label>
            <input
              id="propietario"
              type="text"
              placeholder="Nombre del Propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-600"
              value={Propietario}
              onChange={(e) => setPropietario(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="Email" className="block text-gray-700 font-bold">
              Email
            </label>
            <input
              id="Email"
              type="text"
              placeholder="Email del Propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-600"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="Alta" className="block text-gray-700 font-bold">
              Día de alta
            </label>
            <input
              id="Alta"
              type="date"
              placeholder="Día de alta"
              className="border-2 w-full p-2 mt-2 placeholder-gray-600"
              value={Alta}
              onChange={(e) => setAlta(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="Sintomas" className="block text-gray-700 font-bold">
              Síntomas
            </label>
            <textarea
              id="Sintomas"
              placeholder="Describe los síntomas"
              className="border-2 w-full p-2 mt-2 placeholder-gray-600"
              value={Sintomas}
              onChange={(e) => setSintomas(e.target.value)}
            />
          </div>
          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold  hover:bg-indigo-400 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default Formulario;




