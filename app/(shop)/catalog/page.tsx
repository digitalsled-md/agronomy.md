'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import CategoryFilter from '@/components/catalog/CategoryFilter';
import api from '@/lib/api';
import { AddToCartIcon } from '@/components/UI-icon/icons';
import Link from 'next/link';

interface Product {
    id: string | number;
    name: string;
    description: string;
    price: number;
    discount: number;
    price_with_discount: number;
    slug: string;
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
                const endpoint = category ? `/products/?category=${category}` : '/products/';
                const res = await api.get(endpoint);
                setProducts(res.data as Product[]);
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
            <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
                {loading ? (
                    <p>Загрузка товаров...</p>
                ) : (
                    products.map((product: Product) => {
                        const hasDiscount = product.price_with_discount < product.price;
                        const discountPercent = hasDiscount
                            ? Math.round(((product.price - product.price_with_discount) / product.price) * 100)
                            : 0;
                        return (
                            <div key={product.id} className="border p-3.25 rounded-lg h-full overflow-hidden border-[#EAEBED] w-full flex flex-col justify-between">
                                <Link href={`/catalog/${product.slug}`}>
                                <div className="bg-[#D9D9D9] rounded-lg h-38.75 w-full block mb-2 shrink-0 cover relative" >
                                    {hasDiscount && (
                                        <span className='bg-[#FF5757] rounded-[5px] text-white text-[12px] px-2.5 py-1 absolute right-2 top-2 font-semibold'>-{discountPercent}%</span>
                                    )}
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
                                        <p className="text-[#528731] font-semibold">{product.price_with_discount} MDL</p>
                                    </div>
                                    <button className="cursor-pointer p-1 hover:opacity-80 transition-opacity">
                                        <AddToCartIcon />
                                    </button>
                                </div>
                            </div>
            )

                    })
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