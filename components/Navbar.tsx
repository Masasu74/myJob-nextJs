'use client'
import { BriefcaseBusiness, ChevronDown, Phone, Search,Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import US from 'country-flag-icons/react/3x2/US'
import IN from 'country-flag-icons/react/3x2/IN'

const Navbar = () => {
  const[menuIsOpen,setMenuIsOpen]=useState(false);
  const menuToggle=()=>{
    setMenuIsOpen(!menuIsOpen)
    console.log(menuIsOpen)
  }

  return (
    <div className=''>
      <div className='bg-gray-100 flex px-5 py-3 xl:px-36 xl:py-5 justify-between text-gray-600 items-center'>
        <Menu onClick={menuToggle} className='block md:hidden hover:cursor-pointer'/>
         <div className={`gap-5 text-sm ${menuIsOpen?'flex':'hidden'} md:hidden absolute z-50 flex-col bg-gray-100 left-0 top-0 px-10 py-5 h-screen`}>
          <X  onClick={menuToggle} className='hover:cursor-pointer'/>
          <nav className='flex flex-col gap-5'>
  <Link href='/'>Home</Link>
          <Link href='/'>Find a Job</Link>
          <Link href='/'>Employers</Link>
          <Link href='/'>Candidates</Link>
          <Link href='/'>Pricing Plans</Link>
          <Link href='/'>Customer Supports</Link>
          </nav>
        
        </div>
        <nav className='gap-5 text-sm hidden md:flex'>
          <Link href='/'>Home</Link>
          <Link href='/'>Find a Job</Link>
          <Link href='/'>Employers</Link>
          <Link href='/'>Candidates</Link>
          <Link href='/'>Pricing Plans</Link>
          <Link href='/'>Customer Supports</Link>
        </nav>
        <div className='flex text-sm gap-5'>
          <div className='flex gap-2 justify-center items-center'>
            <Phone width='15px' className=' text-black' />
            <p className='text-black'>+250783876662</p>
          </div>
          <div className='flex gap-2 justify-center items-center'>
            <US title="United States" className="w-5" />

            <div className='flex justify-center items-center'>
              <p>English</p>
              <ChevronDown className='hover:cursor-pointer text-gray-600' />
            </div>
          </div>
        </div>
      </div>

      <div className='px-5 py-3 xl:px-36 xl:py-5 flex justify-between items-center '>
        <div className='flex justify-center items-center gap-5'>
          <div className='flex items-center justify-center gap-2'>
            <BriefcaseBusiness className='text-blue-600'/>
            <p className='hidden md:block text-xl font-semibold'>My Job</p>
          </div>

          <div className=' justify-center items-center border-1 border-gray-300 px-6 py-2 rounded-sm text-sm gap-5 hidden md:flex'>
            <div className='flex gap-2 justify-center items-center'>
              <IN title="United States" className="w-5" />
              <div className='flex justify-center items-center'>
                <p>India</p>
                <ChevronDown className='hover:cursor-pointer text-gray-600' />
              </div>
            </div>
<div className='w-[1px] h-6 bg-gray-300 block'></div>
            <div className='flex gap-5'>
              <Search className='text-blue-600' />
              <input type="text" placeholder='Job tittle, keyword, company' className='outline-none w-28 lg:w-96' />
            </div>
          </div>

        </div>

        <div className='flex gap-1 md:gap-5'>
          <button className='text-sm border-1 border-blue-300 h-10 w-24 text-blue-600 font-semibold  hover:cursor-pointer rounded-sm'>Sign In</button>
          <button className='text-sm bg-blue-600 h-10 w-24 text-white font-semibold hover:bg-blue-900 hover:cursor-pointer rounded-sm'> Post a Job</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar