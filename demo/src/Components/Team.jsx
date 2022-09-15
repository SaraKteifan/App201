import React from 'react';
import { Row,Card,Col,Container } from 'react-bootstrap';
import './CSS/Team.css'

function Team() {
  return (
    <Container className='my-5 ml-2 '>
        {/* <div className='mb-3 d-flex justify-content-center'>
            <h2 className='title-text mb-4'><span>فريق العمل</span></h2>
        </div> */}
        <Row xs={1} md={2} lg={4} align='center' >
            <Col>
                <Card
                bg='transparent'
                text='dark'
                style={{ width: '18rem' }}
                className="mb-2 d-grid cardT"
                >

                    <Card.Img className='mt-2 imgT' variant="top" src='./Images/hamza-personal-pic_new.png' style={{width:'70%',objectFit:'cover',justifySelf:'center'}}/>

                    <Card.Body className='justify-content-center'>
                        <div style={{ display:'grid', justifyItems:'center' }}>
                        <Card.Title lang='ar'>م. حمزة ياسين</Card.Title>
                        {/* Section: Social media */}
                        <section className="mb-4">
                            {/* <a
                                className="btn btn-outline-success btn-floating m-1 rounded-square"
                                href="https://www.facebook.com/com.App201"
                                target='_blank'
                                role="button"
                                title='فيسبوك'
                            >
                                <i className="fab fa-facebook-f fa-lg" />
                            </a>
                            <a
                                className="btn btn-outline-success btn-floating m-1 rounded-square"
                                href="#!"
                                target='_blank'
                                role="button"
                                title='انستجرام'
                            >
                                <i className="fab fa-instagram" />
                            </a>
                            <a
                                className="btn btn-outline-success btn-floating m-1 rounded-square"
                                href="#!"
                                target='_blank'
                                role="button"
                                title='لينكدن'
                            >
                                <i className="fab fa-linkedin-in" />
                            </a> */}
                        </section>
                        {/* Section: Social media */}
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card
                bg='transparent'
                text='dark'
                style={{ width: '18rem' }}
                className="mb-2 d-grid cardT"
                >

                    <Card.Img className='mt-2 imgT' variant="top" src='./Images/Emad-personal-pic-new.png' style={{width:'47%',objectFit:'cover',justifySelf:'center'}}/>

                    <Card.Body className='justify-content-center'>
                        <div style={{ display:'grid', justifyItems:'center' }}>
                        <Card.Title lang='ar'>م. عماد ياسين</Card.Title>
                        {/* Section: Social media */}
                        <section className="mb-4">
                            {/* <a
                                className="btn btn-outline-success btn-floating m-1 rounded-square"
                                href="https://www.facebook.com/com.App201"
                                target='_blank'
                                role="button"
                                title='فيسبوك'
                            >
                                <i className="fab fa-facebook-f fa-lg" />
                            </a>
                            <a
                                className="btn btn-outline-success btn-floating m-1 rounded-square"
                                href="#!"
                                target='_blank'
                                role="button"
                                title='انستجرام'
                            >
                                <i className="fab fa-instagram" />
                            </a>
                            <a
                                className="btn btn-outline-success btn-floating m-1 rounded-square"
                                href="#!"
                                target='_blank'
                                role="button"
                                title='لينكدن'
                            >
                                <i className="fab fa-linkedin-in" />
                            </a> */}
                        </section>
                        {/* Section: Social media */}
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card
                bg='transparent'
                text='dark'
                style={{ width: '18rem' }}
                className="mb-2 d-grid cardT"
                >

                    <Card.Img className='mt-2 imgT' variant="top" src='./Images/sara-personal-pic_new.png' style={{width:'53%',objectFit: 'cover',objectFit:'cover',justifySelf:'center'}}/>

                    <Card.Body className='justify-content-center'>
                        <div style={{ display:'grid', justifyItems:'center' }}>
                        <Card.Title lang='ar'>سارة قطيفان</Card.Title>
                        {/* Section: Social media */}
                        <section className="mb-4">
                            {/* <a
                                className="btn btn-outline-success btn-floating m-1 rounded-square"
                                href="https://www.facebook.com/com.App201"
                                target='_blank'
                                role="button"
                                title='فيسبوك'
                            >
                                <i className="fab fa-facebook-f fa-lg" />
                            </a>
                            <a
                                className="btn btn-outline-success btn-floating m-1 rounded-square"
                                href="#!"
                                target='_blank'
                                role="button"
                                title='انستجرام'
                            >
                                <i className="fab fa-instagram" />
                            </a>
                            <a
                                className="btn btn-outline-success btn-floating m-1 rounded-square"
                                href="#!"
                                target='_blank'
                                role="button"
                                title='لينكدن'
                            >
                                <i className="fab fa-linkedin-in" />
                            </a> */}
                        </section>
                        {/* Section: Social media */}
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card
                bg='transparent'
                text='dark'
                style={{ width: '18rem' }}
                className="mb-2 d-grid border-3 cardT"
                >

                    <Card.Img className='mt-2 imgT' variant="top" src='./Images/anas-personal-pic_new.png' style={{width:'53%',objectFit: 'cover',objectFit:'cover',justifySelf:'center'}}/>

                    <Card.Body className='justify-content-center'>
                        <div style={{ display:'grid', justifyItems:'center' }}>
                        <Card.Title lang='ar'>أنس اللوافية</Card.Title>
                        {/* Section: Social media */}
                        <section className="mb-4">
                            {/* <a
                                className="btn btn-outline-success btn-floating m-1 rounded-square"
                                href="https://www.facebook.com/com.App201"
                                target='_blank'
                                role="button"
                                title='فيسبوك'
                            >
                                <i className="fab fa-facebook-f fa-lg" />
                            </a>
                            <a
                                className="btn btn-outline-success btn-floating m-1 rounded-square"
                                href="#!"
                                target='_blank'
                                role="button"
                                title='انستجرام'
                            >
                                <i className="fab fa-instagram" />
                            </a>
                            <a
                                className="btn btn-outline-success btn-floating m-1 rounded-square"
                                href="#!"
                                target='_blank'
                                role="button"
                                title='لينكدن'
                            >
                                <i className="fab fa-linkedin-in" />
                            </a> */}
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