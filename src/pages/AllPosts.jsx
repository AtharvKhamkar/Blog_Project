import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import appwriteService from '../appwrite/config';
import { Container, PostCard, PostSkeleton } from '../components/index';
import { allPosts, setImagePreview } from '../store/postSlice';

const AllPosts = () => {
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

  return (
    <div className='w-full py-8 text-gray-800'>
      <Container>
        <div className='flex flex-wrap'>
          {loading
            ? Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className='p-4 w-1/4'>
                  <PostSkeleton />
                </div>
              ))
            : posts.map((post) => {
                const previewUrl = imagePreview[post.featuredImage];
                return (
                  <div key={post.$id} className='p-2 w-1/4'>
                    <PostCard
                      key={post.$id}
                      {...post}
                      featuredImage={previewUrl}
                    />
                  </div>
                );
              })}
        </div>
      </Container>
    </div>
  );
};

export default AllPosts;
