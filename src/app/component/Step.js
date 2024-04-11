"use client"
import React from "react";
import {motion} from "framer-motion"
import {fadeIn} from '../../../variants'
import Image from "next/image";
import logo from "@/app/Images/Logo.png";
import leftpattern from "@/app/Images/verticalleft1.png";

export default function Step() {
  return (
    <div className="bg-primary px-4 py-16   max-w-screen-2xl mx-auto ">
      <div className="mb-10 space-y-4 px-6 md:px-0">
        <Image
          className="mx-auto setOpacityofLogo"
          src={logo}
          alt="logo-image"
          width="120"
          height="120"

        ></Image>

        <h2 className="text-center uppercase text-4xl/5  text-white  md:text-6xl/8 body-letter-spacing tk-mrs-eaves-roman-all-petite-c">
          Easy
        </h2>
        <h2 className="text-center text-secondaryColor text-4xl/5 text-white md:text-7xl/8  body-letter-spacing tk-mrs-eaves-roman-all-petite-c">
          In 3 Steps!
        </h2>
      </div>
      <div className="flex flex-row ">
      
        <div className="grid grid-rows  grid-flow-col items-center mx-auto ">
            <Image
              className="md:row-span-3 hidden md:block"
              src={leftpattern}
             
              width="120"
              height="120"
            />
        
          <div className="flex flex-row items-center justify-center">
            <div className=" m-3 w-auto text-center flex-col text-9xl">
              <h2 className=" text-secondaryColor tk-mrs-eaves-roman-all-petite-c text-center   "> 1</h2>
            </div>
            <div className=" m-3 md:max-w-4xl flex-col text-xl tk-pt-serif">
              <h2 className="text-white">
                <span className="text-secondaryColor ">Consultancy: </span ><motion.span variants={fadeIn('left',0.3)}
    initial="hidden"
    whileInView={'visible'}
    viewport={{once:false,amount:0.7}}>Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                insum suspendisse ultrices gravida. Risus commode viverra
                maecenas accumsan lacus vel facilisis</motion.span>
              </h2>
            </div>
          </div>

          <div className="flex flex-row justify-center gap-1 items-center ">
            <div className="  m-3 w-auto text-9xl">
              <p className=" text-secondaryColor tk-mrs-eaves-roman-all-petite-c  text-center  "> 2</p>
            </div>
            <div className=" m-3 max-w-4xl flex-col text-xl">
              <h2 className="text-white tk-pt-serif">
                <span className="text-secondaryColor  ">Laser measuring: </span>
               <motion.span variants={fadeIn('right',0.3)}
    initial="hidden"
    whileInView={'visible'}
    viewport={{once:false,amount:0.3}}> Sed do eiusmod temnor incididunt ut lahore et dolore magna
                alioua. Quis insum suspendisse ultrices cravida. Kisus commodo
                viverra maecenas accumsan lacus vel facilisis</motion.span>
              </h2>
            </div>
          </div>

          <div className="flex flex-row justify-center gap-1 items-center">
            <div className=" m-3  w-14 max-w-3xl flex-col tk-pt-serif">
              <p className="text-9xl text-secondaryColor tk-mrs-eaves-roman-all-petite-c text-center  "> 3</p>
            </div>
            <div className=" m-3  max-w-4xl flex-col text-xl">
              <h2 className="text-white tk-pt-serif">
                <span className="text-secondaryColor">
                  CAD desion of floor plans: </span>
                <motion.span variants={fadeIn('left',0.3)}
    initial="hidden"
    whileInView={'visible'}
    viewport={{once:false,amount:0.3}}>Sed do eiusmod temnor incididunt ut labore et dolore maona
                alioua. Ouis ipsum suspendisse ultrices gravida. Risus commodo
                viverra maecenas accumsan lacus vel facilisis</motion.span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
