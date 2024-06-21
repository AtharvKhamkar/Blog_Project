import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ $id, title, featuredImage }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
          <img
            src={featuredImage}
            alt={title}
            onLoad={handleImageLoad}
            className='rounded-xl '
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
    </Link>
  );
};

export default PostCard;
