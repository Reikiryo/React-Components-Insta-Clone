//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  //console.log(props)
  return (
    
    <div className="posts-container-wrapper">
      {props.Data.map(p => (
        //console.log(p);
        <div className="box">
        <Post post={p}/> 
        </div>
      ))}
    </div>
  );
};

export default PostsPage;

