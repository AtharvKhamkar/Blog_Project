import React from 'react';
import logo from '../assets/medium.png';

const Logo = ({ width = '50px' }) => {
  return (
    <div>
      <img src={logo} alt='logo' style={{ width }} />
    </div>
  );
};

export default Logo;
