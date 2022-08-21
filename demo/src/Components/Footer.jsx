import React from 'react'
import './CSS/Footer.css'

function Footer() {
    return (
        <div className='bottom-plane'>
            <footer className="text-center text-white">
                {/* Grid container */}
                <div className="container p-4 pb-0">
                    {/* Section: Social media */}
                    <section className="mb-4">
                        {/* Facebook */}
                        <a
                            className="btn btn-outline-light btn-floating m-1 rounded-circle"
                            href="https://www.facebook.com/com.App201"
                            target='_blank'
                            role="button"
                            title='فيسبوك'
                        >
                            <i className="fab fa-facebook-f fa-lg" />
                        </a>
                        {/* WhatsApp */}
                        <a
                            className="btn btn-outline-light btn-floating m-1 rounded-circle"
                            href="https://wa.me/962790208181"
                            target='_blank'
                            role="button"
                            title='واتساب'
                        >
                            <i className="fab fa-whatsapp" />
                        </a>
                        {/* Google */}
                        <a
                            className="btn btn-outline-light btn-floating m-1 rounded-circle"
                            href="#!"
                            target='_blank'
                            role="button"
                            title='البريد الإلكتروني'
                        >
                            <i className="fab fa-google" />
                        </a>
                        {/* Instagram */}
                        <a
                            className="btn btn-outline-light btn-floating m-1 rounded-circle"
                            href="https://www.instagram.com/accounts/login/?next=/app201_for_programing/"
                            target='_blank'
                            role="button"
                            title='انستجرام'
                        >
                            <i className="fab fa-instagram" />
                        </a>
                        {/* Linkedin */}
                        <a
                            className="btn btn-outline-light btn-floating m-1 rounded-circle"
                            href="#!"
                            target='_blank'
                            role="button"
                            title='لينكدن'
                        >
                            <i className="fab fa-linkedin-in" />
                        </a>
                    </section>
                    {/* Section: Social media */}
                </div>
                {/* Grid container */}
                {/* Copyright */}
                <div
                    className="text-center p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                     2022 ©
                        جميع الحقوق محفوظة لدى App201
                    
                </div>
                {/* Copyright */}
            </footer>

        </div>
    )
}

export default Footer
