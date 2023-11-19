"use client"
import React from 'react'
import Image from 'next/image'

function Banner() {
    return (
        <>
            <div className='my-10 mx-[60px] h-[400px] rounded-lg flex items-center'>
                <Image className='w-full object-cover' src="/banner.png" alt="banner" width={1399} height={424}/>
                <p className='absolute py-[86px] pl-[60px] text-[56px] font-extrabold text-white'>
                    <span className='text-[#f0b861]'>25% discount</span> <br />
                    all Paulo Coelho <br /> books!
                </p>
            </div>

            <div className='flex item-center justify-center mt-[20px] gap-3'>
                <div className='w-[10px] h-[10px] rounded-full bg-[#090937] bg-opacity-60 flex items-center'></div>
                <div className='w-3 h-3 rounded-full bg-[#EF6B4A] flex items-center'></div>
                <div className='w-[10px] h-[10px] rounded-full bg-[#090937] bg-opacity-60 flex items-center'></div>
            </div>
        </>
    )
}

export default Banner