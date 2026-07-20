import Image from 'next/image';
import Background from "@/public/background-register.png"
import Link from 'next/link';
import { ShopingCart, Shop, Buyer, Email, Phone, Lock, SheldCheck } from '@/components/UI-icon/icons';
import Logo from "@/public/logo.svg"


export default function Register() {
    return (
        <div className="min-h-screen w-full bg-linear-to-t from-white to-white/30 relative">
            <div className='absolute inset-0 -z-10'>
                <Image
                    src={Background}
                    fill
                    priority
                    className='object-center object-cover'
                    alt='Background'
                />
            </div>
            <div className='flex flex-col w-full justify-center h-screen'>
                <div className='z-10'>
                    <Image
                        src={Logo}
                        alt='Logo'
                        className='mx-auto'
                    />
                </div>
                <div className='mt-4 mb-4 w-full h-fit bg-white rounded-lg border border-[#BABCC3] px-10 py-5 max-w-153 max-h-208 mx-auto text-center flex flex-col gap-3'>
                    <div>
                        <h2 className='text-[32px] text-[#313440]'>Регистрация</h2>
                        <h2 className='text-[20px]'>Кто вы?</h2>
                    </div>
                    <div className='flex gap-2.5'>
                        <div className='bg-[#F3F6EF] border border-[#4F6B4F] flex flex-col gap-2.5 items-center py-5 px-4.5 rounded-lg'>
                            <ShopingCart width="unset" height="unset" className='text-[#528731] w-15' />
                            <h2 className='font-bold text-[24px] text-[#313440]'>Покупатель</h2>
                            <p className='text-[14px] text-[#313440]'>Покупаю средства защиты растений</p>
                        </div>
                        <div className='bg-[#FDF9F0] border border-[#D4A34D33] flex flex-col gap-2.5 items-center py-5 px-4.5 rounded-lg'>
                            <Shop width="unset" height="unset" className='text-[#528731] w-15' />
                            <h2 className='font-bold text-[24px] text-[#313440]'>Продавец</h2>
                            <p className='text-[14px] text-[#313440]'>Продаю средства защиты растений</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2.5'>
                        <div className='bg-white border border-[#BABCC3] py-5 px-3.75 rounded-lg flex items-center gap-2.5'>
                            <Buyer className='text-[#7E8290] w-5 h-5' />
                            <input type="text" placeholder='Имя / Название компании' className='placeholder:text-[14px] placeholder:text-[#313440]/60 text-[14px] text-[#313440] w-full focus:outline-none focus:ring-2 focus:ring-transparent' />
                        </div>
                        <div className='bg-white border border-[#BABCC3] py-5 px-3.75 rounded-lg flex items-center gap-2.5'>
                            <Email className='text-[#7E8290] w-5 h-5' />
                            <input type="mail" placeholder='Email' className='placeholder:text-[14px] placeholder:text-[#313440]/60 text-[14px] text-[#313440] w-full focus:outline-none focus:ring-2 focus:ring-transparent' />
                        </div>
                        <div className='bg-white border border-[#BABCC3] py-5 px-3.75 rounded-lg flex items-center gap-2.5'>
                            <Phone />
                            <input type="text" placeholder='Телефон' className='placeholder:text-[14px] placeholder:text-[#313440]/60 text-[14px] text-[#313440] w-full focus:outline-none focus:ring-2 focus:ring-transparent' />
                        </div>
                        <div className='bg-white border border-[#BABCC3] py-5 px-3.75 rounded-lg flex items-center gap-2.5'>
                            <Lock />
                            <input type="text" placeholder='Пароль' className='placeholder:text-[14px] placeholder:text-[#313440]/60 text-[14px] text-[#313440] w-full focus:outline-none focus:ring-2 focus:ring-transparent' />
                        </div>
                        <div className='bg-white border border-[#BABCC3] py-5 px-3.75 rounded-lg flex items-center gap-2.5'>
                            <Lock />
                            <input type="text" placeholder='Подтвердите пароль' className='placeholder:text-[14px] placeholder:text-[#313440]/60 text-[14px] text-[#313440] w-full focus:outline-none focus:ring-2 focus:ring-transparent' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2.5'>
                        <div className='flex flex-col gap-2.75 text-center mt-3.75'>
                            <button className='text-center bg-[#4F6B4F] text-white text-[20px] w-full rounded-lg py-2.5 px-3.75'><p>Создать аккаунт</p></button>
                            <div className='flex gap-2.5 justify-center items-center'>
                                <SheldCheck className='text-[#7E8290] w-[17.2px] h-5' />
                                <p className='text-[15px] text-[#7E8290]'>Восстановление доступа доступно по email и телефону</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center mt flex justify-center gap-1 items-center'>
                    <h3 className='text-[18px] text-[#7E8290]'>Уже есть аккаунт?  </h3>
                    <Link href="login"><span className='text-[#528731] underline'>Войти</span></Link>
                </div>
            </div>
        </div>
    )
}