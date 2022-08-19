import { useState } from "react"
import { Modal } from "react-bootstrap"
import { ToastContainer, toast } from 'react-toastify';

export const ModalDelete = (props)=>{
    const [show, setShow] = useState(props.show)
    const [isClik, setIsClick] = useState(false)
    return(
    <Modal
          show={isClik ? false : props.show}
          onHide={() => setShow(false)}
          backdrop="static"
          keyboard={false}
          size="lg"
          centered
        >
          <Modal.Header onClick={()=>setIsClick(isClik ? false : true)} closeButton></Modal.Header>
          <Modal.Body>
            <div class="container">
              <ToastContainer />
              <div class="row">
                <div class="col-xxl-8 col-md-8 col-8 offset-md-2 offset-2 offset-xxl-2 promotion-box">
                  {/* <img src={GiftPromo} alt="gift" /> */}
                 <p>Voulez‑vous vraiment supprimer ce compte ?</p>
                 <div class="row text-center container py-4">
                    <div class="col-6 col-md-3 col-lg-8 col-xl-8 col-xxl-3"><button onClick={()=>toast("Compte supprimé avec succès")} class="btn btn-primary custom-btn" type="button">Oui</button></div>
                    <div class="col-6 help-text">
                        <h5><button onClick={()=>setIsClick(isClik ? false : true)} class="btn btn-primary custom-btn" type="button">Non</button></h5>
                    </div>
                </div>
                </div>
              </div>
            </div>
          </Modal.Body>
    </Modal>
    )
}