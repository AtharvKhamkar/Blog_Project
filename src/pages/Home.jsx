import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import appwriteService from '../appwrite/config';
import { Container, PostCard } from '../components/index';
import { allPosts, setImagePreview } from '../store/postSlice';

const Home = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    appwriteService.getPosts([]).then(async (res) => {
      if (res) {
        dispatch(allPosts(res.documents));
        await Promise.all(
          res.documents.map(async (doc) => {
            const url = await appwriteService.getFilePreview(doc.featuredImage);
            dispatch(
              setImagePreview({ id: doc.featuredImage, url: url.toString() })
            );
          })
        );
        setLoading(false);
      }
    });
  }, [dispatch]);

  const posts = useSelector((state) => state.post.postsData);
  const imagePreview = useSelector((state) => state.post.imagePreview);
  console.log(posts);

  if (posts.length === 0) {
    return (
      <div className='w-full py-8 mt-4 text-center text-gray-800'>
        <Container>
          <div className='flex flex-wrap'>
            <div className='p-2 w-full'>
              <h1 className='text-2xl font-bold hover:text-gray-500'>
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post) => {
            const previewUrl = imagePreview[post.featuredImage];
            return (
              <div key={post.$id} className='p-2 w-1/4'>
                <PostCard {...post} featuredImage={previewUrl} />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Home;
