import React,{Fragment,useContext} from 'react'
import { MARCA,YEARS,PLANES  } from '../constants'
import useCotizador from '../hooks/useCotizador'

import Error from './Error'

const Formulario = () => {
    
  const { datos,handleChangeDatos ,error,setError,cotizarSeguro} = useCotizador();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Object.values(datos).includes('')){
      setError('Todos los campos son obligatorios');
      return;
    }
    setError('');
    cotizarSeguro();
  }

    
    
  return (
    <>
            
        {error && <Error />}
        <form 
          onSubmit={handleSubmit}
        >
          <div className='my-5'>
            <label className='block  text-gray-400 text-sm font-bold mb-3 uppercase' htmlFor='marca'>
                Marca
            </label>
            <select className='w-full p-3 bg-white border-gray-200' name='marca' onChange={e=> handleChangeDatos(e)} value={datos.marca}>
                <option value=''>-- Seleccione --</option>
                {MARCA.map((item) => (
                    <option key={item.id} value={item.id}>{item.nombre}</option>
                ))}
            </select>
          </div>
          <div className='my-5'>
            <label className='block  text-gray-400 text-sm font-bold mb-3 uppercase' htmlFor='marca'>
                Año
            </label>
            <select className='w-full p-3 bg-white border-gray-200' name='year' onChange={e=> handleChangeDatos(e)} value={datos.year}>
                <option value=''>-- Seleccione año --</option>
                {YEARS.map((item) => (
                    <option key={item.id} value={item}>{item}</option>
                ))}
            </select>
          </div>
          
          <div className='my-5'>
            <label className='block text-gray-400 text-sm font-bold mb-3 uppercase' htmlFor='marca'>
              Selecione un Plan
            </label>
            <div className='flex gap-3'>
              {PLANES.map((item) => (
                <label key={item.id} className='block text-gray-400 text-sm font-bold mb-3 uppercase' htmlFor='marca'>
                  <input type='radio' name='plan' value={item.id} onChange={e => handleChangeDatos(e)} /> {item.nombre}
                </label>
              ))}
            </div>
          </div>
          <input type='submit' value='Cotizar' className='bg-indigo-500 hover:bg-indigo-600 w-full mt-5 p-2 text-white uppercase font-bold' />
        </form>
    </>
  )
}

export default Formulario
