import Image from 'next/image'
import React from 'react'

const PhotoCard = () => {
  return (
    <div className="p-4 border-4 border-gray-800 max-w-fit rounded-xl shadow-lg bg-black">
      <Image src="/assets/foto1.jpeg" alt='foto1' width={400} height={550} className="rounded-lg max-w-full h-auto" />
      <div className="flex">
        <h2>titulo</h2>
        <span>17/07/2024</span>
      </div>
      
    </div>
  )
}

export default PhotoCard
