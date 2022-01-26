import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Post = () => {

  const {postId}=useParams(); 
  console.log(useLocation());
 
  const query=new URLSearchParams(useLocation().search);
  return (
      <>
  <h1>Id is={postId}</h1>
  <h2>First name is ={query.get("name")}</h2>
  <h2>Last name is = {query.get("last")}</h2>
      </>
  );
};

export default Post;
