import React from 'react'
import { NavLink } from 'react-router-dom'
import WebProjectsPreview from './WebProjectsPreview'



function WebProjectsList({ webProjects }) {

    return (
        <>
            <section className="projects-nav flex align-center justify-center column">
                <ul className="main-projects container flex column align-center justify-center">
                    <li>
                        <ul className="project-categories projects flex justify-space align-center container">
                            <li >
                                <span className="current-category design"><NavLink to="/projects/design">design</NavLink></span>
                            </li>
                            <li className="current">
                                <span className="current-category"><NavLink to="/projects/web">web</NavLink></span>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h2 className="projects-swipe projects">
                            ᐸ swipe for design projects
                        </h2>
                    </li>
                </ul>
            </section>
            <ul className="project-grid flex container">
                {webProjects.map(webProject =>
                    <WebProjectsPreview webProject={webProject} key={webProject.id} />
                )}
            </ul>
        </>
    )
}

export default WebProjectsList;