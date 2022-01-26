import {Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'
import NotFound from './Pages/NotFound';
import Post from './Pages/Post';
import { useState } from 'react';


function App() {
    const [login,setlogin]=useState(false); 
  
  return (
      <div className="App">
          <Header  login={login} setlogin={setlogin}/>
          <Routes>
                
                <Route  path="/" element={<Home/>}/>
                <Route  path="/about" element={<About login={login}/>}/>
                <Route  path="/profile/*" element={<Profile login={login}/>}/>
                <Route path='/post/' element={<Post/>}>
                    <Route path='/post/:postId' element={<Post/>}/>
                </Route>
                <Route path='*' element={<NotFound/>}/> 
          </Routes>
      </div>
    
  );
}

export default App;
