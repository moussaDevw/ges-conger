import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Login = () =>{
        const loginBtn = ()=>{
          toast.error('Email ou mot de passe incorrecte', {
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
            <main style={{margin:'auto', paddingTop:'150px'}} class="col-md-6 col-sm-12 col-xs-6 col-3">
              <ToastContainer
                  position="top-center"
                  autoClose={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                />
                <div style={{margin:'auto'}} class="items-body">
                <div class="row cart-item">
                    <h3>Gestion des Congés</h3>
                <div class="col-md-12 col-sm-12 col-xs-6 col-3" style={{ "padding": '2%'}}>
                  <p>
                    <input
                      class="form-control me-2"
                      type="mail"
                      placeholder="Email"
                      aria-label="email"
                    />
                  </p>
                  <p>
                    <input
                      class="form-control me-2"
                      type="password"
                      placeholder="Mot de passe"
                      aria-label="mot de passe"
                    />
                  </p>
                </div>
                <button
                  class="btn btn-primary custom-btn-fill"
                  type="button"
                  onClick={loginBtn}
                >
                  Se connecter
                </button>
                </div>
                </div>
            </main> 
        );
}
 
export default Login;