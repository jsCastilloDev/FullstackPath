//modal.jsx
import React,{useState,useEffect} from 'react';
import CerrarModal from '../img/cerrar.svg';
import Mensaje from './Mensaje';

const Modal = ({ setModal, animarModal,setAnimarModal,guardarGasto,gastoEditar,setGastoEditar }) => {
  const [mensaje, setMensaje] = useState('');
  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')
  const [id, setId] = useState('')
  const[fecha,setFecha]=useState('')

    useEffect(() => {
        if(Object.keys(gastoEditar).length > 0){
          setNombre(gastoEditar.nombre);
          setCantidad(gastoEditar.cantidad);
          setCategoria(gastoEditar.categoria);
          setId(gastoEditar.id);
          setFecha(gastoEditar.fecha);
          
        }
    
        
      }, [gastoEditar]);
  
    const handleCerrarModal = () => {
    
    setAnimarModal(false);
    setGastoEditar({})
    
    setTimeout(() => {
        setModal(false);
    }, 500);

  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if ([nombre,cantidad,categoria].includes('')) {
        setMensaje('Todos los campos son obligatorios')

        setTimeout(() => {
            setMensaje('')
        }, 1500);
      return;
    }
    guardarGasto({nombre,cantidad,categoria,id,fecha})
  };


  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img src={CerrarModal} alt='Cerrar Modal' onClick={handleCerrarModal} />
      </div>
      <form 
        onSubmit={handlesubmit}
        className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
        <legend>{gastoEditar.nombre ? "Editar Gasto":"Agrega un gasto"}</legend>

        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}

        <div className='campo'>
            <label htmlFor='nombre'>Nombre Gasto</label>
            <input 
                id='nombre' 
                type='text' 
                placeholder='Añade el Nombre del Gasto' 
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                />
        </div>

        <div className='campo'>
            <label htmlFor='cantidad'>Cantidad</label>
            <input 
                id='cantidad' 
                type='number' 
                placeholder='Añade la Cantidad' 
                value={cantidad}
                onChange={e => setCantidad(Number(e.target.value))}
                />
        </div>

        <div className='campo'>
            <label htmlFor='categoria'>Categoria</label>
            <select 
                id='categoria'  
                value={categoria}
                onChange={e => setCategoria(e.target.value)}
                >
                    <option value=''>-- Seleccione --</option>
                    <option value='ahorro'>Ahorro</option>
                    <option value='comida'>Comida</option>
                    <option value='casa'>Casa</option>
                    <option value='gastos'>Gastos Varios</option>
                    <option value='ocio'>Ocio</option>
                    <option value='salud'>Salud</option>
                    <option value='subcripciones'>Subcripciones</option>
            </select>

            <input type='submit' value={gastoEditar.nombre ? "Guardar":"Agregar Gasto"} className='boton' />

           
        </div>
        
      </form>
    </div>
  );
};

export default Modal;
