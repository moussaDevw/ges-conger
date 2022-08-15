import React, { Component, useState } from 'react';
import Cart from '../../cart/cart';
import Checkout from '../../checkout/checkout';
import { ModalDelete } from '../../modalDelete/ModalDelete';
import Nav from '../../nav/nav';
import AddUserForm from '../Formulaire/AddUser';

const ListUser = ()=> {
    const [show, setShow] = useState(false)
    return (
        <>
        <ModalDelete show={show} />
        <Nav /> 
        <br /> 
        {/* <Timeline />  */}
        <div className='container'> 
        <div className='row'>
            <Checkout information="Tableau de bord" showBtn={false} showInfo={false} />
            <AddUserForm />
        </div>
        </div>
        <br />
        {/* <Info /> */}
        </>
    );
}
 
export default ListUser;