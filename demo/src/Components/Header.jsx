import React from 'react'

function Header() {
    return (
        <>
            <div id='hero-div'>
                <div id='header-div'>
                    <h2>
                        <span style={{fontSize: '3rem'}}>App201  <br /></span> 
                         المكان الأمثل لتصميم مواقع الويب وتطبيقات الهواتف وكل ما يتعلق بالأمور البرمجية
                    </h2>
                    <a href='/Services' className="btn btn-dark">استكشف خدماتنا</a>
                </div>
                <div id='header-video'>
                    <video
                        src='https://vod-progressive.akamaized.net/exp=1660722599~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3752%2F14%2F368763065%2F1526588504.mp4~hmac=411a9226bead28da01eaaae25d8db6b28d71f99f8d724c528730f71bff735554/vimeo-prod-skyfire-std-us/01/3752/14/368763065/1526588504.mp4'
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
