import React, { useState } from 'react';
import ReactDOM from 'react-dom'; 


const Modal= () => {

    return ReactDOM.createPortal (
        <section className="modal-wrapper">
            <div className="modal-container">
            <button className="modal-btn">X</button>
                This is modal content
                <img className="full-size modal" src={designProjects.imgUrl}/>
            </div>
            
        </section>,
        document.querySelector('#modal-root')
    )
}

export default Modal; 