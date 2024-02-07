//Imdex.jsx
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Cliente from '../components/Cliente';

import { getClientes } from '../data/clientes';

export function loaders() {
 const clientes= getClientes()

  return clientes
}

const Index = () => {
  
  const clientes = useLoaderData()
  
  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
      <p className='text-gray-700 mt-3'>Administrar tus clientes</p>

      {clientes.length ? (
          <table className='w-full bg-white shadow mt-5 table-auto'>
              <thead className='bg-blue-800 text-white'>
                  <tr>
                      <th className='p-2'>Cliente</th>
                      <th className='p-2'>Contacto</th>
                      <th className='p-2'>Acciones</th>
                  </tr>
              </thead>
              <tbody className='bg-white'>
              {clientes.map(cliente => (
                <Cliente
                  cliente={cliente}
                  key={cliente.id}
                />
                 
              ))}
              </tbody>
          </table>
        ) : (
          <p className="text-center mt-10">No Hay Clientes aún</p>
        )}
    </>
    
  )
}

export default Index