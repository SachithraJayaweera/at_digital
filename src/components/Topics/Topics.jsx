import React from 'react'
//import { HeroImage } from '../../assets';
import {image1,image2} from '../../assets'


const Topics = () =>{

  const cardStyle = {
    display: 'flex',
    borderRadius: '8px',
    overflow: 'hidden',
    //boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '50px',
    margin: '20px',
    marginBottom: '0'
  };

  const imageStyle = {
    width: '100%', 
    height: 'auto',
    objectFit: 'cover',
    marginBottom: '20px',
  };

  const contentStyle = {
    padding: '20px',
    paddingTop: '100px',
    backgroundColor: '#FFFFFF',
  };

  const allCardStyles = {
    display: 'column',
    padding: '100px',
    paddingTop:'0px'
  };

  const imageStyle1 = {
    width: '450px', // Adjust width as needed
    height: 'auto',
    objectFit: 'cover',
    marginLeft: '100px'
  };

  const imageStyle2 = {
    width: '450px', // Adjust width as needed
    height: 'auto',
    objectFit: 'cover',
    marginRight:'100px',
    marginLeft: '100px'
  };

  const contentStyle1 = {
    padding: '20px',
    paddingTop: '120px',
    backgroundColor: '#FFFFFF',
    marginLeft: '100px',
    marginRight:'100px',
  
  };

  const contentStyle2 = {
    padding: '20px',
    backgroundColor: '#FFFFFF',
    marginRight:'100px',
    paddingTop: '100px',
    marginLeft: '100px'
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

  const titleStyle = {
    color: '#6B3CC9',
  };

  const mediaQuery = '@media (max-width: 768px)';

  return(

    <div style={allCardStyles}>

      <div style={cardStyle}>
        <div style={{ ...imageStyle, [mediaQuery]: { order: 2 } }}>
          <img src={image2} alt="Your Image" style={imageStyle1} />
        </div>

        <div style={{ ...contentStyle,contentStyle1, [mediaQuery]: { order: 1 } }}>

          <h3 style={titleStyle}>Web & Mobile App Development</h3><br />

          <p>Your web and mobile Apps are pieces of the puzzle to grow your business.
             We use frameworks which tailor content and engagement methods to respond
              to different intents shown by your potential customers who interact with
               your business online.</p>
               <button style={buttonStyle}>LEARN MORE</button>
        </div>

      </div>


      <div style={cardStyle}>
        <div style={{ ...contentStyle, contentStyle2 ,[mediaQuery]: { order: 2 } }}>

          <h3 style={titleStyle}>Digital Strategy Consulting</h3><br />

          <p>Your digital strategy should complement the overall marketing strategy of the
             company. In online marketing, each component will never work in isolation and
              every business needs a different mix. We provide a clear concept and strategic
               overview to find the most efficient model for your business.</p>
               <button style={buttonStyle}>LEARN MORE</button>
        </div>


        <div style={{ ...imageStyle, [mediaQuery]: { order: 1 } }}>
          <img src={image1} alt="Your Image" style={imageStyle2} />
        </div>
      </div>
    </div>



  );
};

export default Topics;
