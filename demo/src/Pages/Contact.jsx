import React from 'react'
import Form from '../Components/Form'
import SocialCards from '../Components/SocialCards'
import {Row, Col} from 'react-bootstrap'

function Contact() {
    return (
        <>
        
            <div id='contact-div' className='d-grid justify-content-center align-items-center'>
                <div id='Contact-text'>
                <Row className='d-flex'>
                   <h4>للمساعدة والاستفسار تواصل معنا عن طريق أي من الوسائل التالية:</h4>
                </Row>
                    
                <Row>
                    <div id='contact-form'>
                        <Form />
                    </div>
                </Row>
                <hr></hr>
                <Row>
                    <div id='contact-socials' className='d-flex'>
                        <a href="">0790208181 <i class="fa-solid fa-phone"></i></a>
                        <a href="">app201.aqaba2022@gmail.com <i class="fa-solid fa-envelope"></i></a>
                        <a href="">App201 <i class="fa-brands fa-whatsapp"></i></a>
                    </div>
                </Row>  
            </div>
            </div>
            <SocialCards />
        </>
    )
}

export default Contact
