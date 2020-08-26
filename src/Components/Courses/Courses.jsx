import React from 'react';
import courseData from '../../CourseData/CourseData';

import './Courses.css';
import SingleCourse from '../SingleCourse/SingleCourse';

const Courses = () => {
  const data = [...courseData];
  console.log(data);

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-2'>
            <div className='course-menu'>
              <a href='/couse'>All Course</a>
              <a href='/couse'>Book</a>
            </div>
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
    </div>
  );
};

export default Courses;
