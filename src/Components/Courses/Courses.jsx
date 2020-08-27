import React, { useState } from 'react';
import courseData from '../../CourseData/CourseData';

import './Courses.css';
import SingleCourse from '../SingleCourse/SingleCourse';
import Menu from '../Menu/Menu';
import Cart from '../Cart/Cart';

const Courses = () => {
  const [courses, setCourse] = useState([...courseData]);
  const [cart, setCart] = useState([]);

  const handleAddCourse = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
  };
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
              {courses.map((course) => (
                <SingleCourse
                  handleAddCourse={handleAddCourse}
                  key={course.key}
                  courseData={course}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Cart count={cart.length} cart={cart} />
    </div>
  );
};

export default Courses;
