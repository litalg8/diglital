import React from 'react';
import { Link } from 'react-router-dom'

function WebProjectsPreview({ webProject }) {
    return (
        <a href={webProject.url}>
            <li className="project-card" >
                {/* <img className="project-image" src={project.imgUrl}/> */}
                <div className="card justify-center align-center flex column">
                    <h2>{webProject.title}</h2>
                    <p>{webProject.desc}</p>
                </div>
            </li>
        </a>
    )
}
export default WebProjectsPreview;