import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'


import Layout from './components/Layout.jsx'
import NuevoCliente,{action as nuevoClienteAccion} from './pages/NuevoCliente.jsx'
import Index,{loaders as clientesLoader } from './pages/Index.jsx'
import ErrorPages from './components/ErrorPages.jsx'
import EditarCliente,{loader as editarClientesLoader ,action as editarClientesAction } from './pages/EditarCliente.jsx'
import { action as eliminarClienteAction } from './components/Cliente.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index/>,
        loader: clientesLoader,
        errorElement: <ErrorPages />
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action: nuevoClienteAccion
      },
      {
        path: '/clientes/:clienteId/editar',
        element: <EditarCliente />,
        loader: editarClientesLoader,
        errorElement: <ErrorPages />,
        action:editarClientesAction
      },
      {
        path: '/clientes/:clienteId/eliminar',
        action: eliminarClienteAction
        

      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
