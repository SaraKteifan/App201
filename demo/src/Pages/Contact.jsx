import React from 'react'
import Form from '../Components/Form'
import { Container } from 'react-bootstrap'
import Map from '../Components/Map'

import SocialCards from '../Components/SocialCards'
import {Row, Col} from 'react-bootstrap'

function Contact() {
    return (
        <>
        <div className='container-fluid d-grid justify-content-center align-items-center' id='contact-div'>
                <div
                 className='container rounded'
                 style={{backgroundColor:' rgba(255,255,255, 0.5)'}}
                >
                    <Row className='d-flex'>
                    <h4>للمساعدة والاستفسار لا تتردد بالتواصل معنا </h4>
                    </Row>      
                    <Row>
                        <Form />
                    </Row>
                </div>
            </div>
            <Container className=' mt-2'>
            <div class=" mapouter" >
                <div class="gmap_canvas">
                    <iframe style={{objectFit:'cover', width:'100%',height:'50vh'}} id="gmap_canvas" src="https://maps.google.com/maps?q=App201&t=k&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"/>
                </div>
            </div>
            </Container>
            <SocialCards />
        </>
    )
}

export default Contact
