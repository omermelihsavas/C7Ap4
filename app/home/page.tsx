import Banner from '@/components/banner'
import Categories from '@/components/categories'
import Navbar from '@/components/navbar'
import React from 'react'

function Home() {
    return (
        <div>
            <Navbar />
            <div className='pt-[160px] pb-10 bg-[#f1f1f1]'>
                <Banner />
                <Categories />
            </div>
        </div>
    )
}

export default Home