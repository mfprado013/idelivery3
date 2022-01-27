
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"


import Lanche from '../../../assets/img/lanche.svg'
import Pizza from '../../../assets/img/pizza.svg'
import Mulher from '../../../assets/img/mulher.svg'
import Image from 'next/image'

// import Swiper core and required modules
import SwiperCore, {
  Pagination, Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);


export default function App() {



  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend1 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
      '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
    ]);
  }

  const prepend = () => {
    swiperRef.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
  }

  const append = () => {
    swiperRef.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
  }

  const append1 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
      '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
    ]);
  }

  return (
    <>
      <div className="lg:hidden sm:-mt-20 -mt-14">
        <Swiper slidesPerView={3} spaceBetween={4} navigation={true}>
          <SwiperSlide>
            <a href="#"><Image src={Lanche.src} alt="lanche" width={200} height={200} /></a></SwiperSlide>
          <SwiperSlide><a href="#"><Image src={Pizza.src} alt="pizza" width={200} height={200} /></a></SwiperSlide>
          <SwiperSlide><a href="#"><Image src={Mulher.src} alt="mulher" width={200} height={200} /></a></SwiperSlide>
          <SwiperSlide><a href="#"><Image src={Lanche.src} alt="lanche" width={200} height={200} /></a></SwiperSlide>
          <SwiperSlide><a href="#"><Image src={Pizza.src} alt="pizza" width={200} height={200} /></a></SwiperSlide>
        </Swiper>

      </div>
      <p className="append-buttons">
        <button onClick={() => prepend1()} className="prepend-1-slides"></button>
        <button onClick={() => prepend()} className="prepend-slide"></button>
        <button onClick={() => append()} className="append-slide"></button>
        <button onClick={() => append1()} className="append-1-slides"></button>
      </p>

    </>
  )
}