
import React ,{ useState, useEffect } from 'react';
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes';
import Header from './components/Header';
function App() {
  const [Pacientes,setPacientes]=useState([])

  useEffect(()=> {
    localStorage.setItem("pacientes",JSON.stringify(Pacientes))
  } ,[Pacientes])


  return (
    <div className="container mx-auto mt-10" > 
      <Header />

      <div className="mt-12 md:flex">
      <Formulario
       setPacientes={setPacientes}
       Pacientes={Pacientes}
       />
       
      <ListadoPacientes
        pacientes={Pacientes} />

      </div>
     
    </div>
  );
}

export default App;
