import React from 'react'
import './CSS/Header.css'

function Header() {
    return (
        <>
            <div id='hero-div'>
                <div id='header-div'>
                    <h2>
                        <span style={{fontSize: '3rem'}}>App201  <br /></span> <br></br>
                         <span lang='ar'>المكان الأمثل لبناء موقعك الإلكتروني، تطبيقات الهاتف ومساعدتك في كل ما يتعلق بالبرمجة
                    </span>
                    </h2><br></br>
                    <button id='headerBTN' lang='ar'><a href='/Contact'>تواصل معنا</a></button>
                </div>
                <div id='header-video'>
                    <video
                        src='./Videos/header-video.mp4'
                        autoplay='true'
                        muted
                        loop
                    />
                    <img src='./Images/adminDashboard.png' alt='Header Image' id='img-1'></img>
                    <img src='./Images/website.png' alt='Header Image' id='img-2'></img>
                </div>
            </div>
        </>
    )
  return (
    <>
    <div className='d-flex justify-content-center' >
      <video id='myframe' src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/we-are-service-provider-video-content-design-template-03e9f4977b6cd297855e32f1c4e6b9e6_screen.mp4?ts=1579353288' autoPlay loop muted ></video>
      </div>
    </>
  )
}

export default Header;
