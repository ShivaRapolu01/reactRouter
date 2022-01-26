import React, { useEffect } from 'react';
import { Link, useNavigate ,Routes,Route} from 'react-router-dom';
import EditProfile from '../components/EditProfile';
import ViewProfile from '../components/ViewProfile';

const Profile = ({login}) => {
  const navigate= useNavigate(); 
   
 useEffect(() => {
  if(!login){
    navigate('/');
  }
 }, [login]);
 //useEffect must be fired when [login,navigate] change 

   //for nesting routes in v5 we used useRouteMatch(), but in v6 the paths have become relative so we just need to mention relative paths
  //  const {path,url}= useRouteMatch() in v5 , now in v6 this is not available
  return (
    <>
    <h1>Profile Page</h1>
    <ul>
      <li>
        <Link to="viewprofile">View Profile</Link>
      </li>
      <li>
        <Link to="editprofile">Edit Profile</Link>
      </li>
    </ul>
      <Routes>
        <Route path='viewprofile' element={<ViewProfile/>}></Route>
        <Route path='editprofile' element={<EditProfile/>}></Route>
      </Routes>
    </>
  );
};

export default Profile;
