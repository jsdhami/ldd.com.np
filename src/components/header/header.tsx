import Link from 'next/link'
import React from 'react'
import { TbMenuDeep } from "react-icons/tb";
import { GiBurningBook } from "react-icons/gi";

const header = () => {
  return (
 <>
      <div className="flex justify-around items-center py-1 bg-gray-200 text-slate-700">
      <div className="text-2xl flex justify-center items-center gap-1 font-bold"><GiBurningBook className='h-14 w-12' /><Link href="/">LDD NOTES</Link></div>
      <div className="hidden md:flex items-center space-x-4">
            <Link href="#" className="hover:text-gray-600">Home</Link>
            <Link href="#" className="hover:text-gray-600">Notes</Link>
            <Link href="#" className="hover:text-gray-600">About</Link>
      </div>
      <div className="flex items-center space-x-4 rounded-full bg-slate-700 py-2 px-4 shadow-sm">
            <Link href="#" className="text-slate-200 hover:text-gray-300">Get Started</Link>
            
      </div>
      {/* menu for mobile view */}
      <div className="md:hidden flex  items-center space-x-4">
      <Link href="#" className="hover:text-gray-600">
            <TbMenuDeep className='h-8 w-8' />
      </Link>
      </div>
      </div>
 </>
  )
}

export default header