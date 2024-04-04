import React from 'react'
import Image from 'next/image'
import Headerimage from '@/app/Images/HeaderImage.png'
export default function Hero() {
  return (
    <div className='max-w-screen-2xl mx-auto '>
    <div  className="flex justify-center items-start md-[540px] md:h-[780px] bg-fixed z-[-1]">

      <Image
      
      src={Headerimage}
      alt="de novellis project"
      className="object-fill w-full md-[540px] md:h-[780px]"
      sizes="(max-w-screen-2xl) 100vw,(max-width:1240px)30vw,33vw"
      ></Image>
  

  </div>
  </div>
  )
}
