import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import Lanche from '../../../assets/img/lanche.svg'
import Pizza from '../../../assets/img/pizza.svg'
import Mulher from '../../../assets/img/mulher.svg'
import Image from 'next/image'

import SwiperCore, {
  Pagination, Navigation
} from 'swiper';

SwiperCore.use([Pagination, Navigation]);

export default function App() {



  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
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

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
      '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
    ]);
  }
  return (
    <>

      <div className="lg:block sm:hidden hidden sm:px-52 lg:-mt-40">
        <Swiper slidesPerView={3} spaceBetween={4} navigation={true}>
          <SwiperSlide>
            <a href="#"><Image src={Lanche.src} alt="lanche" width={900} height={900} /></a></SwiperSlide>
          <SwiperSlide><a href="#"><Image src={Pizza.src} alt="pizza" width={900} height={900} /></a></SwiperSlide>
          <SwiperSlide><a href="#"><Image src={Mulher.src} alt="mulher" width={900} height={900} /></a></SwiperSlide>
          <SwiperSlide><a href="#"><Image src={Lanche.src} alt="lanche" width={900} height={900} /></a></SwiperSlide>
          <SwiperSlide><a href="#"><Image src={Pizza.src} alt="pizza" width={900} height={900} /></a></SwiperSlide>
        </Swiper>

      </div>
      <p className="append-buttons">
        <button onClick={() => prepend2()} className="prepend-2-slides"></button>
        <button onClick={() => prepend()} className="prepend-slide"></button>
        <button onClick={() => append()} className="append-slide"></button>
        <button onClick={() => append2()} className="append-2-slides"></button>
      </p>
    </>
  )
}