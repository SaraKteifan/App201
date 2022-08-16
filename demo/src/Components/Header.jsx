import React from 'react'

function Header() {
    return (
        <>
            <div id='hero-div'>
                <div id='header-div'>
                    <h2>
                        App201
                         المكان الأمثل لبرمجة مواقع الويب وتطبيقات الهواتف
                    </h2>
                    <button type="button" class="btn btn-dark">استكشف خدماتنا</button>
                </div>
                <div id='header-video'>
                    <video
                        src='./Videos/video.mp4'
                        autoplay='true'
                        muted
                        loop
                    />
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
