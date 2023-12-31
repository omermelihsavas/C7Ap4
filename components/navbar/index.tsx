"use client"

import React from 'react'
import { logout } from '@/redux/features/loginSlice';
import { AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';
import Image from 'next/image';

function Navbar() {
    const dispatch = useDispatch<AppDispatch>();

    const deleteCookie = () => {
        dispatch(logout());
    }

    return (
        <div className='h-[120px] px-[60px] flex items-center justify-between fixed top-0 w-full bg-white z-30'>
            <div className='w-[60px] h-[39px]'>
                <Image src="/logo.png" alt="logo" width={60} height={39}/>
            </div>

            <div className='w-[800px] h-[50px] rounded bg-[#f4f4ff] py-[10px] px-[20px] flex items-center'>
                <div className='flex items-center gap-[10px]'>
                    <Image width={20} height={20} src="/search.png" alt="search" />
                    <span className='text-[20px] text-[#090937] text-opacity-40'>Search</span>
                </div>
            </div>

            <div className='flex gap-4'>
                <button
                    onClick={deleteCookie}
                    className='w-[50px] h-[50px] rounded bg-[#f4f4ff] flex items-center justify-center hover:bg-[#f6f6f6]'
                >
                    <Image width={18} height={22} src="/user.png" alt="user" />
                </button>

                <div className='w-[50px] h-[50px] rounded bg-[#f4f4ff] flex items-center justify-center'>
                    <Image width={25} height={23} src="/heart.png" alt="heart" />
                </div>

                <div className='w-[50px] h-[50px] rounded bg-[#f4f4ff] flex items-center justify-center'>
                    <Image width={22} height={22} src="/shop.png" alt="shop" />
                </div>
            </div>
        </div>
    )
}

export default Navbar