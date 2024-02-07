import { useState, useEffect } from "react";
import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";
import { formaterDinero as formatearDinero } from "../helpers";

const ModalProducto = () => {
  const { producto,  handleModal, handleAgregarPedido, pedido } =useQuiosco();
    const [cantidad, setCantidad] = useState(1);
    const [editar, setEditar] = useState(false);

    useEffect (() => {
        if(pedido.some(p => p.id === producto.id)) {
            const productoEditra =pedido.find(p => p.id === producto.id);
            setEditar(true);
            console.log(productoEditra);
            setCantidad(productoEditra.cantidad);
        }
    }, [producto, pedido]);



  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image
          width={300}
          height={400}
          alt={`imagen producto ${producto.nombre}`}
          src={`/assets/img/${producto.imagen}.jpg`}
        />
      </div>

      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button onClick={ handleModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <h1 className="text-3xl font-bold mt-5">{producto.nombre}</h1>
        <p className="mt-5 font-black text-5xl text-amber-500">
          {formatearDinero(producto.precio)}
        </p>

        <div className="flex gap-4 mt-5">
            <button
                type="button"
                onClick={
                    () => {
                        if (cantidad > 1) {
                            setCantidad(cantidad - 1);
                        }
                    }
                }
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button>
                <p className="text-3xl">{cantidad}</p>
            <button
                type="button"
                onClick={ () => {
                    if (cantidad <5) {
                        setCantidad(cantidad +1);
                    }
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button>
        </div>
        <button
            type="button"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 mt-5 rounded-md"
            onClick={() => {
                handleAgregarPedido({...producto, cantidad});
                handleModal();
            }}
        >
            {editar ? 'Editar Pedido' : 'Agregar al Pedido'}
        </button>
      </div>
    </div>
  );
};

export default ModalProducto;
