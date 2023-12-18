import React from 'react'
import { WhiteLogo } from '../../assets';

const Footer = () =>{
  return(

  <div className="footer" style={{ backgroundColor: '#6B3CC9', color: 'white', padding: '20px' }}>
    <div className="footer-content container" style={{ marginLeft: '10%' }}>

      <div className="footer-row d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">

        <div className="footer-logo mb-4 mb-md-0" style={{ listStyle: 'none', marginRight: '15px'}}>
          <img src={WhiteLogo} alt="Company Logo" style={{ width: '250px' }} />
          <p style={{ marginTop: '10px', marginRight:'150px'}}>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve a single objective - your business results.</p>
        </div>

        <div className="footer-links d-flex justify-content-between">
          <ul className="technologies me-3" style={{ listStyle: 'none', marginBottom: '30px',  marginLeft:'10px'}}>
            <li><h4>OurTechnologies</h4></li>
            <li>ReactJS</li>
            <li>Gatsby</li>
            <li>NextJS</li>
            <li>NodeJS</li>
            <li>GraphQL</li>
            <li>Laravel</li>
          </ul>

          <ul className="services" style={{ listStyle: 'none', marginLeft: '30px'}}>
            <li><h4>OurServices</h4></li>
            <li>Social Media Marketing</li>
            <li>Web & Mobile App Development</li>
            <li>Data & Analytics</li>
            <li>Google Marketing Solutions</li>
            <li>Search Engine Optimization</li>
          </ul>
        </div>

      </div>

      <hr />

      <div className="footer-legal text-center mt-4">
          <a href="#" style={{ textDecoration: 'none', color: 'white' }}>Privacy Policy</a>
          <span className="mx-2">|</span>
          <a href="#" style={{ textDecoration: 'none', color: 'white' }}>Terms & Conditions</a>
      </div>

    </div>
  </div>
  );
};

export default Footer;