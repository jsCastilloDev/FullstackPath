import React from 'react'
import { useNavigate,Form,useActionData ,redirect} from 'react-router-dom'

import Formulario from '../components/Formulario'
import Error from '../components/Error'
import { postCliente } from '../data/clientes'


export async function action({request}) {
  const formData = await request.formData()
  const datos = Object.fromEntries(formData)
  const email = formData.get('email')

  // Validación
  const errores = []
  if(Object.values(datos).includes('')) {
      errores.push('Todos los campos son obligatorios')
  }

  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  if(!regex.test(email)) {
      errores.push('El Email no es válido')
  }

  // Retornar datos si hay errores
  if(Object.keys(errores).length) {
      return errores
  }
  await  postCliente(datos)
  return redirect('/')

 
}


const NuevoCliente = () => {
  const errores = useActionData()
  const navigate = useNavigate()

  console.log(errores) 
  return (
      <>
        <h1 className='text-3xl font-light mb-4'>Nuevo Cliente</h1>
        <p className='mt-3'>Llena todos los campos para registrar al nuevo cliente</p>

        <div className='flex justify-end'>
          <button
            type='button'
            className='bg-blue-800 py-3 px-2  text-white rounded text-xs uppercase font-bold mx-2'
            onClick={() => navigate(-1)}
          >
            volver
          </button>
          
        </div>
        <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20' >
        {errores?.length && errores.map( ( error, i ) => <Error key={i}>{error}</Error> )}
          
            <Form
              method='POST'
              
            >
              <Formulario />
              <input
                type='submit'
                className='bg-blue-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-blue-900'
                value='Registrar Cliente'

              />
            </Form>
           
        </div>
      </>
  )
}

export default NuevoCliente
