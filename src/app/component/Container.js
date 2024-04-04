"use client"
import React, { useRef } from "react";
import {motion} from "framer-motion"
import Image from "next/image";
import pattern2 from '@/app/Images/horizontalpattern.png'
import {fadeIn} from '../../../variants'
import SketchImage from '@/app/Images/sketch.jpg'
import { Img, imgSet } from "../../../utils/constant";
export default function Conatiner() {
  return (
    <div
   
    className='max-w-screen-2xl mx-auto bg-primary lg:px-20 relative'>
          <div className="absolute md:px-20 top-0 justify-center "><Image className=" h-20 w-auto justify-center" alt="Floor-plan for structurised view of your project" src={pattern2} /></div>

    <div className="flex flex-col items-center max-w-full  mx-auto md:flex-row md:px-7">

      <motion.div 
      variants={fadeIn('right',0.3)}
      initial="hidden"
      whileInView={'visible'}
      viewport={{once:false,amount:0.2}}
       className="items-center md:max-w-full md:py-20 lg:px-0 px-4 py-20">
        <div className="text-left text-white">
          <span className=" lg:text-5xl text-3xl/5 body-letter-spacing leading-4 text-white tk-mrs-eaves-roman-all-petite-c pb-4">PROFESSIONAL CAD DESIGN SERVICES FOR </span><span className="text-secondaryColor lg:text-5xl/8 text-3xl/4 pb-7 body-letter-spacing tk-mrs-eaves-roman-all-petite-c">EDINBURGH, EAST LOTHIAN & SCOTTISH BORDERS</span>
          <div className="flex h-auto p-2 pl-10">
            <div className="bg-secondary w-0.5"></div>
            <div className="px-[20px] text-white lg:leading-8 leading-5 tk-pt-serif">
           <p> Lorem ipsum dolor sit amet, consectrtur adipiscing elit, sed to eiusmod tempor incident ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
           <br className="break-words"></br>
           <p> Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div  variants={fadeIn('up',0.4)}
    initial="hidden"
    whileInView={'visible'}
    viewport={{once:false,amount:0.3}}
    className="relative flex items-end w-full lg:p-20 p-5 rounded-lg lg:max-w-full">
      <Image  src={SketchImage} className="object-fill  lg:px-8 px-2 md:h-[464px] h-[325px] w-full drop-shadow-2xl "  
></Image>
        <div className="absolute flex item-center justify-center inset-x-0  ">
          <div >
            <a
          
              href={Img[0].src} alt="Floor-plan for structurised view of your project"
              className="flex flex-col justify-center w-auto uppercase tk-pt-serif  text-white transition duration-150 ease-in-out bg-primary border border-transparent md:py-2 md:text-sm md:px-10 px-6 
              hover:text-secondary  hover:text-md transform transition  focus:ring-offset-2 focus:ring-secondary">
              View Floor Plan &rarr;
            </a>
            
          </div>
        </div>
      </motion.div>
    </div>
    </div>
  );
}
