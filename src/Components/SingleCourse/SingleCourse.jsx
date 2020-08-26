import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const SingleCourse = (props) => {
  const iconStar = <FontAwesomeIcon icon={faStar} />;
  const {
    title,
    instructor,
    star,
    price,
    enrolled,
    reviewed,
    regularPrice,
    coverPhoto,
  } = props.courseData;
  return (
    <div className='col-lg-4'>
      <div className='single-course'>
        <div className='course-cover'>
          <img src={coverPhoto} alt='' />
        </div>
        <div className='course-description'>
          <h3 className='course-title'>{title}</h3>
          <h5 className='course-instructor'>{instructor}</h5>
          <span className='rating'>
            {star}
            {iconStar}{' '}
            <span className='total-reviewd'>
              ({reviewed}) - {enrolled} students
            </span>
          </span>
          <p className='course-price'>
            ${price} <del>${regularPrice}</del>
          </p>
        </div>
        <button className='enroll-btn'>Enroll Now</button>
      </div>
    </div>
  );
};

export default SingleCourse;
