'use client';
import Image from 'next/image';
import Background from "@/public/background-register.png"
import Link from 'next/link';
import { ShopingCart, Shop, Buyer, Email, Phone, Lock, SheldCheck, Bif } from '@/components/UI-icon/icons';
import Logo from "@/public/logo.svg"

import { useState, type FormEvent } from 'react';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';


export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState<'buyer' | 'seller'>('buyer');
    const router = useRouter();


    const handRegister = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Пароли не совпадают');
            return;
        }

        try {
            const response = await api.post('/users/register/', { email, password, username, phone, role });

            const { access, refresh } = response.data;

            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);

            router.push('/');
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                const errorData = error.response?.data;
                alert(errorData?.detail || errorData?.username?.[0] || errorData?.email?.[0] || 'Ошибка регистрации');
            } else {
                alert('Ошибка авторизации');
            }
        }
    };
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
                    <form onSubmit={handRegister}>
                        <div className='flex gap-2.5'>
                            <div onClick={() => setRole('buyer')} className={`relative cursor-pointer transition-all flex flex-col gap-2.5 items-center py-5 px-4.5 rounded-lg border-2 w-1/2 ${
                                    role === 'buyer' 
                                        ? 'bg-[#F3F6EF] border-[#4F6B4F]' 
                                        : 'bg-[#F3F6EF] border-[#4F6B4F]/20'
                                }`}>
                                    <div className={`bg-[#528731] w-7.5 h-7.5 py-2 px-1.75 right-2 top-2 rounded-full absolute ${role === 'buyer' ? 'block' : 'hidden'}`}><Bif /></div>
                                <ShopingCart width="unset" height="unset" className='text-[#528731] w-15' />
                                <h2 className='font-bold text-[24px] text-[#313440]'>Покупатель</h2>
                                <p className='text-[14px] text-[#313440]'>Покупаю средства защиты растений</p>
                            </div>
                            <div onClick={() => setRole('seller')} className={`relative cursor-pointer transition-all flex flex-col gap-2.5 items-center py-5 px-4.5 rounded-lg border-2 w-1/2 ${
                                    role === 'seller' 
                                        ? 'bg-[#FDF9F0] border-[#D4A34D]' 
                                        : 'bg-[#FDF9F0] border-[#D4A34D]/20'
                                }`}>
                                <div className={`bg-[#D4A34D] w-7.5 h-7.5 py-2 px-1.75 right-2 top-2 rounded-full absolute ${role === 'seller' ? 'block' : 'hidden'}`}><Bif /></div>
                                <Shop width="unset" height="unset" className='text-[#528731] w-15' />
                                <h2 className='font-bold text-[24px] text-[#313440]'>Продавец</h2>
                                <p className='text-[14px] text-[#313440]'>Продаю средства защиты растений</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2.5 mt-3.75'>
                            <div className='bg-white border border-[#BABCC3] py-5 px-3.75 rounded-lg flex items-center gap-2.5'>
                                <Buyer className='text-[#7E8290] w-5 h-5' />
                                <input required type="text" value={username}  onChange={(e) => setUserName(e.target.value)}  placeholder='Имя / Название компании' className='placeholder:text-[14px] placeholder:text-[#313440]/60 text-[14px] text-[#313440] w-full focus:outline-none focus:ring-2 focus:ring-transparent' />
                            </div>
                            <div className='bg-white border border-[#BABCC3] py-5 px-3.75 rounded-lg flex items-center gap-2.5'>
                                <Email className='text-[#7E8290] w-5 h-5' />
                                <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder='Email' className='placeholder:text-[14px] placeholder:text-[#313440]/60 text-[14px] text-[#313440] w-full focus:outline-none focus:ring-2 focus:ring-transparent' />
                            </div>
                            <div className='bg-white border border-[#BABCC3] py-5 px-3.75 rounded-lg flex items-center gap-2.5'>
                                <Phone />
                                <input required type="text" value={phone}  onChange={(e) => setPhone(e.target.value)}  placeholder='Телефон' className='placeholder:text-[14px] placeholder:text-[#313440]/60 text-[14px] text-[#313440] w-full focus:outline-none focus:ring-2 focus:ring-transparent' />
                            </div>
                            <div className='bg-white border border-[#BABCC3] py-5 px-3.75 rounded-lg flex items-center gap-2.5'>
                                <Lock />
                                <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Пароль' className='placeholder:text-[14px] placeholder:text-[#313440]/60 text-[14px] text-[#313440] w-full focus:outline-none focus:ring-2 focus:ring-transparent' />
                            </div>
                            <div className='bg-white border border-[#BABCC3] py-5 px-3.75 rounded-lg flex items-center gap-2.5'>
                                <Lock />
                                <input required type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Подтвердите пароль' className='placeholder:text-[14px] placeholder:text-[#313440]/60 text-[14px] text-[#313440] w-full focus:outline-none focus:ring-2 focus:ring-transparent' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2.5'>
                            <div className='flex flex-col gap-2.75 text-center mt-3.75'>
                                <button type="submit" className='text-center bg-[#4F6B4F] text-white text-[20px] w-full rounded-lg py-2.5 px-3.75'>Создать аккаунт</button>
                                <div className='flex gap-2.5 justify-center items-center'>
                                    <SheldCheck className='text-[#7E8290] w-[17.2px] h-5' />
                                    <p className='text-[15px] text-[#7E8290]'>Восстановление доступа доступно по email и телефону</p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='text-center mt flex justify-center gap-1 items-center'>
                    <h3 className='text-[18px] text-[#7E8290]'>Уже есть аккаунт?  </h3>
                    <Link href="login"><span className='text-[#528731] underline'>Войти</span></Link>
                </div>
            </div>
        </div>
    )
}