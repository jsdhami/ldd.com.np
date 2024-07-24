import Link from 'next/link'
import React from 'react'

const footer = () => {
  return (
   <>
 <div className="flex justify-around items-center p-2 bg-slate-200 text-gray-800 ">
      <div className="text-sm font-medium text-wrap">©2024 <Link className='font-bold' href="/">LDD Notes.</Link> All rights reserved.</div>
      <div className="hidden md:flex items-center space-x-4">
            <Link href="#" className="hover:text-gray-600">Contact</Link>
            <Link href="#" className="hover:text-gray-600">Notes</Link>
            <Link href="#" className="hover:text-gray-600">About</Link>
      </div>
      <div className='text-sm font-medium'>
          <div className="text-sm font-medium text-wrap ">Developed by <Link className='font-bold hover:text-gray-600' href='https://dev.jsdhami.com.np'>Janak S. Dhami</Link> </div>
      </div>
</div>     
   </>
  )
}

export default footer