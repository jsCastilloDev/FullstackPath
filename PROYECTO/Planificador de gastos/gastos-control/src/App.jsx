// App.jsx
import { useState,useEffect } from 'react';
import Header from './components/Header';
import { generateId } from './components/helpers';
import Modal from './components/Modal';
import Filtros from './components/Filtros';
import ListadoGastos from './components/ListadoGastos';
import IconoNuevoGasto from './img/nuevo-gasto.svg';
import { getNewTimestamp } from './components/helpers';

function App() {
  const [presupuesto, setPresupuesto] = useState(Number(localStorage.getItem('presupuesto') ?? 0));
  const [isvalidPresupuesto, setIsvalidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [filtro, setFiltro] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState([])

  const [gastos, setGastos] = useState(
    localStorage.getItem('gasto') ? JSON.parse(localStorage.getItem('gasto')) : []
  ); 

  const [gastoEditar, setGastoEditar] = useState({}); 

  useEffect(() => {
    if( Object.keys(gastoEditar).length > 0 ) {
        setModal(true)

        setTimeout(() => {
            setAnimarModal(true)
        }, 500);
    }
  }, [ gastoEditar ])

  useEffect(() => {
    // Almacena el presupuesto en el localStorage
    localStorage.setItem('presupuesto', presupuesto ?? 0);
  }, [presupuesto]);
  useEffect(() => {
    // Almacena el gastos en el localStorage
    localStorage.setItem('gasto', JSON.stringify(gastos) ?? []);
  }, [gastos]);

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto') ?? 0);

    if (presupuestoLS > 0) {
      setIsvalidPresupuesto(true);
    }
  }, []);

  useEffect(() => {
    if(filtro) {
        const gastosFiltrados = gastos.filter( gasto => gasto.categoria === filtro)
        setGastosFiltrados(gastosFiltrados)
    }
  }, [filtro]);


  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})

    setTimeout(() => {
        setAnimarModal(true)
    }, 500);
  }

  const guardarGasto = (gasto)=> {
    if(gasto.id){
        //Actualizar gasto
        const gastosActualizados = gastos.map(gastoState =>gastoState.id === gasto.id ? gasto:gastoState)
        setGastos(gastosActualizados)
        setGastoEditar({})
    }
    else{
      //Agregar nuevo gasto
      gasto.id=generateId()
      gasto.fecha= new Date()
      setGastos([...gastos,gasto])
    }
    setAnimarModal(false);
    
    setTimeout(() => {
        setModal(false);
    }, 500);


  };

  const eliminarGasto = (id) => {
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id)
    setGastos(gastosActualizados)

  }

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        gastos={gastos}
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isvalidPresupuesto={isvalidPresupuesto}
        setIsvalidPresupuesto={setIsvalidPresupuesto}
      />

      {isvalidPresupuesto && (
        <>
          <main>
            <Filtros
              filtro={filtro}
              setFiltro={setFiltro}
            />
            <ListadoGastos 
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados} 
              />
          </main>
          <div className="nuevo-gasto">
          <img
            src={IconoNuevoGasto}
            alt="Nuevo Gasto"
            onClick={handleNuevoGasto}
          />
        </div>

        </>
        
       
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar} 
          setGastoEditar={setGastoEditar}
        />
      )}
    </div>
  );
}

export default App;
