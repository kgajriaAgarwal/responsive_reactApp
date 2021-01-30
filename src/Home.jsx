import React from 'react';
import imgg from '../src/images/iimg.jpg';
import { NavLink } from 'react-router-dom';
import Common from './Common';


const Home = () => { 
  return(
      <>
        <Common
        name = 'Welcome to Home Page!'
         btnName = 'Know More..'
         visit = '/about' 
         imgsrc ={imgg}/>
      </>
  );
}
export default Home;