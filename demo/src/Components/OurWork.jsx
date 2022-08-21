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
        <SwiperSlide><img src='./Images/adminDashboard.png' alt='Header Image' id='img-1'></img></SwiperSlide>
        <SwiperSlide><img src='./Images/website.png' alt='Header Image' id='img-2'></img></SwiperSlide>
        {/* <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </Container>
    </>
  )
}

export default OurWork