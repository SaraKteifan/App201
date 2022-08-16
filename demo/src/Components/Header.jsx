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
}

export default Header
