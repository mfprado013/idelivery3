import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination"
import Image from 'next/image'
import Link from 'next/link'

import BK from '../../../assets/img/bk.svg'
import MC from '../../../assets/img/Mcdonalds.svg'
import CB from '../../../assets/img/cocobambu.svg'
import HB from '../../../assets/img/habib.svg'
import CH from '../../../assets/img/china.svg'

import SwiperCore, {
  Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);


export default function App() {



  return (
    <>
      <Swiper slidesPerView={2} spaceBetween={0} className="lg:hidden sm:hidden mt-6 w-full h-96">
        <SwiperSlide className="ml-2">
          <Link href="#">
            <a className="absolute bg-white border-solid border-2 border-gray-300 rounded-md w-48 h-28">
              <span className="flex justify-center -ml-28 py-8">
                <Image src={BK.src} alt="Burguer King" width={60} height={60} />
              </span>
              <p className="justify-center flex font-semibold -mt-28 ml-20">Burger King</p>
              <p className="justify-center flex text-green-500 -pt-8 pl-20 -ml-2">Frete grátis</p>
              <p className="justify-center flex pl-20 -ml-4 pt-2 font-semibold">Fast food</p>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide >
          <Link href="#">
            <a className="absolute bg-white border-solid border-2 border-gray-300 rounded-md w-48 h-28">
              <span className="flex justify-center -ml-28 py-8">
                <Image src={MC.src} alt="Mc Donald’s" width={52} height={52} />
              </span>
              <p className="justify-center flex font-semibold -mt-28 pt-2 ml-20">Mc Donald’s</p>
              <p className="justify-center flex text-green-500 -pt-8 pl-20 -ml-3">Frete grátis</p>
              <p className="justify-center flex pl-20 -ml-6 pt-2 font-semibold">Fast food</p>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="#">
            <a className="absolute bg-white border-solid border-2 border-gray-300 rounded-md w-48 h-28">
              <span className="flex justify-center -ml-28 py-8">
                <Image src={CB.src} alt="Coco Bambu" width={52} height={52} />
              </span>
              <p className="justify-center flex font-semibold -mt-28 pt-2 ml-20">Coco Bambu</p>
              <p className="justify-center flex text-green-500 -pt-8 pl-20 -ml-3">Frete grátis</p>
              <p className="justify-center flex pl-20 -ml-6 pt-2 font-semibold">Fast food</p>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="#">
            <a className="absolute bg-white border-solid border-2 border-gray-300 rounded-md w-48 h-28">
              <span className="flex justify-center -ml-28 py-8">
                <Image src={HB.src} alt="Habib’s" width={52} height={52} />
              </span>
              <p className="justify-center flex font-semibold -mt-28 pt-2 pl-20 -ml-4">Habib’s</p>
              <p className="justify-center flex text-green-500 -pt-8 pl-20 ml-2">Frete grátis</p>
              <p className="justify-center flex pl-20 -ml-6 pt-2 font-semibold">Árabe</p>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="#">
            <a className="absolute bg-white border-solid border-2 border-gray-300 rounded-md w-48 h-28">
              <span className="flex justify-center -ml-28 py-8">
                <Image src={CH.src} alt="China in Box" width={52} height={52} />
              </span>
              <p className="justify-center flex font-semibold -mt-28 pt-2 ml-20">China in Box</p>
              <p className="justify-center flex text-green-500 -pt-8 pl-20 -ml-2">Frete grátis</p>
              <p className="justify-center flex pl-20 -ml-6 pt-2 font-semibold">Chinesa</p>
            </a>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  )
}