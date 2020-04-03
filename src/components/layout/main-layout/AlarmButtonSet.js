import React from 'react';
import '../../../styles/main-styles/alarmButtonSet.scss';

const AlarmButtonSet = () => {
    return (
        <div className="notificationContainer" >
            <div>
                <button className='notificationBtn1'>Real Time Push Notifications <br/>
                <span className="msgParagraph">Lorem Ipsum dolor sit amet</span>
                </button>
            </div>
            <div>
                <button className='notificationBtn2'>Lorem Ipsum <br/>
                <span className="msgParagraph">Lorem Ipsum dolor sit amet</span>
                </button>
            </div>
            <div>
                <button className='notificationBtn3'>Lorem Ipsum <br/>
                <span className="msgParagraph">Lorem Ipsum dolor sit amet</span>
                </button>
            </div>
        </div>
    );
}

export default AlarmButtonSet;