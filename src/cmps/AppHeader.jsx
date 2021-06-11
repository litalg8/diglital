import React from 'react';
import { NavLink } from 'react-router-dom';
import {Link} from 'react-scroll'
import logo from '../assets/imgs/logo.svg'


function AppHeader() {
    return (
        <div>
            <header className="app-header">
                <nav className="main-nav container flex justify-between">
                    <div className="logo nav-item"><Link activeClass="active" to="/" spy={true} smooth={true}><img className="logo" src={logo} alt="logo"/></Link></div>
                    <ul className="route-nav flex align-center">
                        <li className="item nav-item"><Link to="projects" spy={true} smooth={true}> projects</Link></li>
                        <li className="item nav-item"><Link to="about" spy={true} smooth={true}>about</Link></li>
                        <li className="item nav-item"><Link to="contact" spy={true} smooth={true} >contact</Link></li>
                    </ul>
                </nav>

            </header>
               
        </div>

    )
}

export default AppHeader; 