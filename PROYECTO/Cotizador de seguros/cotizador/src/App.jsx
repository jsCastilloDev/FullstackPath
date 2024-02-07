import React from 'react'
import AppsSeguro from './components/AppsSeguro'
import { CotizadorProvider } from './context/CotizadorProvider'

function App() {
  

  return (
  
    <CotizadorProvider>
      <AppsSeguro />
    </CotizadorProvider>
      
    
  )
}

export default App
