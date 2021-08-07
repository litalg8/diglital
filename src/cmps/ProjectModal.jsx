import React from 'react';
import { Link, useLocation } from "react-router-dom";


function ProjectModal({ designProject }) {
    const location = useLocation();
    return (
        <div className="card justify-center align-center flex column">
            <Link to={{ pathname: "/project/design/:id?", state: { background: location } }}>
                <img src={designProject.imgUrl} />
                <h2>{designProject.title}</h2>
                <p>{designProject.desc}</p>
            </Link>
        </div>
    )
}

export default ProjectModal;

