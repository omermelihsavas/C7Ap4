"use client"

import Navbar from '@/components/navbar'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

function Category() {
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

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className='mt-[120px]'>
      <Navbar />

      <div className='py-10 px-[60px] bg-[#f1f1f1]'>

        <div className="flex items-center gap-[10px]">
          <Link href="/home" className='w-5 h-5'>
            <Image src="/vector.png" alt="vector" width={10} height={17} />
          </Link>

          <h2 className='text-2xl font-bold'>Best Seller</h2>
        </div>

        <div className='my-8 gap-10 flex flex-wrap justify-center'>

          <Link href="product" className='bg-[#F4F4FF] w-[300px] h-[433px]  rounded border-[1px] border-solid border-[#090937] border-opacity-10'>
            <div className='py-5 px-[50px]'>
              <Image src="/bookpicture.png" alt="bookpicture" className='object-cover ' width={198} height={290} />
            </div>

            <div className='flex mx-5 justify-between my-[10px] relative'>
              <div className='flex flex-col'>
                <h3 className='font-semibold text-xl text-[#090937]'>Dune</h3>
                <p className='font-semibold text-base text-[#090937] text-opacity-60'>Frank Herbert</p>
              </div>

              <p className='text-2xl text-[#6251DD] font-bold absolute bottom-0 right-0'>87.75 $</p>
            </div>
          </Link>

          {books.slice(1).map((book) => (
            <div className='bg-[#F4F4FF] w-[300px] h-[433px]  rounded border-[1px] border-solid border-[#090937] border-opacity-10'>
              <div className='py-5 px-[50px]'>
                <Image src="/bookpicture.png" alt="bookpicture" className='object-cover ' width={198} height={290} />
              </div>

              <div className='flex mx-5 justify-between my-[10px] relative'>
                <div className='flex flex-col'>
                  <h3 className='font-semibold text-xl text-[#090937]'>{book.name}</h3>
                  <p className='font-semibold text-base text-[#090937] text-opacity-60'>{book.author}</p>
                </div>

                <p className='text-2xl text-[#6251DD] font-bold absolute bottom-0 right-0'>{book.price} $</p>
              </div>
            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default Category