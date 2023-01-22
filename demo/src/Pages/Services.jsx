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
        <Container className='mb-1' >
            <Stack  
                direction={isDesktop?'horizontal':''}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                // direction='horizontal'
                className='mb-3'
                lang='ar'
            >
                <div className={`image-stack ${isDesktop?'':'d-flex justify-content-center'}`}>
                    <img className="image-left" src="./Images/app1.webp" alt="Left" title="Image Left" />
                    <img className="image-right" src="./Images/app3.webp" alt="Right" title="Image Left" />
                </div>

                <div className="image-stack-text mt-5" >
                    <h1 className='mt-3 mb-2'>إنشاء تطبيقات الهاتف المحمول</h1>
                    <h5>لديك قاعدة جماهيرية كبيرة وتريد أن توثق الروابط بينك وبين العملاء ؟؟ <br />أنشئ تطبيق الهاتف الخاص بك وكن على تواصل مستمر مع العميل واضف طابع العلاقة الشخصية بينكما</h5>
                </div>
            </Stack>
            <Stack  
                direction={isDesktop?'horizontal':''}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                // direction='horizontal'
                className='mb-3'
                lang='ar'
            >
                <Row xs={1} lg={2}>
                    <Col
                     xs={{ order: 'first' }}
                     lg={{ order: 'last'}}
                     >
                        <div className={`image-stack ${isDesktop?'':'d-flex justify-content-center'}`}>
                            <img className="image-left-middle" src="./Images/web4.webp" alt="Left" title="Image Left" />
                            <img className="image-right-middle" src="./Images/web5.webp" alt="Right" title="Image Left" />
                        </div></Col>
                    <Col 
                    xs={{ order: 'last' }}
                    lg={{ order: 'first' }}
                    >
                        <div className="image-stack-text">
                            <h1 className='mb-2'>تصميم مواقع الويب</h1>
                            <h5>نساعدك في الوصول لأكبر شريحة ممكنة من العملاء ومضاعفة أرباحك من خلال انشاء موقعك  الالكتروني الخاص بك </h5>
                        </div></Col>
                </Row>
                    
                    

            </Stack>
            <Stack  
                direction={isDesktop?'horizontal':''}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                // direction='horizontal'
                lang='ar'
            >
                <div className={`image-stack ${isDesktop?'':'d-flex justify-content-center'}`}>
                    <img className="image-left-last" src="./Images/help1.webp" alt="Left" title="Image Left" />
                    <img className="image-right-last" src="./Images/help5.webp" alt="Right" title="Image Left" />
                </div>

                <div className="image-stack-text">
                    <h1>الدعم الفني</h1>
                    <h5>جاهزون على مدار الساعة لتقديم الدعم التقني والفني اللازمان في حال واجهتك أي مشاكل </h5>
                </div>
            </Stack>
        </Container>
    </>
  )
}

export default Services
