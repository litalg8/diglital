import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-scroll';
import logo from '../assets/imgs/logo.svg';
import arrow from '../assets/imgs/icon-arrow-down.svg';
import Typewriter from 'typewriter-effect';

const AppHeader = (props) => {
    const history = useHistory()
    return (
        <header className="app-header flex justify-center">
            <div className="header-container row">
                <nav className="main-nav container flex justify-space">
                    <div className="logo-container"><img className="logo" src={logo} alt="logo" onClick={() => history.push('/')} /></div>
                    <ul className="route-nav">
                        <li className="item nav-item"><Link to="projects" spy={true} smooth={true}> projects</Link></li>
                        <li className="item nav-item"><Link to="cta" spy={true} smooth={true} onClick={props.onClick}>about</Link></li>
                        <li className="item nav-item"><Link to="contact" spy={true} smooth={true}  >contact</Link></li>
                    </ul>
                </nav>
                <ul className="hero-container container flex column align-center ">
                    <li> <h1>Welcome!</h1></li>
                    <li> <h1><span className="bella">I'm Lital</span></h1></li>
                    <li><h2>
                        <Typewriter onInit={(typewriter) => {
                            typewriter.typeString('Full Stack Developer')
                                .pauseFor(1500)
                                .deleteAll()
                                .start()
                            typewriter.typeString('Web Designer')
                        }}
                        />
                    </h2></li>
                    <li className="see-more flex column align-center justify-center">
                        <Link to="projects" spy={true} smooth={true}>see more</Link>
                        <Link to="projects" spy={true} smooth={true} className="scroll-btn">
                            <img src={arrow} alt="arrow-down" />
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default AppHeader;