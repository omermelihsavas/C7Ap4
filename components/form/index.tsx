"use client"

import { login, setLoginData } from '@/redux/features/loginSlice';
import { register, setRegisterData } from '@/redux/features/registerSlice';
import { AppDispatch } from '@/redux/store';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';

function Form() {
    const [changeForm, setChangeForm] = useState<boolean>(false);
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e:any) => {
        e.preventDefault();

        if (!changeForm) {
            dispatch(setLoginData({ email, password}));
            dispatch(login());
        }

        if (changeForm) {
            dispatch(setRegisterData({ name, email, password }));
            dispatch(register());
        }

        setName("");
        setEmail("");
        setPassword("");
    }

    return (
        <div>
            <form className='mt-10' onSubmit={handleSubmit}>
                {
                    changeForm ?
                        <div className='flex flex-col my-5'>
                            <label htmlFor='name' className='text-base text-[#090937]'>Name</label>
                            <input
                                type="text"
                                name='name'
                                placeholder='John Doe'
                                autoComplete='off'
                                className='p-4 bg-[#f4f4ff] outline-none rounded'
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </div> : null
                }

                <div className='flex flex-col my-5'>
                    <label htmlFor='email' className='text-base text-[#090937]'>E-mail</label>
                    <input
                        type="email"
                        name='email'
                        placeholder='john@gmail.com'
                        autoComplete='off'
                        className='p-4 bg-[#f4f4ff] outline-none rounded'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className='flex flex-col my-5'>
                    <label htmlFor='password' className='text-base text-[#090937]'>Password</label>
                    <input
                        type="password"
                        name='password'
                        className='p-4 bg-[#f4f4ff] outline-none rounded'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />

                    {
                        !changeForm ?
                            <div className='flex items-center gap-2 mt-2'>
                                <input
                                    type="checkbox"
                                    name="remember"
                                    className='w-4 h-4 accent-[#6251DD]'
                                />
                                <span className='text-base text-[#6251DD] font-bold'>Remember me</span>
                            </div>
                            : null
                    }
                </div>

                <ToastContainer />

                <button
                    onClick={() => setChangeForm(changeForm)}
                    type="submit"
                    className='bg-[#EF6B4A] text-white font-bold w-full py-[10px] px-5 rounded mt-2 transition-all'
                >
                    {changeForm ? "Register" : "Login"}
                </button>

            </form>

            <button
                onClick={() => setChangeForm(!changeForm)}
                className='text-[#6251DD] font-bold border-[1px] border-solid border-[#6251DD] w-full py-[10px] px-5 rounded mt-2 transition-all'
            >
                {changeForm ? "Login" : "Register"}
            </button>

        </div>
    )
}

export default Form