import {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Team from '../Components/Team';
import PhotoAlbum from "react-photo-album";
import Gallery from "react-photo-gallery";

function Images(){
  const photos = [
    {
        src: "./Images/anas-personal-pic_edit.jpg",
        width: 800,
        height: 800
    },
    {
        src: "./Images/sara-personal-pic_edit.jpg",
        width: 1000,
        height: 800
    },
    {
        src: "./Images/hamza-personal-pic2_edit.png",
        width: 1000,
        height: 600
    },
    {
      src: "https://th.bing.com/th/id/R.6023510b397151465972307ef0ccd3d3?rik=12u2NSK0YeBDrg&pid=ImgRaw&r=0",
      width: 3600,
      height: 900
    },
    {
        src: "./Images/hamza-personal-pic_edit.png",
        width: 1600,
        height: 1900
    },
    {
        src: "./images/help6.png",
        width: 800,
        height: 600
    },
    {
        src: "./Images/web5.png",
        width: 800,
        height: 600
    },
    {
        src: "./Images/web4.png",
        width: 1600,
        height: 900
    },
    {
        src: "./Images/help5.png",
        width: 1600,
        height: 900
    },
];
return(
  <Gallery photos={photos} />
)
}


function About() {
  
  return (
    <>
    <Container className='my-5'>
      <Row xs={1} lg={2}>
        <Col><h1 className='d-grid justify-content-center' style={{fontSize: '5rem'}} lang='ar'>من نحن</h1></Col>
        <Col className=''>
          <Row><h4 lang='ar'>كن على استعداد لخوض غمار التجربة الالكترونية معنا, نحن مجموعة من المطورين الشباب نسعى جاهدين الى تقديم أقصى امكانياتنا لنكون الاوائل في هذا المجال . ولكننا لا ننسى أبدا الاستمتاع برحلتنا الجميلة والطويلة</h4></Row>
          <Row xs={1} lg={2}>
            <Col className='d-grid justify-content-center'>
            <h4 lang='ar'>الموقع </h4>
            <p lang='ar'>العقبة</p></Col>
            <Col>
            <h4 lang='ar'>ساعات الدوام</h4>
            <p className='d-grid justify-content-center' lang='ar'>9ص -2م</p></Col>
          </Row>
        </Col>
      </Row>
      <Row>
      {/* <PhotoAlbum layout="rows" photos={photos} /> */}
      <Images />
      </Row>
      <Team />
    </Container>
    </>
  )
}

export default About
