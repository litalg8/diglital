import React from 'react';
import ProjectModal from '../ProjectModal'

function DesignProjectsPreview({ designProject }) {
    return (

        <li className="project-card">
            <ProjectModal designProject={designProject}/>
        </li>
    )
}
export default DesignProjectsPreview;
