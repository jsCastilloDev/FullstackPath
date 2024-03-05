import React from 'react'
import {formatearFecha} from '../helpers/formatearFecha'

import useProyectos from '../hooks/useProyectos';

const Tarea = ({tarea}) => {
    const {handleModalEditarTarea,handleModalEliminarTarea,modalEliminarTarea} = useProyectos();
    const {descripcion,nombre,prioridad,fechaEntrega,estado} = tarea;
  
  return (
    <div className="border-b p-5 flex justify-between items-center">
        <div>
            <p className="text-xl">{nombre}</p>
            <p className="text-sm text-gray-500 uppercase">{descripcion}</p>
            <p className="text-xl">{formatearFecha(fechaEntrega)}</p>
            <p className="text-gray-600">Prioridad: {prioridad}</p>
            
        </div>
        <div className="flex flex-col lg:flex-row gap-2">

            <button 
                className="bg-indigo-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                onClick={()=>handleModalEditarTarea(tarea)}
            
            >Editar</button>
            {estado ? 
                (<p className="bg-sky-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg">Completado</p>) 
                :
                (<p className="bg-gray-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg">Imcompleto</p>)}

            <button 
                className="bg-red-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                onClick={()=>handleModalEliminarTarea(tarea)}
                >Eliminar</button>

        </div>
        
    </div>
  )
}

export default Tarea
