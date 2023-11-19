"use client"

import Navbar from '@/components/navbar'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

function Product() {
    interface Category {
        id: number;
        name: string;
        created_at: string;
    };

    interface Book {
        author: string;
        cover: string;
        created_at: string;
        description: string;
        id: number;
        name: string;
        price: number;
        sales: number;
        slug: string;
        likes_aggregate: {
            aggregate: {
                count: number;
            };
        };
    };

    const [books, setBooks] = useState<Book[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [follow, setFollow] = useState<boolean>(false);

    const fetchCategories = async () => {
        try {
            const response = await fetch("https://assign-api.piton.com.tr/api/rest/categories", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const res = await response.json();
            setCategories(res.category);
        } catch (error) {
            console.log("Hata:", error);
        }
    }

    const fetchBooks = async () => {
        try {
            const responseBook = await fetch("https://assign-api.piton.com.tr/api/rest/products/1", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const resBooks = await responseBook.json();
            setBooks(resBooks.product);
        } catch (error) {
            console.log("Hata:", error);
        }
    }

    const handleFollow = () => {
        setFollow(!follow);
        if (!follow) {
            localStorage.setItem('follow', "true");            
        }

        if (follow) {
            localStorage.removeItem("follow");
        }
    }

    const following = localStorage.getItem("follow")

    useEffect(() => {
        fetchCategories();
        fetchBooks();
    }, []);

    return (
        <div className='pt-[120px] h-screen'>
            <Navbar />
            {categories.slice(0, 1).map((category) => (
                <div className='bg-[#f1f1f1] px-[60px]' key={category.id}>
                    <div className='pt-10 pb-[30px]'>
                        <div className='flex justify-between'>
                            <div className="flex items-center gap-[10px]">
                                <Link href="/category" className='w-5 h-5'>
                                    <Image src="/vector.png" alt="vector" width={10} height={17} />
                                </Link>


                                <h2 className='text-2xl font-bold'>{category.name}</h2>

                            </div>

                            <button
                                className={following==="true" ? 'w-11 h-11 rounded-full bg-[#F4F4FF] flex items-center justify-center' : 'w-11 h-11 rounded-full flex items-center justify-center bg-blue-200'}
                                onClick={handleFollow}
                            >
                                    <Image src="/heartbutton.png" alt="heartbutton"  width={25} height={23}/>
                            </button>
                        </div>
                    </div>

                    {books.slice(0, 1).map((book) => (
                        <>
                            <div className='flex gap-20' key={book.id}>
                                <Image src="/bigbook.png" alt="book" width={316} height={466} />

                                <div className='flex flex-col'>
                                    <div className='flex flex-col gap-[10px]'>
                                        <h2 className='text-[40px] font-semibold text-black'>{book.name}</h2>
                                        <p className='text-[32px] font-semibold text-black text-opacity-60'>{book.author}</p>
                                    </div>

                                    <div className='mt-[60px] flex flex-col gap-[10px]'>
                                        <h3 className='text-2xl text-[#090937] font-bold'>Summary</h3>
                                        <p className='text-xl text-[#090937] text-opacity-60'>
                                            {book.description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='pt-32 pb-10 flex justify-end'>
                                <button className='w-[400px] h-[60px] bg-[#EF6B4A] rounded py-[10px] px-5 text-white text-xl'>
                                    <div className='flex justify-between'>
                                        <p className='font-bold'>{book.price} $</p>
                                        <p className='font-semibold'>Buy Now</p>
                                    </div>
                                </button>
                            </div>
                        </>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Product