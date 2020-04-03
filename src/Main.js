import React from 'react';
//import './App.css';
import LeftBackground from './components/layout/main-layout/LeftBackground';
import RightBackground from './components/layout/main-layout/RightBackground';
import LeftBackgroundSecond from './components/layout/main-layout/LeftBackgroundSecond';
import RightBackgroundSecond from './components/layout/main-layout/RightBackgroundSecond.js';
import MessageSignUp from './components/layout/main-layout/MessageSignUp.js';
import SignUpForm from './components/layout/main-layout/SignUpForm.js';

import './styles/main-styles/sales.scss';
//import NavbarHome from './components/layout/NavbarHome';
// import './styles/bootstrap/bootstrap.scss';

const App = () => {
  return (
    <div>
      {/* <NavbarHome /> */}
      <div className='app row'>
        {/* <div className="row"> */}
        <div className='col-lg-7 leftBackground'>
          <LeftBackground />
          <LeftBackgroundSecond />
        </div>
        <div className='col-lg-5 rightBackground'>
          <RightBackground />
          <RightBackgroundSecond />
        </div>
        {/* </div> */}
      </div>
      <div>
        <div>
          <MessageSignUp />
        </div>
        <div>
          <SignUpForm />
        </div>
      </div>
      {/* <div className="secondApp row">
                <div className="col-lg-5 leftBackgroundSecond">
                    <LeftBackgroundSecond />
                </div>
                <div className="col-lg-7 rightBackgroundSecond">
        	        <RightBackgroundSecond />
                </div>
            </div> */}
    </div>
  );
};

export default App;
