import React, { useEffect } from 'react';

const Home = () => {
  // this useEffect hook enables the to start the redirected Link page from the start not from the continuation of current page
  useEffect(() => {
     window.scroll(0,0); 
  }, []);
  
  return <h1>Home Page
  </h1>;
};

export default Home;
