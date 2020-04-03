import React from 'react';
import image from '../../assets/logoArtboard.png';
import '../../styles/main-styles/navbar.scss';

const Navbar = () => {
  return (
    <div className='row navbarContainer'>
      <img className='salesImageHome' src={image} alt='sales suite' />
      <div className='col-lg-7 navbarHome navbarLeft'>
        <ul>
          <li>
            <a href='/Home'>Home</a>
          </li>
          <li>
            <a href='/'>About Us</a>
          </li>
        </ul>
      </div>
      <div className="col-lg-5 navbarHome navbarRight">
        <ul>
          <li>
            <a href='/Partner'>Partners</a>
          </li>
          <li>
            <a href='/'>Sign Up</a>
          </li>
          <li>
            <a href='/'>Products</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
