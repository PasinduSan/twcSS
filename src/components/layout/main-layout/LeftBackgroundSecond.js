import React, { useState, useEffect, useRef } from 'react';
// import ReactDOM from 'react-dom';
import Header from './Header';
import Message from './Message';
import Image from './Image';
import '../../../styles/main-styles/sales.scss';

const LeftBackgroundSecond = () => {
    let prevScrollPos = window.pageYOffset;
    // const divRef = useRef(null);
    // const [phonePosition, setPhonePosition] = useState("");
    const [phonePosition, setPhonePosition] = useState(230);
    const [phoneWidth, setPhoneWidth] = useState(400);
    // const [element, setElement] = useState(divRef);

    let flag = false;
    let phonePositionChanged;
    let count = 0;
    // var phonePosition = "";


    // useEffect(() => {
    //     window.onscroll = () => {
    //         console.log("scrolled");
    //         var currentScrollPos = window.pageYOffset;

    //         if (prevScrollPos > currentScrollPos) {
    //             setPhonePosition({
    //                 phonePosition: "imageMovedUp"
    //             });
    //             // document.getElementById("imageMovedUp").style.top = "400px";
    //         } else {
    //             setPhonePosition({
    //                 phonePosition: "imageMovedDown"
    //             });

    //             // document.getElementById("imageMovedDown").style.top = "200px";
    //         }
    //         prevScrollPos = currentScrollPos;       
    //     }
    // }, []);

    useEffect(() => {
        window.onscroll = () => {
            console.log("scrolled");
            var currentScrollPos = window.pageYOffset;
            // var scrollPosition = element.current.getScrollableNode().children[0].scrollTop;
            // var scrollPosition = document.getElementById("root").scrollTop;
        
            // console.log(scrollPosition);

            if (prevScrollPos > currentScrollPos) {
                if (phonePositionChanged >= 600) {
                    setPhonePosition({
                        phonePosition: 740
                    });

                    setPhoneWidth({
                        phoneWidth: 350
                    });
                }
                else {
                    setPhonePosition({
                        phonePosition: phonePositionChanged,
                    });

                    setPhoneWidth({
                        phoneWidth
                    });

                    flag = true;
                }
                // document.getElementById("imageMovedUp").style.top = "400px";
            }
            // else if (phonePositionChanged <= 250) {
            //     setPhonePosition({
            //         phonePosition: 250
            //     });
            //     console.log("reached 0");
            // }
            else { 
                // if (count == 0) {
                if (flag == true) {
                    setPhonePosition({
                        phonePosition: phonePositionChanged
                    });

                    setPhoneWidth({
                        phoneWidth
                    });

                    flag = false;
                }

                else if (phonePositionChanged >= 600) {
                    setPhonePosition({
                        phonePosition: 740
                    });

                    setPhoneWidth({
                        phoneWidth: 350
                    });
                }

                else {
                    phonePositionChanged = phonePosition + (currentScrollPos * 0.83);
                    setPhonePosition({
                        phonePosition: phonePositionChanged
                    });
                }
                // }

                // else {
                //     setPhonePosition({
                //         phonePosition: phonePosition
                //     });
                // }
                // count++;
                // document.getElementById("imageMovedDown").style.top = "200px";
            }
            prevScrollPos = currentScrollPos;
        }
    }, []);

    console.log(phonePosition);
    return (
        <div id="phoneDiv">
            <Image customPosition = {phonePosition.phonePosition} customWidth = {phoneWidth.phoneWidth} />
        </div>
    );
}

export default LeftBackgroundSecond;