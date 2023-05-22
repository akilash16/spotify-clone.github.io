import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

function FollowButton() {
  const [isLiked, setIsLiked] = useState(false);

  function toggleLike() {
    setIsLiked((previousIsLiked) => !previousIsLiked);
  }

  return (
    <div className="btns">
      <button onClick={toggleLike} className="btn">
        <i id="btn1" style={{ color: isLiked ? 'red' : 'rgba(128, 128, 128, 0.6)' }}>
          <FaHeart />
        </i>
      </button>
    </div>
  );
}

export  {FollowButton};