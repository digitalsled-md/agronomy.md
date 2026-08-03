import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import FooterLogo from "../public/logo-footer.svg";
import { Ai_Icon } from '@/components/UI-icon/icons';

export default function Footer() {
    return (
        <footer className="bg-[#4F6B4F] text-white px-33 pt-6.25 rounded-t-lg pb-2 max-w-360">
            <div className="flex w-full justify-between gap-2.5">
                <div className="flex justify-between w-full">
                    <div className="mr-10">
                        <Link href="/"><Image src={FooterLogo} alt="Logo" /></Link>
                    </div>
                    <span className="bg-[#FFFFFF]/5 h-38 w-px block mr-10"></span>
                </div>
                <div className="flex w-full justify-between items-start min-w-122.25">
                    <div>
                        <h2 className="text-[14px] font-bold mb-4">Пользователям</h2>
                        <div className="flex gap-1.25 flex-col">
                            <Link href="/Agreement"><p className="text-[12px]">Политика конфиденциальности</p></Link>
                            <Link href="/Privacy"><p className="text-[12px]">Пользовательское соглашение</p></Link>
                            <Link href="/Usage"><p className="text-[12px]">Правила применения и хранения СФН</p></Link>
                            <Link href="/TermsSale"><p className="text-[12px]">Правила продажи СФН</p></Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-[14px] font-bold mb-4">Пользователям</h2>
                        <div className="flex gap-1.25 flex-col">
                            <Link href="/Agreement"><p className="text-[12px]">Политика конфиденциальности</p></Link>
                            <Link href="/Privacy"><p className="text-[12px]">Пользовательское соглашение</p></Link>
                            <Link href="/Usage"><p className="text-[12px]">Правила применения и хранения СФН</p></Link>
                            <Link href="/TermsSale"><p className="text-[12px]">Правила продажи СФН</p></Link>
                        </div>
                    </div>
                </div>
                <span className="bg-[#FFFFFF]/5 h-38 w-px block ml-10"></span>
                <div className="w-full pl-15 flex flex-col justify-center">
                    {/* <h2 className="text-[14px] font-bold mb-4">Контакты</h2> */}
                    <div className="flex gap-1.25 flex-col ">
                        <p className="text-[12px] flex items-center gap-1"> <FiPhone className="text-[16px]" />+373 337 75 948</p>
                        <p className="text-[12px] flex items-center gap-1 mt-1"><MdOutlineMailOutline className="text-[16px]" />agro.md@gmail.com</p>
                        {/* <p className="text-[12px] flex items-center gap-1 mt-1"><FaRegCalendarAlt className="text-[16px]" />Пн-Пт: 8:00 - 18:00</p> */}
                    </div>
                </div>
            </div>
            <span className="bg-[#FFFFFF]/5 h-px w-full block mt-3"></span>
            <div className="flex items-center justify-between mt-3">
                <p className="text-[12px]">2026 Agro.md  - Все права защищены</p>
                <div className="flex items-center justify-start gap-7.5">
                    <p className="text-[12px] flex items-center gap-1"><FaRegCalendarAlt />АгроКалендарь</p>
                    <p className="text-[12px] flex items-center gap-1"><Ai_Icon /> AgroAssistant AI</p>
                </div>
                <p className="text-[12px] flex items-center gap-1">Разработка сайта: <span className="font-semibold">Digital Sled</span></p>
            </div>


        </footer>
    )
}