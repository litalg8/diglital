import React from 'react';
import logo from '../assets/imgs/logo.svg';
import Resume from '../assets/cv/LitalGottlieb-Resume.pdf';

function AppFooter() {


  return (
    <footer className="footer-container contact">
      <nav className="main-footer container flex justify-space">
        <span className="footer-logo"><img src={logo} alt="logo" /></span>
        {/* <div className="my-info flex column">
          <p>Ramat Gan,<br></br>Israel</p>
          <div className="mobile-tel"><div className="flex">+972<span className="tel">545</span><span className="tel">822175</span></div></div>
        </div> */}
        <div className="footer-links flex column">
          <a href={Resume} download="LitalGottlieb_CV"> Download my cv {'>'} </a>
          <ul className="social-list flex align-center">
            <li>
              <a href="https://www.facebook.com/lital.gottlieb" target="_blank" rel="noreferrer">
                <div className="fa fa-facebook-f">

                </div>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/litalgottlieb" target="_blank" rel="noreferrer">
                <div className="fa fa-twitter">
                </div>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/lital.gottlieb/?hl=en" target="_blank" rel="noreferrer">
                <div className="fa fa-instagram">
                </div>
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com/gottlieb1028/_saved/" target="_blank" rel="noreferrer">
                <div className="fa fa-pinterest">
                </div></a>
            </li>
            <li className="tel-icon-mobile">
              <a href="tel:0545822175">
                <div className="fa fa-phone">
                </div></a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>

  )
}

export default AppFooter;
