import React from 'react'
import Formulario from './Formulario'
import Spinner from './Spinner'
import Resultado from './Resultado'
import useCotizador from '../hooks/useCotizador'


const AppsSeguro = () => {

  const { resultado,cargando } = useCotizador();

  return (
    <>
        <header className='my-10'> 
            <h1 className='text-white text-center text-4xl font-black'>
                Cotizador seguro de Autos
            </h1>
        </header>
        <main className='bg-white md:w-2/3 lg:w-2/4 mx-auto  rounded shadow-md p-10'>
          <Formulario />
          
          {cargando ?<Spinner/>: <Resultado/>}
        </main>
        
    </>
  )
}

export default AppsSeguro
