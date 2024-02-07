import React from 'react'
import Image from 'next/image'
import axios from 'axios'
import { formaterDinero as  Fd } from '@/helpers'

import { toast } from 'react-toastify'

const Orden = ({orden}) => {
    const {id,nombre,total,pedido,fecha} = orden
    const completarOrden = async()=> {
        try{
           const {data} =await axios.post(`/api/ordenes/${id}`)
           console.log(data)
           toast.success('Orden completada')
           //console.log('completar orden',id)
           
        }
        catch{
            console.log(error)
        }
    }


  return (
    <div className="border p-10 space-y-5">
        <h1 className="text-2xl font-bold">Orden: {id}</h1>
        <p className="text-lg font-bold">Cliente: {nombre}</p>
    
        <div>
            {pedido.map(articulo => (
                <div key={articulo.id} className="py-3 flex border-b last-of-type:border-0 items-center">
                    <div className="w-32">
                        <Image
                            src={`/assets/img/${articulo.imagen}.jpg`}
                            alt="imagen articulo"
                            width={400}
                            height={300}
                        />
                    </div>
                    <div className="p-5 space-y-2">
                        <h4 className="text-xl font-bold text-amber-500">{articulo.nombre}</h4>
                        <p className="text-lg font-bold">Cantidad: {articulo.cantidad}</p>
                    </div>
                </div>
                
            ))}
        </div>
        <div className="md:flex md:items-center md:justify-between my-10">
            <p className="mt-5 font-black text-4xl text-amber-500">
                Total a pagar: {Fd(total)}
            </p>
            <button
                className="bg-indigo-600 hover:bg-indigo-800 mt-5 md-mt-0 py-3 px-10 uppercase font-bold text-white rounded-lg"
                type='button'
                onClick={completarOrden}
            >
                Completar Orden
            </button> 
        </div>
    </div>
  )
}

export default Orden
