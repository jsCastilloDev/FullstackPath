import { useEffect,useState } from "react";
import { useParams,Link } from "react-router-dom";
import useProyectos from "../hooks/useProyectos";

import ModalFormularioTareas from "../components/ModalFormularioTareas";
import ModalEliminarTarea from "../components/ModalEliminarTarea";
import Tarea from "../components/Tarea";
import Alerta from "../components/Alerta";

const Proyecto = () => {
  const params = useParams();
  const { obtenerProyectos, proyecto, cargando,handleModalFormularioTarea,modalFormularioTarea ,alerta} = useProyectos();

  const [modal, setModal] = useState(false);

  useEffect(() => {
    obtenerProyectos(params.id);
  }, [params]);

  const { nombre, descripcion } = proyecto;
  if(cargando) return "Cargando..."
  const {msg}=alerta
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-4xl font-black">{nombre}</h1>
        <div className="flex items-center gap-2 text-gray-400 hover:text-black">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
          </svg>
          <Link to={`/proyectos/editar/${params.id}`}
          className="text-gray-400 uppercase font-bold hover:text-black"  
          >Editar</Link>
        </div>
      </div>
      <button
          type="button"
          className="text-sm px-5 py-4 w-full md:w-auto rounded-lg uppercase font-bold bg-sky-400 text-white text-center mt-5 flex gap-2 items-center justify-center"
          onClick={handleModalFormularioTarea}
        >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
        </svg>

          Nueva Tarea
        </button>
        <p className="font-bold text-xl mt-10">Tareas del Proyectos</p>
      
        <div className="bg-white shadow mt-10 rounded-lg">
          {proyecto.tareas?.length ? (
            proyecto.tareas.map((tarea) => (
              <Tarea key={tarea._id} tarea={tarea} />
            ))
          ) : 
          <p className="text-center my-5 p-10">No hay tareas en este proyecto</p>
          }

        </div>
        <div className="flex items-center justify-between mt-10">
          <p className="font-bold text-xl">Colaboradores</p>
          <Link to={`/proyectos/nuevo-colabor/${proyecto._id}`}
           className="text-sm px-5 py-4 w-full md:w-auto rounded-lg uppercase font-bold bg-sky-400 text-white text-center mt-5 flex gap-2 items-center justify-center hover:bg-sky-500"
          >
          Añadir</Link>
        </div>
        

        <ModalFormularioTareas/>
        <ModalEliminarTarea/>
    
    </>


    
  )
};

export default Proyecto;
