import React from 'react';
import { WhiteLogo } from '../../assets';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#6B3CC9', padding: '10px 0px' }}>
      <div className="container">
        <a className="navbar-brand" href="/" style={{ marginLeft: '0%' }}>
          <img src={WhiteLogo} alt="Company Logo" /> 
        </a>

        <div className="collapse navbar-collapse" id="navbarNav" style={{ marginRight: '0%' }}>

          <ul className="navbar-nav ms-auto" style={{ marginLeft: '0px' }}>

            <li className="nav-item">
              <a className="nav-link" href="/services" style={{ color: 'white', marginLeft: '10px' }}>
                SERVICES
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/about" style={{ color: 'white', marginLeft: '10px' }}>
                ABOUT US
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contact" style={{ color: 'white', marginLeft: '10px' }}>
                CONTACT US
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/careers" style={{ color: 'white', marginLeft: '10px' }}>
                CAREERS
              </a>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
