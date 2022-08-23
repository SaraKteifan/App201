import React from 'react'
import SocialCards from '../Components/SocialCards'

function Contact() {
    return (
        <>
            <div id='contact-div' className='d-grid justify-content-center align-items-center'>
                <div id='Contact-text'>
                <div id='contact-text'>
                    <h1>متواجدون دائماً لمساعدتك</h1>
                    <h4>لديك سؤال؟ تريد الاستفسار عن إحدى خدماتنا أو حجزها؟ لا تتردد بالتواصل معنا عن طريق أي من الوسائل التالية</h4>
                </div>
                <hr></hr>
                <div id='contact-socials'>
                    <a href="">0790208181 <i class="fa-solid fa-phone"></i></a>
                    <a href="">app201.aqaba2022@gmail.com <i class="fa-solid fa-envelope"></i></a>
                    <a href="">App201 <i class="fa-brands fa-whatsapp"></i></a>
                </div>
                </div>
            </div>
            <SocialCards />
        </>
    )
}

export default Contact
