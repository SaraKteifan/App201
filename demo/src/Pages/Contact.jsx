import React from 'react'
import Form from '../Components/Form'
import { Container } from 'react-bootstrap'
import Map from '../Components/Map'

import SocialCards from '../Components/SocialCards'
import {Row, Col} from 'react-bootstrap'

function Contact() {
    return (
        <>
        
            <div id='contact-div' className='d-grid justify-content-center align-items-center '>
                <div id='Contact-text' className='overlay'>

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
            <Container className='my-5'>
            <div class=" mapouter">
                <div class="gmap_canvas">
                    <iframe width="1300" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=App201&t=k&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"/>
                </div>
            </div>
            </Container>
            <SocialCards />
        </>
    )
}

export default Contact
