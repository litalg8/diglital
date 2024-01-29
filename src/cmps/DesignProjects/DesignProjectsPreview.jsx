import React from 'react';
import Modal from '../Modal'
import useModal from '../../Hooks/useModal';

function DesignProjectsPreview({ designProject }) {
    const { isShowing, toggle } = useModal();
    return (
        <>
            {/* <button> PROJECT</button> */}
            <li className="design-project" onClick={toggle} >
                <div className="card justify-center align-center flex column">
                    <img src={designProject.thumbnail} alt={designProject.title}/>
                </div>
            </li>
            <Modal isShowing={isShowing} hide={toggle} designProject={designProject} />
        </>
    )
}
export default DesignProjectsPreview;
