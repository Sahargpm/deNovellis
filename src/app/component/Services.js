"use client"
import { useState ,useEffect} from "react";
import Image from "next/image";

import pattern2 from '@/app/images/horizontalpattern.png'
import Carousal from "./Carousal";
import ServicesGallery from "./ServicesGallery";

export default function Services() {
  const [screenWidth, setScreenWidth] = useState(false)
  useEffect(() => {
      window.innerWidth<600 ? setScreenWidth(true):setScreenWidth(false)
  }, [])
 
  return (
    <div className="bg-[#233639]  max-w-screen-2xl mx-auto">
     
      <div className="flex">
        <div className="basis-full  relative"> <div className="right-0 top-0 md:h-16 md:w-16 h-12 w-12 py-12 bg-secondary "></div></div>
        <div className="basic-full relative"> <div className="top-0 right-0 justify-center"><Image className=" h-20 md:max-w-lg " src={pattern2} alt="" /></div>
</div>
        
        <div className="basis-full relative"> <div className="left-0 top-0 md:h-16 md:w-16 h-10 w-12 py-12 bg-secondary float-end"></div></div>
      </div>
      <div className="max-w-screen-2xl  px-6 mx-auto md:px-20 xl:px-20">
        <div className="mb-10 px-6 md:px-0">
          <h2 className="text-center  md:text-6xl  text-white text-3xl  tk-mrs-eaves-roman-all-petite-c">
            Our
        </h2>
           <h2 className="text-center text-secondaryColor text-3xl/5 md:text-6xl/8 tk-mrs-eaves-roman-all-petite-c">
           Service
          </h2>
        </div>
       {screenWidth===true? <Carousal/>:<ServicesGallery/>}
        <hr className="layout mx-auto"></hr>

      </div>
    </div>
  );
}

