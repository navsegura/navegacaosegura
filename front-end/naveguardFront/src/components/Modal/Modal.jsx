import React from 'react'
import './Modal.css'


function Modal({isOpen, setModalOpen, children}) {

    if(isOpen){

        return (
        <div className="content_principal_modal">
            <div className="content_inner_modal">
                <div>{children}</div>
            <button onClick={setModalOpen} style={{background: 'black', width: '10rem'}}>Fechar</button>
            </div>
        </div>
          )
    }

    return null
  
}

export default Modal
