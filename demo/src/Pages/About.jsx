import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Team from '../Components/Team';
// import Gallery from "react-photo-gallery";

// function Images(){
//   const photos = [
//     {

//         src: "./Images/anas-personal-pic_edit.jpg",

//         width: 800,
//         height: 600
//     },
//     {

//         src: "./Images/sara-personal-pic_edit.jpg",
//         width: 800,
//         height: 600
//     },
//     {
//         src: "./Images/hamza-personal-pic2_edit.png",
//         width: 800,

//         height: 600
//     },
//     {
//       src: "https://th.bing.com/th/id/R.6023510b397151465972307ef0ccd3d3?rik=12u2NSK0YeBDrg&pid=ImgRaw&r=0",
//       width: 3600,
//       height: 900
//     },
//     {

//         src: "./Images/hamza-personal-pic_edit.png",

//         width: 800,
//         height: 600
//     },
//     {

//         src: "./Images/help6.png",

//         width: 800,
//         height: 600
//     },
//     {
//         src: "./Images/web5.png",
//         width: 800,
//         height: 600
//     },
//     {
//         src: "./Images/web4.png",
//         width: 800,
//         height: 900
//     },
//     {
//         src: "./Images/help5.png",
//         width: 800,
//         height: 600
//     },
// ];
// return(
//   <Gallery photos={photos} />
// )
// }


function About() {
  
  return (
    <>
    <Container className='my-5'>
      <Row xs={1} lg={2}>
        <Col>
          <h1 className='d-grid justify-content-center' style={{fontSize: '5rem'}} lang='ar'>
            من نحن
          </h1>
        </Col>
        <Col>
          <Row>
            <h4 lang='ar'>
              كن على استعداد لخوض غمار التجربة الالكترونية معنا, نحن مجموعة من المطورين الشباب نسعى جاهدين الى تقديم أقصى امكانياتنا لنكون الاوائل في هذا المجال . ولكننا لا ننسى أبدا الاستمتاع برحلتنا الجميلة والطويلة
            </h4>
          </Row>
          <Row xs={1} lg={2}>
            <Col className='d-grid justify-content-center'>
              <h4 lang='ar'>
                الموقع
              </h4>
              <p lang='ar'>
                العقبة - رحمة مول
              </p>
            </Col>
            <Col>
              <h4 lang='ar'>
                ساعات الدوام
              </h4>
              <p className='d-grid justify-content-center' lang='ar'>
                9ص -4م
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Container className=' mt-2'>
          <div class=" mapouter" >
              <div class="gmap_canvas">
                  <iframe title='google-mapss' style={{objectFit:'cover', width:'100%',height:'50vh'}} id="gmap_canvas" src="https://maps.google.com/maps?q=App201&t=k&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"/>
              </div>
          </div>
        </Container>
        {/* <PhotoAlbum layout="rows" photos={photos} /> */}
        {/* <Images /> */}
      </Row>
      <Team />
    </Container>
    </>
  )
}

export default About
