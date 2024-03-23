"use client"
import React from 'react'
import { useState ,useEffect} from 'react'
// import useScreenSize from './useScreenSize';
import { imgSet } from '/utils/constant'

import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'


import Image from 'next/image'
export default function Carousal() {

  // const screenSize=useScreenSize()
  
  const [activeImage, setActiveImage] = useState(0)


  const leftClick=()=>{
    activeImage===0 ?
    setActiveImage(imgSet.length-1):setActiveImage(activeImage-1)

  }
 

  const rightClick=()=>{
    activeImage===imgSet.length-1?
    setActiveImage(0):setActiveImage(activeImage+1)
  }
  useEffect(() => {
    const timer=setTimeout(() => {
      rightClick();

    }, 5000);
    return () => {
      clearTimeout(timer)
    };
  }, [activeImage])
  return (
    
   <div className='max-w-md mx-auto justify-center items-center relative '>
     { imgSet.map((e,idx)=>

      (  
        <div className={`${idx===activeImage ? " relative block justify-center items-center h-auto object-cover transition duration-500 ease-in-out":"hidden"}` } key={idx}>
            <h2 className='max-w-md text-center pb-5 text-sm text-white tk-pt-serif body-letter-spacing '>{e.detail}</h2>
         <Image src={e.src} alt={e.alt} width={420} height={470} className="object-fill mx-auto max-w-full h-[284px] px-8 md:h-[484px] opacity-4"  sizes="(max-w-screen-2xl) 100vw,(max-width:1240px)30vw,33vw"
          ></Image>
        </div>
     ))}
          <div>
            <AiOutlineArrowLeft onClick={leftClick} size={20} className='active absolute inset-y-0 left-1 my-auto text-white [&.active]:text-secondaryColor hover:bg-secondary'></AiOutlineArrowLeft>
            <AiOutlineArrowRight onClick={rightClick} size={20} className=' absolute inset-y-0 right-1 my-auto text-white hover:bg-secondary'></AiOutlineArrowRight>
          </div>
   </div>
  )
}
