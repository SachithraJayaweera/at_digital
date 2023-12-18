import React from 'react';
import { HeroImage } from '../../assets';

const Hero = () => {
  const overlayStyle = {
    position: 'absolute',
    top: '80%',
    left: '20%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '600px', // Max width of the overlay
    padding: '20px',
    background: 'linear-gradient(to bottom right, #4DCA79, #1CBDDD)',
    opacity: 1,
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#F28D35',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  };

  return (
    <div
      className="hero-section position-relative d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '1000px', // Adjust minimum height as needed
        //width: '100%', // Take full width of the container
        backgroundRepeat:'no-repeat',
        //backgroundAttachment:'fixed',

      }}
    >
      <div className="overlay" style={overlayStyle}>
        <div className="container text-white">
          <h1>We crush your competitors, goals, and sales records - without the B.S.</h1>
          <button style={buttonStyle}>GET FREE CONSULTATION</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
