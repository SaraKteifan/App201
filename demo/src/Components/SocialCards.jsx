import React from 'react'
import './CSS/SocialCards.css'

function SocialCards() {
  return (
    <div className="container Scontainer">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <div className="icon">
                <i className="fa-brands fa-square-instagram Si" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <h3>
                <a className='soA' href="https://www.instagram.com/app201_for_programing/" target="_blank">App201</a>
              </h3>
              <p lang='ar'>صفحتنا على انستجرام حتى تشوف اخر تصاميمنا واعمالنا</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <div className="icon">
                <i className="fa fa-facebook-square Si" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <h3>
                <a className='soA' href="https://www.facebook.com/com.App201" target="_blank">App201</a>
              </h3>
              <p lang='ar'>شاركنا تجربتك وارائك على فيسبوك </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <div className="icon">
                <i className="fa fa-linkedin-square Si" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <h3>
                <a className='soA' href="https://www.linkedin.com/company/app201/" target="_blank">App201</a>
              </h3>
              <p lang='ar'>صفحتنا على لينكد ان اذا كنت حابب تنضم لعيلتنا وتستكشف الوضائف المطروحة</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SocialCards