'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
    { href: '/Agreement', label: 'Политика конфиденциальности' },
    { href: '/Privacy', label: 'Пользовательское соглашение' },
    { href: '/Usage', label: 'Правила применения и хранения средств фитосанитарного назначения (СФН)' },
    { href: '/TermsSale', label: 'Правила продажи средств фитосанитарного назначения (СФН) на платформе FitoProtect' },
]

export default function Navigation() {
    const pathname = usePathname();
    return (
        <aside className="w-80 shrink-0 text-[#313440] border border-[#92AD941A] rounded-lg h-fit overflow-hidden">
            <div className='bg-[#92AD941A] py-2.5 px-3.75'>
                <h3 className="font-semibold text-[16px] tracking-wide">
                    Навигация
                </h3>
            </div>


            <nav className="flex flex-col gap-1.5">
                {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`text-sm rounded-xl py-2.5 px-3.75 transition-all duration-200 leading-relaxed block ${isActive
                                ? 'text-[#313440] underline underline-offset-4 decoration-[#313440]'
                                : 'text-[#7E8290] hover:text-[#313440]'
                                }`}
                        >
                            {item.label}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    )
}