import React from 'react';

const Button = () => {
  return (
    <div class='btnContainerP'>
      <div class='row'>
        <div class='col-sm'>
          <button className='ResellerBtn'>A Reseller</button>
        </div>
        <div class='col-sm'>
          <button className='AffiliateBtn'>An Affiliate</button>
        </div>
        <div class='col-sm'>
          <button className='DeveloperBtn'>A Developer</button>
        </div>
      </div>
    </div>
  );
};

export default Button;
