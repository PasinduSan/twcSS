import React from 'react';
import fbImg from '../../../assets/main-assets/facebook.svg';
import twitterImg from '../../../assets/main-assets/twitter.svg';
import whatsappImg from '../../../assets/main-assets/whatsapp.svg';
import instaImg from '../../../assets/main-assets/instagram.svg';

import '../../../styles/main-styles/socialMedia.scss'

const SocialMedia = () => {
    return (
        <div className="container">
            <div className="socialContainers">
                <img className="fbImg" src={fbImg} alt="facebook" />
            </div>

            <div className="socialContainers">
                <img className="twitterImg" src={twitterImg} alt="twitter" />
            </div>

            <div className="socialContainers">
                <img className="whatsappImg" src={whatsappImg} alt="whatsapp" />
            </div>

            <div className="socialContainers">
                <img className="instaImg" src={instaImg} alt="instagram" />
            </div>
        </div>
    );
}

export default SocialMedia;