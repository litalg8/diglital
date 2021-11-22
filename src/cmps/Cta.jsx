import React from 'react';
import AboutLital from './AboutLital';

const Cta = (props) => {
  return (
    <section className="cta align-center">
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
      </div>
      <div onClick={props.onClick} className="toggle-btn">
        <div className={`fas fa-chevron-down fa-2x ${props.isIconChange ? 'fas fa-chevron-up fa-2x' : 'fas fa-chevron-down fa-2x'}`}>
        </div>
      </div>
      {props.visibillity === true && <AboutLital />}
    </section>
  )
}

export default Cta;