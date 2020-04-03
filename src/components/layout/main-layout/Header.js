import React from 'react';
import image from '../../../assets/main-assets/logoArtboard.png'
import '../../../styles/main-styles/header.scss'

const Header = () => {

    return (
        <div>
            <img className="salesImage" src={image} alt="sales suite" />
        </div>
    );
}

export default Header;
