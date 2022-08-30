import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap'
// import '../Components/CSS/Designs.css'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import FullPage from '../Components/FullPage';
import Slide from '../Components/Slide';
import '../Components/CSS/Designs.css';


const controlsProps = {
  style: {
    left: '50%',
    bottom: '20%',
    position: 'fixed',
    transform: 'translateX(-50%)',
  },
};

const slides = [
  {
    color: '#FFF9CA',
    content: 
    <>
        <Row style={{height: '100vh'}}>
            <Col className='d-grid justify-content-center align-items-start'>
                <img style={{width: '50%'}} src='Images/web5.png' />
            </Col>
            <Col className='d-grid justify-content-center align-items-start'>
                <div>
                    <h1 lang='ar'>Tiltle</h1>
                    <p lang='ar'>lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls lorem ipsum controls controls</p>
                </div>
            </Col>
        </Row>
    </>,
  }, {
    color: '#0074D9',
    content: 2,
  }, {
    color: '#00c4ff',
    content: 3,
  }, {
    color: '#d52685',
    content: 4,
  },
];

const btnStyles = {
  position: 'fixed',
  padding: '8px',
};

export default function Designs() {
  if (useLocation().pathname === '/designs') {
    document.getElementsByTagName('footer').classList='footerD'
  }
  const [visibleSlides, setVisibleSlides] = useState(slides);
  const onHideSlideClick = () => {
    if (visibleSlides.length === slides.length) {
      setVisibleSlides(slides.slice(0, -1));
      return;
    }
    setVisibleSlides(slides);
  };

  return (
    <>
      <FullPage controls controlsProps={controlsProps}>
        {visibleSlides.map(({ color, content }) => (
          <Slide
            key={content}
            style={{
              background: color, display: 'grid', alignItems: 'center', justifyContent: 'center',
            }}
          >
            {content}
          </Slide>
        ))}
      </FullPage>
    </>
  );
};