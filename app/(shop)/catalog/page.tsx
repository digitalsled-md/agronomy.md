'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import CategoryFilter from '@/components/catalog/CategoryFilter';
import api from '@/lib/api';
import { AddToCartIcon, Star, BoxCatalog } from '@/components/UI-icon/icons';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
    id: string | number;
    name: string;
    description: string;
    price: number;
    discount: number;
    price_with_discount: number;
    category: { id: number; slug?: string; name: string };
    slug: string;
    inStock: boolean;
    isNew: boolean;
    isTopSale: boolean;
    image: string;
}

function CatalogContent() {
    const searchParams = useSearchParams();
    const category = searchParams.get('category');

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                //Фильтрацыя товара по категориям на бэкенде
                const endpoint = category ? `/products/?category=${category}` : '/products/';
                const res = await api.get(endpoint);
                // setProducts(res.data as Product[]);
                const setProductsData = res.data as Product[];

                const enrichedProducts = setProductsData.map((item, index) => ({
                    ...item,
                    inStock: item.inStock ?? index !== 1,
                    isNew: item.isNew ?? index % 2 === 0,
                    isTopSale: item.isTopSale ?? index === 0,
                }));

                // setProducts(enrichedProducts);
                
                //Фильтрацыя товара по категориям на фронтенде
                // const res = await api.get('/products/');
                // const all = res.data as Product[];
                // const filtered = category ? all.filter(p => p.category?.slug === category || String(p.category?.id) === category) : all;
                // setProducts(filtered);

                const sortedProducts = [...enrichedProducts].sort(
                    (a, b) => Number(b.inStock) - Number(a.inStock)
                );
                setProducts(sortedProducts);
            } catch (err) {
                console.error('Ошибка загрузки товаров:', err);
            } finally {
                setLoading(false);
            }
        };

        void fetchProducts();
    }, [category]);

    return (
        <div className="max-w-360 px-33 py-3.75 mx-auto">
            <CategoryFilter />
            <div className="mt-2.5 ">
                {loading ? (
                    <p>Загрузка товаров...</p>
                ) : products.length === 0 ? (
                    <div className='w-full h-screen bg-[#92AD941A] rounded-lg flex flex-col items-center justify-center max-h-138.75 gap-1.25'>
                        <BoxCatalog />
                        <p className='text-[#313440] text-[12px] '>В данной категории товары отсутствуют</p>
                        <Link href="/catalog"><button className='py-1.5 px-5.5 bg-[#4F6B4F] cursor-pointer rounded-lg text-white text-[12px]'>Посмотреть другие товары</button></Link>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5'>
                        {products.map((product: Product) => {
                            const hasDiscount = product.price_with_discount < product.price;
                            const discountPercent = hasDiscount
                                ? Math.round(((product.price - product.price_with_discount) / product.price) * 100)
                                : 0;
                            return (
                                <div key={product.id} className="border p-3.25 rounded-lg h-full overflow-hidden border-[#EAEBED] bg-[#92AD941A] w-full flex flex-col justify-between">
                                    <Link href={`/catalog/${product.slug}`}>
                                        <div className="bg-[#FFFFFF] border border-[#EAEBED] rounded-lg h-38.75 w-full block mb-2 shrink-0 cover relative" >
                                            {hasDiscount && (
                                                <span className='bg-[#FF5757] rounded-[5px] text-white text-[12px] px-2.5 py-1 absolute right-2 top-2 font-semibold'>-{discountPercent}%</span>
                                            )}
                                            {product.isNew && (
                                                <span className='bg-[#F4F4F5] flex items-center gap-1.5 rounded-[5px] text-[12px] px-2.5 py-1 absolute left-2 top-2 font-semibold text-[#528731]'><span className='bg-[#528731] rounded-full flex items-center justify-center w-4 h-4 text-white'>+</span>Новое</span>
                                            )}
                                            {product.isTopSale && (
                                                <span className='bg-[#F4F4F5] flex items-center gap-1.5 rounded-[5px] text-[12px] px-2.5 py-1 absolute left-2 top-2 font-semibold text-[#0CB827]'><Star />Топ продаж</span>
                                            )}
                                            {product.inStock ? (
                                                <span className='bg-transparent flex items-center gap-1.5 rounded-[5px] text-[12px] px-2.5 py-1 absolute left-2 bottom-2 font-semibold text-[#528731]'></span>
                                            ) : (
                                                <div className='bg-black/35 w-full h-full rounded-lg'>
                                                    <span className='bg-[#f9d0d0]/90 border border-[#FF5B5B] flex items-center gap-1.5 rounded-[5px] text-[12px] px-2.5 py-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-[#FF5B5B] z-20'>Нет в наличии</span>
                                                </div>

                                            )}
                                            <Image src={product.image || "/no-image.png"} width={50} height={50} alt={product.name} className=" object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                                        </div>
                                        <div className="flex flex-col justify-start grow overflow-hidden w-full">
                                            <h2 className='text-[#313440] text-[16px] font-bold line-clamp-1'>{product.name}</h2>
                                            <p className="text-[#313440] text-[12px] line-clamp-2">{product.description}</p>
                                        </div>
                                    </Link>
                                    <div className='flex items-end justify-between w-full pt-8 mt-auto'>
                                        <div className='w-full'>
                                            {hasDiscount && (
                                                <p className='text-[11.38px] text-[#A25B40] line-through font-semibold'>{product.price} MDL</p>
                                            )}
                                            <p className="text-[#528731] text-[18px] font-semibold">{product.price_with_discount} MDL</p>
                                        </div>
                                        {product.inStock ? (
                                            <button className="cursor-pointer p-1.5 hover:opacity-80 transition-opacity bg-white rounded-full">
                                                <AddToCartIcon className='text-[#528731]' />
                                            </button>
                                        ) : (
                                            <button className="cursor-pointer p-1.5 hover:opacity-80 transition-opacity bg-[#BABCC3] rounded-full">
                                                <AddToCartIcon className='text-[#528731]' />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                )}
            </div>
        </div >
    );
}

export default function Catalog() {
    return (
        <Suspense fallback={<p className="max-w-360 px-33 py-3.75 mx-auto">Загрузка каталога...</p>}>
            <CatalogContent />
        </Suspense>
    );
}