import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authService from './appwrite/auth';
import { login } from './store/authSlice';

const Example = () => {
  const [email, setEmail] = useState('nileshnawale@gmail.com');
  const [password, setPassword] = useState('aditya19012002');
  const [name, setName] = useState('nilesh');

  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userData);

  const createAccount = () => {
    authService.createAccount({ email, password, name });
  };

  const getUserDetails = () => {
    authService.getCurrentUser().then((res) => dispatch(login(res)));
  };
  return (
    <div>
      <button onClick={createAccount}>Create account</button>
      <button onClick={getUserDetails}>Get user details</button>
      <p>{userDetails ? userDetails : 'null'}</p>
    </div>
  );
};

export default Example;
