import React from 'react'
import Image from 'next/image'

import useQuiosco from '@/hooks/useQuiosco';
import { formaterDinero } from "@/helpers";

const Producto = ({producto}) => {
    const {haldleSetProductos,handleModal} = useQuiosco()

    const {nombre,imagen, precio} = producto
  return (
    <div className="border p-3">
        <Image src={`/assets/img/${imagen}.jpg`}  alt={producto.nombre}
        width={400} height={500} />
        <div className="p-5"> 
          <h3 className="text-2xl font-bold">{nombre}</h3>
          <p className="mt-5 font-back text-4xl text-amber-500">{formaterDinero(precio)}</p>
          <button 
            className="bg-indigo-600 hover:bg-indico-800 text-white w-full mt-5 p-2 uppercase font-bold"
            type='button'
            onClick={() => {
              handleModal();
              haldleSetProductos(producto)}}
            >
              Agregar al carrito
          </button>
        </div>
     

      
    </div>
  )
}

export default Producto
