import React, { useState, useEffect } from 'react';

const Textanimation = state => {
  const [sHeading1, setHeading1] = useState('0%');
  const [sHeading2, setHeading2] = useState('0%');

  useEffect(() => {
    setTimeout(() => {
      setHeading1('79%');
    }, 2000);

    setTimeout(() => {
      setHeading2('50%');
    }, 2000);
  }, []);

  return (
    <div className='message'>
      <p className='heading1' style={{ width: sHeading1 }}>
        <span className='initialMsg msg'>Partner up with</span>{' '}
      </p>
      <p className='heading2' style={{ width: sHeading2 }}>
        SalesSuite as
      </p>
    </div>
  );
};

export default Textanimation;
