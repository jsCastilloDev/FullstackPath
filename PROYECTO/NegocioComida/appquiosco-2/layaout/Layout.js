import Head from "next/head";
import Sidebar from "@/components/Sidebar";
import useQuiosco from "@/hooks/useQuiosco";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Pasos from "@/components/Pasos";
import ModalProductos from "@/components/ModalProductos";
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
Modal.setAppElement('#__next');

export default function Layout({children,pagina}) {
    const {modal} = useQuiosco();
    return (
     <>
       <Head>
            <title>Café - {pagina} </title>
            <meta name="description" content="App Quisco con Next.js" />
            <link rel="icon" href="/favicon.ico" />
       </Head>
       <div className="md:flex">
            <aside className="md:w-4/12 xl:w-1/4 2xl::w-1/5">
                <h1 >
                    <Sidebar />
                </h1>

            </aside>
            <main className="md:w-8/12 xl:w-3/4 2xl::w-4/5 h-screen overflow-y-scroll">
                <div className="p-10">
                    <Pasos />
                    {children}
                </div>
                
            </main>
       </div>
       {modal && (
           <Modal
                isOpen={modal}
                style={customStyles}
           >
                <ModalProductos />
            
           </Modal>
       )}
       <ToastContainer />
     </>
    );
  }
  