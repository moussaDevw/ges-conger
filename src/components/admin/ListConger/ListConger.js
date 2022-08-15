import React, { Component, useState } from 'react';
import Cart from '../../cart/cart';
import Checkout from '../../checkout/checkout';
import { ModalDelete } from '../../modalDelete/ModalDelete';
import Nav from '../../nav/nav';

const ListConger = ()=> {
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
                            <h5 class="text-style-2">Date de départ</h5>
                            <p class="text-style-4">20/08/2022</p>
                        </div>
                        <div class="col-md-2 col-sm-3 col-xs-3 col-3" style={{ "padding": '2%'}}>
                            <h5 class="text-style-2">Nombre de jour(s)</h5>
                            <p class="text-style-4">16</p>
                        </div>
                    </div>
                    <div class="row container py-4">
                        <div class="col-7 col-md-3 col-lg-8 col-xl-8 col-xxl-3"><button class="btn btn-primary custom-btn" type="button"><a>Accepter</a></button></div>
                        <div class="col help-text">
                            <h5><button class="btn btn-primary custom-btn" type="button">Rejeter</button></h5>
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
 
export default ListConger;