import React, { createContext, useState } from 'react';
import { makeId } from '../projectService'


export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
    const [webProjects, setWebProjects] = useState([
        {
            id: 1,
            title: 'MineSweeper',
            desc: 'revamped minesweeper',
            url: 'https://litalg8.github.io/Minesweeper/',
            imgUrl: 'https://res.cloudinary.com/dk67dcp9c/image/upload/v1620217443/portfolio/minesweeper.png',
            type: 'javascript',

        },
        {
            id: 2,
            title: 'MemeGenerator',
            desc: 'create your own memes',
            url: 'https://litalg8.github.io/Memegenerator/',
            imgUrl: 'https://res.cloudinary.com/dk67dcp9c/image/upload/v1620217629/portfolio/memegen.png',
            type: 'javascript',

        },
        {
            id: 3,
            title: 'VueBooks',
            desc: 'BookShop API',
            url: 'https://vue-book-app.netlify.app/#/',
            imgUrl: 'https://res.cloudinary.com/dk67dcp9c/image/upload/v1620224012/portfolio/appsus.png',
            type: 'vue',

        },
        {
            id: 4,
            title: 'WeatherApp',
            desc: 'Fun WeatherApp API',
            url: 'https://litalg8.github.io/Minesweeper/',
            imgUrl: '/minesweeper.PNG',
            type: 'react-hooks',

        },
        {
            id: 5,
            title: 'Tuko',
            desc: 'Online Events app',
            url: 'https://litalg8.github.io/Minesweeper/',
            imgUrl: '/minesweeper.PNG',
            type: 'react',

        },
        {
            id: 6,
            title: 'Appsus',
            desc: 'Messaging and Note app',
            url: 'https://litalg8.github.io/Appsus/',
            imgUrl: '',
            type: 'react',

        }
    ]);

    const [designProjects, setDesignProjects] = useState([
        {
            id: 7,
            title: 'Alma Coffee Shop',
            desc: 'fun game with mobile design',
            imgUrl: 'https://res.cloudinary.com/dk67dcp9c/image/upload/v1623078669/portfolio/1-1.png',
            type: 'javascript',

        },
        {
            id: 8,
            title: 'MemeGenerator',
            desc: 'create your own memes',
            imgUrl: 'https://res.cloudinary.com/dk67dcp9c/image/upload/v1620217629/portfolio/memegen.png',
            type: 'javascript',

        },
        {
            id: 9,
            title: 'VueBooks',
            desc: 'BookShop created with BookAPI & Vue',
            imgUrl: 'https://res.cloudinary.com/dk67dcp9c/image/upload/v1620224012/portfolio/appsus.png',
            type: 'vue',

        },
        {
            id: 10,
            title: 'WeatherApp',
            desc: 'Fun WeatherApp created with React hooks',
            imgUrl: '/minesweeper.PNG',
            type: 'react-hooks',

        },
        {
            id: 11,
            title: 'Tuko',
            desc: 'Online Events app created with React',
            imgUrl: '/minesweeper.PNG',
            type: 'react',

        },
        {
            id: 12,
            title: 'FreshPoint Gif',
            desc: 'facebook design for freshpoint',
            imgUrl: '',
            type: 'graphic-design',

        }
    ]);


    const addProject = (title, type) => {
        setWebProjects([...webProjects, { title, type, id: makeId() }])
    }

    const removeProject = (id) => {
        setDesignProjects(designProjects.filter(designProject => designProject.id !== id))
    }

    return (
        <ProjectContext.Provider value={{ designProjects, webProjects, addProject, removeProject }}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectContextProvider;