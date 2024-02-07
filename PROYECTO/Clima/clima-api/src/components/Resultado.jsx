import React from 'react'
import useClima from '../hooks/useClima'


const Resultado = () => {
    const {resultadoClima} = useClima()
    console.log(resultadoClima)
  return (
    <div>
      Resultado
    </div>
  )
}

export default Resultado

