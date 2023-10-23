'use client';
import { Skeleton } from "@nextui-org/skeleton";
import SlideImage from "@/components/module/SlideImage";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
  return (
    <>
      {/*<div className="flex w-full h-[600px]">*/}
      {/*  <Skeleton className="flex w-full h-full">asdf</Skeleton>*/}
      {/*</div>*/}
      {/* 베너 슬라이더 */}
      <SlideImage></SlideImage>
      {/* 카테고리 */}
      <div className="p-5">
        <div className="flex justify-between">
          <div>Categories</div>
          <div>View all</div>
        </div>
        <Swiper
          slidesPerView={3}>
          <SwiperSlide id="slide1">
            <div className="">asdf</div>
          </SwiperSlide>
          <SwiperSlide id="slide1">
            <div className="">1234</div>
          </SwiperSlide>
          <SwiperSlide id="slide1">
            <div className="">zxcv</div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* 신상품 */}
    </>
  );
}
