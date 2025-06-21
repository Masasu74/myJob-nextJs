import { BriefcaseBusiness, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-950 text-white flex flex-col gap-5  w-full '>
      <div className='flex justify-between w-full px-36 py-10'>
 <div className='flex flex-col gap-5 items-start'>
        <div className='flex items-center justify-center gap-2'>
          <BriefcaseBusiness className='text-white' />
          <p className='text-xl font-semibold'>My Job</p>
        </div>
        <div className='flex flex-col gap-1'>
   <p className='text-gray-500 text-sm'>Call now : <span className='text-white'> (319) 555-0115</span></p>
        <p className='text-gray-500 text-sm w-2/3'>6391 Elgin St. Celina, Delaware 10299, New York, United States of America</p>
        </div>
     
      </div>

      <div className=' flex gap-16'>
        <div className='flex flex-col gap-5'>
          <h1 className='font-semibold'>Quick Link </h1>
          <ul className='text-sm text-gray-500  flex flex-col gap-3'>
            <li><Link href='' className='hover:text-white'>About</Link></li>
            <li><Link href=''className='hover:text-white'>Contact</Link></li>
            <li><Link href=''className='hover:text-white'>Pricing</Link></li>
            <li><Link href=''className='hover:text-white'>Blog</Link></li>
          </ul>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='font-semibold'>Candidate </h1>
          <ul className='text-sm text-gray-500 flex flex-col gap-3'>
            <li><Link href=''className='hover:text-white'>Browse Jobs</Link></li>
            <li><Link href=''className='hover:text-white'>Browse Employers</Link></li>
            <li><Link href=''className='hover:text-white'>Candidate Dashboard</Link></li>
            <li><Link href=''className='hover:text-white'>Saved Jobs</Link></li>
          </ul>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='font-semibold'>Employers</h1>
          <ul className='text-sm text-gray-500 flex flex-col gap-3'>
            <li><Link href=''className='hover:text-white'>Post a Job</Link></li>
            <li><Link href=''className='hover:text-white'>Browse Candidates</Link></li>
            <li><Link href=''className='hover:text-white'>Employers Dashboard</Link></li>
            <li><Link href=''className='hover:text-white'>Applications</Link></li>
          </ul>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='font-semibold'>Support</h1>
          <ul className='text-sm text-gray-500 flex flex-col gap-3'>
            <li><Link href=''className='hover:text-white'>Faqs</Link></li>
            <li><Link href=''>Privacy Policy</Link></li>
            <li><Link href=''className='hover:text-white'>Terms & Conditions</Link></li>
            
          </ul>
        </div>
      </div>
      </div>
<div className="bg-gray-600 h-[1px] w-full"></div>
      <div className='flex justify-between px-36 pb-3 text-gray-500'>
        <p>@ 2025 MyJob - Job Portal. All rights Reserved</p>
        <div className='flex gap-3 '>
          <Facebook width='15px' />
          <Youtube width='15px'/>
          <Instagram  width='15px'/>
          <Twitter width='15px' />
        </div>
      </div>
     
    </div>
  )
}

export default Footer