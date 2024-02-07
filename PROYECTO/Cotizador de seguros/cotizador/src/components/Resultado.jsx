import React,{useMemo,useCallback,useRef} from 'react'
import useCotizador from '../hooks/useCotizador'

import { MARCA, PLANES } from '../constants';
const Resultado = () => {
    const { resultado,datos } = useCotizador();
    const { marca, year, plan } = datos;

    const yearRef = useRef(year);

    const [marcaSeleccionada] = useCallback(
      MARCA.filter(m => m.id === Number(marca)),
      [resultado]
      ) ;
    const [planSeleccionado ]= useCallback(
      PLANES.filter(p => p.id === Number(plan)),
      [resultado]
      );

    if(Object.keys(resultado).length === 0) return null;
  return (
    <div className='bg-gray-100 text-center mt-5 p-5 shadow'>
        <h2 className='text-2xl text-gray-800 font-bold'>Resumen de la Cotizacion</h2>
        <p className='text-xl text-gray-700'>Marca: {marcaSeleccionada.nombre}</p>
        <p className='text-xl text-gray-700'>Plan: {planSeleccionado.nombre}</p>
        <p className='text-xl text-gray-700'>Año del Auto: {yearRef.current}</p>
        <p className='text-3xl text-gray-700 font-bold'>Total: $
            <span className='text-3xl text-gray-700 font-bold'>{resultado}</span>
        </p>
    </div>
  )
}

export default Resultado
