import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Checkout from '../../checkout/checkout';
import { ModalDelete } from '../../modalDelete/ModalDelete';
import Nav from '../../nav/nav';

const DemandeAccept = ()=> {
    const [show, setShow] = useState(false)
    const accept = ()=>{
        toast.success('Demande accepté avec succès', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
    }
    const rejeter = ()=>{
        toast.warning('Demande rejeté', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
    }
    return (
        <>
        <ToastContainer
            position="top-center"
            autoClose={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
        />
        <ModalDelete show={show} />
        <Nav /> 
        <br /> 
        {/* <Timeline />  */}
        <div className='container'> 
        <div className='row'>
            <Checkout information="Tableau de bord" showBtn={false} showInfo={false} />
            <main class="col-sm-8 col-md-8 col-lg-8 col-xl-8">
                        <div class="items-body">
                            <div class="row cart-item">
                        <div class="col-md-3">
                            <img class="img-fluid" src="/" alt={"item.img"} /></div>
                        <div class="col-md-3 col-sm-3 col-xs-3 col-3" style={{ "padding": '2%'}}>
                            <h5 class="text-style-2">Prénom et Nom</h5>
                            <p class="text-style-1">Seynabou seck</p>
                        </div>
                        <div class="col-md-2 col-sm-3 col-xs-3 col-3" style={{ "padding": '2%'}}>
                            <h5 class="text-style-2">Type de conger</h5>
                            <p class="text-style-4">Vacance</p>
                        </div>
                        <div class="col-md-2 col-sm-3 col-xs-3 col-3" style={{ "padding": '2%'}}>
                            <h5 class="text-style-2">Nombre de jour(s)</h5>
                            <p class="text-style-4">16</p>
                        </div>
                        <div class="col-md-2 col-sm-3 col-xs-3 col-3" style={{ "padding": '2%'}}>
                            <h5 class="text-style-2">Date de retour</h5>
                            <p class="text-style-4">20/08/2020</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        </div>
        <br />
        {/* <Info /> */}
        </>
    );
}
 
export default DemandeAccept;