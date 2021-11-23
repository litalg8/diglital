import React, { useEffect, useState, useContext } from 'react';
import { ProjectContext } from '../context/ProjectContext'
import { useHistory, useLocation } from 'react-router';
import SwipeableViews from 'react-swipeable-views'
import WebProjectsList from './WebProjects/WebProjectsList';
import DesignProjectsList from './DesignProjects/DesignProjectsList';

function Projects() {
    const { webProjects, designProjects } = useContext(ProjectContext);
    // console.log('projects', webProjects);
    const [view, setView] = useState(0)
    const history = useHistory()
    const location = useLocation()

    const handleChange = (newVal) => {
        const path = (!newVal) ? 'web' : 'design'
        history.push(path)
    }

    useEffect(() => {
        const view = (location.pathname.includes('design')) ? 1 : 0;
        setView(view)
    }, [location.pathname])

    return (
        <div className="projects">
            <SwipeableViews index={view} onSwitching={handleChange} enableMouseEvents={true} >
                <WebProjectsList webProjects={webProjects} />
                <DesignProjectsList designProjects={designProjects} />
            </SwipeableViews>
        </div>
    )
}

export default Projects;

