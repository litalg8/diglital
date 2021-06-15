import React from 'react';
import { ModalContext } from '../../context/ModalContext'

function DesignProjectsPreview({ designProject }) {
    // let { handleModal } = React.useContext(ModalContext)

    // React.useEffect(() => {
    //   handleModal('new content');
    // }, []);
    return (
        // onClick={()=>handleModal()}
        <li className="project-card" >
            <div className="card justify-center align-center flex column">
                <img src={designProject.imgUrl}/>
                <h2>{designProject.title}</h2>
                <p>{designProject.desc}</p>
            </div>
        </li>
    )
}
export default DesignProjectsPreview;