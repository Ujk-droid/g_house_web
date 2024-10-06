'use client';
import Image from "next/image";
import React from 'react';
import background from "../public/bg gh.jpg";

const Hero = () => {
  return (
  <>
    <div className="relative flex">
      {/* Background Image */}
      <div className="absolute w-full -z-10 h-full">
        <Image className="w-full h-full object-cover opacity-20"
          alt="Background" src={background} layout="fill" />
      </div>

      {/* Content Section */}
      <div className="pl-9 ml-9 flex-1"> 
        <h1 className="text-7xl font-bold text-blue-800 pt-7 mt-9">
          Governor Sindh
        </h1>
        <h2 className="text-5xl text-blue-500 ">
          Kamran Khan Tessori
        </h2>
        <p className="text-4xl text-blue-400 font-bold pt-5 mt-5">
          Certified Cloud <br />
          Applied generative AI<br />
          Engineer (GenEng)
        </p>
        <h3 className="text-2xl text-blue-900 font-bold">Earn up to $5,000 / month</h3>
        <p className="text-blue-900 font-bold text-2xl">
          Now admissions are open <br /> in Hyderabad
        </p>
        <div className="flex gap-7 mt-5">
          <button className="bg-[#006C8F] border py-3 px-9 focus:outline-none hover:bg-blue-900 rounded text-1xl text-white font-bold">
            APPLY NOW
          </button>
          <div>
            <h4 className="text-2xl text-blue-500">562,143</h4>
            <h5 className="text-1xl text-blue-500">Accepted Applications</h5>
          </div>
        </div>
      </div>

      {/* Image aligned to the right */}
      <div className="flex-1 flex justify-end">
        <Image 
          src={require("../public/kamran sir.png")}
          alt="Kamran Khan Tessori"
          width={600} 
          height={600} 
        />
      </div>
    </div>
  </>
  );
}

export default Hero;
