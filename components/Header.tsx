'use client';
// interface HeaderProps {
//     onOpenCart: () => void;
//     onOpenNotification: () => void;
// }

import Link from "next/link";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { TbShoppingCart } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BsSearch } from "react-icons/bs";


// import {useCartStore} from "@/store/useCartStore";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);



    return (
        <header>
            <div className="flex justify-between max-w-360 px-33 py-3.75">
                <div className="flex items-center gap-2">
                    <Link href="/"><h2 className="font-bold text-3xl">.Logo</h2></Link>
                    <button type="button" title="Categorii" onClick={() => { setIsOpen((prev) => !prev); }}>
                        <div>
                            <details className="relative z-100">
                                <summary className="rounded-lg text-white font-bold block w-full" >
                                    <div className={isOpen ? 'bg-[#4F6B4F] px-3.5 py-1.75 rounded-t-[9px] text-white font-bold flex items-center gap-2 text-[12px]' : 'bg-[#4F6B4F] px-3.5 py-1.75 rounded-[9px] text-white font-bold flex items-center gap-2 text-[12px]'}>
                                        <div className="flex flex-col gap-0.75 mb-0.5">
                                            <span className="block bg-white h-px w-3.5 rounded-2xl"></span>
                                            <span className={isOpen ? 'block bg-white h-px rounded-2xl w-1.5 transition-all duration-300' : 'block bg-white h-px rounded-2xl w-3.5 transition-all duration-300'}></span>
                                            <span className={isOpen ? 'block bg-white h-px w-2.5 rounded-2xl transition-all duration-300' : 'block bg-white h-px w-3.5 rounded-2xl transition-all duration-300'}></span>
                                        </div>
                                        Каталог товаров
                                    </div>
                                </summary>
                                <div className="absolute bg-white border border-zinc-500/30 rounded-b-lg rounded-tr-lg px-4 py-4 shadow-xl shadow-zinc-500/20 w-100 text-left">
                                    <div className="flex items-center border border-zinc-300 rounded-md  py-1 px-2 mb-3.75 mt" onClick={(e) => e.stopPropagation()}>
                                        <input type="text" placeholder="Поиск..." className=" focus:outline-none focus:ring-2 focus:ring-transparent w-full text-[12px]"  />
                                        <span className="h-5 bg-zinc-300 w-px mr-2 block"></span>
                                       <div className=""><BsSearch /></div>
                                    </div>
                                    <div className="px-2 font-bold flex items-center text-[12px] justify-between hover:bg-zinc-300 hover:rounded">Пестициды <IoIosArrowForward /></div>
                                    <span className="w-full bg-zinc-400/50 h-px block my-1"></span>
                                    <div className="px-2 font-bold flex items-center text-[12px] justify-between hover:bg-zinc-300 hover:rounded">Биопрепараты <IoIosArrowForward /></div>
                                    <span className="w-full bg-zinc-400/50 h-px block my-1"></span>
                                    <div className="px-2 font-bold flex items-center text-[12px] justify-between hover:bg-zinc-300 hover:rounded">Удобрения <IoIosArrowForward /></div>
                                    <span className="w-full bg-zinc-400/50 h-px block my-1"></span>
                                    <div className="px-2 font-bold flex items-center text-[12px] justify-between hover:bg-zinc-300 hover:rounded">Семена <IoIosArrowForward /></div>
                                </div>
                            </details>
                        </div>
                    </button>
                </div>
                <div className="flex items-center gap-3">
                    <button className="text-[18px] bg-[#EAEBED] p-2 rounded-full" type="button" title="Notificări"><MdOutlineNotificationsActive className="text-[#292D32]"/></button>
                    <button className="text-[18px] bg-[#EAEBED] p-2 rounded-full" type="button" title="Coș"><TbShoppingCart className="text-[#292D32]" /></button>
                    <div>
                        <details className="relative  z-10">
                            <summary className="cursor-pointer list-none flex items-center gap-1 text-[#4F6B4F] text-[14px] font-bold border-[#4F6B4F] border-2 rounded-lg px-3 py-1">RU <IoIosArrowDown /></summary>

                            <div className="absolute rounded bg-white w-full px-3 py-2 -left-px shadow top-10">
                                <button type="button" className="block w-full text-center">
                                    RU
                                </button>
                                <span className="w-full bg-zinc-400/50 h-px block"></span>
                                <button type="button" className="block w-full text-center mt-0.5">
                                    RO
                                </button>
                            </div>
                        </details>
                    </div>
                    <button className="bg-[#4F6B4F] px-2.5 py-1.5 rounded-lg text-white flex items-center gap-2 font-bold text-[12px]" type="button">
                        <FaRegUser className="text-[14px]" /> Войти
                    </button>
                </div>
            </div>
        </header>
    )
}