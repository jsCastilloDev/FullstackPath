import Layout from "@/layaout/Layout"
import useQuiosco from "@/hooks/useQuiosco"
import ResumenProducto from "@/components/ResumenProducto"

export default function Resumen() {
    const {pedido} = useQuiosco()
    return (
        <Layout pagina="Resumen">
             <h1 className="text-4xl font-black">Resumen</h1>
             <p className="text-2xl my-10">Revisa tu pedido</p>
        
        {pedido.length === 0 ? (
            <p className="text-2xl">No hay pedidos</p>
        ) : (
            pedido.map((producto) => (
                <div key={producto.id} className="flex justify-between">
                   <ResumenProducto producto={producto}/>
                </div>
            ))
        )}
        </Layout>    
        )

}