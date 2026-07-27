'use client';

import { use, useEffect, useState } from 'react';
import api from '@/lib/api';
import Link from 'next/link';

interface ProductDetail {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: string;
  discount: string;
  price_with_discount: number;
  has_discount: boolean;
  stock: number;
  category: { id: number; name: string };
  subcategory?: { id: number; name: string };
  cultures?: Array<{ id: number; name: string }>;
  images?: Array<{ id: number; image: string }>;
}

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/products/${id}/`);
        setProduct(res.data);
      } catch (err) {
        console.error('Ошибка загрузки товара:', err);
      } finally {
        setLoading(false);
      }
    };

    void fetchProduct();
  }, [id]);

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
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-[#D9D9D9] rounded-2xl h-96 w-full flex items-center justify-center overflow-hidden">

        </div>

        <div className="flex flex-col justify-between border-[#EAEBED] border rounded-lg p-5 relative">
          <div>
            {/* <div className="text-xs text-[#7E8290] font-medium mb-2 uppercase tracking-wider">
              {product.category?.name} {product.subcategory && `› ${product.subcategory.name}`}
            </div> */}
            <div className='w-full block h-5'>
              {hasDiscount && (
                <span className="bg-[#FF5757] text-white text-sm font-bold px-3 py-1 rounded-lg absolute top-4 right-4">
                  -{discountPercent}%
                </span>
              )}

            </div>


            <h1 className="text-[36px] font-bold text-[#313440] leading-none mb-5">{product.name}</h1>
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
          <div className="border border-[#BABCC3] py-2.5 px-5 rounded-lg">
            <div className="flex flex-col mb-6">
              {hasDiscount && (
                <span className="text-[11.38px] text-[#A25B40] line-through font-semibold leading-none">
                  {Number(product.price)} MDL
                </span>
              )}
              <span className="text-[18px] font-semibold text-[#528731] leading-none">
                {product.price_with_discount} MDL
              </span>

            </div>
            <div className="flex items-center gap-4">
              <p className='text-black text-[16px] font-semibold'>Количество: </p>
              <div className="flex items-center border border-[#BABCC3] h-fit rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className=" p-2.5 h-fit bg-[#D9D9D9] border-r border-r-[#BABCC3] hover:bg-gray-100 text-[#BABCC3] font-bold"
                >
                  <p className='rotate-90 leading-none'>{'>'} </p>
                </button>
                <span className="p-2.5 font-semibold text-[#313440] leading-none">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-2.5 bg-[#D9D9D9] hover:bg-gray-100 text-[#313440] font-bold"
                >
                 <p className='-rotate-90 leading-none'>{'>'} </p>
                </button>
              </div>

              <button className="flex-1 bg-[#4F6B4F] text-white py-1.75 px-3.5 rounded-xl font-bold hover:bg-[#3d543d] transition-colors cursor-pointer">
                В корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}