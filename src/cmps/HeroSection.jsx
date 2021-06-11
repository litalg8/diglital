import React from 'react';
import { Link } from 'react-scroll';

function HeroSection() {
    return (
        <section className="hero-container">
            <div className="flex container">
            <div className="hero-cover"> </div>
            <div className="text-section column top">
                <div className="mobile-text-section">
                    <h1 className="flex column">Welcome!<span className="bella">I'm Lital</span></h1>
                    <p> Full Stack Developer</p>
                    {/* this will be typewriter edit */}
                    </div>
                    <button className="hero-btn top"><Link to="projects" spy={true} smooth={true}>see more</Link></button>
                </div>
            </div>
        </section>

    )
}

export default HeroSection; 