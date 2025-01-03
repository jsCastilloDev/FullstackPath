import React from 'react'
import Image from 'next/image'

import useQuiosco from '@/hooks/useQuiosco'

const Categoria = ({categoria}) => {
    const {categoriaActual,handleClickedCategoria} = useQuiosco()
    const {nombre,icono,id} = categoria
  return (
    <div className={`${categoriaActual?.id===id ? `bg-amber-400` : ``
    } flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}>
        <Image 
          src={`assets/img/icono_${icono}.svg`} 
          alt={nombre} 
          width={70} 
          height={70}
          />
          <button 
          className="text-2xl font-bold hover:cursor-pointer"
          onClick={() => handleClickedCategoria(id)}
          >
              {nombre}
          </button>
      
    </div>
  )
}

export default Categoria
