import React from 'react'
import Formulario from './Formulario'
import Resultado from './Resultado'

import useClima from '../hooks/useClima'

const AppClima = () => {
  const {resultadoClima} = useClima()

  return (
    <> 
        <main className='dos-columnas'>
            <Formulario/>
            <Resultado/>
            
            
        </main>
    </>
  )
}

export default AppClima
