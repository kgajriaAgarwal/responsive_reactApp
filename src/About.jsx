import React from 'react';
import imgg from '../src/images/img2.jpg';
import { NavLink } from 'react-router-dom';
import Common from './Common';



const About = () => { 
  return(
      <>
        <Common name = 'Welcome to About Page!' btnName = 'get started' imgsrc = {imgg}/>
      </>
  );
}
export default About;