import React, { useState, useEffect } from 'react';
import '../../../styles/main-styles/sales.scss';
import '../../../styles/main-styles/button.scss';
import SocialMedia from './SocialMedia';
import Button from './Button';
import CardStack from './CardStack';

const RightBackground = () => {
   
    return (
        <div>
            <CardStack />
            <SocialMedia />
            <Button />
        </div>
    );
}

export default RightBackground;