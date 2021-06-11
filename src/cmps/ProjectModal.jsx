import React, { useState, useContext } from 'react';
import { ProjectContext } from '../context/ProjectContext'
import Modal from './Modal'



function ProjectModal() {
    const { webProjects, designProjects } = useContext(ProjectContext)
    console.log('projects', webProjects);

    const [showModal,setShowModal] = useState(false)

    const openModal=()=>{
        setShowModal(showModal => !showModal)
    }
    return (
        <div className="" >
               {showModal ? 
            <Modal showModal={showModal} setShowModal={setShowModal} designProjects={designProjects}></Modal>
            :null}
        </div>
    )
}

export default ProjectModal;

