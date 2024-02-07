// Header.jsx
import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({presupuesto, setGastos, setPresupuesto,isvalidPresupuesto,setIsvalidPresupuesto ,gastos}) => {
  return (
    <header>
        <h1> Planificador de Gastos</h1>

        {isvalidPresupuesto ? 
          (<ControlPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            gastos={gastos}
            setGastos={setGastos}
            setIsValidPresupuesto={setIsvalidPresupuesto}
            
          />
          ): 
            (
              <NuevoPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsvalidPresupuesto={setIsvalidPresupuesto}
              />
              
            )
          }

        
    </header>

    
  )
}

export default Header
