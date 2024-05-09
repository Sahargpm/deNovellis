"use client"
import React, { useRef } from "react";
import {motion, useScroll, useTransform,useMotionValue} from "framer-motion"
import Image from "next/image";
import logo from '@/app/Images/Logo.png'
import {useState,useEffect} from 'react';
import navPattern from '@/app/Images/navPattern 2.png'
import Link from "next/link";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import Headroom from "react-headroom";
export default function Navbar() {
  const targetRef=useRef(null);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const { scrollY } = useScroll();
  const [isScrollingUp, setIsScrollingUp] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY ;
      setIsScrollingUp(prevScrollY > currentScrollY);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);
  const {scrollYProgress}=useScroll({
    target:targetRef,
    offset:["end end","end start"]
  })
  const variants={
      visible:{opacity:1,y:2,scale:1},
      hidden:{opacity:1,scale:0.6}
     }
  const [menuIcon,setMenuIcon]=useState(false);
  const handlesmallscreenNavigation=(()=>{
    setMenuIcon(!menuIcon)
  })
  return (
<div className="w-full bg-secondary">
<Headroom >
    <nav className={`relative max-w-screen-2xl tk-mrs-eaves-roman-all-petite-c top-0 bg-[#233639] text-[#ffffff] pt-3 px-7 pb-4 md:px-12  md:flex md:justify-around 
    justify-center items-start mx-auto ease-in duration-300 z-10 ${isScrollingUp ? 'h-[100px] md:px-3' : 'h-[200px]'}`}>
     {/* <div className="absolute inset-x-0 bottom-0 "><Image className=" h-auto w-full  opacity-15" src={navPattern} /></div> */}
   
      <div className="hidden md:flex pt-8 hover:text-secondary hover:-translate-y-0.5 hover:text-md transform transition">
     <Link href="tel:07484 651901">
     <span className={`${isScrollingUp ? 'text-xl': 'text-2xl'}`} >07484 651901</span>
     </Link>
     </div>
  
     <div onClick={handlesmallscreenNavigation} className=" md:hidden  bg-primary px-2 " >
    {menuIcon?
     "": <AiOutlineMenu size={35} className="text-[#ffffff] pt-2 "></AiOutlineMenu>
    }
  </div>
     <div className="flex flex-col items-center justify-center ">

          <motion.div ref={targetRef} 
    variants={variants}
    initial="hidden"
    whileInView="visible"
    transition={{duration:2}}  className="items-center justify-center">
            
          <Link href="/" >
          <Image src={logo} alt="de novellis logo" className={`${isScrollingUp? 'md-scrollup  ':'md:md-img-size'}text-center img-size w-auto `}  
          ></Image></Link>
          </motion.div>
          <div className={`${isScrollingUp ? 'hidden' : ''}`}>
  <p className="text-xl/3 md:text-3xl underline-offset-4 underline decoration-1 text-center text-secondaryColor body-letter-spacing">CAD & 3D RENDERING PROPERTY</p>
</div>

<div className={`${isScrollingUp ? 'hidden' : ''}`}>
       <p className="text-5xl lg:text-6xl sm:text-5xl lg:leading-4 xl:text-8xl lg:p-3 xl:leading-8 w-[100] lg:pb-4 md:text-7xl/7 body-letter-spacing md:letter-spacing">DESIGN SERVICES</p>
</div>
    </div>
   <div className="hidden  md:flex  pt-8 justify-center items-center">
    <Link href="/contact" className={`${isScrollingUp? 'text-xl' :'text-2xl'} hover:text-secondaryColor hover:text-secondary hover:-translate-y-0.5 hover:text-md transform transition`}>
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
      <li onClick={handlesmallscreenNavigation} className="py-10 mt-15 hover:text-secondary hover:-translate-y-0.5 transform transition
 cursor-pointer ">
      <Link href="/contact" >
      ENQUIRIES &rarr;
      </Link>
      </li>
      <li onClick={handlesmallscreenNavigation} className="py-5 hover:text-secondary hover:-translate-y-0.5 hover:text-md transform transition
 cursor-pointer justify-center">
      <Link href="tel:07484 651901">
      <span>07484 651901</span>

      </Link>
      </li>
    </ul>
    </div>
  </div>
    </nav>
    </Headroom>

    </div>
      );
    }



   