import React, {useState,useEffect} from 'react'

import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const ControlPresupuesto = ({presupuesto, gastos, setPresupuesto,setGastos,setIsValidPresupuesto}) => {
   const [disponible, setDisponible] = useState(0)
   const [gastado, setGastado] = useState(0)
   const [percentage, setPercentage] = useState(0)


  useEffect(() => {
    const sumaGastos = gastos.reduce((total,gasto) => total + gasto.cantidad,0)

    const totaldisponible = presupuesto - sumaGastos

    //calcular porcentaje
    const porcentajeNuevo = ((sumaGastos/presupuesto)*100).toFixed(2)
    
    setDisponible(totaldisponible)
    setGastado(sumaGastos)

    setTimeout(() => {
      setPercentage(porcentajeNuevo)
    }, 1500);
  }, [gastos])

  const formatoMoneda = (cantidad) => {
    return cantidad.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2})
  }
  const handleResetApp = () => {
    const resultado = confirm('¿Deseas reiniciar presupuesto y gastos?');

    if(resultado) {
        setGastos([])
        setPresupuesto(0)
        setIsValidPresupuesto(false)
    } 
}
  
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
        <CircularProgressbar 
          styles={buildStyles({
              textColor: "#3B82F6",
              pathColor: "#3B82F6",
            })
          }
          value={percentage} text={`${percentage}% Gastado`} />;
        </div>

        <div className="contenido-presupuesto">
              <button
                    className="reset-app"
                    type="button"
                    onClick={handleResetApp}
                >
                    Resetear App
                </button>
            <p>
                <span>Presupuesto:</span> {formatoMoneda(presupuesto)}
            </p> 
            <p className={`${disponible < 0 ? 'negativo' : '' }`}>
                <span>Disponible:</span> {formatoMoneda(disponible)}
            </p> 
            <p>
                <span>Gastado:</span> {formatoMoneda(gastado)}
            </p> 

        </div>
      
    </div>
  )
}

export default ControlPresupuesto
