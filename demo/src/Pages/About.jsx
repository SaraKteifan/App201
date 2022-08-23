import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Team from '../Components/Team'

function About() {
  return (
    <>
    <Container className='my-5'>
      <Row xs={1} lg={2}>
        <Col><h1 className='d-grid justify-content-center' style={{fontSize: '5rem'}}>من نحن</h1></Col>
        <Col className=''>
          <Row><h4>كن على استعداد لخوض غمار التجربة الالكترونية معنا, نحن مجموعة من المطورين الشباب نسعى جاهدين الى تقديم أقصى امكانياتنا لنكون الاوائل في هذا المجال . ولكننا لا ننسى أبدا الاستمتاع برحلتنا الجميلة والطويلة</h4></Row>
          <Row xs={1} lg={2}>
            <Col className='d-grid justify-content-center'>
            <h4>الموقع </h4>
            <p>العقبة</p></Col>
            <Col>
            <h4>ساعات الدوام</h4>
            <p className='d-grid justify-content-center'>9ص -2م</p></Col>
          </Row>
        </Col>
      </Row>
      <Row className='mt-5'>
        <img src="https://th.bing.com/th/id/R.6023510b397151465972307ef0ccd3d3?rik=12u2NSK0YeBDrg&pid=ImgRaw&r=0" alt="من نحن" width='100%'/>
      </Row>
      <Team />
    </Container>
    </>
  )
}

export default About
