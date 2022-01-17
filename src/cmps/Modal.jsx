import React from 'react';
import ReactDOM from 'react-dom';


const Modal = ({ isShowing, hide, designProject }) => isShowing ? ReactDOM.createPortal(
    <>
        <div className="modal-overlay" />
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal modal-mobile">
                <div className="modal-header">
                    <button type="button" className="close-modal-btn" data-dismiss="modal" aria-label="close" onClick={hide}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <span className="img_for_desktop">
                <img src={designProject.fullSize} alt={designProject.title}/>
                </span>
                <span className="img_for_mobile">
                <img src={designProject.thumbnail} alt={designProject.title}/>
                </span>
                {/* <h2>{designProject.title}</h2>
                <p>{designProject.desc}</p> */}
            </div>
        </div>
    </>, document.body
) : null;

export default Modal;