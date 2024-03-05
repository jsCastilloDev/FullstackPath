import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {


return (
  <header className="px-4 py-5 bg-white border-b">
      <div className="md:flex md:justify-between">
          <h2 className="text-4xl text-sky-600 font-black text-center mb-5 md:mb-0">
              UpTask
          </h2>

          <input
            type='search'
            placeholder='Buscar Proyecto'
            className='w-full md:w-2/5 rounded-lg p-2'
          />
          <div className="flex items-center gap-4 ">
              <Link
                  to='/proyectos'
                  className='bg-sky-600 px-5 py-2 text-white rounded-lg'
              >Proyectos</Link>
              <button
                  className='bg-sky-600 px-5 py-2 text-white rounded-lg ml-5'
                  type='button'

              >
                  Cerrar Sesión
              </button>
          </div>
      </div>
  </header>
)
}

export default Header