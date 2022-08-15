import React from 'react'
import { Row,Card,Col,Container } from 'react-bootstrap'
import Header from '../Components/Header'

function Home() {
  return (
    <>
        <Header />
        <Container className='mt-5 ml-2'>
        <Row xs={1} md={2} lg={3}>
            <Col>
                <Card
                bg='white'
                text='dark'
                style={{ width: '18rem' }}
                className="mb-2 d-grid  border-0"
                >
                    <Card.Img variant="top" src='images/Pen.png' style={{width:'50%',objectFit:'cover',justifySelf:'center'}}/>
                <Card.Body className='justify-content-center'>
                    <div style={{ display:'grid', justifyItems:'center' }}>
                    <Card.Title>تصميم مميز</Card.Title>
                    <Card.Text>
                    تصميم مميز يناسب جميع احتياجاتك وامكانية الخدمة ما بعد البيع نحن المميزون والأفضل في هذا المجال ولن تندم على التعامل معنا مستعدون بأي وقت
                    </Card.Text>
                    </div>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card
                bg='white'
                text='dark'
                style={{ width: '18rem' }}
                className="mb-2 d-grid  border-0"
                >
                    <Card.Img variant="top" src='images/price.png' style={{width:'50%',objectFit:'cover',justifySelf:'center'}}/>
                <Card.Body className='justify-content-center'>
                    <div style={{ display:'grid', justifyItems:'center' }}>
                    <Card.Title>أسعار منافسة</Card.Title>
                    <Card.Text>
                    تصميم مميز يناسب جميع احتياجاتك وامكانية الخدمة ما بعد البيع نحن المميزون والأفضل في هذا المجال ولن تندم على التعامل معنا مستعدون بأي وقت
                    </Card.Text>
                    </div>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card
                bg='white'
                text='dark'
                style={{ width: '18rem' }}
                className="mb-2 d-grid  border-0"
                >
                    <Card.Img variant="top" src='images/services1.png' style={{width:'50%',objectFit:'cover',justifySelf:'center'}}/>
                <Card.Body className='justify-content-center'>
                    <div style={{ display:'grid', justifyItems:'center' }}>
                    <Card.Title>خدمة متواصلة</Card.Title>
                    <Card.Text>
                    تصميم مميز يناسب جميع احتياجاتك وامكانية الخدمة ما بعد البيع نحن المميزون والأفضل في هذا المجال ولن تندم على التعامل معنا مستعدون بأي وقت
                    </Card.Text>
                    </div>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card
                bg='white'
                text='dark'
                style={{ width: '18rem' }}
                className="mb-2 d-grid border-0"
                >
                    <Card.Img variant="top" src='images/performance.png' style={{width:'50%',objectFit:'cover',justifySelf:'center'}}/>
                <Card.Body className='justify-content-center'>
                    <div style={{ display:'grid', justifyItems:'center' }}>
                    <Card.Title>أداء عالي</Card.Title>
                    <Card.Text>
                    تصميم مميز يناسب جميع احتياجاتك وامكانية الخدمة ما بعد البيع نحن المميزون والأفضل في هذا المجال ولن تندم على التعامل معنا مستعدون بأي وقت
                    </Card.Text>
                    </div>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card
                bg='white'
                text='dark'
                style={{ width: '18rem' }}
                className="mb-2 d-grid  border-0"
                >
                    <Card.Img variant="top" src='images/flexible.png' style={{width:'50%',objectFit:'cover',justifySelf:'center'}}/>
                <Card.Body className='justify-content-center'>
                    <div style={{ display:'grid', justifyItems:'center' }}>
                    <Card.Title>موقع الكتروني مرن</Card.Title>
                    <Card.Text>
                    تصميم مميز يناسب جميع احتياجاتك وامكانية الخدمة ما بعد البيع نحن المميزون والأفضل في هذا المجال ولن تندم على التعامل معنا مستعدون بأي وقت
                    </Card.Text>
                    </div>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card
                bg='white'
                text='dark'
                style={{ width: '18rem' }}
                className="mb-2 d-grid border-0"
                >
                    <Card.Img variant="top" src='images/phone.png' style={{width:'50%',objectFit:'cover',justifySelf:'center'}}/>
                <Card.Body className='justify-content-center'>
                    <div style={{ display:'grid', justifyItems:'center' }}>
                    <Card.Title>تطبيقات الهاتف</Card.Title>
                    <Card.Text>
                    تصميم مميز يناسب جميع احتياجاتك وامكانية الخدمة ما بعد البيع نحن المميزون والأفضل في هذا المجال ولن تندم على التعامل معنا مستعدون بأي وقت
                    </Card.Text>
                    </div>
                </Card.Body>
                </Card>
            </Col>
        </Row>
        </Container>
    </>
  )
}

export default Home