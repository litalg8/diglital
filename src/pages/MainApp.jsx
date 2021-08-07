import React from 'react';
import ProjectContextProvider from '../context/ProjectContext';
import Cta from '../cmps/Cta';
import Projects from '../cmps/Projects';


function MainApp() {

    return (
        <ProjectContextProvider>
            <Projects />
            <Cta />
        </ProjectContextProvider>
    )
}
export default MainApp;