import React from 'react';
import { Row,Card,Col,Container } from 'react-bootstrap';

function Team() {
  return (
    <Container className='my-5 ml-2 ' lang='ar'>
        {/* <div className='mb-3 d-flex justify-content-center'>
            <h2 className='title-text mb-4'><span>فريق العمل</span></h2>
        </div> */}
        <Row xs={1} md={2} lg={4} align='center' >
            <Col>
                <Card
                bg='white'
                text='dark'
                style={{ width: '18rem' }}
                className="mb-2 d-grid"
                >
                    <Card.Img variant="top" src='images/user.png' style={{width:'50%',objectFit:'cover',justifySelf:'center'}}/>
                    <Card.Body className='justify-content-center'>
                        <div style={{ display:'grid', justifyItems:'center' }}>
                        <Card.Title>م. حمزة ياسين</Card.Title>
                        <Card.Subtitle>مدير عام</Card.Subtitle>
                        {/* Section: Social media */}
                        <section className="mb-4">
                            {/* Facebook */}
                            <a
                                className="btn btn-outline-dark btn-floating m-1 rounded-square"
                                href="https://www.facebook.com/com.App201"
                                target='_blank'
                                role="button"
                                title='فيسبوك'
                            >
                                <i className="fab fa-facebook-f fa-lg" />
                            </a>
                            {/* Instagram */}
                            <a
                                className="btn btn-outline-dark btn-floating m-1 rounded-square"
                                href="#!"
                                target='_blank'
                                role="button"
                                title='انستجرام'
                            >
                                <i className="fab fa-instagram" />
                            </a>
                            {/* Linkedin */}
                            <a
                                className="btn btn-outline-dark btn-floating m-1 rounded-square"
                                href="#!"
                                target='_blank'
                                role="button"
                                title='لينكدن'
                            >
                                <i className="fab fa-linkedin-in" />
                            </a>
                        </section>
                        {/* Section: Social media */}
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card
                bg='white'
                text='dark'
                style={{ width: '18rem' }}
                className="mb-2 d-grid"
                >
                    <Card.Img variant="top" src='images/user.png' style={{width:'50%',objectFit:'cover',justifySelf:'center'}}/>
                    <Card.Body className='justify-content-center'>
                        <div style={{ display:'grid', justifyItems:'center' }}>
                        <Card.Title>م. عماد ياسين</Card.Title>
                        <Card.Subtitle>مدير عام</Card.Subtitle>
                        {/* Section: Social media */}
                        <section className="mb-4">
                            {/* Facebook */}
                            <a
                                className="btn btn-outline-dark btn-floating m-1 rounded-square"
                                href="https://www.facebook.com/com.App201"
                                target='_blank'
                                role="button"
                                title='فيسبوك'
                            >
                                <i className="fab fa-facebook-f fa-lg" />
                            </a>
                            {/* Instagram */}
                            <a
                                className="btn btn-outline-dark btn-floating m-1 rounded-square"
                                href="#!"
                                target='_blank'
                                role="button"
                                title='انستجرام'
                            >
                                <i className="fab fa-instagram" />
                            </a>
                            {/* Linkedin */}
                            <a
                                className="btn btn-outline-dark btn-floating m-1 rounded-square"
                                href="#!"
                                target='_blank'
                                role="button"
                                title='لينكدن'
                            >
                                <i className="fab fa-linkedin-in" />
                            </a>
                        </section>
                        {/* Section: Social media */}
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card
                bg='white'
                text='dark'
                style={{ width: '18rem' }}
                className="mb-2 d-grid"
                >
                    <Card.Img variant="top" src='images/user.png' style={{width:'50%',objectFit:'cover',justifySelf:'center'}}/>
                    <Card.Body className='justify-content-center'>
                        <div style={{ display:'grid', justifyItems:'center' }}>
                        <Card.Title>سارة قطيفان</Card.Title>
                        <Card.Subtitle>مبرمجة</Card.Subtitle>
                        {/* Section: Social media */}
                        <section className="mb-4">
                            {/* Facebook */}
                            <a
                                className="btn btn-outline-dark btn-floating m-1 rounded-square"
                                href="https://www.facebook.com/com.App201"
                                target='_blank'
                                role="button"
                                title='فيسبوك'
                            >
                                <i className="fab fa-facebook-f fa-lg" />
                            </a>
                            {/* Instagram */}
                            <a
                                className="btn btn-outline-dark btn-floating m-1 rounded-square"
                                href="#!"
                                target='_blank'
                                role="button"
                                title='انستجرام'
                            >
                                <i className="fab fa-instagram" />
                            </a>
                            {/* Linkedin */}
                            <a
                                className="btn btn-outline-dark btn-floating m-1 rounded-square"
                                href="#!"
                                target='_blank'
                                role="button"
                                title='لينكدن'
                            >
                                <i className="fab fa-linkedin-in" />
                            </a>
                        </section>
                        {/* Section: Social media */}
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card
                bg='white'
                text='dark'
                style={{ width: '18rem' }}
                className="mb-2 d-grid"
                >
                    <Card.Img variant="top" src='images/user.png' style={{width:'50%',objectFit:'cover',justifySelf:'center'}}/>
                    <Card.Body className='justify-content-center'>
                        <div style={{ display:'grid', justifyItems:'center' }}>
                        <Card.Title>أنس اللوافية</Card.Title>
                        <Card.Subtitle>مبرمج</Card.Subtitle>
                        {/* Section: Social media */}
                        <section className="mb-4">
                            {/* Facebook */}
                            <a
                                className="btn btn-outline-dark btn-floating m-1 rounded-square"
                                href="https://www.facebook.com/com.App201"
                                target='_blank'
                                role="button"
                                title='فيسبوك'
                            >
                                <i className="fab fa-facebook-f fa-lg" />
                            </a>
                            {/* Instagram */}
                            <a
                                className="btn btn-outline-dark btn-floating m-1 rounded-square"
                                href="#!"
                                target='_blank'
                                role="button"
                                title='انستجرام'
                            >
                                <i className="fab fa-instagram" />
                            </a>
                            {/* Linkedin */}
                            <a
                                className="btn btn-outline-dark btn-floating m-1 rounded-square"
                                href="#!"
                                target='_blank'
                                role="button"
                                title='لينكدن'
                            >
                                <i className="fab fa-linkedin-in" />
                            </a>
                        </section>
                        {/* Section: Social media */}
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default Team