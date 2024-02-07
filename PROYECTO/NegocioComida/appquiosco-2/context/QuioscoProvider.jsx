// quiocsoProvider.jsx
import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';


const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual,setCategoriaActual]=useState({});
  const [producto,setProducto]=useState({});
  const [modal,setModal]=useState(false)

  const [nombre,setNombre]=useState(``)
  const [total,setTotal]=useState(0)

  const [pedido,setPedido]=useState([])

  const router = useRouter();

  const obtenerCategorias = async () => {
    try {
      const { data } = await axios.get('/api/categorias');
      setCategorias(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);
  useEffect(()=>{
    setCategoriaActual(categorias[0])
  },[categorias])

  const handleClickedCategoria=(id)=>{
    const categoriaSeleccionada = categorias.filter(categoria => categoria.id === id)
    setCategoriaActual(categoriaSeleccionada[0])
    router.push(`/`)
  }
  const haldleSetProductos=(producto)=>{
    setProducto(producto)
  }
  const handleModal=()=>{
    setModal(!modal)
  }
  useEffect(() => {
    const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad ) + total, 0)

        setTotal(nuevoTotal)
    }, [pedido])

  const handleAgregarPedido=(producto)=>{
    if(pedido.some(p=>p.id===producto.id)){
      //Actualizar la cantidad
      const pedidoActualizado = pedido.map(p=>producto.id===p.id? producto:p)
      setPedido(pedidoActualizado)

      toast.success("Guardado Correctamente")
    }else{
      setPedido([...pedido,producto])
      toast.success("Agregando al Pedido")
    }
    
  }

  const handleEditarCantidad = id => {
    const productoActualizar = pedido.filter( producto => producto.id === id)
    setProducto(productoActualizar[0])
    setModal(!modal)
  }
  const handleEliminarProducto = id => {
    const pedidoActualizado = pedido.filter( producto => producto.id !== id)
    setPedido(pedidoActualizado)
  }

    const colocarOrden = async (e) => {
        e.preventDefault();

        try {
          await axios.post('/api/ordenes', {pedido, nombre, total, fecha: Date.now().toString()})
          // Resetear la app
          setCategoriaActual(categorias[0])
          setPedido([])
          setNombre('')
          setTotal(0)

          toast.success('Pedido Realizado Correctamente')

          setTimeout(() => {
              router.push('/')
          }, 3000)

            

        } catch (error) {
            console.log(error)
        }

    };





  return (
    <QuioscoContext.Provider 
    value={
      { categorias,
        categoriaActual,
        handleClickedCategoria,
        producto,
        haldleSetProductos,
        modal,
        handleModal,
        handleAgregarPedido,
        pedido,
        handleEditarCantidad,
        handleEliminarProducto,
        nombre,
        setNombre,
        colocarOrden,
        total


      }
      }>
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };
export default QuioscoContext;
