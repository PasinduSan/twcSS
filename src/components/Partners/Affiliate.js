import React from 'react';
import img from '../../assets/sonnie-hiles-yIej4tFKYJA-unsplash@2x.png';
import one from '../../assets/1.png';
import two from '../../assets/2.png';
import three from '../../assets/3.png';
import four from '../../assets/4.png';
const Reseller = () => {
  return (
    <div>
      <div className='grid-2'>
        <img
          className='Image'
          src={img}
          alt='sonnie-hiles-yIej4tFKYJA-unsplash@2x.png'
        />
        <p>
          <p className='message'>
            <p>SalesSuite</p>
            <p> Affiliate</p>
          </p>
          <h5 className='h5'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren,
          </h5>
        </p>
      </div>
      <div className='grid-4'>
        <div>
          <img className='numbers' src={one} alt='1' />
          <p>Sign-Up</p>
          <h5>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore .
          </h5>
        </div>
        <div>
          <img className='numbers' src={two} alt='1' />
          <p>Learn</p>
          <h5>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore .
          </h5>
        </div>
        <div>
          <img className='numbers' src={three} alt='1' />
          <p>Sell</p>
          <h5>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore .
          </h5>
        </div>
        <div>
          <img className='numbers' src={four} alt='1' />
          <p>Earn</p>
          <h5>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore .
          </h5>
        </div>
      </div>
      <div class='btnContainerP'>
        <button className='signupBtn'>Sign Up as a Reseller Now </button>
      </div>
    </div>
  );
};

export default Reseller;
