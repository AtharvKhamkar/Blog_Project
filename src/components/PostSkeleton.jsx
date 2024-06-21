import React from 'react';

const PostSkeleton = () => {
  return (
    <div className='flex flex-col gap-4 w-52'>
      <div className='skeleton h-32 w-full bg-gray-500 rounded-lg'></div>
      <div className='skeleton h-4 w-28 bg-gray-500 rounded-lg'></div>
      <div className='skeleton h-4 w-full bg-gray-500 rounded-lg'></div>
      <div className='skeleton h-4 w-full bg-gray-500 rounded-lg'></div>
    </div>
  );
};

export default PostSkeleton;
