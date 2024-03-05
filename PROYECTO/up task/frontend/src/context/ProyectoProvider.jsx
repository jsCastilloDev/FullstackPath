import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";
import { useNavigate } from "react-router-dom";
import e from "express";

const ProyectoContext = createContext();

const ProyectoProvider = ({ children }) => {
    const [proyectos, setProyectos] = useState([]);
    const [alerta, setAlerta] = useState([]);
    const [proyecto, setProyecto] = useState({});
    const [cargando, setCargando] = useState(false);
    const [ modalFormularioTarea, setModalFormularioTarea ] = useState(false)
    const [tarea, setTarea] = useState({})
    const [modalEliminarTarea, setModalEliminarTarea] = useState(false)
    const [colaborador, setColaborador] = useState([{}])

    const navigate = useNavigate();

    useEffect(() => {
        const obtenerProyectos = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) return;

                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                };

                const { data } = await clienteAxios.get('/proyectos', config);
                setProyectos(data);
            } catch (error) {
                console.log(error);
                mostrarAlerta({
                    msg: 'Hubo un error al obtener los proyectos',
                    error: true,
                });
            }
        };

        obtenerProyectos();
    }, []);

    const mostrarAlerta = (alerta) => {
        setAlerta(alerta);

        setTimeout(() => {
            setAlerta({});
        }, 3000);
    };

    const submitProyecto = async (proyecto) => {

        if(proyecto.id){
            await editarProyecto(proyecto)
        }else{
        
            await nuevoProyecto(proyecto)}

       
    };
    const obtenerProyectos = async (id) => {
        setCargando(true);
        try {
            const token = localStorage.getItem('token');
            if (!token) return;

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            };

            const { data } = await clienteAxios.get(`/proyectos/${id}`, config);
            setProyecto(data);
        }
        catch (error) {
            console.log(error);
            mostrarAlerta({
                msg: error.response.data.msg ,
                error: true,
            });
        } finally {
            setCargando(false);
        }
    }
    const editarProyecto = async (proyecto) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) return;

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            };
            const { data } = await clienteAxios.put(`/proyectos/${proyecto.id}`, proyecto, config);
            const proyectosEditados = proyectos.map((proyectoState) => proyectoState._id === proyecto.id ? data : proyectoState);
            setProyectos(proyectosEditados);
            setAlerta({
                msg: 'Proyecto Editado correctamente',
                error: false,
            });

            setTimeout(() => {
                navigate('/proyectos');
            }, 2000);
               

            
        } catch (error) {
            console.log(error);
            mostrarAlerta({
                msg: 'Hubo un error al editar el proyecto',
                error: true,
            });
        }
    }
    const nuevoProyecto = async (proyecto) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) return;

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            };

            const { data } = await clienteAxios.post('/proyectos', proyecto, config);
            setProyectos([...proyectos, data]);

            setAlerta({
                msg: 'Proyecto creado correctamente',
                error: false,
            });

            setTimeout(() => {
                navigate('/proyectos');
            }, 2000);
        } catch (error) {
            console.log(error);
            mostrarAlerta({
                msg: 'Hubo un error al crear el proyecto',
                error: true,
            });
        }
    }

    const eliminarProyecto = async (id) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) return;

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            };

            await clienteAxios.delete(`/proyectos/${id}`, config);
            const proyectosFiltrados = proyectos.filter((proyecto) => proyecto._id !== id);
            setProyectos(proyectosFiltrados);
            setAlerta({
                msg: 'Proyecto eliminado correctamente',
                error: false,
            });
            setTimeout(() => {
                setCargando({})
                navigate('/proyectos');
            }, 2000);
        } catch (error) {
            console.log(error);
            mostrarAlerta({
                msg: 'Hubo un error al eliminar el proyecto',
                error: true,
            });
        }
    }

    const handleModalFormularioTarea = () => {
        setModalFormularioTarea(!modalFormularioTarea)
        setTarea({})
    }
    
    const submitTarea = async (tarea) => {

        if(tarea.id){
            editarTarea(tarea)
        }
        else{
            await crearTarea(tarea)
        }


        
    };

    const crearTarea = async tarea => {
        try {
            const token = localStorage.getItem('token');
            if (!token) return;

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            };

            const { data } = await clienteAxios.post(`/tareas`, tarea, config);

            const proyectoActualizados={...proyecto}
            proyectoActualizados.tareas =[...proyecto.tareas,data]

            setProyecto(proyectoActualizados)
            setAlerta({})
            setModalFormularioTarea(false)


        } catch (error) {
            console.log(error);
            mostrarAlerta({
                msg: 'Hubo un error al crear la tarea',
                error: true,
            });
        }
    }

    const editarTarea = async tarea => {
        try {
            const token = localStorage.getItem('token')
            if(!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clienteAxios.put(`/tareas/${tarea.id}`, tarea, config)

            const proyectoActualizado = {...proyecto}
            proyectoActualizado.tareas.map(tareaState => tareaState._id === tarea.id ? data : tareaState)
            
            setProyecto(proyectoActualizado)
            setAlerta({})
            setModalFormularioTarea(false)

        } catch (error) {
            console.log(error)
        }
    }

    const handleModalEditarTarea = (tarea) => {
        setTarea(tarea)
        setModalFormularioTarea(true)
    }
    const handleModalEliminarTarea = (tarea) => {
        setTarea(tarea)
        setModalEliminarTarea(!modalEliminarTarea)
    }
    const eliminarTarea = async () => {
        try {
            const token = localStorage.getItem('token')
            if(!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clienteAxios.delete(`/tareas/${tarea._id}`, tarea, config)
            setAlerta({
                msg: data.msg,
                error: false
            })
            console.log(data.msg)
            const proyectoActualizado = {...proyecto}
            proyectoActualizado.tareas = proyecto.tareas.filter(tareaState => tareaState._id !== tarea.id)
            
            
            setProyecto(proyectoActualizado)
            setAlerta({})
            setModalEliminarTarea(false)
            setTarea({})
            setTimeout(() => {
                setAlerta({})
            }, 3000);
        }
        catch (error) {
            //console.log(error);
            mostrarAlerta({
                msg: "error.response.data.msg",
                error: true,
            });
        }
        
    }
    const submitColaborador = async (colaborador) => {
        
        try{
            const token = localStorage.getItem('token')
            if(!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const { data } = await clienteAxios.post(`/proyectos/colaboradores`, {email: colaborador}, config)
            setColaborador(data)
            setAlerta({})
        }
        catch{
            setAlerta({
                msg: 'Hubo un error al buscar el colaborador',
                error: true,
            });
        }
    }

    const agregarColaborador = async (email) => {
        
        try {
            const token = localStorage.getItem('token')
            if(!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const { data } = await clienteAxios.post(`/proyectos/colaboradores/${proyecto._id}`, email, config)
            console.log(data)
        }
        catch {
            setAlerta({
                msg: 'Hubo un error al agregar el colaborador',
                error: true,
            });
        }
    }


    return (
        <ProyectoContext.Provider
            value={{
                proyectos,
                setProyectos,
                mostrarAlerta,
                alerta,
                submitProyecto,
                obtenerProyectos,
                proyecto,
                cargando,
                eliminarProyecto,
                handleModalFormularioTarea,
                modalFormularioTarea,
                submitTarea,
                handleModalEditarTarea,
                tarea,
                handleModalEliminarTarea,
                modalEliminarTarea,
                eliminarTarea,
                submitColaborador,
                colaborador,
                agregarColaborador

            }}
        >
            {children}
        </ProyectoContext.Provider>
    );
};

export { ProyectoContext, ProyectoProvider };
