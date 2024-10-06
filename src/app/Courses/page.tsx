
import React from 'react';
import Image from "next/image";

const Courses = () => {
  return (
    <>
      <div className="bg-gray-100 h-1000">
        <h1 className="text-blue-800 text-5xl font-bold p-9">Core Courses Sequence</h1>
      </div>
      <div className="flex gap-6 pl-9">
        
        <div className=" h-[240px] w-[250px] rounded-md flex flex-col items-center hover:bg-gray-200 hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="w-full flex justify-center p-2">
            <Image 
              src={require("../public/c1.jpg")}
              alt="Course Image" 
              width={250} 
              height={250} 
              className="rounded-t-md"
            />
          </div>
          <p className="text-center text-blue-900 font-bold  ">Programming</p>
          <p className="text-center text-blue-900 font-bold  ">Fundamental</p>
        </div>
        
        <div className="bg-gray-100 h-[240px] w-[250px] rounded-md flex flex-col items-center hover:bg-gray-200 hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="w-full flex justify-center p-2">
            <Image 
              src={require("../public/c2.jpg")}
              alt="Course Image" 
              width={250} 
              height={250} 
              className="rounded-t-md"
            />
          </div>
          <p className="text-center text-blue-900 font-bold ">Web Using Next.js</p>
        </div>
        
        <div className="bg-gray-100 h-[240px] w-[250px] rounded-md flex flex-col items-center hover:bg-gray-200 hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="w-full flex justify-center p-2">
            <Image 
              src={require("../public/c3.jpg")}
              alt="Course Image" 
              width={250} 
              height={250} 
              className="rounded-t-md"
            />
          </div>
          <p className="text-center text-blue-900 font-bold">Earn As You Learn</p>
        </div>
        
      </div>
    </>
  );
}

export default Courses;
