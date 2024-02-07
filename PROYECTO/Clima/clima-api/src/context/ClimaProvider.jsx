//cLimaprovider.jsx
import React,{useState,createContext} from 'react'
import axios from 'axios'

const ClimaContext = createContext() 

const ClimaProvider = ({children}) => {

    const [resultadoClima, setResultadoClima] = useState({})

   const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: ''
    })
    const datosBusqueda = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }
    const consultarClima = async (busqueda) => {
        try {
            const {ciudad,pais} = busqueda
            const url_1 = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${import.meta.env.VITE_API_KEY}`
            const data = await axios.get(url_1)
            const {lat,lon} = data["data"][0]
            
            const url_clima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}`
            const {respuesta_clima:clima} = await axios.get(url_clima)
            setResultadoClima(clima)

        }catch(error) {
            console.log(error)
        }

       
    }

  return (
    <div>
        <ClimaContext.Provider
            value={{
                busqueda,
                datosBusqueda,
                consultarClima,
                resultadoClima
            }}
        >
            {children}
        </ClimaContext.Provider>

      
    </div>
  )
}

export {ClimaProvider}

export default ClimaContext
