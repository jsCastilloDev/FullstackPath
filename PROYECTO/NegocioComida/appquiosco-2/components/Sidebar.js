import Image from "next/image"
import useQuiosco from "@/hooks/useQuiosco"

import Categoria from "./Categoria"

const Sidebar = () => {
    const logo = "./assets/img/logo.svg"
    const {categorias} = useQuiosco()
  return (
    <>
      <Image width={300} height={100} src={logo} alt="imagen logotipo"/>
      <nav className="mt-10 list-none">
        {categorias.map(categoria => (
           <Categoria key={categoria.id} categoria={categoria} />
        ))}
        
    </nav>
    </>
   
  )
}

export default Sidebar
