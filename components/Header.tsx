'use client';


import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Logo from "@/public/logo.svg"
import { useAuth } from '@/hooks/useAuth';

import { Notification, ShopingCart, UserIcon, Search, Profile, Box, Setings, Exit } from "./UI-icon/icons";


// import {useCartStore} from "@/store/useCartStore";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { user, loading, isGuest, isBuyer, isSeller, logout } = useAuth();

    if (loading) {
        return (
            <header className="w-full h-16 bg-white border-b border-[#BABCC3] px-10 flex items-center justify-between">
                <div className="w-32 h-6 bg-gray-200 animate-pulse rounded" />
                <div className="w-24 h-8 bg-gray-200 animate-pulse rounded-lg" />
            </header>
        );
    }



    return (
        <header>
            <div className="flex justify-between max-w-360 px-33 py-3.75">
                <div className="flex items-center gap-2">
                    <Link href="/">
                        {/* <h2 className="font-bold text-3xl">.Logo</h2> */}
                        <Image src={Logo} alt="logo" />
                    </Link>
                    <button type="button" title="Categorii" onClick={() => { setIsOpen((prev) => !prev); }}>
                        <div>
                            <details className="relative z-100">
                                <summary className="rounded-lg text-white font-bold block w-full" >
                                    <div className={isOpen ? 'bg-[#4F6B4F] px-3.5 py-1.75 rounded-[9px] text-white font-bold flex items-center gap-2 text-[12px]' : 'bg-[#4F6B4F] px-3.5 py-1.75 rounded-[9px] text-white font-bold flex items-center gap-2 text-[12px]'}>
                                        <div className="flex flex-col gap-0.75 mb-0.5">
                                            <span className="block bg-white h-px w-3.5 rounded-2xl"></span>
                                            <span className={isOpen ? 'block bg-white h-px rounded-2xl w-1.5 transition-all duration-300' : 'block bg-white h-px rounded-2xl w-3.5 transition-all duration-300'}></span>
                                            <span className={isOpen ? 'block bg-white h-px w-2.5 rounded-2xl transition-all duration-300' : 'block bg-white h-px w-3.5 rounded-2xl transition-all duration-300'}></span>
                                        </div>
                                        Каталог товаров
                                    </div>
                                </summary>
                                <div className="absolute bg-white border border-[#4F6B4F] rounded-lg p-5 shadow-xl shadow-zinc-500/20 w-100 text-left mt-2">
                                    <div className="flex items-center border border-[#BABCC3] rounded-[5px]" onClick={(e) => e.stopPropagation()}>
                                        <input type="text" placeholder="Поиск..." className=" focus:outline-none focus:ring-2 focus:ring-transparent w-full text-[12px] pl-4 py-2.5 placeholder:text-[12px]" />
                                        {/* <span className="h-5 bg-zinc-300 w-px mr-2 block"></span> */}
                                        <div className="pr-2.5 text-[#BABCC3]"><Search /></div>
                                    </div>
                                    <div className=" text-[#7E8290] flex items-center text-[12px] justify-between hover:bg-zinc-300 hover:rounded hover:px-2 hover:mt-2 py-2.5"><p>Пестициды </p><IoIosArrowForward className="text-[#4F6B4F]" /></div>
                                    <span className="w-full bg-zinc-400/50 h-px block"></span>
                                    <div className=" text-[#7E8290] flex items-center text-[12px] justify-between hover:bg-zinc-300 hover:rounded hover:px-2 py-2.5"><p>Биопрепараты</p><IoIosArrowForward className="text-[#4F6B4F]" /></div>
                                    <span className="w-full bg-zinc-400/50 h-px block"></span>
                                    <div className=" text-[#7E8290] flex items-center text-[12px] justify-between hover:bg-zinc-300 hover:rounded hover:px-2 py-2.5"><p>Удобрения</p><IoIosArrowForward className="text-[#4F6B4F]" /></div>
                                    <span className="w-full bg-zinc-400/50 h-px block"></span>
                                    <div className=" text-[#7E8290] flex items-center text-[12px] justify-between hover:bg-zinc-300 hover:rounded hover:px-2 py-2.5"><p>Семена</p><IoIosArrowForward className="text-[#4F6B4F]" /></div>
                                </div>
                            </details>
                        </div>
                    </button>
                </div>
                <div>
                    {isGuest && (
                        <div className="items-center gap-3 hidden lg:flex">
                            <button className="text-[18px] bg-[#EAEBED] p-2 rounded-full" type="button" title="Notificări"><Notification className="text-[#292D32]" /></button>
                            <button className="text-[18px] bg-[#EAEBED] p-2 rounded-full" type="button" title="Coș"><ShopingCart className="text-[#292D32]" /></button>
                            <div>
                                <details className="relative z-10 group">
                                    <summary className="cursor-pointer list-none flex items-center gap-1 text-[#4F6B4F] text-[14px] font-bold border-[#4F6B4F] border-2 rounded-lg px-3 py-1">RU
                                        <div className="transition-transform duration-100 group-open:rotate-180">
                                            <IoIosArrowDown />
                                        </div>
                                    </summary>

                                    <div className="absolute rounded-lg bg-white w-full px-2.5 py-3.75 shadow mt-2 border border-[#4F6B4F]">
                                        <button type="button" className="block w-full text-center text-[#4F6B4F]">
                                            RU
                                        </button>
                                        <span className="w-full bg-zinc-400/50 h-px block"></span>
                                        <button type="button" className="block w-full text-center mt-0.5 opacity-40">
                                            RO
                                        </button>
                                    </div>
                                </details>
                            </div>
                            <button className="bg-[#4F6B4F] px-2.5 py-1.5 rounded-lg text-white font-bold text-[12px]" type="button">
                                <Link href="login" className="flex items-center gap-2"><UserIcon className="text-[14px]" /> Войти</Link>
                            </button>
                        </div>
                    )}
                    {isBuyer && user && (
                        <div className="flex gap-3">
                            <div>
                                <details className="relative z-10 group">
                                    <summary className="cursor-pointer list-none flex items-center gap-1 text-[#4F6B4F] text-[14px] font-bold border-[#4F6B4F] border-2 rounded-lg px-3 py-1">RU
                                        <div className="transition-transform duration-100 group-open:rotate-180">
                                            <IoIosArrowDown />
                                        </div>
                                    </summary>

                                    <div className="absolute rounded-lg bg-white w-full px-2.5 py-3.75 shadow mt-2 border border-[#4F6B4F]">
                                        <button type="button" className="block w-full text-center text-[#4F6B4F]">
                                            RU
                                        </button>
                                        <span className="w-full bg-zinc-400/50 h-px block"></span>
                                        <button type="button" className="block w-full text-center mt-0.5 opacity-40">
                                            RO
                                        </button>
                                    </div>
                                </details>
                            </div>
                            <div>
                                <details className="relative z-10 group">
                                    <summary className="cursor-pointer list-none flex items-center gap-1 bg-[#4F6B4F] rounded-lg text-white px-2.5 py-1.5">
                                        <UserIcon className="text-[14px]" />
                                        <div className="transition-transform duration-100 group-open:rotate-180">
                                            <IoIosArrowDown />
                                        </div>
                                    </summary>
                                    <div className="absolute w-fit flex flex-col gap-2.5 rounded-lg bg-white p-5 shadow mt-2 border border-[#4F6B4F]">
                                        <div className="flex gap-2.5 cursor-pointer">
                                            <Profile />
                                            <p className="text-[#7E8290] text-[14px]">Профиль</p>
                                        </div>
                                        <div className="flex gap-2.5 w-full cursor-pointer">
                                            <Box />
                                            <p className="text-[#7E8290] text-[14px] text-nowrap">Мои заказы</p>
                                        </div>
                                        <div className="flex gap-2.5 cursor-pointer">
                                            <Setings />
                                            <p className="text-[#7E8290] text-[14px]">Настройки</p>
                                        </div>
                                        <div className="flex gap-2.5 cursor-pointer" onClick={logout}>
                                            <Exit />
                                            <p className="text-[#7E8290] text-[14px]">Выйти</p>
                                        </div>
                                    </div>
                                </details>
                            </div>
                        </div >
                    )}

                    {isSeller && user && (
                        <div className="flex gap-3">
                            <div>
                                <details className="relative z-10 group">
                                    <summary className="cursor-pointer list-none flex items-center gap-1 text-[#4F6B4F] text-[14px] font-bold border-[#4F6B4F] border-2 rounded-lg px-3 py-1">RU
                                        <div className="transition-transform duration-100 group-open:rotate-180">
                                            <IoIosArrowDown />
                                        </div>
                                    </summary>

                                    <div className="absolute rounded-lg bg-white w-full px-2.5 py-3.75 shadow mt-2 border border-[#4F6B4F]">
                                        <button type="button" className="block w-full text-center text-[#4F6B4F]">
                                            RU
                                        </button>
                                        <span className="w-full bg-zinc-400/50 h-px block"></span>
                                        <button type="button" className="block w-full text-center mt-0.5 opacity-40">
                                            RO
                                        </button>
                                    </div>
                                </details>
                            </div>
                            <div>
                                <details className="relative z-10 group">
                                    <summary className="cursor-pointer list-none flex items-center gap-1 bg-[#4F6B4F] rounded-lg text-white px-2.5 py-1.5">
                                        <UserIcon className="text-[14px]" />
                                        <div className="transition-transform duration-100 group-open:rotate-180">
                                            <IoIosArrowDown />
                                        </div>
                                    </summary>
                                    <div className="absolute w-fit flex flex-col gap-2.5 rounded-lg bg-white p-5 shadow mt-2 border border-[#4F6B4F]">
                                        <div className="flex gap-2.5 cursor-pointer">
                                            <Profile />
                                            <p className="text-[#7E8290] text-[14px]">Профиль</p>
                                        </div>
                                        <div className="flex gap-2.5 w-full cursor-pointer">
                                            <Box />
                                            <p className="text-[#7E8290] text-[14px] text-nowrap">Мои товары</p>
                                        </div>
                                        <div className="flex gap-2.5 cursor-pointer">
                                            <Setings />
                                            <p className="text-[#7E8290] text-[14px]">Настройки</p>
                                        </div>
                                        <div className="flex gap-2.5 cursor-pointer" onClick={logout}>
                                            <Exit />
                                            <p className="text-[#7E8290] text-[14px]">Выйти</p>
                                        </div>
                                    </div>
                                </details>
                            </div>
                        </div >
                    )}
                </div >
            </div >
        </header >
    )
}