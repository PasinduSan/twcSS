import React from 'react';
import image from '../../assets/logoArtboard.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img className='salesImage' src={image} alt='sales suite' />

      <ul>
        <li>
          <a href='/Home'>Home</a>
        </li>
        <li>
          <a href='/'>About Us</a>
        </li>
        <li>
          <a href='/Partner'>Partners</a>
        </li>
        <li>
          <a href='/'>Sign Up</a>
        </li>
        <li>
          <a href='/'>Product</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
