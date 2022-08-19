import React, { Component, useState } from 'react';
import Cart from '../../cart/cart';
import Checkout from '../../checkout/checkout';
import { ModalDelete } from '../../modalDelete/ModalDelete';
import Nav from '../../nav/nav';
import { ToastContainer, toast } from 'react-toastify';

const ListUser = ()=> {
    const [show, setShow] = useState(false)
    const showInfo = ()=>{
        
    }
    toast.warning('Des demandes sont en attentes', {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
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
            <Cart isShow={true} btnDelete={()=> setShow(true)} />
        </div>
        </div>
        <br />
        {/* <Info /> */}
        </>
    );
}
 
export default ListUser;