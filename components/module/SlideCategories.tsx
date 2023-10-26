'use client';

import React from 'react'
import { FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


function SlideCategories() {
  return (
    <>
      <Swiper
        // slidesPerView={5}
        spaceBetween={12}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 9,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  )
}

export default SlideCategories