import React from 'react';
import { FaFacebook } from 'react-icons/fa';

const Apply = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[500px] w-[600px] m-auto text-center bg-gray-100 p-4 rounded-lg shadow-lg">
      <h1 className="font-bold text-2xl">
        Before continuing to the application <br /> please subscribe on these social <br /> media platforms.
      </h1>
      <FaFacebook className="text-blue-600 text-3xl m-4 "  />
      <button className="bg-blue-500 text-white py-3 px-8 m-4 rounded">Continue</button>
      <h4>Already applied? Get Admit Card</h4>
    </div>
  );
};

export default Apply;
