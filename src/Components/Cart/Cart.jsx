import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <div className='cart'>
      <div className='icon'>
        <p>{cartIcon}</p>
        <p>0 Courses</p>
      </div>
      <p className='total-bill'>$0</p>
    </div>
  );
};

export default Cart;
