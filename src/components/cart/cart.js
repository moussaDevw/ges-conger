import React from 'react';

const Cart = (props) =>{
        return ( 
            <main class="col-sm-8 col-md-8 col-lg-8 col-xl-8">
                {
                    props.listInfoUser ? (
                        <div class="items-body">
                            <div class="row cart-item">
                        <div class="col-md-3">
                            <img class="img-fluid" src="/" alt={"item.img"} /></div>
                        <div class="col-md-3 col-sm-3 col-xs-3 col-3" style={{ "padding": '2%'}}>
                            <h5 class="text-style-1">Seynabou</h5>
                            <p class="text-style-2">Seck</p>


                        </div>
                        <div class="col-md-2 col-sm-3 col-xs-3 col-3" style={{ "padding": '2%'}}>
                            <h5 class="text-style-2">Dakar</h5>
                            <p class="text-style-3">Liberté 1</p>
                        </div>
                        <div class="col-md-2 col-sm-3 col-xs-3 col-3" style={{ "padding": '2%'}}>
                            <h5 class="text-style-2">CNRPS</h5>
                            <p class="text-style-3">Date recruté</p>{/*<small style={{ "color": '#3dbdb6'}}>Fully refundable</small>*/}
                        </div>
                        <div class="col-md-2 col-sm-3 col-xs-3 col-3" style={{ "padding": '2%'}}>
                            <h5 class="text-style-2">Fonction</h5>
                            <p class="text-style-4">Grade</p>
                        </div>
                    </div>
                </div>
                    ) : (
                        <div class="items-body">
                            <div class="row cart-item">
                        <div class="col-md-3">
                            <img class="img-fluid" src="/" alt={"item.img"} /></div>
                        <div class="col-md-3 col-sm-3 col-xs-3 col-3" style={{ "padding": '2%'}}>
                            <h5 class="text-style-1">Seynabou</h5>
                            <p class="text-style-2">Seck</p>

                        </div>
                        <div class="col-md-2 col-sm-3 col-xs-3 col-3" style={{ "padding": '2%'}}>
                            <h5 class="text-style-2">Dakar</h5>
                            <p class="text-style-3">Liberté 1</p>
                        </div>
                        <div class="col-md-2 col-sm-3 col-xs-3 col-3" style={{ "padding": '2%'}}>
                            <h5 class="text-style-2">CNRPS</h5>
                            <p class="text-style-3">Date recruté</p>{/*<small style={{ "color": '#3dbdb6'}}>Fully refundable</small>*/}
                        </div>
                        <div class="col-md-2 col-sm-3 col-xs-3 col-3" style={{ "padding": '2%'}}>
                            <h5 class="text-style-2">Fonction</h5>
                            <p class="text-style-4">Grade</p>
                        </div>
                    </div>
                    <div class="row container py-4">
                        <div class="col-7 col-md-3 col-lg-8 col-xl-8 col-xxl-3"><button class="btn btn-primary custom-btn" type="button"><a href="/modifier-personnel">Modifier</a></button></div>
                        <div class="col help-text">
                            <h5><button onClick={props.btnDelete} class="btn btn-primary custom-btn" type="button">Suprimer</button></h5>
                        </div>
                    </div>
                </div>
                    )
                }
            </main> 
        );
}
 
export default Cart;