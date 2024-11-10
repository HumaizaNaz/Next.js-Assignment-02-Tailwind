import React from 'react';
import Image from 'next/image';
import  Accordin from '@/component/Acordion';

const Page = () => {
  return (
    <>
      <section className="pt-10 overflow-hidden bg-black md:pt-0 sm:pt-16 2xl:pt-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">

            <div>
              <h2 className="text-3xl font-bold leading-tight text-white  sm:text-4xl lg:text-5xl">
                Hey 👋 we are
                <br className="block sm:hidden" />Thanking you for choose us
              </h2>
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-pink-500 dark:text-gray-300 md:mt-8">
              we believe in offering delicious, quick, and satisfying meals made with high-quality ingredients. We specialize in a variety of fast food options, from classic burgers and crispy fries to tasty sandwiches and fresh salads. Whether you’re craving something savory or looking for a quick bite, our menu is designed to satisfy every taste. Our goal is to provide a fast and enjoyable dining experience that keeps you coming back for more. With a focus on quality, affordability, and customer satisfaction, we ensure every meal is a delightful experience
              </p>

              <p className="mt-4 text-xl text-white  md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2  "></span>
                  <span className="relative"> Have a question? </span>
                </span>
                <br className="block sm:hidden" />Ask me on{' '}
                <a
                  href="#"
                  title=""
                  className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline"
                >
                  Twitter
                </a>
              </p>
            </div>

            <div className="relative">
              <Image
                className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                alt="Shape"
                width={500} // Adjust width as needed
                height={500} // Adjust height as needed
                layout="intrinsic" // Ensure the aspect ratio is preserved
              />

              <Image
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src="/girl-remove.png"
                alt="Business Woman"
                width={600} // Adjust width as needed
                height={600} // Adjust height as needed
                layout="intrinsic" // Ensure the aspect ratio is preserved
              />
            </div>

          </div>
        </div>
      </section>
      <section>
        <Accordin/>
      </section>
    </>
  );
};

export default Page;


