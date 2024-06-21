import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import appwriteService from '../appwrite/config';
import { Container, PostForm } from '../components/index';

const EditPost = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((res) => {
        if (res) {
          setPost(res);
        }
      });
    } else {
      navigate('/');
    }
  }, [slug, navigate]);

  console.log(post);

  return post ? (
    <div className='py-8 text-gray-800'>
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
};

export default EditPost;
