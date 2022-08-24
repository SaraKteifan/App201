import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import './CSS/OurWork.css'
// import required modules
import { Pagination, Navigation } from "swiper";
import { Container } from 'react-bootstrap';

function OurWork() {
  return (
    <>
    <Container className='my-3'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div style={{width: '250px', height: '500px'}}><img src='./Images/beuatycare1.png' alt='Header Image' id='img-1'></img></div></SwiperSlide>
        <SwiperSlide><div style={{width: '250px', height: '500px'}}><img src='./Images/beuatycare2.png' alt='Header Image' id='img-2'></img></div></SwiperSlide>
        <SwiperSlide><div style={{width: '250px', height: '500px'}}><img src='./Images/beuatycare3.png' alt='Header Image' id='img-2'></img></div></SwiperSlide>
        <SwiperSlide><div style={{width: '250px', height: '500px'}}><img src='./Images/greenland1.png' alt='Header Image' id='img-2'></img></div></SwiperSlide>
        <SwiperSlide><div style={{width: '250px', height: '500px'}}><img src='./Images/greenland2.png' alt='Header Image' id='img-2'></img></div></SwiperSlide>
        <SwiperSlide><div style={{width: '250px', height: '500px'}}><img src='./Images/greenland3.png' alt='Header Image' id='img-2'></img></div></SwiperSlide>
        <SwiperSlide><div style={{width: '250px', height: '500px'}}><img src='./Images/carage1.png' alt='Header Image' id='img-2'></img></div></SwiperSlide>
        <SwiperSlide><div style={{width: '250px', height: '500px'}}><img src='./Images/carage2.png' alt='Header Image' id='img-2'></img></div></SwiperSlide>
        <SwiperSlide><div style={{width: '250px', height: '500px'}}><img src='./Images/carage3.png' alt='Header Image' id='img-2'></img></div></SwiperSlide>
        <SwiperSlide><div style={{width: '250px', height: '500px'}}><img src='./Images/furniture1.png' alt='Header Image' id='img-2'></img></div></SwiperSlide>
        <SwiperSlide><div style={{width: '250px', height: '500px'}}><img src='./Images/furniture2.png' alt='Header Image' id='img-2'></img></div></SwiperSlide>
        <SwiperSlide><div style={{width: '250px', height: '500px'}}><img src='./Images/furniture3.png' alt='Header Image' id='img-2'></img></div></SwiperSlide>
      </Swiper>
    </Container>
    </>
  )
}

export default OurWork