import React from 'react';


function DesignProjectsPreview({ designProject }) {

    return (
        <li className="project-card" >
            <div className="card justify-center align-center flex column">
                <h2>{designProject.title}</h2>
                <p>{designProject.desc}</p>
            </div>
        </li>
    )
}
export default DesignProjectsPreview;