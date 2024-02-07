import useSWR from 'swr'
import axios from 'axios';
import AdminLayout from "@/layaout/AdminLayout";
import Orden from '@/components/Orden';

export default function Admin() {
    const fetcher = () => axios.get('/api/ordenes').then((res) => res.data)

    const { data, error, isLoading } = useSWR('/api/ordenes', fetcher,{refreshInterval: 100})
    console.log(data)
  return (
    <div>
      <AdminLayout pagina={"Admin"}>
        <h1 className="text-4xl font-black">Panel de Administracion</h1>
        <p className="text-2xl my-10">Administra las ordenes</p>
        {data && data.length ? data.map(orden =>
          <Orden key={orden.id} orden={orden} />
        ): <p>No hay ordenes</p>}
      </AdminLayout>
        
    </div>
  );
}