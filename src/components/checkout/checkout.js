import React, { Component, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';

const Checkout = (props)=> {
    const [show, setShow] = useState(false)
    const [isSolde, setIsSolde] = useState(false)
    const succes = ()=>{
      toast.success('🦄 Votre demande à été envoyée avec succès!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
    }
    const champ = ()=>{
      toast.error('Tous les champs sont obligatoires', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
    }
    const error = ()=>{
      toast.error('Quelque chose ne va pas', {
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
        <Modal
          show={show}
          onHide={() => setShow(false)}
          backdrop="static"
          keyboard={false}
          size="lg"
          centered
        >
          <Modal.Header onClick={()=>setShow(false)} closeButton></Modal.Header>
          <Modal.Body>
            <div class="container">
              <div class="row">
                <div class="col-xxl-8 col-md-8 col-8 offset-md-2 offset-2 offset-xxl-2 promotion-box">
                  {/* <img src={GiftPromo} alt="gift" /> */}
                  <h3>
                    Formulaire
                  </h3>
                  <p>
                    <label>Date de départ</label>
                    <input
                      class="form-control me-2"
                      type="date"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </p>
                  <p>
                    <label>Date de retour</label>
                    <input
                      class="form-control me-2"
                      type="date"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </p>
                  <p>
                    <select placeholder="Type de conger" class="form-control me-2">
                      <option>Type de conger</option>
                      <option>Maladie</option>
                      <option>Vacance</option>
                    </select>
                  </p>
                  <p>
                    <textarea placeholder="Causes" class="form-control me-2">
                      
                    </textarea>
                  </p>
                  <button onClick={succes} className="btn btn-primary custom-btn-fill">Envoyer votre demande</button>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <aside class="col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          />
          <div class="items-body container" style={{ padding: "10%" }}>
            <div class="promo-box">              
              <span>&nbsp; {props.information}</span>
            </div>
            <br />
            {
              props.showInfo ? (
                <>
                  <div class="row payment">
                    <div class="col-7 col-xxl-7">
                      <h4 class="text-style-2">Solde annuel</h4>
                    </div>
                    <div class="col">
                      <h4 class="text-style-3 text-end">1</h4>
                    </div>
                  </div>
                  <div class="row payment">
                    <div class="col-7 col-xxl-7">
                      <h4 class="text-style-2">Solde de compensation</h4>
                    </div>
                    <div class="col">
                      <h4 class="text-style-3 text-end">1</h4>
                    </div>
                  </div>
                  <div class="row payment">
                    <div class="col-7 col-xxl-7">
                      <h4 class="text-style-2">Solde maladie</h4>
                    </div>
                    <div class="col">
                      <h4 class="text-style-3 text-end">1</h4>
                    </div>
                  </div>
                  <div class="row payment">
                    <div class="col-7 col-xxl-7">
                      <h4 class="text-style-2">Date de départ</h4>
                    </div>
                    <div class="col">
                      <h4 class="text-style-3 text-end">
                        09/09/2022
                      </h4>
                    </div>
                  </div>
                  <div class="row payment">
                    <div class="col-7 col-xxl-7">
                      <h4 class="text-style-2">Date de retour</h4>
                    </div>
                    <div class="col">
                      <h4
                        class="text-style-3 text-end"
                        style={{ color: "#ef4423" }}
                      >
                        09/09/2022
                      </h4>
                    </div>
                  </div>
                  <div class="row payment">
                    <div class="col-7 col-xxl-7">
                      <h4 class="text-style-2">Type de congé</h4>
                    </div>
                    <div class="col">
                      <h4
                        class="text-style-3 text-end"
                        style={{ color: "limegreen" }}
                      >
                        Maladie
                      </h4>
                    </div>
                  </div>
                </>
              ) : (
                  <>
                    <div class="row payment">
                      <div class="col-7 col-xxl-7">
                        <a href="/admin/tableau-de-bord" class="text-style-2">Liste personnels</a>
                      </div>
                      <div class="col">
                        <h4 class="text-style-3 text-end">10</h4>
                      </div>
                    </div>
                    <div class="row payment">
                      <div class="col-7 col-xxl-7">
                        <a href="/ajouter-personnel" class="text-style-2">Ajouter personnel</a>
                      </div>
                    </div>
                    {/* <div class="row payment">
                      <div class="col-7 col-xxl-7">
                        <a href="/liste-employers" class="text-style-2">Liste personnels</a>
                      </div>
                      <div class="col">
                        <h4 class="text-style-3 text-end">10</h4>
                      </div>
                    </div> */}
                    <div class="row payment">
                      <div class="col-7 col-xxl-7">
                        <a href="/list-demande-de-conger" class="text-style-2">Liste demandeurs</a>
                      </div>
                      <div class="col">
                        <h4 class="text-style-3 text-end">10</h4>
                      </div>
                    </div>
                    <div class="row payment">
                      <div class="col-7 col-xxl-7">
                        <a href="/demande-accepter" class="text-style-2">Demande accepté(es)</a>
                      </div>
                      <div class="col">
                        <h4 class="text-style-3 text-end">10</h4>
                      </div>
                    </div>
                    <div class="row payment">
                      <div class="col-7 col-xxl-7">
                        <a href="/demande-rejeter" class="text-style-2">Demande rejeté(es)</a>
                      </div>
                      <div class="col">
                        <h4 class="text-style-3 text-end">10</h4>
                      </div>
                    </div>
                    {/* <div class="row payment">
                      <div class="col-7 col-xxl-7">
                        <a href="/liste-employers" class="text-style-2">Conger rejeter</a>
                      </div>
                      <div class="col">
                        <h4 class="text-style-3 text-end">10</h4>
                      </div>
                    </div> */}
                  </>
              )
            }
            <hr />
            {/* <div class="row payment">
              <div class="col-7 col-xxl-7">
                <h4 class="text-style-1">Delivery</h4>
              </div>
              <div class="col">
                <h4 class="text-style-1 text-end">Rs 30,000</h4>
              </div>
            </div> */}
            <br />
            <div class="row container">
              {
                props.showBtn ? (
                <button
                  class="btn btn-primary custom-btn-fill"
                  onClick={() => setShow({ show: true })}
                  type="button"
                  disabled={isSolde}
                  style={{backgroundColor: isSolde ? 'gray' : '', opacity:isSolde ? 0.4 : 1}}
                >
                  {
                    isSolde ? "Solde épuisé" : "Demande de congé"
                  }
                </button>
                ) : null
              }
            </div>
          </div>
        </aside>
      </>
    );
}

export default Checkout;
