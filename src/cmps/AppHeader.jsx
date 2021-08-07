import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Link } from 'react-scroll'
import logo from '../assets/imgs/logo.svg'

const AppHeader = () => {
    const history = useHistory()

    return (
        <header className="app-header flex justify-center">
            <div className="header-container row">
                <nav className="main-nav container flex justify-space">
                    <div className="logo"><NavLink to="/"><img className="logo" src={logo} alt="logo" onClick={() => history.push('/')} /></NavLink></div>
                    <ul className="route-nav">
                        <li className="item nav-item"><Link to="projects" spy={true} smooth={true}> projects</Link></li>
                        <li className="item nav-item"><Link to="about" spy={true} smooth={true}>about</Link></li>
                        <li className="item nav-item"  ><Link to="contact" spy={true} smooth={true}  >contact</Link></li>
                    </ul>
                </nav>
                <ul className="hero-container container flex column align-center ">
                    <li> <h1>Welcome!</h1></li>
                    <li> <h1><span className="bella">I'm Lital</span></h1></li>
                    <li><p> Full Stack Developer</p></li>
                    {/* this will be typewriter edit */}
                    <li>
                        <button className="hero-btn">
                            <Link to="projects" spy={true} smooth={true}>see more</Link>
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default AppHeader;