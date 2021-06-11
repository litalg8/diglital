import React from 'react';
import ReadMore from './ReadMore';


function About(props) {
    return (
        <section className="about-container">
            <div className="flex container">
                <div className="main-about extra-content column top">
                    <ReadMore>
                        I'm Lital Gottlieb, 
                        Associate Degree in Visual Arts from MCCC, NJ USA
                        Graduate from Coding Academy BootCamp
                        Designer and Front End Developer from Ramat-Gan, Israel.
                        Once I stepped into the art world, may it be digital or not, I found what makes me tick.
                        Along with photoshop, illustartor, indesign, CSS and HTML I am also familiar with javaScript frameworks and SCSS.
                        My ability to adjust with whatever comes my way is what will take me further in this field.
                        I feel that communication, collaboration and setting clear goals are essential for any project, small or large.
                    </ReadMore>
                </div>
            </div>
        </section>

    )
}

export default About;



