import React from 'react'
import DesignProjectsPreview from './DesignProjectsPreview'
import { NavLink } from 'react-router-dom'

function DesignProjectsList({ designProjects }) {
    return (
        <>
            <section className="projects-nav flex align-center justify-center column">
                <ul className="main-projects container flex column align-center justify-center">
                    <li>
                        <ul className="project-categories projects flex justify-space align-center container">
                            <li className="current">
                                <span className="current-category design"><NavLink to="/projects/design">design</NavLink></span>
                            </li>
                            <li >
                                <span className="current-category"><NavLink to="/projects/web">web</NavLink></span>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h2 className="projects-swipe projects">
                            swipe for web projects ᐳ
                        </h2>
                    </li>
                </ul>
            </section>
            <ul className="project-grid flex container">
                {designProjects.map(designProject =>
                    <DesignProjectsPreview designProject={designProject} key={designProject.id} />
                )}
            </ul>
        </>
    )
}

export default DesignProjectsList;