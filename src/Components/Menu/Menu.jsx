import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <div>
      <div className='course-menu'>
        <a className='active' href='/couse'>
          All Courses
        </a>
        <a href='/book'>Book</a>
        <a href='/bootcamp'>Bootcamp</a>
      </div>
    </div>
  );
};

export default Menu;
