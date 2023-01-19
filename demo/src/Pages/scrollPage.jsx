import React from 'react'
import { useState } from 'react'

function scrollPage() {
    [scrol,setScrol]=useState()
  return (
    <>
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
                        <img className="image-left-middle" src="./Images/web4.png" alt="Image Left" title="Image Left" />
                        <img className="image-right-middle" src="./Images/web5.png" alt="Image Right" title="Image Left" />
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
            className='mb-3'
            lang='ar'
        >
            <Row xs={1} lg={2}>
                <Col
                    xs={{ order: 'first' }}
                    lg={{ order: 'last'}}
                    >
                    <div className={`image-stack ${isDesktop?'':'d-flex justify-content-center'}`}>
                        <img className="image-left-middle" src="./Images/web4.png" alt="Image Left" title="Image Left" />
                        <img className="image-right-middle" src="./Images/web5.png" alt="Image Right" title="Image Left" />
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
            className='mb-3'
            lang='ar'
        >
            <Row xs={1} lg={2}>
                <Col
                    xs={{ order: 'first' }}
                    lg={{ order: 'last'}}
                    >
                    <div className={`image-stack ${isDesktop?'':'d-flex justify-content-center'}`}>
                        <img className="image-left-middle" src="./Images/web4.png" alt="Image Left" title="Image Left" />
                        <img className="image-right-middle" src="./Images/web5.png" alt="Image Right" title="Image Left" />
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
    </>
  )
}

export default scrollPage