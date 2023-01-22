import React,{ useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Designs () {
    const [logos, setLogos] = useState([
        { url: 'Images/arab-engineer.webp', website: 'https://www.arab-engineer.com' },
        { url: 'Images/palanty.webp', website: 'https://www.palanty.com' },
        // { url: 'Images/aqaba.webp', website: 'app201.website' },
    ]);
    const sliderData=logos.map((logo, index) => (
      <div className="logo-container d-grid justify-items-center justify-content-center align-items-center m-3" key={index}>
        <img src={logo.url} alt={logo.website} className="logo-img w-75 mb-2"  onClick={e => {window.open(logo.website,'_blank')}} />
        {/* <a href={logo.website} className="badge badge-pill badge-primary text-center text-decoration-none text-dark text-large">{logo.website}</a> */}
      </div>
    ))
    const settings = {
      dots: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 500,
      cssEase:"linear"
    };
    return (
      <div className="portfolio-container my-5">
        <div className='mx-5 border-4 border-bottom my-5' lang='ar'>
            <h1 className='' style={{color: 'purple'}}>الأعمال السابقة </h1>
        </div>
        <Slider {...settings}>
        {sliderData}
          {/* <div>
            <img src="Images/aqaba.webp" alt="" />
          </div>
          <div>
            <img src="Images/app3.webp" alt="" />
            
          </div>
          <div>
            <img src="Images/app1.webp" alt="" />

          </div> */}
          {/* <div>
                <p>Hi</p>
                </div>
                <div>
                <p>there</p>
            </div>
            <div>
                <p>who</p>
            </div>
            <div>
                <p>you</p>
              </div> */}
        </Slider>
        <div className='mx-5 border-4 border-top my-5' lang='ar'></div>
      </div>
    );
}

export default Designs;