import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
      {/* source: https://codepen.io/mfg888/pen/MWVGddj */}
      <section className="px-3 py-5 bg-black lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-5">
          <div className="order-2 lg:order-1 flex flex-col justify-center items-center text-center lg:text-left">
            <p className="text-3xl md:text-5xl lg:text-7xl font-bold text-pink-500">25% OFF</p>
            <p className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-300">On Yummy Food</p>
            <p className="mt-2 text-sm md:text-lg">For limited time only!</p>
            <button className="flex items-center justify-center rounded-md bg-pink-500 text-white px-5 py-2 font-semibold hover:border-2 border-pink-500 hover:bg-transparent hover:text-pink-500 transition duration-200 mt-5">Order Now</button>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <Image 
              className="w-full max-w-[700px] h-auto object-cover shadow-pink-500" 
              src="/burger.png" 
              alt="Yummy food"
              width={500} 
              height={500} 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;


