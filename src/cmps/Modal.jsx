import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ModalContext } from '../context/ModalContext'

const Modal = () => {
    let { modalContent, handleModal, modal } = React.useContext(ModalContext);
    if (modal) {
        return ReactDOM.createPortal(
            <section className="modal-wrapper">
                <div className="modal-container">
                    <button className="modal-btn" onClick={() => handleModal()}>X</button>
                    <p> {modalContent} </p>
                    {/* <img className="full-size modal"/> */}
                </div>
            </section>,
            document.querySelector('#modal-root')
        )
    } else return null;
}

export default Modal;