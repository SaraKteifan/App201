import { useState, useEffect} from 'react';
import { Container, Stack, Row, Col} from 'react-bootstrap'; 

function Services() {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 575);

    const updateMedia = () => {
      setDesktop(window.innerWidth > 575);
    };
  
    useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    },[]);
  
  console.log(window.innerWidth);
  return (
    <>
        <Container className='mb-1'>
            <Stack  
                direction={isDesktop?'horizontal':''}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                // direction='horizontal'
                className='mb-5'
            >
                <div className={`image-stack ${isDesktop?'':'d-flex justify-content-center'}`}>
                    <img className="image-left" src="./Images/app1.png" alt="Image Left" title="Image Left" />
                    <img className="image-right" src="./Images/app3.png" alt="Image Right" title="Image Left" />
                </div>

                <div className="image-stack-text">
                    <h2>انشاء تطبيقات الهاتف المحمول</h2>
                    <p>لديك قاعدة جماهيرية كبيرة وتريد أن توثق الروابط بينك وبين العملاء ؟؟ <br />أنشئ تطبيق الهاتف الخاص بك وكن على تواصل مستمر مع العميل واضف طابع العلاقة الشخصية بينكما</p>
                </div>
            </Stack>
            <Stack  
                direction={isDesktop?'horizontal':''}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                // direction='horizontal'
                className='mb-5'
            >
                <Row>
                    <Col xs={{ order: 'last' }}>
                        <div className={`image-stack ${isDesktop?'':'d-flex justify-content-center'}`}>
                            <img className="image-left-middle" src="./Images/web4.png" alt="Image Left" title="Image Left" />
                            <img className="image-right-middle" src="./Images/web5.png" alt="Image Right" title="Image Left" />
                        </div></Col>
                    <Col xs={{ order: 'first' }}>
                        <div className="image-stack-text">
                            <h2>تصميم مواقع الويب</h2>
                            <p>نساعدك في الوصول لأكبر شريحة ممكنة من العملاء ومضاعفة أرباحك من خلال انشاء موقعك  الالكتروني الخاص بك </p>
                        </div></Col>
                </Row>
                    
                    

            </Stack>
            <Stack  
                direction={isDesktop?'horizontal':''}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                // direction='horizontal'
            >
                <div className={`image-stack ${isDesktop?'':'d-flex justify-content-center'}`}>
                    <img className="image-left-last" src="./Images/help1.png" alt="Image Left" title="Image Left" />
                    <img className="image-right-last" src="./Images/help5.png" alt="Image Right" title="Image Left" />
                </div>

                <div className="image-stack-text">
                    <h2>الدعم الفني</h2>
                    <p>جاهزون على مدار الساعة لتقديم الدعم التقني والفني اللازمان في حال واجهتك أي مشاكل </p>
                </div>
            </Stack>
        </Container>
    
    </>
  )
}

export default Services
