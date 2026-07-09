'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { IoIosArrowForward } from "react-icons/io";
import { CiUser } from "react-icons/ci";

import { Autoplay, Pagination } from 'swiper/modules';

import { GoShieldCheck } from "react-icons/go";
import { TbTruckDelivery } from "react-icons/tb";
import { BsLeaf } from "react-icons/bs";
import { GiHeadphones } from "react-icons/gi";
import { MdStorefront } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { CiLock } from "react-icons/ci";

import Image from 'next/image'

import Pesticide from '@/public/content/Пестициды.jpg'
import Biopreporat from '@/public/content/Биопрепараты.webp'
import Semena from '@/public/content/Семена.webp'
import Udobrenia from '@/public/content/Удобрения.webp'
import Drugoe from '@/public/content/Другое.webp'
import Trava from '@/public/trava.webp'
import Slide1 from '@/public/slider/1.webp'
import Slide2 from '@/public/slider/2.webp'
import Slide3 from '@/public/slider/3.webp'


export default function Home() {
  return (
    <div className="">
      <main >
        <div className='relative w-full h-full'>
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            speed={1000}
            pagination={{
              clickable: true,
            }}
            direction='vertical'
            loop={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper h-97.75 rounded-xl [&_.swiper-pagination]:h-68.25 [&_.swiper-pagination]:flex [&_.swiper-pagination]:flex-col [&_.swiper-pagination]:justify-around [&_.swiper-pagination]:gap-2.5 [&_.swiper-pagination]:!left-0 [&_.swiper-pagination]:ml-32 [&_.swiper-pagination-bullet]:!h-[42.6] [&_.swiper-pagination-bullet]:!m-0 [&_.swiper-pagination-bullet]:!w-1.75 [&_.swiper-pagination-bullet]:!rounded-[8px] [&_.swiper-pagination-bullet]:!bg-[#FFFFFF]/50 [&_.swiper-pagination-bullet-active]:!bg-white w-full"

          >
            <SwiperSlide className='bg-zinc-400'><Image src={Slide1} alt='' className='w-full h-full object-cover'/></SwiperSlide>
            <SwiperSlide className='bg-zinc-400'><Image src={Slide2} alt='' className='w-full h-full object-cover'/></SwiperSlide>
            <SwiperSlide className='bg-zinc-400'><Image src={Slide3} alt='' className='w-full h-full object-cover'/></SwiperSlide>
            {/* <SwiperSlide className='bg-zinc-400 px-4 py-4'>Slide 4</SwiperSlide> */}
            <SwiperSlide className='bg-[#D9D9D9]'></SwiperSlide>

          </Swiper>
          <div className='z-20 absolute top-1/6 left-1/8'>
            <h2 className='text-[58px] font-bold text-[#313440] uppercase flex flex-col leading-none'>Все для защиты <span className='text-[58px] font-bold text-[#4F6B4F] uppercase leading-none'>вашего урожая</span></h2>
            <p className='max-w-113.5 mt-3.75'>Качественные пестициды, удобрения и семена от проверенных поставщиков </p>
            <div className='flex gap-2.5 mt-3.75'>
              <button className='bg-[#4F6B4F] rounded-lg px-8.75 py-2.5 text-white font-semibold'><p>Каталог товаров</p></button>
              <button className='border-2 border-white rounded-lg px-8.75 py-2.5 text-white font-semibold'><p>Узнать больше</p></button>
            </div>
          </div>
          <div className='max-w-360 px-33 py-3.75'>
            <div className='bg-white w-286 h-20 rounded-xl absolute z-10 border border-[#EAEBED] left-1/2 right-1/2 -bottom-2 -translate-x-1/2 flex justify-center gap-3.75 p-4 '>
              <div className='flex gap-4 items-center'>
                <div className='w-12.5 h-12.5 bg-[#EBF7E4] p-2.5 rounded-lg text-3xl text-[#4F6B4F] flex justify-center items-center'>
                  <GoShieldCheck />
                </div>
                <div className='w-40 flex items-center'>
                  <div>
                    <h2 className='text-[12px] font-bold'>Проверенное качество</h2>
                    <p className='text-[10px]'>Только сертифицированная продукция</p>
                  </div>
                  <span className='w-px h-10.25 bg-[#EAEBED] block'></span>
                </div>
              </div>
              <div className='flex gap-4 items-center'>
                <div className='w-12.5 h-12.5 bg-[#EBF7E4] p-2.5 rounded-lg text-3xl text-[#4F6B4F] flex justify-center items-center'>
                  <TbTruckDelivery />
                </div>
                <div className='w-40 flex items-center'>
                  <div>
                    <h2 className='text-[12px] font-bold'>Быстрая доставка</h2>
                    <p className='text-[10px]'>Оперативная доставка по всей Молдове</p>
                  </div>
                  <span className='w-px h-10.25 bg-[#EAEBED] block'></span>
                </div>
              </div>
              <div className='flex gap-4 items-center'>
                <div className='w-12.5 h-12.5 bg-[#EBF7E4] p-2.5 rounded-lg text-3xl text-[#4F6B4F] flex justify-center items-center scale-x-[-1]'>
                  <BsLeaf />
                </div>
                <div className='w-40 flex items-center'>
                  <div>
                    <h2 className='text-[12px] font-bold'>Широкий ассортимент</h2>
                    <p className='text-[10px]'>Всё необходимое для защиты и питания растений</p>
                  </div>
                  <span className='w-px h-10.25 bg-[#EAEBED] block'></span>
                </div>
              </div>
              <div className='flex gap-4 items-center'>
                <div className='w-12.5 h-12.5 bg-[#EBF7E4] p-2.5 rounded-lg text-3xl text-[#4F6B4F] flex justify-center items-center'>
                  <GiHeadphones />
                </div>
                <div className='w-40 flex items-center'>
                  <div>
                    <h2 className='text-[12px] font-bold'>Поддержка экспертов</h2>
                    <p className='text-[10px]'>Профессиональная консультация по выбору препаратов</p>
                  </div>
                  {/* <span className='w-px h-10.25 bg-[#EAEBED] block'></span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className='max-w-360 px-33 py-5 '>
          <div className='font-bold text-[32px] text-[#313440]'>
            <h2>Категории товаров</h2>
          </div>
          <div className='flex gap-6.25 justify-between w-full mt-3'>
            <div className='bg-zinc-400 w-55.75 h-54 rounded-lg overflow-hidden relative'>
              <Image className='w-full object-cover h-full' src={Pesticide} alt={''} />
              <div className='h-10.25 w-full absolute  bottom-0.75 px-0.75'>
                <div className='bg-white w-full h-full rounded-lg flex justify-between items-center p-2.5'>
                  <h2 className='font-semibold text-[14px] text-[#313440]'>Пестициды</h2>
                  <div className='bg-[#4F6B4F] rounded-full text-white h-5.25 w-5.25 flex justify-center items-center pl-0.5'><IoIosArrowForward /></div>
                </div>
              </div>
            </div>
            <div className='bg-zinc-400 w-55.75 h-54 rounded-lg overflow-hidden relative'>
              <Image className='w-full object-cover h-full' src={Biopreporat} alt={''} />
              <div className='h-10.25 w-full absolute  bottom-0.75 px-0.75'>
                <div className='bg-white w-full h-full rounded-lg flex justify-between items-center p-2.5'>
                  <h2 className='font-semibold text-[14px] text-[#313440]'>Биопрепараты</h2>
                  <div className='bg-[#4F6B4F] rounded-full text-white h-5.25 w-5.25 flex justify-center items-center pl-0.5'><IoIosArrowForward /></div>
                </div>
              </div>
            </div>
            <div className='bg-zinc-400 w-55.75 h-54 rounded-lg overflow-hidden relative'>
              <Image className='w-full object-cover h-full' src={Udobrenia} alt={''} />
              <div className='h-10.25 w-full absolute  bottom-0.75 px-0.75'>
                <div className='bg-white w-full h-full rounded-lg flex justify-between items-center p-2.5'>
                  <h2 className='font-semibold text-[14px] text-[#313440]'>Удобрения</h2>
                  <div className='bg-[#4F6B4F] rounded-full text-white h-5.25 w-5.25 flex justify-center items-center pl-0.5'><IoIosArrowForward /></div>
                </div>
              </div>
            </div>
            <div className='bg-zinc-400 w-55.75 h-54 rounded-lg overflow-hidden relative'>
              <Image className='w-full object-cover h-full' src={Semena} alt={''} />
              <div className='h-10.25 w-full absolute  bottom-0.75 px-0.75'>
                <div className='bg-white w-full h-full rounded-lg flex justify-between items-center p-2.5'>
                  <h2 className='font-semibold text-[14px] text-[#313440]'>Семена</h2>
                  <div className='bg-[#4F6B4F] rounded-full text-white h-5.25 w-5.25 flex justify-center items-center pl-0.5'><IoIosArrowForward /></div>
                </div>
              </div>
            </div>
            <div className='bg-zinc-400 w-55.75 h-54 rounded-lg overflow-hidden relative'>
              <Image className='w-full object-cover h-full' src={Drugoe} alt={''} />
              <div className='h-10.25 w-full absolute  bottom-0.75 px-0.75'>
                <div className='bg-white w-full h-full rounded-lg flex justify-between items-center p-2.5'>
                  <h2 className='font-semibold text-[14px] text-[#313440]'>Другое</h2>
                  <div className='bg-[#4F6B4F] rounded-full text-white h-5.25 w-5.25 flex justify-center items-center pl-0.5'><IoIosArrowForward /></div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex gap-5 justify-between mt-5 mb-5'>
            <div className='bg-[#EBF7E4] w-full h-49.5 rounded-lg relative overflow-hidden'>
              <div className='flex mt-7.5 ml-7.5 gap-4'>
                <div className='bg-[#C8E6CA] rounded-full p-2.5 w-17.5 h-17.5 flex justify-center items-center text-4xl text-[#4F6B4F] '><CiUser /></div>
                <div className='w-82.5'>
                  <h2 className='font-bold text-[18px] text-[#4F6B4F]'>Покупателям</h2>
                  <p className='text-[12px] text-[#313440]'>Зарегистрируйтесь как покупатель, чтобы совершать заказы и получать доступ к лучшим предложениям.</p>
                  <button className='bg-[#4F6B4F] rounded-lg py-1.25 px-8.75 text-white text-[12px] mt-5'>Зарегистрироваться</button>
                </div>
              </div>
              <Image src={Trava} alt='trava' className='absolute -bottom-27 -right-19.75 h-auto w-60' />
            </div>
            <div className='bg-[#EAEBED] w-full h-49.5 rounded-lg relative overflow-hidden'>
              <div className='flex mt-7.5 ml-7.5 gap-4'>
                <div className='bg-[#BABCC3] rounded-full p-2.5 w-17.5 h-17.5 flex justify-center items-center text-4xl text-[#313440] '><MdStorefront /></div>
                <div className='w-82.5'>
                  <h2 className='font-bold text-[18px] text-[#313440]'>Продавцам и дистрибьюторам</h2>
                  <p className='text-[12px] text-[#313440]'>Вы поставщик пестицидов или дистрибьютор?
                    Зарегистрируйтесь, чтобы размещать товары и развивать свой бизнес.</p>
                  <button className='bg-[#313440] rounded-lg py-1.25 px-8.75 text-white text-[12px] mt-5'>Стать продавцом</button>
                </div>
              </div>
              <Image src={Trava} alt='trava' className='absolute -bottom-27 -right-19.75 h-auto w-60 grayscale' />
            </div>
            {/* <div className='bg-[#EAEBED] w-full h-49.5 rounded-lg'></div> */}
          </div>
        </section>
        <span className='bg-[#D9D9D9] h-0.75 w-full block my-2.5'></span>
        <section className='pt-5 pb-15 px-33 flex justify-between w-full gap-15'>
          <div className='w-full flex flex-col gap-7.5'>
            <h2 className='text-[#313440] text-[32px] font-bold'>Часто задаваемые вопросы</h2>
            <div className='flex flex-col gap-3.75'>
              <div className='flex justify-between items-center py-3.75 px-6.25 border border-[#BABCC3] rounded-lg w-full'>
                <h3 className='text-[18px] text-[#313440] font-semibold'>Как оформить заказ?</h3>
                <CiCirclePlus className='text-[25px] text-[#313440]' />
              </div>
              <div className='flex justify-between items-center py-3.75 px-6.25 border border-[#BABCC3] rounded-lg w-full'>
                <h3 className='text-[18px] text-[#313440] font-semibold'>Какие способы оплаты доступы?</h3>
                <CiCirclePlus className='text-[25px] text-[#313440]' />
              </div>
              <div className='flex justify-between items-center py-3.75 px-6.25 border border-[#BABCC3] rounded-lg w-full'>
                <h3 className='text-[18px] text-[#313440] font-semibold'>Как осуществляется доставка? </h3>
                <CiCirclePlus className='text-[25px] text-[#313440]' />
              </div>
              <div className='flex justify-between items-center py-3.75 px-6.25 border border-[#BABCC3] rounded-lg w-full'>
                <h3 className='text-[18px] text-[#313440] font-semibold'>Сколько времени занимает доставка?</h3>
                <CiCirclePlus className='text-[25px] text-[#313440]' />
              </div>
              <div className='flex justify-between items-center py-3.75 px-6.25 border border-[#BABCC3] rounded-lg w-full'>
                <h3 className='text-[18px] text-[#313440] font-semibold'>Можно ли вернуть товар?</h3>
                <CiCirclePlus className='text-[25px] text-[#313440]' />
              </div>
            </div>
          </div>
          <div className='bg-[#EAEBED] rounded-lg p-7.5 w-full'>
            <h2 className='text-[#313440] text-[32px] font-semibold'>Не нашли ответ на вопрос?</h2>
            <p className='text-[16px] text-[#313440] w-103.5'>Оставьте заявку, мы свяжемся с вами и поможем с выбором </p>
            <form action="" className='mt-3.75'>
              <input type="text" placeholder='Ваш телефон' className='bg-white w-full rounded-lg px-3.75 py-3 border border-[#BABCC3] text-[18px] text-[#313440]' />
              <textarea name="" placeholder='Задайте вопрос' id="" className='bg-white w-full rounded-lg border border-[#BABCC3] p-3.75 h-28.5 mt-2.5 text-[18px] text-[#313440]'></textarea>
              <div className="flex gap-2 relative mt-2.5">

                <input className=" appearance-none shrink-0 w-5 h-5 
          border border-[#BABCC3]
          rounded-md 
          bg-white
          focus:outline-none 
          flex items-center justify-center 
          cursor-pointer 
          transition-colors peer relative"  type="checkbox" name='date' value="" id="date" required />
                <svg
                  className="w-12 h-12 text-[#313440] pointer-events-none absolute opacity-0 peer-checked:opacity-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 48 55"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    d="M4 13l4 4L20 7"
                  />
                </svg>

                <label className="form-check-label text-[#313440] text-[12px]" htmlFor='date'> <p>Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности </p></label>
              </div>
              <p className='text-[12px] text-[#313440] flex gap-1 items-center mt-2.5'><CiLock className='text-[18px]' /><span className='ml-1.5'>Ваши данные защищены и не передаются третьим лицам</span></p>
              <button className='bg-[#4F6B4F] text-white w-full py-2.5 px-3.75 rounded-lg font-semibold tect-[20px] mt-2.5' ><p>Свяжитесь со мной</p></button>
            </form>
          </div>
        </section>

      </main>
    </div>
  );
}
