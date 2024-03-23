"use client"
import Image from "next/image";
import logo from '@/app/images/Logo.png'
import {useState} from 'react';
import navPattern from '@/app/images/navPattern 2.png'
import Link from "next/link";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
export default function Navbar() {
  const [menuIcon,setMenuIcon]=useState(false);
  const handlesmallscreenNavigation=(()=>{
    setMenuIcon(!menuIcon)
  })
  return (
<div className="w-full bg-secondary">

    <nav className="relative max-w-screen-2xl  tk-mrs-eaves-roman-all-petite-c top-0 bg-[#233639] text-[#ffffff] pt-3 px-7  lg:pb-8 pb-4 md:px-12 md:max-h-[254px] max-h-[210px] md:flex md:justify-around justify-center items-start mx-auto  ease-in duration-300 z-10">
     {/* <div className="absolute inset-x-0 bottom-0 "><Image className=" h-auto w-full  opacity-15" src={navPattern} /></div> */}
   
      <div className="hidden md:flex pt-8 ">
     <Link href="tel:07484 651901">
     <span className="text-2xl " >07484 651901</span>
     </Link>
     </div>
  
     <div onClick={handlesmallscreenNavigation} className=" md:hidden  bg-primary px-2 " >
    {menuIcon?
     "": <AiOutlineMenu size={35} className="text-[#ffffff] pt-2 "></AiOutlineMenu>
    }
  </div>
     <div className="flex flex-col items-center justify-center ">

          <div className="items-center justify-center">
            
          <Link href="/" >
          <Image src={logo} alt="de novellis logo" className="text-center md:h-[106px] h-[85px] w-auto"  
          ></Image></Link>
          </div>
          <div className="hover:text-secondaryColor
 ">
           <p className="underline md:underline-offset-8	underline-offset-4 decoration-1  text-center text-xl/5 md:text-3xl text-secondaryColor
 body-letter-spacing" >CAD & 3D RENDERING PROPERTY</p> 
          </div>
       <div className="hover:text-secondaryColor">
         <p className="text-center sm:text-5xl/4 text-3xl/6  lg:text-8xl lg:leading-4 xl:text-9xl  lg:p-3 xl:leading-8 w-[100]  lg:pb-4  md:text-7xl/7 body-letter-spacing md:letter-spacing " >DESIGN SERVICES</p></div>
    </div>
   <div className="hidden  md:flex hover:text-secondaryColor  pt-8 justify-center items-center">
    <Link href="/contact" className="text-2xl  ">
 ENQUIRIES <span className="text-lg items-center">&rarr;</span></Link>
   </div>
  <div className={
    menuIcon?
    'md:hidden absolute mt-[0] top-0 pt-[20%] right-0 bottom-0 left-0 flex justify-center  w-full md:h-screen h-screen items-start text-center bg-[#26393c] text-[#ffffff] ease-in duration-300'
    :
    'md:hidden absolute mt-[0] top-[100%] pt-[20%] right-0 left-[-100%] flex justify-center items-start w-full h-screen bg-[#26393c] text-center text-[#ffffff] ease-in duration-300'
  }>
    <div className="w-full h-5 md-hidden " onClick={handlesmallscreenNavigation}> 

   { menuIcon? 
    <AiOutlineClose size={30} className="text-[#ffffff] float-right mr-10"></AiOutlineClose>:""}
    <ul className="uppercase bold text-3xl">
      <li onClick={handlesmallscreenNavigation} className="py-10 mt-15 ">
      <Link href="/">
         <Image className="mx-auto" src={logo} alt="de novellis logo" width="134" height="134"></Image>
         </Link>
      </li>
      <li onClick={handlesmallscreenNavigation} className="py-10 mt-15 hover:text-secondaryColor-200
 cursor-pointer ">
      <Link href="/contact" >
      ENQUIRIES &rarr;
      </Link>
      </li>
      <li onClick={handlesmallscreenNavigation} className="py-5 hover:text-secondaryColor
 cursor-pointer justify-center">
      <Link href="tel:07484 651901">
      <span>07484 651901</span>

      </Link>
      </li>
    </ul>
    </div>
  </div>
    </nav>
  
    </div>
      );
    }



   