import FileCard from '@/components/fileCard/fileCard'
import React from 'react'

const page = () => {
  return (
    <>
    <div className="flex min-h-screen flex-wrap gap-2 items-center justify-center md:justify-between p-12">   
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
    </div>
    </>
  )
}

export default page