import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-9 mt-9">
      
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
   
      <span className="ml-3 text-xl font-bold">Thanks For Watching</span>
      
    </a>
    <p className="text-sm text-gray-500 font-bold sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Ghouse —
      <a
        href="https://twitter.com/knyttneve"
        className="text-gray-600 ml-1"
        rel="noopener noreferrer"
        target="_blank"
      >
        @karachi
      </a>
    </p>
   
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-3 ">
      <a className="text-3xl text-orange-500 hover:text-orange-700">
      <FaInstagram />
      </a>
      <a className="text-3xl text-blue-500 hover:text-blue-700">
      <FaFacebook />
      </a>
      <a className="text-3xl text-blue-700 hover:text-blue-900">
      <FaLinkedin />
      </a>
      <a className="text-3xl text-green-500 hover:text-green-700">
      <FaWhatsappSquare />
      </a>
    </span>
    </div>

</footer>

    </div>
  )
}

export default Footer
