import React from 'react';
import mobile from '../../../assets/main-assets/salesuite-mobile.svg'
import '../../../styles/main-styles/image.scss';

const Image = (props) => {
    const {customPosition, customWidth} = props;

    const styles1 = {
        position: {
            // marginTop: `${customPosition}px`
            top: `${customPosition}px`
        }
    };

    const styles2 = {
        width: {
            // marginTop: `${customPosition}px`
            width: `${customWidth}px`
        }
    };

    return (
        <div className="phoneContainer" style={styles1.position}>
            <img className="galaxyPhone" style={styles2.width} src={mobile} alt="galaxy phone" />
        </div>
    );
}

export default Image;