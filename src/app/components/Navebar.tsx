
import Image from "next/image";
import React from 'react';
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

const Navebar = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex items-center bg-[#006C8F] p-2 font-bold">
        {/* Logo */}
        <div className="relative h-20 w-20 m">
          <Image 
            className="absolute top-1/2 transform -translate-y-1/2 mt-12 ml-14"
            src={require("/src/app/public/logo.png")}
            alt="GovernorSindhLogo" 
            width={100} 
            height={100} 
          />
        </div>

        {/* Navbar Text */}
        <h1 className="text-white text-2xl ml-20 font-bold">
          Tuition Free Education Program on Latest Technologies
        </h1>

        {/* Navigation Links */}
        <div className="ml-auto flex space-x-8 text-white text-lg">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/Apply" className="hover:text-gray-300">Apply</Link>
          <Link href="/Jobs" className="hover:text-gray-300">Jobs</Link>
          <Link href="/Result" className="hover:text-gray-300">Result</Link> 
          <Link href="/Courses" className="hover:text-gray-300">Courses</Link>
          <FaAngleDown />
        </div>
      </nav>
    </div>
  );
};

export default Navebar;
