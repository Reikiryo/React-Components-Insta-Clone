// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  //console.log(props);
  return (
    <div>
      {props.comments.map(p => (
        <Comment key={p.comments} comment={p}/>
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
