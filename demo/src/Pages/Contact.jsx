import React from 'react'
import Form from '../Components/Form'
import { Row } from 'react-bootstrap'

function Contact() {
    return (
        <>
        <div className='container-fluid d-grid justify-content-center align-items-center' id='contact-div'>
                <div
                 className='container rounded'
                 style={{backgroundColor:' rgba(255,255,255, 0.5)'}}
                >
                    <Row className='d-flex'>
                    <h4 lang='ar'>للمساعدة والاستفسار لا تتردد بالتواصل معنا </h4>
                    </Row>      
                    <Row>
                        <Form />
                    </Row>
                </div>
            </div>
            {/* <SocialCards /> */}
        </>
    )
}

export default Contact
