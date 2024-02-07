import React,{useState} from 'react';
import useClima from '../hooks/useClima';

const Formulario = () => {

  const [alerta, setAlerta] = useState(""); // [state, setState
  const { busqueda, datosBusqueda,consultarClima } = useClima();
  const { ciudad, pais } = busqueda;

 const handleSubmit = e => {
    e.preventDefault();
    if (Object.values(busqueda).includes("")) {
        setAlerta("Todos los campos son obligatorios");
        return;
        }
        consultarClima(busqueda);    

  }


  return (
    <div className='contenedor'>
      <form
      onSubmit={handleSubmit}
      > 
        <div className='campo'>
          <label htmlFor='ciudad'>Ciudad: </label>
          <input type='text' name='ciudad' id='ciudad' placeholder='Ej. Buenos Aires' onChange={datosBusqueda} value={ciudad} />
        </div>
        <div className='campo'>
          <label htmlFor='ciudad'>Ciudad: </label>
          <select name='pais' id='pais' onChange={datosBusqueda} value={pais}>
            <option value=''>-- Seleccione un país --</option>
            <option value='AR'>Argentina</option>
            <option value='CO'>Colombia</option>
            <option value='CR'>Costa Rica</option>
            <option value='ES'>España</option>
            <option value='US'>Estados Unidos</option>
            <option value='MX'>México</option>
            <option value='PE'>Perú</option>
            <option value='CL'>Chile</option>
          </select>
        </div>
        <input type='submit' value='Buscar Clima' className='btn btn-primario btn-block' />
      </form>
    </div>
  );
};

export default Formulario;

