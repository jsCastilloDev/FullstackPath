import { useState,createContext } from "react";
import { obtenerDiferenciaYear,calcularMarca,calcularPlan } from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
    
    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    const [error, setError] = useState(``);
    const [resultado, setResultado] = useState(0);
    const [cargando, setCargando] = useState(false);


   const handleChangeDatos = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const cotizarSeguro = () => {
        let resultado = 2000;
        const diferencia = obtenerDiferenciaYear(datos.year);
        
        resultado -= ((diferencia * 3) * resultado) / 100;
        resultado = calcularMarca(datos.marca) * resultado;
        const incrementoPlan = calcularPlan(datos.plan);
        resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
        
        setCargando(true);
        setTimeout(() => {
            setResultado(resultado);
            setCargando(false);
        }, 3000);
        
    }

    return (
        <CotizadorContext.Provider value={{
            datos, 
            handleChangeDatos,
            error,
            setError,
            cotizarSeguro,
            resultado,
            cargando
        }}>
            {children}
        </CotizadorContext.Provider>
    );
    }

export { CotizadorProvider };
export default CotizadorContext;