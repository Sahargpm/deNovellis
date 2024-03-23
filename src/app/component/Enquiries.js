import React from "react";
import Image from "next/image";
import secondarylogo from "@/app/images/secondarylogo.png"
import leftpattern from "@/app/images/verticalleft1.png";

export default function Enquiries() {
 
  return (
    <div className="bg-primary pb-32 max-w-screen-2xl mx-auto">
      <div className="flex flex-row mx-20 justify-end relative">
        <div className="relative bg-secondary max-w-4xl flex-col">
          <div className="md:pb-10 md:pt-5 pt-3 pb-6 px-10 md:mx-20px mx-5px ">
            <Image
              className="mx-auto opacity-3 "
              src={secondarylogo}
              alt="logo"
              width="120"
              height="120"
            ></Image>
            <p className=" text-md text-center text-white tk-mrs-eaves-roman-all-petite-c text-3xl/8 md:text-7xl/8">ENQUIRIES</p>
            <p className="text-center text-white md:mb-6 mb-10 mt-4 md:text-[17px] text-[12px] tk-pt-serif justify-center md:px-20 px-2">
              Click on the link below to email us with your requirements for CAD
              floorplan design layouts. The more information you can provide us
              with (for example scale required 1:50, include heat sensors, smoke
              alarms and emergency exits will help us prepare your quotes)
            </p>
            <div className="absolute flex  bottom-0 justify-center inset-x-0  pt-0 sm:mt-0 sm:mx-0">
              <a
                href="/contact"
                className=" justify-center w-auto uppercase  py-2 text-xm md:text-lg mx-3 tk-pt-serif leading-4  text-white transition duration-150 ease-in-out bg-[#26393c] border border-transparent md:py-3 md:text-md md:px-20 px-7"
              >
                GO TO ENQUIRY FORM &rarr;
              </a>
            </div>
          </div>
        </div>
        <div className="mx-12 float-end hidden md:block">
          <Image
            className=""
            alt=""
            src={leftpattern}
            width="100"
            height="80"
          />
        </div>
      </div>
    </div>
  );
}
