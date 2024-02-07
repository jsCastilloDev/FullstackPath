import React, { useContext } from 'react';
import ClimaContext from '../context/ClimaProvider';

const useClima = () => {
  return useContext(ClimaContext);
};

export default useClima;  // Exporta la función como un valor predeterminado
