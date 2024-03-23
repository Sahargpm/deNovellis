import React from "react";
import Image from "next/image";
import logo from "@/app/images/secondarylogo.png"
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-secondary">
    <footer className="bg-secondary max-w-screen-2xl mx-auto px-20 tk-pt-serif body-letter-spacing">
      <nav className="mx-15 py-10 flex flex-col justify-around order-2 md:flex-row md:items-center ">
        <div className="grid md:grid-flow-col  gap-5 md:items-center">
          <Link href="/" className="text-base text-white sm:float-center float-start hover:text-gray-200">
          <Image
          className="mx-auto setOpacityofLogo"
          src={logo}
          alt="logo-image"
          width="120"
          height="240"
        ></Image>
        </Link>
     <Link href="/" className="text-base text-white  hover:text-gray-200">
      DE NOVELLIS STUDIO
      </Link>
      </div>
          <Link href="#" className="text-base text-white justify-center items-center hover:text-gray-200">
            SCOTLAND
          </Link>
          <Link href="mailto:info@denovellis-studio.com" className="text-base text-white hover:text-gray-200 ">
            INFO@DENOVELLIS-STUDIO.COM
          </Link>

          <Link href="tel:07484 651901" className="text-base text-white  hover:text-gray-200">
            07484 651901
          </Link>
      </nav>
    </footer>
    </div>
  );
}
