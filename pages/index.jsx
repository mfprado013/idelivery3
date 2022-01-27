import Image from 'next/image'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'

//Icons 
import rappi from '../assets/img/rappi.svg'
import uber from '../assets/img/uber.svg'
import ifood from '../assets/img/ifood.svg'
import Logo from '../assets/img/logo.svg'
import Search from '../assets/img/search.svg'
import name from '../assets/img/name.svg'
import Lanches from '../assets/img/lanchea.svg'
import menu from '../assets/img/menu.svg'
import pizza from '../assets/img/pizzaicon.svg'
import Japonesa from '../assets/img/japonesa.svg'
import Brasileira from '../assets/img/brasileira.svg'
import FastFood from '../assets/img/fast food.svg'
import Saudavel from '../assets/img/saudavel.svg'
import Arabe from '../assets/img/arabe.svg'
import Asiatica from '../assets/img/asiatica.svg'
import Burguer from '../assets/img/burger.svg'
import Logoi from '../assets/img/logo3.svg'
import Apple from '../assets/img/apple.svg'
import Play from '../assets/img/googleplay.svg'
import BK from '../assets/img/bk.svg'
import MC from '../assets/img/Mcdonalds.svg'
import CB from '../assets/img/cocobambu.svg'
import HB from '../assets/img/habib.svg'
import CH from '../assets/img/china.svg'
import Frete from '../assets/img/frete.svg'
import Quero from '../assets/img/querover.svg'
import Pratos from '../assets/img/pratos.svg'
import Name from '../assets/img/name2.svg'
import PlayStore from '../assets/img/playstore.svg'
import AppleStore from '../assets/img/applestore.svg'
import Facebook from '../assets/img/facebook.svg'
import Instagram from '../assets/img/instagram.svg'
import Twitter from '../assets/img/twitter.svg'
import Youtube from '../assets/img/youtube.svg'

//Swiper
import Swiper from './components/common/Swiper'
import Swiper2 from './components/common/Swiper2'
import Swiper3 from './components/common/Swiper3'
import Swiper4 from './components/common/Swiper4'

//Image
import App from '../assets/img/APP.svg'
import banner from '../assets/img/banner.png'

export default function Home() {
  return (
    <>
      {/* header */}
      <Popover className="relative bg-white">
        <div className="max-w-full mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100  md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <div className="lg:justify-center lg:items-center flex gap-x-2 lg:ml-14 lg:px-10">
                  <Image src={Logo.src} alt="iDelivery" width={40} height={40} />
                  <Image src={name.src} alt="nome" width={80} height={80} />
                </div>
              </a>
            </div>
            <div className="-mr-2 -my-2 lg:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-yellow-500 hover:text-yellow-500 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-200">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="lg:flex lg:items-center lg:justify-end lg:flex-1 lg:w-0 sm:hidden hidden ">
              <a href="#" className="mr-8  whitespace-nowrap text-base font-normal text-black-500 hover:text-yellow-500">
                Blog</a>
              <a href="#" className="mr-8  whitespace-nowrap text-base font-normal text-black-500 hover:text-yellow-500">
                Fale Conosco</a>
              <a href="#" className="mr-8  whitespace-nowrap text-base font-normal text-black-500 hover:text-yellow-500">
                Login</a>
              <a href="#" className="mr-8 whitespace-nowrap inline-flex items-center justify-center px-2 py-2 border border-transparent rounded-md shadow-sm font-semibold text-black-500 bg-yellow-300 hover:bg-yellow-600">
                Cadastra-se
              </a>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="z-50 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 w-full h-96 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div className="justify-center flex gap-x-4">
                    <Image src={Logo.src} alt="iDelivery" width={40} height={40} />
                    <Image src={name.src} alt="nome" width={80} height={80} />
                  </div>
                  <div className="relative -mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-yellow-500 hover:text-yellow-500 hover:bg-yellow-200 focus:outline-none focus:ring-2  focus:ring-yellow-200">
                      <span className="sr-only ">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>

              </div>
              <div className="z-50 absolute space-y-6">
                <div className="grid grid-cols-2 gap-x-28">
                  <a href="#" className="text-base pl-24 flex justify-center items-center flex-row font-medium text-gray-900 hover:text-yellow-500">
                    Blog
                  </a>

                  <a href="#" className="text-base sm:pl-24 flex justify-center items-center flex-row font-medium text-gray-900 hover:text-yellow-500">
                    Fale Conosco
                  </a>

                </div>
                <div className="pt-16 pl-24">
                  <a
                    href="#"
                    className="sm:w-full sm:-ml-0 sm:flex sm:items-center sm:justify-center w-full -ml-0 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-semibold text-black-500 bg-yellow-300 hover:bg-yellow-400"
                  >
                    Cadastre-se
                  </a>
                  <p className="pt-10 sm:text-center pl-10 text-base font-medium text-black-500">
                    Já se Cadastrou ?{' '}
                    <a href="#" className="text-black-500 hover:text-yellow-500">
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      <div className='sm:mb-0 lg:mb-72'>
        <div className="-mt-72 relative sm:absolute sm:w-full h-full brightness-50"><Image className="w-full h-96" src={banner.src} alt="Banner" width={1880} height={600} /> </div>
        <div className="lg:hidden sm:-mt-72 mt-36 sm:absolute sm:w-full sm:h-full brightness-50"><Image className="w-full h-96" src={banner.src} alt="Banner" width={1880} height={800} /> </div>
        <div className="sm:mt-72 flex justify-center flex-col items-center">
          <div className="sm:absolute absolute pb-20 lg:pb-0 mb-52 sm:mb-96 lg:mb-96 flex font-normal text-white whitespace-nowrap  text-2xl">
            <h1>Compare preços de deliveries e<br />
              encontre as melhores ofertas
            </h1>
          </div>
          <div className="sm:-mt-44 -mt-32 sm:pb-20 lg:pb-0 absolute gap-x-4 flex flex-row whitespace-nowrap">
            <div><Link href="#"><a><Image src={ifood.src} alt="ifood" width={60} height={60} /></a></Link></div>
            <div><Link href="#"><a><Image src={uber.src} alt="uber" width={60} height={60} /></a></Link></div>
            <div><Link href="#"><a><Image src={rappi.src} alt="rappi" width={60} height={60} /></a></Link></div>
          </div>
          <div className="sm:hidden lg:flex lg:px-20 lg:justify-center lg:items-center ">
            <div className="w-full px-20 px-72 absolute">
              <div className="pt-4 pl-2 px-62 hidden absolute flex"> <Image src={Search.src} alt="Pesquise aqui" width={20} height={20} /></div> <input type="text" className=" flex h-14 w-full left-3 pl-12  rounded-sm focus:shadow focus:outline-none" placeholder="O quê você está buscando?" />
              <div className="lg:flex sm:hidden hidden sm:absolute px-20 sm:px-72 top-2 right-2"><button className="h-10 w-32 font-semibold text-black-500 rounded-sm bg-yellow-300 hover:bg-yellow-600"> Buscar Oferta </button></div>
            </div>
          </div>
        </div>
      </div>


      {/* body */}
      <main>
        <Swiper4 />
        <Swiper />
        <div className=" sm:pl-44 sm:flex pl-20 font-bold text-base lg:pl-16 sm:pt-5 ">
          <h1 className="text-xl">As categorias mais acessadas</h1>
        </div>
        <div className="sm:hidden hidden lg:flex lg:justify-center lg:whitespace-nowrap lg:flex-row lg:px-0 lg:px-4 lg:gap-y-2 lg:gap-x-2 lg:mt-16">
          <Link href="#">
            <a className="bg-white border-solid border-4 border-black rounded-lg w-32 h-32 w-32 h-32">
              <span className=" flex justify-center py-6"><Image src={menu.src} alt="Ver todas" width={52} height={52} />
              </span>
              <p className="justify-center flex font-semibold -mt-4">Ver todas</p>
            </a>
          </Link>
          <Link href="#">
            <a className="bg-white border-solid border-4 border-black rounded-lg w-32 h-32">
              <span className="flex justify-center py-6"><Image src={Lanches.src} alt="Lanches" width={52} height={52} />
              </span>
              <p className="justify-center flex font-semibold -mt-4">Lanches</p>
            </a>
          </Link>
          <Link href="#">
            <a className="bg-white border-solid border-4 border-black rounded-lg w-32 h-32">
              <span className="flex justify-center py-6"><Image src={pizza.src} alt="Pizza" width={52} height={52} />
              </span>
              <p className="justify-center flex font-semibold -mt-4">Pizza</p>
            </a>
          </Link>
          <Link href="#">
            <a className="bg-white border-solid border-4 border-black rounded-lg w-32 h-32">
              <span className="flex justify-center py-6"><Image src={Japonesa.src} alt="Japonesa" width={52} height={52} />
              </span>
              <p className="justify-center flex font-semibold -mt-4">Japonesa</p>
            </a>
          </Link>
          <Link href="#">
            <a className="bg-white border-solid border-4 border-black rounded-lg w-32 h-32">
              <span className="flex justify-center py-6"><Image src={Brasileira.src} alt="Brasileira" width={52} height={52} />
              </span>
              <p className="justify-center flex font-semibold -mt-4">Brasileira</p>
            </a>
          </Link>
          <Link href="#">
            <a className="bg-white border-solid border-4 border-black rounded-lg w-32 h-32">
              <span className="flex justify-center py-6"><Image src={FastFood.src} alt="Fast Food" width={52} height={52} />
              </span>
              <p className="justify-center flex font-semibold -mt-4">Fast Food</p>
            </a>
          </Link>
          <Link href="#">
            <a className="bg-white border-solid border-4 border-black rounded-lg w-32 h-32">
              <span className="flex justify-center py-6"><Image src={Saudavel.src} alt="Saudavel" width={52} height={52} />
              </span>
              <p className="justify-center flex font-semibold -mt-4">Saudável</p>
            </a>
          </Link>
          <Link href="#">
            <a className="bg-white border-solid border-4 border-black rounded-lg w-32 h-32">
              <span className="flex justify-center py-6"><Image src={Arabe.src} alt="Árabe" width={52} height={52} />
              </span>
              <p className="justify-center flex font-semibold -mt-4">Árabe</p>
            </a>
          </Link>
          <Link href="#">
            <a className="bg-white border-solid border-4 border-black rounded-lg w-32 h-32">
              <span className="flex justify-center py-6"><Image src={Asiatica.src} alt="Asiática" width={52} height={52} />
              </span>
              <p className="justify-center flex font-semibold -mt-4">Asiática</p>
            </a>
          </Link>
          <Link href="#">
            <a className="bg-white border-solid border-4 border-black rounded-lg w-32 h-32">
              <span className="flex justify-center py-6"><Image src={Burguer.src} alt="Burguers" width={52} height={52} />
              </span>
              <p className="justify-center flex font-semibold -mt-4">Burguers</p>
            </a>
          </Link>
        </div>
        <div>
          <Swiper2 />
        </div>
      </main>
      {/* divider */}
      <div className="mt-16">
        <div className="absolute w-full lg:h-64 h-52 bg-yellow-300">
        </div>
        <div>
          <div className="pl-96 -ml-40 pt-2 ml-30 lg:block sm:hidden hidden">
            <Image src={App.src} alt="Celular" width={249} height={249} />
            <p className="justify-center flex items-center absolute ml-20 pl-52 -mt-52 ">
              <Image src={Logoi.src} alt="idelivery" width={60} height={60} />
            </p>
            <h1 className="absolute justify-center flex items-center font-semibold  text-2xl ml-72 pl-16 -mt-60 pt-7">Baixe o app e fique por dentro de <br /> cupons de desconto</h1>
            <Link href="#">
              <a className="justify-center flex items-center absolute left-32 pl-96 ml-56 -mt-40">
                <Image src={Apple.src} alt="Apple Store" width={200} height={200} />
              </a>
            </Link>
            <Link href="#">
              <a className="justify-center flex items-center absolute ml-72 -mt-40">
                <Image src={Play.src} alt="Play Store" width={200} height={200} />
              </a>
            </Link>
          </div>
          <div className="lg:hidden sm:pl-10 pt-2 sm:ml-18">
            <Image src={App.src} alt="Celular" width={200} height={200} />
            <p className="justify-center absolute items-center sm:pl-52 pl-40 -mt-44 ">
              <Image src={Logoi.src} alt="idelivery" width={48} height={48} />
            </p>
            <h1 className="hidden absolute sm:justify-center sm:flex sm:items-center font-semibold  sm:text-lg sm:ml-64 ml-52 -mt-48 pt-3">Baixe o app e fique por dentro de <br /> cupons de desconto</h1>
            <h1 className="sm:hidden absolute sm:justify-center sm:flex sm:items-center font-semibold  sm:text-lg sm:ml-64 ml-52 -mt-48 pt-3">Baixe o app e fique por dentro de cupons de desconto</h1>
            <Link href="#">
              <a className="sm:justify-center sm:flex sm:items-center absolute sm:-mt-32 sm:ml-64 sm:pl-28 mt-24">
                <Image src={Apple.src} alt="Apple Store" width={140} height={140} />
              </a>
            </Link>
            <Link href="#">
              <a className="justify-center sm:flex items-center absolute sm:-mt-32 mt-18 mt-12 pl-28 sm:pl-80 sm:-ml-22 -ml-28 ">
                <Image src={Play.src} alt="Play Store" width={140} height={140} />
              </a>
            </Link>
          </div>
        </div>
        {/* divider */}
        <div className="mt-4">
          <div className=" sm:pl-44 sm:flex pl-20 font-bold text-base lg:pl-10  pt-5">
            <h1 className="text-xl">Os mais buscados no iDeliver</h1>
          </div>
          <div className="hidden mt-14 justify-center  whitespace-nowrap flex-row flex sm:hidden md:flex">
            <Link href="#">
              <a className=" bg-white border-solid border-2 border-gray-300 rounded-md w-60 h-32 ml-2">
                <span className="justify-center flex -ml-28 py-7">
                  <Image src={BK.src} alt="Burguer King" width={79} height={79} />
                </span>
                <p className="justify-center flex font-semibold -mt-28 ml-20">Burger King</p>
                <p className="justify-center flex text-green-500 -pt-4 ml-16 pl-2">Frete grátis</p>
                <p className="justify-center flex ml-14 pl-1 pt-2 font-semibold">Fast food</p>
              </a>
            </Link>
            <Link href="#">
              <a className="bg-white border-solid border-2 border-gray-300 rounded-md w-60 h-32 ml-2">
                <span className="justify-center flex -ml-28 py-7">
                  <Image src={MC.src} alt="Mc Donald’s" width={79} height={79} />
                </span>
                <p className="justify-center flex font-semibold -mt-28 ml-20">Mc Donald's</p>
                <p className="justify-center flex text-green-500 -pt-4 ml-16 pl-2">Frete grátis</p>
                <p className="justify-center flex ml-14 pl-1 pt-2 font-semibold">Fast food</p>
              </a>
            </Link>
            <Link href="#">
              <a className=" bg-white border-solid border-2 border-gray-300 rounded-md w-60 h-32 ml-2" >
                <span className="justify-center flex -ml-28 py-7">
                  <Image src={CB.src} alt="Coco Bambu" width={79} height={79} />
                </span>
                <p className="justify-center flex font-semibold -mt-28 ml-20">Coco Bambu</p>
                <p className="justify-center flex text-green-500 -pt-4 ml-16 pl-1">Frete grátis</p>
                <p className="justify-center flex ml-12 pl-2 pt-2 font-semibold">Fast food</p>
              </a>
            </Link>
            <Link href="#">
              <a className=" bg-white border-solid border-2 border-gray-300 rounded-md w-60 h-32 ml-2">
                <span className="justify-center flex -ml-28 py-7">
                  <Image src={HB.src} alt="Habib’s" width={79} height={79} />
                </span>
                <p className="justify-center flex font-semibold -mt-28 ml-16">Habib's</p>
                <p className="justify-center flex text-green-500 -pt-4 ml-16 pl-6">Frete grátis</p>
                <p className="justify-center flex ml-12 pl-2 pt-2 font-semibold">Árabe</p>
              </a>
            </Link>
            <Link href="#">
              <a className=" bg-white border-solid border-2 border-gray-300 rounded-md w-60 h-32 ml-2">
                <span className="justify-center flex -ml-28 py-7">
                  <Image src={CH.src} alt="China in Box" width={79} height={79} />
                </span>
                <p className="justify-center flex font-semibold -mt-28 ml-20">China in Box</p>
                <p className="justify-center flex text-green-500 -pt-4 ml-16 pl-2">Frete grátis</p>
                <p className="justify-center flex ml-12 pl-2 pt-2 font-semibold">Chinesa</p>
              </a>
            </Link>
          </div>
        </div>
        <div>
          <Swiper3 />
        </div>
        {/* body2 */}
        <div className="lg:mt-14 -mt-52">
          <span className=" lg:w-96 lg:h-36 w-full h-36 bg-black flex lg:ml-32 sm:ml-0 px-72 rounded-md">
            <h1 className="absolute text-white text-xl font-bold -ml-20">Frete grátis</h1>
            <p className="absolute text-white -ml-20  mt-10 font-normal">Encontre os melhores pratos e <br /> economize na entrega</p>
            <p className="absolute -ml-96 pl-24  -mt-20 pt-3"><Image src={Frete.src} alt="Frete" width={324} height={280} /></p>
            <a href="#" className="absolute  justify-center flex mt-28  -ml-20"><Image src={Quero.src} alt="Quero Ver" width={15} height={15} /></a>
            <a href="#" className="absolute font-normal text-yellow-300 justify-center flex mt-16 pt-11 -ml-16">QUERO VER</a>
          </span>
        </div>
        <div className="justify-center flex lg:ml-96 ml-72 lg:pl-40 lg:-mt-40 pt-4">
          <span className="lg:justify-center lg:w-96 lg:h-36 w-full h-36 bg-black flex lg:ml-32 lg:px-72 rounded-md ">
            <p className="absolute -ml-72 pl-0 lg:-ml-96 lg:pl-32 lg:-mt-20 lg:pt-2 -mt-20 pt-2"><Image src={Pratos.src} alt="Pratos" width={320} height={290} /></p>
            <h1 className="absolute text-white text-xl font-bold -ml-20">Pratos até R$ 10</h1>
            <p className="absolute text-white sm:-ml-20 lg:ml-10 mt-10 font-normal">Os melhores pratos com um preço que <br /> cabe no bolso + o valor da entrega</p>
            <a href="#" className="absolute  justify-center flex mt-28 lg:-ml-52 sm:-ml-20"><Image src={Quero.src} alt="Quero Ver" width={15} height={15} /></a>
            <a href="#" className="absolute font-normal text-yellow-300 justify-center flex sm:mt-16 lg:mt-18 sm:pt-11 lg:-ml-32 lg:pl-4 lg:pt-10 sm:-ml-16">QUERO VER</a>
          </span>
        </div>
        <div className="mt-14">
          {/* footer */}
          <footer style={{ backgroundColor: '#1C1C1C' }} className="absolute w-full h-72">
            <div className="flex lg:px-32 lg:pt-12 sm:px-2 sm:pt-4 ">
              <a href="#">
                <Image src={Logo.src} alt="iDelivery" width={50} height={50} />
              </a>
            </div>
            <div className="flex lg:px-52 lg:-ml-4 sm:px-16 lg:-mt-32 sm:-mt-32 sm:pt-9 lg:pt-9">
              <p> <Image src={Name.src} alt="nome" width={120} height={120} /></p>
            </div>
            <h1 className="text-white lg:flex lg:px-32 sm:px-2 font-normal lg:-mt-4 sm:-mt-8 ">Compare preços e ofertas dos <br /> principais apps de delivery</h1>
            <div className="text-white lg:px-96 sm:px-4 sm:pt-4 lg:ml-28 lg:-mt-32">
              <p className="lg:font-bold sm:font-semibold">INSTITUCIONAL</p>
              <p className="lg:mt-2 sm:mt-1">Sobre o iDeliver</p>
              <p className="lg:mt-2 sm:mt-1">Termos de uso</p>
              <p className="lg:mt-2 sm:mt-1">Política de Privacidade</p>
              <p className="lg:mt-2 sm:mt-1">Trabalhe Conosco</p>
            </div>
            <div className="text-white  lg:px-96 sm:px-52 sm:-mt-40  sm:pt-7 lg:ml-96 lg:-mt-40 lg:pt-2">
              <p className="lg:font-bold sm:font-semibold">AJUDA</p>
              <p className="lg:mt-2 sm:mt-1">F.A.Q</p>
              <p className="lg:mt-2 sm:mt-1">Central de Relacionamento</p>
              <p className="lg:mt-2 sm:mt-1">Como faço um pedido</p>
              <p className="lg:mt-2 sm:mt-1">Como aparecer no iDeliver</p>
            </div>
            <div className="justify-end  sm:-mt-64 sm:mr-10 flex lg:-mt-40 lg:pt-2 lg:mr-40">
              <h1 className="text-white lg:font-bold sm:font-semibold">BAIXE O APLICATIVO</h1>
            </div>
            <div className="justify-end m:ml-32 flex lg:mr-40">
              <a className="lg:-mt-3 lg:mr-14 sm:-mt-6 sm:mr-14" href="#"><Image src={PlayStore.src} alt="Play Store" width={100} height={100} /></a>
            </div>
            <div className="justify-end sm:-mt-16 sm:ml-72 sm:pl-9 lg:flex lg:mt-6 lg:mr-40">
              <a className="lg:-mt-20 lg:mr-14 sm:ml-40 " href="#"><Image src={AppleStore.src} alt="Apple Store" width={100} height={100} /></a>
            </div>
            <div className="justify-end flex lg:-mt-6 lg:pt-3 lg:mr-32 sm:-mt-4 sm:pt-6 sm:mr-2">
              <h1 className="text-white lg:font-bold sm:font-semibold ">NOSSAS MÍDIAS SOCIAIS</h1>
            </div>
            <div className="justify-end flex lg:mr-32 lg:gap-x-8 sm:mr-5 sm:gap-x-6">
              <a href="#"><Image src={Facebook.src} alt="Facebook" width={20} height={20} /></a>
              <a href="#"><Image src={Instagram.src} alt="Instagram" width={20} height={20} /></a>
              <a href="#"><Image src={Twitter.src} alt="Twitter" width={25} height={25} /></a>
              <a href="#"><Image src={Youtube.src} alt="Youyube" width={25} height={25} /></a>
            </div>
          </footer>
        </div>
      </div >




    </>
  )
}
