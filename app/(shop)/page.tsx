'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { IoIosArrowForward } from "react-icons/io";
// import { FaRegUser } from "react-icons/fa";

import { Autoplay, Pagination } from 'swiper/modules';

// import { LuShieldCheck } from "react-icons/lu";
// import { TbTruckDelivery } from "react-icons/tb";
// import { LuLeaf } from "react-icons/lu";
// import { FaHeadphonesSimple } from "react-icons/fa6";
// import { MdStorefront } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { CiLock } from "react-icons/ci";

import { ImCheckmark } from "react-icons/im";

import Image from 'next/image'

import Pesticide from '@/public/content/Пестициды.jpg'
import Biopreporat from '@/public/content/Биопрепараты.webp'
import Semena from '@/public/content/Семена.webp'
import Udobrenia from '@/public/content/Удобрения.webp'
import Drugoe from '@/public/content/Другое.webp'
import Trava from '@/public/trava.webp'
// import Slide1 from '@/public/slider/1.webp'
import Slide2 from '@/public/slider/2.webp'
// import Slide3 from '@/public/slider/3.webp'
import { useState } from 'react';
import Link from 'next/link';
import { SheldCheck, TruckDeliver, Leaf, Headphones, Buyer, SalesMan } from '@/components/UI-icon/icons';
// import { register } from 'module';


export default function Home() {
  const [cestion, setCestion] = useState<number | null>(null)
  // const [isOpen, setIsOpen] = useState(false)

  const faqData = [
    { id: 1, q: "Как оформить заказ?", a: "Добавьте товары в корзину и нажмите «Оформить заказ». Заполните контактные данные, адрес доставки и при необходимости оставьте комментарий. После отправки заявки автоматически откроется чат с продавцом, где вы сможете обсудить детали заказа.", e: "Когда продавец подтвердит заказ и укажет условия доставки, он появится в разделе «Мои заказы», а его статус будет обновляться по мере выполнения." },
    { id: 2, q: "Какие способы оплаты доступы?", a: "Способ оплаты определяется по соглашению сторон и указывается в договоре, заключаемом между продавцом и покупателем.", e: "В зависимости от условий продавца возможна оплата банковским переводом, наличными, безналичным расчетом или иным согласованным способом." },
    { id: 3, q: "Как осуществляется доставка?", a: "Условия доставки согласовываются между продавцом и покупателем и фиксируются в договоре.", e: "В договоре указываются способ доставки, сроки, стоимость, а также сторона, ответственная за транспортировку товара." },
    { id: 4, q: "Как осуществляется возврат товара и тары?", a: "Порядок возврата товара, неиспользованной продукции и возвратной тары определяется условиями договора между продавцом и покупателем.", e: "До оформления заказа рекомендуем внимательно ознакомиться с условиями договора и согласовать все вопросы, связанные с возможностью возврата товара, тары и иными обязательствами сторон." },
  ]

  const handleToggle = (id: number) => {
    setCestion(cestion === id ? null : id);
  };
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
            className="mySwiper h-97.75 rounded-xl [&_.swiper-pagination]:h-68.25 [&_.swiper-pagination]:flex [&_.swiper-pagination]:flex-col [&_.swiper-pagination]:justify-around [&_.swiper-pagination]:gap-2.5 [&_.swiper-pagination]:left-0! [&_.swiper-pagination]:ml-32 [&_.swiper-pagination-bullet]:h-[42.6]! [&_.swiper-pagination-bullet]:m-0! [&_.swiper-pagination-bullet]:w-1.75! [&_.swiper-pagination-bullet]:rounded-lg! [&_.swiper-pagination-bullet]:bg-[#FFFFFF]/50! [&_.swiper-pagination-bullet-active]:bg-white w-full!"
          >
            <SwiperSlide className='bg-zinc-400'><Image src={Slide2} alt='' className='w-full h-full object-cover' /></SwiperSlide>
            <SwiperSlide className='bg-zinc-400'><Image src={Slide2} alt='' className='w-full h-full object-cover' /></SwiperSlide>
            <SwiperSlide className='bg-zinc-400'><Image src={Slide2} alt='' className='w-full h-full object-cover' /></SwiperSlide>
            {/* <SwiperSlide className='bg-zinc-400 px-4 py-4'>Slide 4</SwiperSlide> */}
            <SwiperSlide className='bg-[#D9D9D9]'><Image src={Slide2} alt='' className='w-full h-full object-cover' /></SwiperSlide>

          </Swiper>
          <div className='z-20 absolute top-1/8 left-1/6'>
            <h2 className='text-[58px] font-bold text-[#313440] uppercase flex flex-col leading-none'>Все для защиты <span className='text-[58px] font-bold text-[#4F6B4F] uppercase leading-none'>вашего урожая</span></h2>
            <p className='max-w-113.5 mt-3.75'>Качественные пестициды, удобрения и семена от проверенных поставщиков </p>
            <div className='flex gap-2.5 mt-3.75'>
              <button className='bg-[#4F6B4F] rounded-lg px-8.75 py-2.5 text-white font-semibold'><Link href="catalog"><p>Каталог товаров</p></Link></button>
              <button className='border-2 border-[#313440] rounded-lg px-8.75 py-2.5 font-semibold text-[#313440]'><p>Узнать больше</p></button>
            </div>
          </div>
          <div className='max-w-360 px-33 py-3.75'>
            <div className='bg-white w-286 h-20 rounded-xl absolute z-10 border border-[#EAEBED] left-1/2 right-1/2 -bottom-2 -translate-x-1/2 flex justify-center gap-3.75 p-4 '>
              <div className='flex gap-4 items-center'>
                <div className='w-12.5 h-12.5 bg-[#EBF7E4] p-2.5 rounded-lg text-3xl text-[#4F6B4F] flex justify-center items-center'>
                  <SheldCheck />
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
                  <TruckDeliver />
                </div>
                <div className='w-40 flex items-center'>
                  <div className='w-full'>
                    <h2 className='text-[12px] font-bold'>Быстрая доставка</h2>
                    <p className='text-[10px] max-w-30'>Оперативная доставка по всей Молдове</p>
                  </div>
                  <span className='w-px h-10.25 bg-[#EAEBED] block'></span>
                </div>
              </div>
              <div className='flex gap-4 items-center'>
                <div className='w-12.5 h-12.5 bg-[#EBF7E4] p-2.5 rounded-lg text-3xl text-[#4F6B4F] flex justify-center items-center'>
                  <Leaf />
                </div>
                <div className='w-40 flex items-center'>
                  <div className='w-full'>
                    <h2 className='text-[12px] font-bold'>Широкий ассортимент</h2>
                    <p className='text-[10px] max-w-36'>Всё необходимое для защиты и питания растений</p>
                  </div>
                  <span className='w-px h-10.25 bg-[#EAEBED] block'></span>
                </div>
              </div>
              <div className='flex gap-4 items-center'>
                <div className='w-12.5 h-12.5 bg-[#EBF7E4] p-2.5 rounded-lg text-3xl text-[#4F6B4F] flex justify-center items-center'>
                  <Headphones />
                </div>
                <div className='w-40 flex items-center'>
                  <div>
                    <h2 className='text-[12px] font-bold'>Поддержка экспертов</h2>
                    <p className='text-[10px]'>Профессиональная консультация по выбору препаратов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className='max-w-360 px-33 pt-5 pb-2.5 '>
          <div className='font-bold text-[32px] text-[#313440]'>
            <h2>Категории товаров</h2>
          </div>
          <div className='flex gap-3.75 justify-between w-full mt-3'>
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
                <div className='bg-[#C8E6CA] rounded-full p-2.5 w-17.5 h-17.5 flex justify-center items-center text-4xl text-[#4F6B4F] '><Buyer /></div>
                <div className='w-82.5'>
                  <h2 className='font-bold text-[18px] text-[#4F6B4F]'>Покупателям</h2>
                  <p className='text-[12px] text-[#313440]'>Зарегистрируйтесь как покупатель, чтобы совершать заказы и получать доступ к лучшим предложениям.</p>
                  <button className='bg-[#4F6B4F] rounded-lg py-1.25 px-8.75 text-white text-[12px] mt-5'><Link href="register">Зарегистрироваться</Link></button>
                </div>
              </div>
              <Image src={Trava} alt='trava' className='absolute -bottom-27 -right-19.75 h-auto w-60' />
            </div>
            <div className='bg-[#EAEBED] w-full h-49.5 rounded-lg relative overflow-hidden'>
              <div className='flex mt-7.5 ml-7.5 gap-4'>
                <div className='bg-[#BABCC3] rounded-full p-2.5 w-17.5 h-17.5 flex justify-center items-center text-4xl text-[#313440] '><SalesMan /></div>
                <div className='w-82.5'>
                  <h2 className='font-bold text-[18px] text-[#313440]'>Продавцам и дистрибьюторам</h2>
                  <p className='text-[12px] text-[#313440]'>Вы поставщик пестицидов или дистрибьютор?
                    Зарегистрируйтесь, чтобы размещать товары и развивать свой бизнес.</p>
                  <button className='bg-[#313440] rounded-lg py-1.25 px-8.75 text-white text-[12px] mt-5'><Link href="register">Стать продавцом</Link></button>
                </div>
              </div>
              <Image src={Trava} alt='trava' className='absolute -bottom-27 -right-19.75 h-auto w-60 grayscale' />
            </div>
          </div>
        </section>
        <span className='bg-[#D9D9D9] h-0.75 w-full block mb-2.5'></span>
        <section className='pt-5 pb-15 px-33 flex justify-between w-full gap-15'>
          <div className='w-full flex flex-col gap-7.5'>
            <h2 className='text-[#313440] text-[32px] font-bold'>Часто задаваемые вопросы</h2>
            <div className='flex flex-col gap-3.75'>
              {faqData.map((item) => {
                const isOpen = cestion === item.id;
                return (
                  <div key={item.id} className='py-3.75 px-6.25 border border-[#92AD94] rounded-lg w-full flex flex-col justify-center cursor-pointer' onClick={() => handleToggle(item.id)}>
                    <div className='flex justify-between items-center'>
                      <h3 className='text-[18px] text-[#313440] font-semibold'>{item.q}</h3>
                      <CiCirclePlus className={`text-[25px] text-[#92AD94] transition-transform duration-500 ${isOpen ? 'hidden' : ''}`} />
                      <CiCircleMinus className={`text-[25px] text-[#92AD94] transition-transform duration-500 ${isOpen ? 'block' : 'hidden'}`} />
                    </div>
                    <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 h-0 mt-0'}`}>
                      <div className='overflow-hidden text-[#313440] text-[12px]'>
                        <div className='border-t-2 border-[#92AD94] px-1'>
                          <p className='mt-3'>{item.a}</p>
                          <br />
                          <p>{item.e}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='bg-[#EAEBED] rounded-lg p-7.5 w-full'>
            <h2 className='text-[#313440] text-[32px] font-semibold'>Не нашли ответ на вопрос?</h2>
            <p className='text-[16px] text-[#313440] w-103.5'>Оставьте заявку, мы свяжемся с вами и поможем с выбором </p>
            <form action="" className='mt-3.75'>
              <input type="text" placeholder='Ваш телефон' className='bg-white w-full rounded-lg px-3.75 py-3 border border-[#BABCC3] text-[14px] text-[#313440]' required />
              <textarea name="" placeholder='Задайте вопрос' id="" className='bg-white w-full rounded-lg border border-[#BABCC3] p-3.75 h-28.5 mt-2.5 text-[14px] text-[#313440]'></textarea>
              <div className="flex gap-2 relative mt-2.5">

                <input className=" appearance-none shrink-0 w-5 h-5 
          border border-[#BABCC3]
          rounded-md 
          bg-white
          focus:outline-none 
          flex items-center justify-center 
          cursor-pointer 
          transition-colors peer relative"  type="checkbox" name='date' value="" id="date" required />
                <ImCheckmark className='pointer-events-none text-[#313440] left-0.5 top-0.5 absolute opacity-0 peer-checked:opacity-100' />

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
