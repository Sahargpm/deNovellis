"use client"
import React from 'react'
import {motion} from "framer-motion"
import {fadeIn} from '../../../variants'
import Image from 'next/image'
import Measuringservice from '@/app/Images/measuring.jpg'
import Interiorrender from '@/app/Images/3D render.jpg'
import Floorplan from '@/app/Images/FirstFloorplan.jpg'


export default function ServicesGallery() {
  return (
    <div>
       <motion.div variants={fadeIn('up',0.4)}
    initial="hidden"
    whileInView={'visible'}
    viewport={{once:false,amount:0.3}}className="flex flex-col sm:flex-row justify-center gap-2">
          <div  className=" m-2 flex-1 max-w-lg">
          <p className="px-8 text-center text-sm text-white py-2 tk-pt-serif body-letter-spacing">CAD FLOORPLANS IN ANY SCALE</p>
          <Image src={Floorplan} className="object-fill max-w-full h-[380px] lg:px-8  px-4 xl:h-[487px] opacity-4" alt="Visual representation of Floor plans to know the structure"
 sizes="(max-w-screen-2xl) 100vw,(max-width:1240px)30vw,33vw"
          ></Image>
          </div>
          <div className=" m-2 flex-1 max-w-lg ">
             <p className="px-8 text-center text-sm text-white py-2 tk-pt-serif body-letter-spacing">LASER MEASURING SERVICE</p>

          <Image src={Measuringservice } className="object-fill h-[380px] max-w-full lg:px-8 px-4 xl:h-[487px] " alt="Measuring Service available for client to get the desire look"  sizes="(max-w-screen-2xl) 100vw,(max-width:1240px)30vw,33vw"
          ></Image>
           
          </div>
          <div className=" m-2 flex-1 max-w-lg">
          <p className="px-8 text-center text-sm text-white py-2 tk-pt-serif body-letter-spacing">3D INTERIOR RENDERING</p>

          <Image src={Interiorrender} className="object-fill max-w-full h-[380px] px-8 xl:h-[487px] "  alt="3D plan design on computer screen for client satisfaction" sizes="(max-w-screen-2xl) 100vw,(max-width:1240px)30vw,33vw"
          ></Image>
           
          </div>

        </motion.div>
    </div>
  )
}
