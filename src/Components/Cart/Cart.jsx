import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
  const cart = props.cart;
  let totalAmount = cart.reduce((total, course) => {
    const grand = Number(total) + Number(course.price);
    return grand;
  }, 0);
  console.log(cart);
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <div className='cart'>
      <div className='icon'>
        <p>{cartIcon}</p>
        <p>{props.count} Courses</p>
      </div>
      <p className='total-bill'>${totalAmount.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
