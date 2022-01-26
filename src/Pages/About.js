import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const About = ({login}) => {
  const navigate= useNavigate(); 
   
  useEffect(() => {
   if(!login){
     navigate('/');
   }
  }, [login]);

  return <h1> About Page</h1>;
};

export default About;
