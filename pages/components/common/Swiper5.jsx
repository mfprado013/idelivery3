import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import Image from 'next/image'
import Link from 'next/link'
import Menu from '../../../assets/img/menu.svg'
import Lanches from '../../../assets/img/lanchea.svg'
import pizza from '../../../assets/img/pizzaicon.svg'
import Japonesa from '../../../assets/img/japonesa.svg'
import Brasileira from '../../../assets/img/brasileira.svg'
import FastFood from '../../../assets/img/fast food.svg'
import Saudavel from '../../../assets/img/saudavel.svg'
import Arabe from '../../../assets/img/arabe.svg'
import Asiatica from '../../../assets/img/asiatica.svg'
import Burguer from '../../../assets/img/burger.svg'




// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);


export default function App() {



  return (
    <>
      <Swiper slidesPerView={4} spaceBetween={4} className="lg:hidden sm:block hidden w-full h-full mt-20 mt-6">
        <SwiperSlide className="ml-4"><Link href="#">
          <a className="absolute bg-white border-solid border-2 border-black rounded-lg w-32 h-32">
            <span className=" flex justify-center py-6"><Image src={Menu.src} alt="Ver todas" width={52} height={52} />
            </span>
            <p className="justify-center flex font-semibold -mt-4">Ver todas</p>
          </a>
        </Link>
        </SwiperSlide>
        <SwiperSlide className="pb-32"><Link href="#">
          <a className="absolute bg-white border-solid border-2 border-black rounded-lg w-32 h-32">
            <span className="flex justify-center py-6"><Image src={Lanches.src} alt="Lanches" width={52} height={52} />
            </span>
            <p className="justify-center flex font-semibold -mt-4">Lanches</p>
          </a>
        </Link>
        </SwiperSlide>
        <SwiperSlide><Link href="#">
          <a className="absolute bg-white border-solid border-2 border-black rounded-lg w-32 h-32">
            <span className="flex justify-center py-6"><Image src={pizza.src} alt="Pizza" width={52} height={52} />
            </span>
            <p className="justify-center flex font-semibold -mt-2">Pizza</p>
          </a>
        </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="#">
            <a className="absolute bg-white border-solid border-2 border-black rounded-lg w-32 h-32">
              <span className="flex justify-center py-6"><Image src={Japonesa.src} alt="Japonesa" width={52} height={52} />
              </span>
              <p className="justify-center flex font-semibold -mt-2">Japonesa</p>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="#">
            <a className="absolute bg-white border-solid border-2 border-black rounded-lg w-32 h-32">
              <span className="flex justify-center py-6"><Image src={Brasileira.src} alt="Brasileira" width={52} height={52} />
              </span>
              <p className="justify-center flex font-semibold -mt-4">Brasileira</p>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="#">
            <a className="absolute bg-white border-solid border-2 border-black rounded-lg w-32 h-32">
              <span className="flex justify-center py-6"><Image src={FastFood.src} alt="Fast Food" width={52} height={52} />
              </span>
              <p className="justify-center flex font-semibold -mt-4">Fast Food</p>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide><Link href="#">
          <a className="absolute bg-white border-solid border-2 border-black rounded-lg w-32 h-32">
            <span className="flex justify-center py-6"><Image src={Saudavel.src} alt="Saudavel" width={52} height={52} />
            </span>
            <p className="justify-center flex font-semibold -mt-4">Saudável</p>
          </a>
        </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="#">
            <a className="absolute bg-white border-solid border-2 border-black rounded-lg w-32 h-32">
              <span className="flex justify-center py-6"><Image src={Arabe.src} alt="Árabe" width={52} height={52} />
              </span>
              <p className="justify-center flex font-semibold -mt-4">Árabe</p>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="#">
            <a className="absolute bg-white border-solid border-2 border-black rounded-lg w-32 h-32">
              <span className="flex justify-center py-6"><Image src={Asiatica.src} alt="Asiática" width={52} height={52} />
              </span>
              <p className="justify-center flex font-semibold -mt-4">Asiática</p>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="#">
            <a className="absolute bg-white border-solid border-2 border-black rounded-lg w-32 h-32">
              <span className="flex justify-center py-6"><Image src={Burguer.src} alt="Burguers" width={52} height={52} />
              </span>
              <p className="justify-center flex font-semibold -mt-4">Burguers</p>
            </a>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  )
}