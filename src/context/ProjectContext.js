import React, { createContext, useState } from 'react';


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
            desc: 'digital design for facebook',
            thumbnail: 'https://res.cloudinary.com/dk67dcp9c/image/upload/v1637689010/portfolio/Thumbnail/14-142.png',
            fullSize:'https://res.cloudinary.com/dk67dcp9c/image/upload/v1637686547/portfolio/14-14.jpg',
            type: 'javascript',

        },
        {
            id: 8,
            title: 'Alma Coffee Shop',
            desc: 'digital design for facebook',
            thumbnail: 'https://res.cloudinary.com/dk67dcp9c/image/upload/v1637689761/portfolio/Thumbnail/12-12.png',
            fullSize: 'https://res.cloudinary.com/dk67dcp9c/image/upload/v1637685942/portfolio/12-12.jpg',
            type: 'javascript',

        },
        {
            id: 9,
            title: 'freshpoint',
            desc: 'digital gif for facebook',
            thumbnail: 'https://res.cloudinary.com/dk67dcp9c/image/upload/v1637688852/portfolio/Thumbnail/11-11.gif',
            fullSize: 'https://res.cloudinary.com/dk67dcp9c/image/upload/v1620224012/portfolio/11-11.gif',
            type: 'vue',

        },
        {
            id: 10,
            title: 'freshpoint',
            desc: 'digital gif for facebook',
            thumbnail: 'https://res.cloudinary.com/dk67dcp9c/image/upload/v1637688385/portfolio/Thumbnail/10-10.gif',
            fullSize: 'https://res.cloudinary.com/dk67dcp9c/image/upload/v1620224012/portfolio/10-10.gif',
            type: 'react-hooks',

        },
        {
            id: 11,
            title: 'shay & yaara',
            desc: 'Wedding invitation design',
            thumbnail: 'https://res.cloudinary.com/dk67dcp9c/image/upload/v1637689742/portfolio/Thumbnail/2-2.png',
            fullSize: 'https://res.cloudinary.com/dk67dcp9c/image/upload/v1620224012/portfolio/2-2.png',
            type: 'react',

        },
        {
            id: 12,
            title: 'G Rishon',
            desc: 'digital design for facebook',
            thumbnail:'https://res.cloudinary.com/dk67dcp9c/image/upload/v1637689737/portfolio/Thumbnail/4-4.png',
            fullSize:'https://res.cloudinary.com/dk67dcp9c/image/upload/v1620224012/portfolio/4-4.png',
            type: 'graphic-design',

        },

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



export function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
  }

