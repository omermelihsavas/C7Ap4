"use client"

import Link from 'next/link'
import React, { useState, useEffect } from 'react'

function Categories() {
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

    interface Image {
        url: string;
    }

    const [categories, setCategories] = useState<Category[]>([]);
    const [books, setBooks] = useState<Book[]>([]);
    const [books2, setBooks2] = useState<Book[]>([]);
    const [books3, setBooks3] = useState<Book[]>([]);
    const [books4, setBooks4] = useState<Book[]>([]);
    const [images, setImages] = useState<Image[]>([]);

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

    const fetchBooks2 = async () => {
        try {
            const responseBook = await fetch("https://assign-api.piton.com.tr/api/rest/products/2", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const resBooks = await responseBook.json();
            setBooks2(resBooks.product);
        } catch (error) {
            console.log("Hata:", error);
        }
    }

    const fetchBooks3 = async () => {
        try {
            const responseBook = await fetch("https://assign-api.piton.com.tr/api/rest/products/3", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const resBooks = await responseBook.json();
            setBooks3(resBooks.product);
        } catch (error) {
            console.log("Hata:", error);
        }
    }

    const fetchBooks4 = async () => {
        try {
            const responseBook = await fetch("https://assign-api.piton.com.tr/api/rest/products/4", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const resBooks = await responseBook.json();
            setBooks4(resBooks.product);
        } catch (error) {
            console.log("Hata:", error);
        }
    }

    useEffect(() => {
        fetchCategories();
        fetchBooks();
        fetchBooks2();
        fetchBooks3();
        fetchBooks4();
    }, []);

    return (
        <>
            <div className='my-[60px] mx-[60px] flex flex-col'>
                {categories.slice(0, 1).map((category) => (
                    <div className='flex mb-[60px] flex-col' key={category.id}>
                        <div className='flex justify-between'>
                            <h2 className='text-2xl text-[#090937] font-bold'>{category.name}</h2>
                            <Link href="category" className='text-[#EF6B4A] text-xl font-bold'>View All</Link>
                        </div>

                        <div className='flex gap-5'>
                            {books.slice(0, 4).map((book) => (
                                <div className='mt-5 flex gap-5' key={book.id}>
                                    <div className='flex gap-5 w-80 h-[200px] bg-[#f4f4ff] rounded p-[10px]'>
                                        <img src="/book.png" alt="book" />
                                            <div className='flex flex-col relative'>
                                            <div>
                                                <h3 className='text-xl text-[#090937] font-semibold'>{book.name}</h3>
                                                <p className='text-base text-[#090937] text-opacity-60 font-semibold'>{book.author}</p>
                                            </div>

                                            <div className='absolute bottom-1'>
                                                <p className='text-2xl text-[#6251DD] font-bold'>{book.price} $</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {categories.slice(1, 2).map((category) => (
                    <div className='flex mb-[60px] flex-col' key={category.id}>
                        <div className='flex justify-between'>
                            <h2 className='text-2xl text-[#090937] font-bold'>{category.name}</h2>
                            <Link href="" className='text-[#EF6B4A] text-xl font-bold'>View All</Link>
                        </div>

                        <div className='flex gap-5'>
                            {books2.slice(0, 4).map((book) => (
                                <div className='mt-5 flex gap-5' key={book.id}>
                                    <div className='flex gap-5 w-80 h-[200px] bg-[#f4f4ff] rounded p-[10px]'>
                                        <img src="/book.png" alt="book.png" />

                                        <div className='flex flex-col relative'>
                                            <div>
                                                <h3 className='text-xl text-[#090937] font-semibold'>{book.name}</h3>
                                                <p className='text-base text-[#090937] text-opacity-60 font-semibold'>{book.author}</p>
                                            </div>

                                            <div className='absolute bottom-1'>
                                                <p className='text-2xl text-[#6251DD] font-bold'>{book.price} $</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {categories.slice(2, 3).map((category) => (
                    <div className='flex mb-[60px] flex-col' key={category.id}>
                        <div className='flex justify-between'>
                            <h2 className='text-2xl text-[#090937] font-bold'>{category.name}</h2>
                            <Link href="" className='text-[#EF6B4A] text-xl font-bold'>View All</Link>
                        </div>

                        <div className='flex gap-5'>
                            {books3.slice(0, 4).map((book) => (
                                <div className='mt-5 flex gap-5' key={book.id}>
                                    <div className='flex gap-5 w-80 h-[200px] bg-[#f4f4ff] rounded p-[10px]'>
                                        <img src="/book.png" alt="book.png" />

                                        <div className='flex flex-col relative'>
                                            <div>
                                                <h3 className='text-xl text-[#090937] font-semibold'>{book.name}</h3>
                                                <p className='text-base text-[#090937] text-opacity-60 font-semibold'>{book.author}</p>
                                            </div>

                                            <div className='absolute bottom-1'>
                                                <p className='text-2xl text-[#6251DD] font-bold'>{book.price} $</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {categories.slice(3, 4).map((category) => (
                    <div className='flex mb-[60px] flex-col' key={category.id}>
                        <div className='flex justify-between'>
                            <h2 className='text-2xl text-[#090937] font-bold'>{category.name}</h2>
                            <Link href="" className='text-[#EF6B4A] text-xl font-bold'>View All</Link>
                        </div>

                        <div className='flex gap-5'>
                            {books4.slice(0, 4).map((book) => (
                                <div className='mt-5 flex gap-5' key={book.id}>
                                    <div className='flex gap-5 w-80 h-[200px] bg-[#f4f4ff] rounded p-[10px]'>
                                        <img src="/book.png" alt="book.png" />

                                        <div className='flex flex-col relative'>
                                            <div>
                                                <h3 className='text-xl text-[#090937] font-semibold'>{book.name}</h3>
                                                <p className='text-base text-[#090937] text-opacity-60 font-semibold'>{book.author}</p>
                                            </div>

                                            <div className='absolute bottom-1'>
                                                <p className='text-2xl text-[#6251DD] font-bold'>{book.price} $</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Categories