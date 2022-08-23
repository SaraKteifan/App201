import React from 'react'

function Contact() {
    return (
        <>
            <div id='contact-header'>
                <img src="./Images/Aqaba.jpg" alt="Aqaba" />
            </div>
            <div id='contact-div'>
                <div id='contact-text' lang='ar'>
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
            <div className="container">
                <div className="row text-center" id='social-accounts-contact'>
                    <div className="col-md"><a href=''>Facebook <i class="fa-brands fa-square-facebook"></i></a></div>
                    <div className="col-md"><a href=''>Instagram <i class="fa-brands fa-square-instagram"></i></a></div>
                    <div className="col-md"><a href=''>Linkedin <i class="fa-brands fa-linkedin"></i></a></div>
                </div>
            </div>
        </>
    )
}

export default Contact
