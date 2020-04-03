import React, { useState, useEffect } from 'react';
import '../../../styles/main-styles/messageSignUp.scss';

const MessageSignUp = () => {

  return (
    <div className="messageSignUp">

      <p className="mainMsg">Want to <span className="msgSignUp">sign up?</span></p>
      <p className="smallMsg">send us your details and one of our agentrs will get<br/>  
      back to you as soon as possible to help you signup.</p>
      
    </div>

  );
}

export default MessageSignUp;