import React from 'react';
import Header from './Header';
import Message from './Message';
import Image from './Image';
import '../../../styles/main-styles/sales.scss';

const LeftBackground = () => {
    return (
        <div>
            <Message />
            {/* <Image /> */}
        </div>
    );
}

export default LeftBackground;