import React from 'react';

const ResellerForm = () => {
  return (
    <div>
      <form>
        <div className='grid-2'>
          <div>
            <p>Name of the Company</p>
            <input className='input' type='text' />
          </div>
          <div>
            <p>Country</p>
            <input className='input' type='text' />
          </div>
        </div>
        <div className='left'>
          <p>Address</p>
          <input className='input1' type='text' />
          <div>
            <button className='redbtn'>Send </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResellerForm;
