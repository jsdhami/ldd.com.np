import Link from 'next/link'
import React from 'react'

const footer = () => {
  return (
   <>
 <div className="flex justify-around items-center p-1 bg-gray-800 text-white">
      <div className="text-sm font-medium"><Link href="/">© 2024 LDD Notes.</Link> All rights reserved.</div>
      <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-gray-300">Contact</Link>
            <Link href="#" className="hover:text-gray-300">Notes</Link>
            <Link href="#" className="hover:text-gray-300">About</Link>
      </div>
</div>     
   </>
  )
}

export default footer