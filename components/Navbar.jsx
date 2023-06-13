import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full fixed  z-[100]'>
    <div className='flex justify-between items-center w-full h-full px-2 2xl:px16'>
      <Image src='/assets/Navlogo.jpg' alt='navimage' width={60} height={45} className='cursor-pointer mt-3 ml-3'/>
      <h1 className='max-sm:hidden font-satoshi font-bold text-2xl  text-[#ff467d] tracking-wide'>DrAit Blogs</h1>
      <div >
        <ul className='hidden md:flex  '>
         <Link href='/'>
         <button className='p-2 bg-[#ff467d] m-3 rounded-3xl hover:scale-105 ease-in duration-300'>Categories</button>
         </Link>
         <Link href='/'>
         <button className='p-2 bg-[#ff467d] m-3 rounded-3xl hover:scale-105 ease-in duration-300'>Publish</button>
         </Link>
         <Link href='/'>
         <button className='p-2 bg-[#ff467d] m-3 rounded-3xl hover:scale-105 ease-in duration-300'>About</button>
         </Link>
         <Link href='/'>
         <button className='p-2 bg-[#ff467d] m-3 rounded-3xl hover:scale-105 ease-in duration-300'>Contact</button>
         </Link>
        </ul>
      </div>
    </div>
    </div>

    /*Mobile Navigation bar */

  )
}

export default Navbar