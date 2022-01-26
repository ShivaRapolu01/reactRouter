import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header({login,setlogin}) {
  return (<div className='App'>
      <h1>React Router</h1>
      <div className='nav'>
           <div>Router Magic</div>
           <div>
            <ul className='nav-links'>
              <li>
                <Link to="/" className='text-link'> Home</Link>
               </li>
              <li>
              <Link to="/About" className='text-link'> About</Link>
              </li>
              <li>
              <Link to="/Profile" className='text-link' > Profile</Link>
              </li>
              <li>
                <button className='status' onClick={()=>setlogin(!login)}>{login?"Login":"Log out"}</button>
              </li>
            </ul>
           </div>
           
      </div>
  </div>);
}
