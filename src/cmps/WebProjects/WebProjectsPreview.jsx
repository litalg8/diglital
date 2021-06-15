import React from 'react';


function WebProjectsPreview({ webProject }) {

    return (
        <a href={webProject.url} >
            <li className="project-card" >
                <div className="card justify-center align-center flex column">
                    <h2>{webProject.title}</h2>
                    <p>{webProject.desc}</p>
                </div>
            </li>
        </a>
    )
}
export default WebProjectsPreview;