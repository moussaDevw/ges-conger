import React, { Component, useState } from 'react';
import Cart from '../../cart/cart';
import Checkout from '../../checkout/checkout';
import { ModalDelete } from '../../modalDelete/ModalDelete';
import Nav from '../../nav/nav';
import UpdateUserForm from '../Formulaire/UpdateUserForm';

const UpdateUser = ()=> {
    const [show, setShow] = useState(false)
    return (
        <>
        <Nav /> 
        <br /> 
        {/* <Timeline />  */}
        <div className='container'> 
        <div className='row'>
            <Checkout information="Tableau de bord" showBtn={false} showInfo={false} />
            <UpdateUserForm />
        </div>
        </div>
        <br />
        {/* <Info /> */}
        </>
    );
}
 
export default UpdateUser;