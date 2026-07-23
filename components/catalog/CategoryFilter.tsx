'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import api from '@/lib/api';

export interface Category {
    id: number;
    name: string;
    slug?: string;
}

export default function CategoryFilter() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);

    const activeCategory = searchParams.get('category') || 'all';

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const respons = await api.get('/categories');
                setCategories(respons.data);
            } catch (error) {
                console.error('Ошибка при загрузке категорий:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchCategory()
    }, []);

    const handleSelectCategory = (categoryId: string | number) => {
        const params = new URLSearchParams(searchParams.toString());

        if (categoryId === 'all') {
            params.delete('category');
        } else {
            params.set('category', String(categoryId));
        }

        router.push(`/catalog?${params.toString()}`);
    };

    if (loading) {
        return (
            <div className="flex items-center gap-3 overflow-x-auto py-2">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-10 w-28 bg-gray-200 animate-pulse rounded-xl" />
                ))}
            </div>
        );
    }
    return (
        <div className="flex items-center gap-3 overflow-x-auto py-5 scrollbar-none">
            <button
                onClick={() => handleSelectCategory('all')}
                className={`px-3.5 py-1.75 rounded-lg border text-[15px] font-medium transition-all whitespace-nowrap cursor-pointer ${activeCategory === 'all'
                    ? 'bg-[#92AD94] text-white border-white'
                    : 'bg-white text-[#7E8290] border-[#7E8290] hover:border-[#708670] hover:text-[#313440]'
                    }`}
            >
                Все
            </button>
            {categories.map((cat) => {
                const catValue = cat.slug || cat.id;
                const isActive = activeCategory === String(catValue);

                return (
                    <button
                        key={cat.id}
                        onClick={() => handleSelectCategory(catValue)}
                        className={`px-3.5 py-1.75 rounded-lg border text-[15px] font-medium transition-all whitespace-nowrap cursor-pointer ${isActive
                            ? 'bg-[#92AD94] text-white border-white'
                            : 'bg-white text-[#7E8290] border-[#BABCC3] hover:border-[#708670] hover:text-[#313440]'
                            }`}
                    >
                        {cat.name}
                    </button>
                );
            })}
        </div>
    );
}