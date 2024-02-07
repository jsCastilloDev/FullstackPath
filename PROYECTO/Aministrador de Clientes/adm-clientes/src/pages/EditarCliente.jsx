import React from 'react'
import { Form,useNavigate,useLoaderData,useActionData,redirect } from 'react-router-dom'

import { getCliente,actualizarCliente } from '../data/clientes'
import Formulario from '../components/Formulario'
import Error from '../components/Error'


export  async function loader({params}) {
    const cliente = await getCliente(params.clienteId)
    
    if(Object.values(cliente).length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'El Cliente no fue encontrado'
        })
    }

    return cliente
}

export async function action({request,params}) {
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
    await  actualizarCliente(params.clienteId,datos)
    return redirect('/')
  
   
  }


const EditarCliente = () => {
    const navigate = useNavigate()
    const cliente = useLoaderData()
    const errores = useActionData()
  return (
    <>
        <h1 className='text-3xl font-light mb-4'>Editar Cliente</h1>
        <p className='mt-3'>A continuacion podra editar los datos de los clientes</p>

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
              <Formulario 
                cliente={cliente}
              />
              <input
                type='submit'
                className='bg-blue-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-blue-900'
                value='Guardar Cambios'

              />
            </Form>
           
        </div>
    </>
     
  )
}

export default EditarCliente
