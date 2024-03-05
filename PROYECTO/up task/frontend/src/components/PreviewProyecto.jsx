import React from 'react'
import { Link } from 'react-router-dom'

const PreviewProyecto = ({proyecto}) => {
    const {nombre,_id,descripcion,fechaEntrega,cliente}=proyecto
  return (
    <div className="border-b p-5 flex">

        <p className='flex-1'>{nombre}
        <span className="text-gray-500 text-sm uppercase">{" "} - {cliente}</span>
        </p>

        <Link 
        to={`${_id}`}
        className="ml-auto bg-blue-800 hover:bg-blue-900 text-white p-2 rounded-md"
        >
         
        Ver Proyecto</Link>
      
    </div>
  )
}

export default PreviewProyecto
