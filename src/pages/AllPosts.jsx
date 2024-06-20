import React, { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { Container, PostCard } from '../components/index';

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((res) => {
      if (res) {
        setPosts(res.documents);
      }
    });
  }, []);

  return (
    <div className='w--full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post) => (
            <div key={post.$id} className='p-2 w-1/4'>
              <PostCard key={post.$id} post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPosts;
