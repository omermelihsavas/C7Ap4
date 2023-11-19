import React from 'react'
import Form from '@/components/form';
import Image from 'next/image';
function LoginRegister() {
    return (
        <div className='flex w-full h-screen'>
            <div className='w-1/2 h-full overflow-hidden'>
                <Image
                    width={735}
                    height={735}
                    src="/picture.png"
                    alt="picture"
                    className='w-full h-full object-fill'
                />
            </div>

            <div className='w-1/2 h-full bg-white'>
                <div className='py-10 w-[400px] mx-auto'>
                    <div className="flex items-center justify-center">
                        <Image width={120} height={78} src="/logo.png" alt="logo" />
                    </div>

                    <div className='mt-10 mb-5'>
                        <p className='text-2xl text-[#090937] text-opacity-60 font-semibold'>Welcome back!</p>
                        <h1 className='text-[32px] text-[#090937] font-bold'>Login to your account</h1>
                    </div>

                    <Form />
                    
                </div>
            </div>
        </div>
    )
}

export default LoginRegister
