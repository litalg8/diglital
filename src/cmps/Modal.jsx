import { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import ProjectModal  from './ProjectModal'


const Modal = () => {
    const history = useHistory();

    const closeModal = (ev) => {
        ev.stopPropagation()
        history.goBack();
    }

    useEffect(() => {
        document.body.classList.add("modal-overflow");
        return () => {
        document.body.classList.remove("modal-overflow")
        }
    }, [])

    return (
        <div className="modal-wrapper" onClick={closeModal} >
            <div className="modal-project-content" >
                <button onClick={closeModal}>X</button>
                <ProjectModal />
            </div>
        </div >
    )

}

export default Modal;










// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import { ModalContext } from '../context/ModalContext'

// const Modal = () => {
//     let { modalContent, handleModal, modal } = React.useContext(ModalContext);
//     if (modal) {
//         return ReactDOM.createPortal(
//             <section className="modal-wrapper">
//                 <div className="modal-container">
//                     <button className="modal-btn" onClick={() => handleModal()}>X</button>
//                     <p> {modalContent} </p>
//                     {/* <img className="full-size modal"/> */}
//                 </div>
//             </section>,
//             document.querySelector('#modal-root')
//         )
//     } else return null;
// }

// export default Modal;