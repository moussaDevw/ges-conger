import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
const UpdateUserForm = () =>{
        const succes = ()=>{
          toast.success('Compte modifié avec succès', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }
        return ( 
            <main class="col-sm-8 col-md-8 col-lg-8 col-xl-8">
              <ToastContainer position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
                <div class="items-body">
                <div class="row cart-item">
                <div class="col-md-6 col-sm-12 col-xs-6 col-3" style={{ "padding": '2%'}}>
                <p>
                    <input
                      class="form-control me-2"
                      type="text"
                      placeholder="CNRPS"
                      aria-label="CNRPS"
                    />
                  </p>
                  <p>
                    <input
                      class="form-control me-2"
                      type="text"
                      placeholder="Prénom"
                      aria-label="Prenom"
                    />
                  </p>
                  <p>
                    <input
                      class="form-control me-2"
                      type="text"
                      placeholder="Nom"
                      aria-label="Nom"
                    />
                  </p>
                  <p>
                    <input
                      class="form-control me-2"
                      type="number"
                      placeholder="CNI"
                      aria-label="CNI"
                    />
                  </p>
                  <p>
                    <label>Date de recruté</label>
                    <input
                      class="form-control me-2"
                      type="date"
                      placeholder="Fonction"
                      aria-label="Fonction"
                    />
                  </p>
                </div>
                <div class="col-md-6 col-sm-12 col-xs-6 col-3" style={{ "padding": '2%'}}>

                  <p>
                    <input
                      class="form-control me-2"
                      type="Lieux"
                      placeholder="Lieux"
                      aria-label="Lieux"
                    />
                  </p>
                  <p>
                    <input
                      class="form-control me-2"
                      type="text"
                      placeholder="Adresse"
                      aria-label="Adresse"
                    />
                  </p>
                  <p>
                    <label>Date de naissance</label>
                    <input
                      class="form-control me-2"
                      type="date"
                      placeholder="date"
                      aria-label="date"
                    />
                  </p>
                  <p>
                    <input
                      class="form-control me-2"
                      type="text"
                      placeholder="Fonction"
                      aria-label="Fonction"
                    />
                  </p>
                  <p>
                    <input
                      class="form-control me-2"
                      type="text"
                      placeholder="Grade"
                      aria-label="Grade"
                    />
                  </p>
                </div>
                <div class="col-md-12 col-sm-12 col-xs-12 col-12" style={{ "padding": '2%'}}>
                    <input type="file" />
                </div>
                <button onClick={succes} className="btn btn-primary custom-btn-fill">Modifier</button>
                </div>
                </div>
            </main> 
        );
}
 
export default UpdateUserForm;