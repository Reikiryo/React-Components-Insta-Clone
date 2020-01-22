import React, {useState} from 'react';

const LikeSection = props => {
  console.log(props)
  const [likes, setLikes] = useState(props.likes)
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div onClick={e => setLikes(likes + 1)} className="like-section-wrapper">
        <i className="far fa-heart" />
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">{likes}  likes</p>
</div>
  )
};

export default LikeSection;
