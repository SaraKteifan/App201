import React from 'react'
import { Col, Row } from 'react-bootstrap';
import './CSS/Header.css';
import AnimatedText from 'react-animated-text-content';


function Header() {
    window.addEventListener("click", () => {
        const $phone = document.querySelector(".phone")
        $phone.classList.toggle('-loooooong')
      })

    const rotate=()=>{
        if (document.getElementById('phonex').style.transform === 'rotate(90deg)') {
            document.getElementById('phonex').style.transform='rotate(0deg)';
            document.getElementById('phonelogo').style.transform='rotate(0deg)';
        }
        else{
            document.getElementById('phonex').style.transform='rotate(90deg)';
            document.getElementById('phonelogo').style.transform='rotate(-90deg)';
        }
    }
    return (
        <>

            <Row xs={1} lg={2} className='headerfull mx-5 py-5 my-5'>
                <Col id='phone' className='container d-grid justify-content-center'>
                    {/* The phone code */}
                    <div class="phone mb-4" id='phonex' onClick={()=>{rotate()}}>
                        <div class="phone_mic"></div>
                        <div class="phone_screen d-flex align-items-center">
                        <img className='phone-img' id='phonelogo' style={{width:'100%'}} src="./Images/wobg-logo.webp" alt="logo" />
                        </div>
                        <div class="phone_button"></div>
                    </div>
                    {/* End of The phone code */}

                    {/* <h1 className='d-flex justify-content-center align-items-center' style={{fontSize: '3rem'}}>App201</h1> */}
                    <AnimatedText
                        lang='ar'
                        style={{fontSize: '30px'}}
                        type="words" // animate words or chars
                        animation={{
                            x: '200px',
                            y: '-20px',
                            scale: 1.1,
                            ease: 'ease-in-out',
                        }}
                        animationType="float"
                        interval={0.09}
                        duration={1}
                        tag="p"
                        className="animated-paragraph"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                    >
                        المكان الأمثل لبناء موقعك الإلكتروني، تطبيقات الهاتف ومساعدتك في كل ما يتعلق بالبرمجة
                    </AnimatedText>
                    <div className='arr'><i className="fa-solid fa-angles-down down"></i></div>
                </Col>
                <Col>
                    <div id='header-video'>
                        <video
                            src='./Videos/final.mp4'
                            autoPlay={true}
                            muted
                            loop
                        />
                        {/* <img style={{width:'110%'}} src="./Videos/nobackground.gif" alt="" /> */}
                    </div>
                </Col>
            </Row>

        </>
    )
}

export default Header;
