import React from 'react'
import Image from 'next/image'
import { formaterDinero } from "@/helpers";
import useQuiosco from '@/hooks/useQuiosco';

const ResumenProducto = ({producto}) => {
    const { handleEditarCantidad,handleEliminarProducto} = useQuiosco()
    const {id, nombre, precio, imagen,cantidad} = producto
  return (
    <div className="shadow p-5 mb-3 flex gap-10 items-center">
        <div className="md:w-1/6">
            <Image
            src={`/assets/img/${imagen}.jpg`}
            alt={producto.nombre}
            width={300}
            height={400}
            />
        </div>
        <div className="md:w-4/6">
            <p className="text-3xl font-bold">{nombre}</p>
            <p className="text-xl font-bold mt-2">Cantidad: {cantidad}</p>
            <p className="text-xl font-bold mt-2 text-amber-500">Precio: {formaterDinero(precio)}</p>
            <p className="text-xl  mt-2">Subtotal: {formaterDinero(precio*cantidad)}</p>
        </div>
        <div>
            <button 
                type='button'
                className="bg-sky-700 flex gap-2 px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full text-center"
                onClick={() => handleEditarCantidad(id)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                </svg>

                Editar
            </button>
            <button 
                type='button'
                className="bg-red-700 flex gap-2 px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full text-center mt-5 "
                onClick={() => handleEliminarProducto(id)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
                </svg>

                Eliminar
            </button>
        </div>
    </div>
  )
}

export default ResumenProducto
