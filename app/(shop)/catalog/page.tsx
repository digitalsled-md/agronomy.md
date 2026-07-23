'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import CategoryFilter from '@/components/catalog/CategoryFilter';
import api from '@/lib/api';

interface Product {
    id: string | number;
    name: string;
    description: string;
    price: number | string;
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
                    products.map((product: Product) => (
                        <div key={product.id} className="border p-3.25 rounded-lg h-full overflow-hidden border-[#EAEBED] w-full flex flex-col justify-between">
                            <div className="bg-[#D9D9D9] rounded-lg h-38.75 w-full block mb-2 cover" />
                            <div className="flex flex-col justify-start h-full overflow-hidden">
                                <h2>{product.name}</h2>
                                <p className="">{product.description}</p>
                            </div>
                            <p className="text-[#528731]">{product.price} MDL</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default function Catalog() {
    return (
        <Suspense fallback={<p className="max-w-360 px-33 py-3.75 mx-auto">Загрузка каталога...</p>}>
            <CatalogContent />
        </Suspense>
    );
}