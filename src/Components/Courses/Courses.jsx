import React from 'react';
import courseData from '../../CourseData/CourseData';

import './Courses.css';
import SingleCourse from '../SingleCourse/SingleCourse';
import Menu from '../Menu/Menu';
import Cart from '../Cart/Cart';

const Courses = () => {
  const data = [...courseData];

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-2'>
            <Menu />
          </div>
          <div className='col-lg-10'>
            <h3 className='seciton-title'>All Courses</h3>

            <div className='row'>
              {data.map((item) => (
                <SingleCourse key={item.key} courseData={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Cart />
    </div>
  );
};

export default Courses;
