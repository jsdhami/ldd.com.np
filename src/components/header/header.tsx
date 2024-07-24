import Link from 'next/link'
import React from 'react'

const header = () => {
  return (
 <>
      <div className="flex justify-around items-center py-3 bg-gray-200 text-slate-700">
      <div className="text-2xl font-bold"><Link href="/">LDD NOTES</Link></div>
      <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-gray-600">Home</Link>
            <Link href="#" className="hover:text-gray-600">Notes</Link>
            <Link href="#" className="hover:text-gray-600">About</Link>
      </div>
      {/* get start button */}
      <div className="flex items-center space-x-4 rounded-full bg-black py-2 px-4 shadow-sm">
            <Link href="#" className="text-slate-200 hover:text-gray-300">Get Started</Link>
      </div>
      </div>
 </>
  )
}

export default header