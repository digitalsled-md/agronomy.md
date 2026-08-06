'use client';

import { use, useEffect, useState } from 'react';
import api from '@/lib/api';
import Link from 'next/link';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { ShopingCart, Notification, Arrow, Star } from "@/components/UI-icon/icons"
import { enrichProduct, type Product, type ProductDetail } from '@/lib/enrichProduct';
import Image from 'next/image';

// import './styles.css';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// interface ProductDetail {
//   id: number;
//   name: string;
//   slug: string;
//   description: string;
//   price: string;
//   discount: string;
//   price_with_discount: number;
//   has_discount: boolean;
//   stock: number;
//   category: { id: number; name: string };
//   subcategory?: { id: number; name: string };
//   cultures?: Array<{ id: number; name: string }>;
//   images?: Array<{ id: number; image: string }>;
// }

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/products/${slug}/`);
        const rawProduct = res.data as Product;

        const productWithStatuses = enrichProduct(rawProduct) as ProductDetail;
        setProduct(productWithStatuses);

      } catch (err) {
        console.error('Ошибка загрузки товара:', err);
      } finally {
        setLoading(false);
      }
    };

    void fetchProduct();
  }, [slug]);

  useEffect(() => {
    if (!product) return;

    window.dispatchEvent(
      new CustomEvent('setProductBreadcrumb', {
        detail: product.name,
      })
    );
  }, [product]);

  if (loading) {
    return <div className="max-w-6xl mx-auto p-10">Загрузка товара...</div>;
  }

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto p-10 text-center">
        <h1 className="text-xl font-bold">Товар не найден</h1>
        <Link href="/catalog" className="text-[#528731] underline mt-4 block">
          Вернуться в каталог
        </Link>
      </div>
    );
  }

  const hasDiscount = product.has_discount;
  // const hasDiscount = product.price_with_discount < product.price;
  const discountPercent = hasDiscount
    ? Math.round(((Number(product.price) - product.price_with_discount) / Number(product.price)) * 100)
    : 0;

  return (
    <div className="px-33 pb-7.5 w-full h-screen relative">
      <div className="flex gap-2.5 w-full justify-between">
        {/* swiper */}
        <div className='w-1/2 min-w-0 h-fit flex flex-row-reverse justify-between gap-2.5'>
          <Swiper
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 flex-1">
            <SwiperSlide>
              <div className="bg-[#D9D9D9] rounded-2xl h-96 w-full block overflow-hidden"> <Image src={product.image || "/no-image.png"} width={100} height={100} alt={product.name} className=" object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" /></div>
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] rounded-2xl flex items-center justify-center z-10">
                  <span className="bg-[#f9d0d0]/90 text-[#FF5B5B] text-sm font-semibold px-4 py-2 rounded-lg shadow-md border border-[#FF5B5B]">
                    Нет в наличии
                  </span>
                </div>
              )}
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            direction='vertical'
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper w-30"
          >
            <SwiperSlide >
              <div className="bg-[#D9D9D9] rounded-2xl h-full w-30 block items-center justify-center overflow-hidden"> <Image src={product.image || "/no-image.png"} width={70} height={70} alt={product.name} className=" object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" /> </div>
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] rounded-2xl flex items-center justify-center z-10">
                </div>
              )}

            </SwiperSlide>
            <SwiperSlide >
              <div className="bg-[#D9D9D9] rounded-2xl h-full w-30 block items-center justify-center overflow-hidden"> <Image src={product.image || "/no-image.png"} width={70} height={70} alt={product.name} className=" object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" /></div>
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] rounded-2xl flex items-center justify-center z-10">
                </div>
              )}
            </SwiperSlide>

          </Swiper>
        </div>
        {/*info block */}
        <div className="flex flex-col justify-between rounded-lg p-5 relative w-1/2 overflow-hidden">
          <div >
            {/* <div className="text-xs text-[#7E8290] font-medium mb-2 uppercase tracking-wider">
              {product.category?.name} {product.subcategory && `› ${product.subcategory.name}`}
            </div> */}
            <div className='flex items-center'>
              <div className='w-full flex justify-between items-center gap-2'>
                {product.isNew && product.inStock && (
                  <span className='bg-[#F4F4F5] flex items-center gap-1.5 rounded-[5px] text-[12px] px-2.5 py-1 mb-5  left-2 top-2 font-semibold text-[#528731]'><span className='bg-[#528731] rounded-full flex items-center justify-center w-4 h-4 text-white'>+</span>Новое</span>
                )}
                {product.isTopSale && product.inStock && (
                  <span className='bg-[#F4F4F5] flex items-center gap-1.5 rounded-[5px] text-[12px] px-2.5 py-1 mb-5  left-2 top-2 font-semibold text-[#0CB827]'><Star />Топ продаж</span>
                )}
                {hasDiscount && product.inStock && (
                  <span className="bg-[#FF5757] text-white text-xs font-bold px-2.5 py-1 mb-5  rounded-lg ml-auto">
                    -{discountPercent}%
                  </span>
                )}
              </div>
            </div>


            <h1 className="text-[36px] font-bold text-[#313440] leading-none mb-3">{product.name}</h1>
            <div className="flex flex-col shrink-0 mb-3">
              {/* {hasDiscount && (
                <span className="text-[11.38px] text-[#A25B40] line-through font-semibold leading-none whitespace-nowrap">
                  {Number(product.price)} MDL
                </span>
              )} */}
              <span className="text-[22px] font-semibold text-[#528731] leading-none whitespace-nowrap">
                {product.price_with_discount} MDL
              </span>

            </div>
            <p className='text-[#313440] text-[16px] font-semibold'>Описание</p>
            <p className="text-[#313440] text-sm leading-relaxed mb-6">{product.description}</p>
            {/* {product.cultures && product.cultures.length > 0 && (
              <div className="mb-6">
                <span className="text-xs text-[#7E8290] block mb-2">Применяется для культур:</span>
                <div className="flex flex-wrap gap-2">
                  {product.cultures.map((c) => (
                    <span key={c.id} className="bg-[#F0F1F5] text-[#313440] text-xs px-3 py-1 rounded-full font-medium">
                      {c.name}
                    </span>
                  ))}
                </div>
              </div>
            )} */}
          </div>
          <div className='flex w-full gap-2.5 items-center'>
            <div className="border border-[#EAEBED] p-2.5 rounded-lg w-fit flex-1 min-w-0">
              <div className="flex items-stretch gap-2.5">
                {product.inStock && (
                  <div className="flex border border-[#BABCC3] items-stretch rounded-lg overflow-hidden shrink-0">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-full h-full p-2.5 bg-[#D9D9D9] hover:bg-gray-100 text-[#BABCC3]"
                    >
                      <Arrow className={quantity > 1 ? 'text-[#4F6B4F]' : 'text-[#BABCC3]'} />
                    </button>

                    <span className="px-2.5 flex justify-center items-center text-[14px] text-[#313440] leading-none"><p>{quantity}</p></span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="p-2.5 bg-[#D9D9D9] hover:bg-gray-100 text-[#313440] font-bold h-full"
                    >
                      <Arrow className='transform rotate-180' />
                    </button>
                  </div>
                )}

                {!product.inStock && (
                  <div className="flex border-2 border-[#7E8290] bg-[#D9D9D9] items-stretch rounded-lg overflow-hidden shrink-0">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-full h-full p-2.5 bg-[#D9D9D9] hover:bg-gray-100 text-[#BABCC3]"
                    >
                      <Arrow className={'text-[#7E8290]'} />
                    </button>

                    <span className="px-2.5 flex justify-center items-center text-[14px] text-[#7E8290] leading-none"><p>{quantity}</p></span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="p-2.5 bg-[#D9D9D9] hover:bg-gray-100 text-[#7E8290] font-bold h-full"
                    >
                      <Arrow className='transform rotate-180' />
                    </button>

                  </div>
                )}
                {product.inStock && (
                  <div className='flex items-center gap-2.5 flex-1 min-w-0'>
                    <button className="flex-1 bg-[#4F6B4F] text-white text-[12px] font-medium py-1.5 px-5.5 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap h-9">
                      <ShopingCart className="h-4 w-4 shrink-0" />
                      <span>Добавить в корзину</span>
                    </button>
                    {/* <button className=' py-1.5 px-5.5 w-full whitespace-nowrap border rounded-lg text-[#528731] text-[12px] flex items-center gap-2'><Notification className='w-5 h-5' />Написать продавцу</button> */}
                    <button className="flex-1 border border-[#528731] text-[#528731] text-[12px] font-medium py-1.5 px-5.5 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap h-9">
                      <Notification className="w-4 h-4 shrink-0 " />
                      <span><p>Написать продавцу</p></span>
                    </button>
                  </div>
                )}
                {!product.inStock && (
                  <div className='flex items-center gap-2.5 flex-1 min-w-0'>
                    <button className="flex-1 bg-[#92AD94] text-[#EAEBED] text-[12px] font-medium py-1.5 px-5.5 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap h-9">
                      <ShopingCart className="h-4 w-4 shrink-0" />
                      <span>Добавить в корзину</span>
                    </button>
                    {/* <button className=' py-1.5 px-5.5 w-full whitespace-nowrap border rounded-lg text-[#528731] text-[12px] flex items-center gap-2'><Notification className='w-5 h-5' />Написать продавцу</button> */}
                    <button className="flex-1 border bg-[#EAEBED] border-[#92AD94] text-[#92AD94] text-[12px] font-medium py-1.5 px-5.5 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap h-9">
                      <Notification className="w-4 h-4 shrink-0 " />
                      <span><p>Написать продавцу</p></span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className='text-[#313440] text-[32px] font-bold mt-7'>Другие товары</h2>
    </div>
  );
}