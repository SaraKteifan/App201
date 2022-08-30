import React from 'react';
import { Row,Card,Col,Container } from 'react-bootstrap';
import './CSS/cons.css'

function Cons() {
  return (
    <>
    <Container className='mt-5 ml-2' id='cons'>

        <Row xs={1} md={2} lg={3} align='center'>
            <Col>
                <Card
                bg='transparent'
                text='dark'
                style={{ width: '18rem',backgroundColor:'#a5e6ba !important'}}
                className="mb-2 d-grid border-0"
                >

                    <Card.Img className='imgC' variant="top" src='./Images/Pen_edit.png' style={{width:'50%',objectFit:'cover',justifySelf:'center'}}/>

                <Card.Body className='justify-content-center'>
                    <div style={{ display:'grid', justifyItems:'center' }}>

                    <Card.Title lang='ar'><h3>تصميم مميز</h3></Card.Title>
                    <Card.Text lang='ar'>

                    تصميم مميز يناسب جميع احتياجاتك وامكانية الخدمة ما بعد البيع نحن المميزون والأفضل في هذا المجال ولن تندم على التعامل معنا مستعدون بأي وقت
                    </Card.Text>
                    </div>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card
                bg='transparent'
                text='dark'
                style={{ width: '18rem' }}
                className="mb-2 d-grid  border-0"
                >

                    <Card.Img className='imgC' variant="top" src='./Images/price_edit.png' style={{width:'50%',objectFit:'cover',justifySelf:'center'}}/>

                <Card.Body className='justify-content-center'>
                    <div style={{ display:'grid', justifyItems:'center' }}>
                    <Card.Title lang='ar'><h3>أسعار منافسة</h3></Card.Title>
                    <Card.Text lang='ar'>نحرص دائما على توفير افضل الخدمات بأقل الأسعار حتى نساعد عملائنا على خفض كلف التشغيل لديهم</Card.Text>
                    </div>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card
                bg='transparent'
                text='dark'
                style={{ width: '18rem' }}
                className="mb-2 d-grid  border-0"
                >

                    <Card.Img className='imgC' variant="top" src='./Images/services1_edit.png' style={{width:'50%',objectFit:'cover',justifySelf:'center'}}/>

                <Card.Body className='justify-content-center'>
                    <div style={{ display:'grid', justifyItems:'center' }}>
                    <Card.Title lang='ar'><h3>خدمة متواصلة</h3></Card.Title>
                    <Card.Text lang='ar'>
                        لا تقلق اذا واجهتك أي مشاكل , فريقنا على أهبة الاستعداد لتقديم المساعدة وضمان استمرارية العمل لديك 
                    </Card.Text>
                    </div>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card
                bg='transparent'
                text='dark'
                style={{ width: '18rem'}}
                className="mb-2 d-grid border-0"
                >

                    <Card.Img className='imgC' variant="top" src='./Images/performance_edit.png' style={{width:'50%',objectFit:'cover',justifySelf:'center',backgroundColor:'transparent'}}/>
                <Card.Body className='justify-content-center'>
                    <div style={{ display:'grid', justifyItems:'center' }}>
                    <Card.Title lang='ar'><h3>أداء عالي</h3></Card.Title>
                    <Card.Text lang='ar'>
                        نستخدم أحدث أدوات التكنولوجيا في شركتنا مما يضمن لعملائنا الحصول على أكبر فائدة ممكنة 
                    </Card.Text>
                    </div>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card
                bg='transparent'
                text='dark'
                style={{ width: '18rem' }}
                className="mb-2 d-grid  border-0"
                >

                    <Card.Img className='imgC' variant="top" src='./Images/flexible_edit.png' style={{width:'50%',objectFit:'cover',justifySelf:'center'}}/>

                <Card.Body className='justify-content-center'>
                    <div style={{ display:'grid', justifyItems:'center' }}>
                    <Card.Title lang='ar'><h3>موقع الكتروني مرن</h3></Card.Title>
                    <Card.Text lang='ar'>
                        لا يهم من أي جهاز تقوم بفتح الموقع الالكتروني , تصاميمنا مرنة وتتناسب مع اختلاف احجام الشاشات وأشكالها
                    </Card.Text>
                    </div>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card
                bg='transparent'
                text='dark'
                style={{ width: '18rem' }}
                className="mb-2 d-grid border-0"
                >

                    <Card.Img className='imgC' variant="top" src='./Images/phone_edit.png' style={{width:'50%',objectFit:'cover',justifySelf:'center'}}/>

                <Card.Body className='justify-content-center'>
                    <div style={{ display:'grid', justifyItems:'center' }}>
                    <Card.Title lang='ar'><h3>تطبيقات الهاتف</h3></Card.Title>
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