import React from 'react';
import imgUrl from '../assets/imgs/me.jpg'
import Resume from '../assets/cv/Lital_Gottlieb_CV.docx';

function About(props) {

    return (
        <section className="about-card me container">
            <div className="about-container flex">
                <div className="about flex column justify-center">
                    <div className="img-container">
                        <img src={imgUrl} alt="lital" />
                    </div>
                    <h2> Lital Gottlieb </h2>
                    <h3>Ramat Gan, Israel</h3>
                    <h4>Associate Degree in Visual Arts </h4>
                    <h4>Coding Academy Graduate</h4>
                </div>
                <div className="about-info flex column justify-space">
                    <h2>A little bit about me </h2>
                    <p> Once I stepped into the art world, may it be digital or not,
                        I found what makes me tick.
                        Along with photoshop, illustartor, indesign, CSS and HTML
                        I am also familiar with javaScript frameworks and SCSS.
                        My ability to adjust with whatever comes my way is what
                        will take me further in this field.
                    </p>
                    <div className="btn-container flex justify-space">
                        <button className="about-btn"> <a href={Resume} download="LitalG_CV"> download cv </a></button>
                        <button className="about-btn"><a target="_blank" href="https://github.com/litalg8" rel="noreferrer">check out my github</a></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;