import React from 'react';
import '../../../styles/main-styles/signUpForm.scss';

const SignUpForm = () => {

    return (
        <div className="formContainer">
            <form className="row" action="" method="post">
                <div className="col-lg-6 leftSide">
                    <p className="name">Your Name</p><input className="textBox" type="text" />
                    <p className="email">Email</p><input className="textBox" type="text" />
                    <div className="sendBtnDiv">
                        <input className="sendBtn" type="submit" value="Send" />
                    </div>
                    {/* </div> */}
                    {/* <div> */}
                    {/* <input className="sendBtn" type="submit" value="Send" /> */}
                </div>
                <div className="col-lg-6 rightSide">
                    <p className="company">Name of the Company (Optional)</p><input className="textBox" type="text" />
                    <p className="country">Country</p><input className="textBox" type="text" />
                </div>

                {/* <div className="btnContainerSend">
            
            </div> */}
            </form>
        </div>

    );
}

export default SignUpForm;