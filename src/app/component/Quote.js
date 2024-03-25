import React from "react";
import Image from "next/image";
import pattern2 from '@/app/Images/horizontalpattern.png'


export default function Quote() {
  return (
    <section className="max-w-screen-2xl mx-auto ">
      <div className=" bg-secondary px-6 md:px-20 py-20  text-center relative">
      <div className="absolute top-0 right-0 justify-center mx-20 px-10"><Image className=" h-18 w-auto justify-center setOpacityofLogo" alt="" src={pattern2} /></div>

        <figure className="md:mx-12 md:px-14 2xl:quote-position">
          <div>

          <svg
            className="md:h-14 h-6 mb-3 text-[#233639] dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            ></path>
          </svg>
          </div>
          <blockquote>
            <p className=" uppercase  text-white  tracking-widest md:leading-8  md:text-lg leading-5 text-md tk-pt-serif md:mx-12 mx-2">
            WE URGENTLY NEEDED 50:1 FLOOR PLAN FOR YOUR 18TH CENTURY HOLIDAY LET FOR NEW GOVERNMENTAL COMPLIANCE. DANIEL WAS VERY HELPFUL, CHARMING AND PROVIDED EXCELLENT WORK AND SERVICE. I WOULD RECOMMEND DANIELA TO ANYONE NEEDING PROFESSIONAL FLOORPLANS. THANK YOU AGAIN!
            </p>
            <p className="text-sm  uppercase  text-[#233639] pt-5 tk-pt-serif ">
            ELSPETH PAGET, GOGKBURNSPATH, SCOTTISH BORDERS </p>
          </blockquote>
          <div>

          <svg
            className="md:h-14 h-6 mb-3 text-[#233639] dark:text-gray-600 float-end  "
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 
              5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"
              fill="currentColor"
            ></path>
          </svg>
          </div>

        </figure>
        
      </div>
    </section>
   
  );
}
