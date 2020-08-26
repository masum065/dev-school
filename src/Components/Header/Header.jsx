import React from 'react';
import Logo from '../../logo.png';
import './Header.css';

const Header = () => {
  return (
    <div>
      <img src={Logo} alt='' className='logo' />
    </div>
  );
};

export default Header;
