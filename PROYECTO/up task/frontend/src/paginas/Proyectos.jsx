import React from 'react'
import useProyectos from '../hooks/useProyectos'
import PreviewProyecto from '../components/PreviewProyecto'
import Alerta from "../components/Alerta"

const Proyectos = () => {
  const { proyectos } = useProyectos()
  return (
<>
        <h1 className="text-4xl font-black">Proyectos</h1>

        <div className="bg-white shadow mt-10 rounded-lg p-5">
            {proyectos.length ? (
              proyectos.map(proyecto => (
                <PreviewProyecto key={proyecto._id} proyecto={proyecto} />
              ))
            ): 
            
            <p className="mt-5 text-center text-gray-600 uppercase"> No hay proyectos</p>}
        </div>
    </>
  )
}

export default Proyectos
