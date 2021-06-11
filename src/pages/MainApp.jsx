import React from 'react';
import Cta from '../cmps/Cta';
import HeroSection from '../cmps/HeroSection';
import ProjectContextProvider from '../context/ProjectContext';
import Projects from '../cmps/Projects';


function MainApp() {

    return (
        <ProjectContextProvider>
            <HeroSection />
            <Projects />
            <Cta />
        </ProjectContextProvider>
    )
}
export default MainApp;