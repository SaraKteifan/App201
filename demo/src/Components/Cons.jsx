import React from 'react';
import { Row,Card,Col,Container } from 'react-bootstrap';

function Cons() {
  return (
    <>
    <Container className='mt-5 ml-2' id='cons'>

        <Row xs={1} md={2} lg={3} align='center'>
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

                    <Card.Title lang='ar'>تصميم مميز</Card.Title>
                    <Card.Text lang='ar'>

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
                    <Card.Title lang='ar'>أسعار منافسة</Card.Title>
                    <Card.Text lang='ar'>نحرص دائما على توفير افضل الخدمات بأقل الأسعار حتى نساعد عملائنا على خفض كلف التشغيل لديهم</Card.Text>
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
                    <Card.Title lang='ar'>خدمة متواصلة</Card.Title>
                    <Card.Text lang='ar'>
                        لا تقلق اذا واجهتك أي مشاكل , فريقنا على أهبة الاستعداد لتقديم المساعدة وضمان استمرارية العمل لديك 
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
                    <Card.Title lang='ar'>أداء عالي</Card.Title>
                    <Card.Text lang='ar'>
                        نستخدم أحدث أدوات التكنولوجيا في شركتنا مما يضمن لعملائنا الحصول على أكبر فائدة ممكنة 
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
                    <Card.Title lang='ar'>موقع الكتروني مرن</Card.Title>
                    <Card.Text lang='ar'>
                        لا يهم من أي جهاز تقوم بفتح الموقع الالكتروني , تصاميمنا مرنة وتتناسب مع اختلاف احجام الشاشات وأشكالها
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
                    <Card.Title lang='ar'>تطبيقات الهاتف</Card.Title>
                    <Card.Text lang='ar'>
                        تحقيق أكبر استفادة ممكنة من التكنولوجيا من خلال انشاء تطبيقك الخاص بك والبقاء بالقرب من عملائك أينما ذهبوا
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

export default Cons