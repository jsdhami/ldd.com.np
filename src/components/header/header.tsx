import Link from 'next/link'
import React from 'react'

const header = () => {
  return (
 <>
      <div className="flex justify-between items-center px-8 py-4 bg-gray-600 text-white">
      <div className="text-2xl font-bold"><Link href="/">LDD Notes</Link></div>
      <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-gray-300">Home</Link>
            <Link href="#" className="hover:text-gray-300">Notes</Link>
            <Link href="#" className="hover:text-gray-300">About</Link>
      </div>
      </div>
 </>
  )
}

export default header