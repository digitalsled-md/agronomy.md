import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className="bg-[#4F6B4F] text-white px-33 pt-6.25 rounded-t-lg pb-2 max-w-360">
            <div className="flex w-full justify-between items-start gap-2.5">
                <div className="flex justify-between w-full">
                    <div>
                        <Link href="/"><h2 className="font-bold text-3xl">.Logo</h2></Link>
                        <p className="text-[10px]">Все для сельского хозяйства</p>
                    </div>
                    <span className="bg-[#FFFFFF]/5 h-38 w-px block mr-10"></span>
                </div>
                <div className="flex w-full justify-between items-start min-w-122.25">
                    <div>
                        <h2 className="text-[14px] font-bold mb-4">Каталог</h2>
                        <div className="flex gap-1.25 flex-col">
                            <p className="text-[12px]">Пестициды</p>
                            <p className="text-[12px]">Биопрепараты</p>
                            <p className="text-[12px]">Удобрения</p>
                            <p className="text-[12px]">Семена</p>
                            <p className="text-[12px]">Другое</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-[14px] font-bold mb-4">Покупателю</h2>
                        <div className="flex gap-1.25 flex-col">
                            <p className="text-[12px]">Доставка и оплата</p>
                            <p className="text-[12px]">Гарантия и возврат</p>
                            <p className="text-[12px]">Бонусная программа</p>
                            <p className="text-[12px]">Оптовым клиентам</p>
                            <p className="text-[12px]">Частые вопросы</p>
                        </div>
                    </div>
                    <div >
                        <h2 className="text-[14px] font-bold mb-4">Компания</h2>
                        <div className="flex flex-col gap-1.25">
                            <p className="text-[12px]">О нас</p>
                            <p className="text-[12px]">Новости</p>
                            <p className="text-[12px]">Бренды</p>
                            <p className="text-[12px]">Контакты</p>
                        </div>
                    </div>
                </div>
                <span className="bg-[#FFFFFF]/5 h-38 w-px block ml-10"></span>
                <div className="w-full pl-15">
                    <h2 className="text-[14px] font-bold mb-4">Контакты</h2>
                    <div className="flex gap-1.25 flex-col">
                        <p className="text-[12px] flex items-center gap-1"> <FiPhone className="text-[16px]" />+373 337 75 948</p>
                        <p className="text-[12px] flex items-center gap-1 mt-1"><MdOutlineMailOutline className="text-[16px]" />agro.md@gmail.com</p>
                        <p className="text-[12px] flex items-center gap-1 mt-1"><FaRegCalendarAlt className="text-[16px]" />Пн-Пт: 8:00 - 18:00</p>
                    </div>
                </div>
            </div>
            <span className="bg-[#FFFFFF]/5 h-px w-full block mt-3"></span>
            <div className="grid grid-cols-4 gap-3 w-full mt-1">
                <p className="text-[12px] w-full">2026 Agro.md  - Все права защищены</p>
                <div className="flex items-center justify-start gap-4 col-span-2 -ml-3">
                    <p className="text-[12px]">Политика конфиденциальности</p>
                    <p className="text-[12px] ml-14">Пользовательское соглашение</p>
                </div>
            </div>


        </footer>
    )
}