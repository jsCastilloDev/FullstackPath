//listaGastos.jsx
import React from 'react'
import Gasto from './Gasto'
const ListadoGastos = ({gastos,setGastoEditar,eliminarGasto}) => {
  return (
    <div className='listado-gastos contenedor'>
       <h2>{gastos.length? "Gastos" : "No hay Gasto" }</h2>

         {gastos.map(gasto => (
            <Gasto
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
            >

            </Gasto>
         ))}
    </div>
  )
}

export default ListadoGastos
