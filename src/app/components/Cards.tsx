import React from 'react';
import Image from "next/image";
const Cards = () => {
  return (
    <div className="flex gap-9 p-9 m-9">
      <div className="flex justify-center items-center  h-[250px] w-[350px]  rounded-md md gap-2 flex-col" >
      <Image 
          src={require("../public/card1.jpg")}
          alt="GovernorSindhLogo" 
          width={600} 
          height={600} 
        />
        
      </div>
      <div className="flex justify-center items-center  h-[250px] w-[350px]  rounded-md md gap-2 flex-col" >
      <Image 
          src={require("../public/card2.jpg")}
          alt="GovernorSindhLogo" 
          width={600} 
          height={600} 
        />
      </div>
      <div className="flex justify-center items-center  h-[250px] w-[350px]  rounded-md md gap-2 flex-col" >
      <Image 
          src={require("../public/card3.jpg")}
          alt="GovernorSindhLogo" 
          width={600} 
          height={600} 
        />
      </div>


      
    
      
    </div>
  )
}

export default Cards
