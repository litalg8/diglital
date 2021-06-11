import React from 'react';
import About from './About';

function Cta(props) {
  return (
    <section className="cta about align-center">
      <div className="cta-content container flex column padding align-center">
          <h2>advantages to hiring me</h2>
        <div className="company-info">
          <ul className="info-bullets flex column align-center">
            <li className="circle flex justify-center align-center">
              <div className="fas fa-palette fa-2x"></div>
            </li>
            <li>
              <h3>Creative </h3>
            </li>
          </ul>
          <ul className="info-bullets flex column align-center">
            <li className="circle flex justify-center align-center">
              <div className="far fa-gem fa-2x"></div>
            </li>
            <li>
              <h3>Attention to detail</h3>
            </li>

          </ul>
          <ul className="info-bullets flex column align-center">
            <li className="circle flex justify-center align-center">
              <div className="fas fa-bolt fa-2x ">
              </div>
            </li>
            <li>
              <h3>Fast Learner</h3>
            </li>
          </ul>
        </div>
      <About/>
      </div>
    </section>
  )
}

export default Cta;