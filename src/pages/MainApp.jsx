import React from 'react';
import ProjectContextProvider from '../context/ProjectContext';
import Projects from '../cmps/Projects';


function MainApp() {

    return (
        <ProjectContextProvider>
            <Projects />
        </ProjectContextProvider>
    )
}
export default MainApp;