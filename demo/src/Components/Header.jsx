import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './CSS/Header.css';
import AnimatedText from 'react-animated-text-content';


function Header() {
    return (
        <>

            <Row xs={1} lg={2} className='m-5 py-5 '>
                <Col className='container d-grid justify-content-center'>
                    <h1 className='d-flex justify-content-center align-items-center' style={{fontSize: '3rem'}}>App201</h1>
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
                        interval={0.3}
                        duration={0.8}
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
                    </div>
                </Col>
            </Row>

        </>
    )
}

export default Header;
