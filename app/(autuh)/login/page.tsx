'use client';
import Image from 'next/image';
import Background from "@/public/background-register.png"
import Logo from "@/public/logo.svg"
import { Email, Lock } from '@/components/UI-icon/icons';
import Link from 'next/link';
import { useState, type FormEvent } from 'react';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';



export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Axios сам превратит объект в JSON и отправит на https://api.fitoprotect.md/api/users/login/
            const response = await api.post('/users/login/', { email, password });

            // Данные от бэка (токены) лежат прямо в .data
            const { access, refresh } = response.data;

            // Сохраняем их
            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);

            // Улетаем на главную, задача выполнена!
            router.push('/');
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                alert(error.response?.data?.detail || 'Ошибка авторизации');
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
                <div className='z-10 mt-11.25'>
                    <Image
                        src={Logo}
                        alt='Logo'
                        className='mx-auto'
                    />
                </div>
                <div className='mt-11.25 w-full bg-white rounded-lg border border-[#BABCC3] px-12.5 py-10 max-w-153 max-h-208 mx-auto text-center flex flex-col gap-3.75'>
                    <form onSubmit={handleLogin}>
                        <h2 className='text-[32px] text-[#313440]'>Вход в аккаунт</h2>
                        <div className='flex flex-col gap-2.5'>
                            <div className='bg-white border border-[#BABCC3] py-5 px-3.75 rounded-lg flex items-center gap-2.5'>
                                <Email />
                                <input type="email" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='placeholder:text-[14px] placeholder:text-[#313440]/60 text-[14px] text-[#313440] w-full focus:outline-none focus:ring-2 focus:ring-transparent' />
                            </div>
                            <div className='bg-white border border-[#BABCC3] py-5 px-3.75 rounded-lg flex items-center gap-2.5'>
                                <Lock />
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Пароль' className='placeholder:text-[14px] placeholder:text-[#313440]/60 text-[14px] text-[#313440] w-full focus:outline-none focus:ring-2 focus:ring-transparent' />
                            </div>
                            <div className='flex flex-col gap-2.75 text-center mt-3.75'>
                                <button className='text-center bg-[#4F6B4F] text-white text-[20px] w-full rounded-lg py-2.5 px-3.75'><p>Войти</p></button>
                                <p className='text-[15px] text-[#7E8290]'>Забыли пароль?</p>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='text-center mt-8.75 flex justify-center gap-1 items-center'>
                    <h3 className='text-[18px] text-[#7E8290]'>Нет аккаунта? </h3>
                    <Link href="register"><span className='text-[#528731] underline'>Зарегистрироваться</span></Link>
                </div>
            </div>
        </div>
    )
}