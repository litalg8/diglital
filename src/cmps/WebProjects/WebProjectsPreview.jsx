import React from 'react';


function WebProjectsPreview({ webProject }) {

    return (
        <li className="project-card">
            <a href={webProject.url} className="justify-center align-center flex column" >
                <div className="card">
                    <span className="card-title">{webProject.title}</span>
                    <p>{webProject.desc}</p>
                </div>
            </a>
        </li>
    )
}
export default WebProjectsPreview;