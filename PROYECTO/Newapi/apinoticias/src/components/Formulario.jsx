//Formulario.jsx
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem} from '@mui/material';


import useNoticias from '../hooks/useNoticias';

const CATEGORIAS = [
  { value: 'general', label: 'General'},
  { value: 'business', label: 'Negocios'},
  { value: 'entertainment', label: 'Entretenimiento'},
  { value: 'health', label: 'Salud'},
  { value: 'science', label: 'Ciencia'},
  { value: 'sports', label: 'Deportes'},
  { value: 'technology', label: 'Tecnología'},
]


const Formulario = () => {
  const { categoria, handleChangeCategoria } = useNoticias();

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categoría</InputLabel>
        <Select label="Categoría" onChange={handleChangeCategoria} value={categoria}>
          {CATEGORIAS.map((opcion) => (
            <MenuItem key={opcion.value} value={opcion.value}>{opcion.label}</MenuItem>
          ))}

        </Select>

       
      </FormControl>
    </form>
  );
};

export default Formulario;
